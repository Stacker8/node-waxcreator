const util = require('util'),
    querystring = require('querystring'),
    request = require('request');

let schema = require('./shema.js');

let WaxCreator = (() => {
    function WaxCreator(options) {
        if (typeof options !== 'object') {
            console.log('waxcreator - Options missing.');
            return;
        }

        if (!options.apitoken) {
            console.log('waxcreator - API Token missing.');
            return;
        }

        this.options = Object.assign({
            apiurl: 'https://api-icm.wax.io/api/IItemSubmission/%s',
        }, options);

        this.schema = schema;

        for (let _method in schema) this[_method] = (_data, _callback) => {
            this.request([_method].join('/'), _data, _callback);
        };

        this.request = (_path, _data, _callback) => {
            let [_method] = _path.split('/');

            if (!_method || !this.schema || !this.schema[_method]) return;

            let options = {
                url: util.format(this.options.apiurl, _method)
            };

            if (!!this.schema[_method].method) options.method = this.schema[_method].method;

            if (typeof _data === 'function') _callback = _data, _data = {};
            else if (typeof _data !== 'object') _data = {};
            let data = Object.assign({}, (this.schema[_method].data || {}), _data);

            if (typeof this.schema[_method].params === 'object') {

                for (let param in this.schema[_method].params)
                    if (this.schema[_method].params[param] === 1 && !data[param]) {
                        console.log('waxcreator - ' + _path + ': Missing Input ' + param);
                        return;
                    }
            }

            data.api_token = this.options.apitoken;

            if (Object.keys(data).length > 0) {
                if (!options.method || options.method === 'GET')
                    options.url = options.url + '?' + querystring.stringify(data);
                else options.form = data;
            }

            let callback = _callback || this.schema[_method].callback || (() => {});

            request(options, (error, response, body) => {

                try {
                    body = JSON.parse(body);
                } catch (e) {}

                callback(error, body, response);
            })
        }
    }

    return WaxCreator;
})();

module.exports = WaxCreator;
