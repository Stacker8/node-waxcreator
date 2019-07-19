# waxcreator

With this module you can easily access the WAXCreator Api and perfom simple requests.

# Installation

```shell
npm i waxcreator
```


# Usage

```javascript
let WaxCreator = require('waxcreator')

let WC = new WaxCreator({
  apitoken: 'Your WAX Creator Api Token',
})

WC.read((err, body) => {
  // ...
})
```


## Syntax

You can either address the methods as object properties like this:

```javascript
WC.read((err, body) => {
  // ...
})
```

or address the path like this:

```javascript
WC.request('read', (err, body) => {
  // ...
})
```
