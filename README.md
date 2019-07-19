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

## Requests

[Create](https://github.com/worldwide-asset-exchange/wax-item-creation-management/blob/master/IItemSubmission/create.md)

```javascript
WC.create({
  internal_app_id: (Int)[Required],
  name: (String)[Required],
  market_name: (String)[Required],
  image_generic: (String)[Required],
  amount: (Int)[Required],
  color: (String)[Required],
  rarity_name: (String),
  collection_name: (String),
  external_id: (String),
  instant_sell_enabled: (Boolean),
  instant_sell_value: (Int),
  json_attributes: (Json),
}, (err, body) => {
  // ...
})
```

[Refill](https://github.com/worldwide-asset-exchange/wax-item-creation-management/blob/master/IItemSubmission/refill.md)

```javascript
WC.refill({
  submission_id: (Int)[Required],
  number_of_items_to_refill: (Int)[Required],
}, (err, body) => {
  // ...
})
```

[Read](https://github.com/worldwide-asset-exchange/wax-item-creation-management/blob/master/IItemSubmission/read.md)

```javascript
WC.read({
  submission_id: (Int)
}, (err, body) => {
  // ...
})
```

[Search](https://github.com/worldwide-asset-exchange/wax-item-creation-management/blob/master/IItemSubmission/search.md)

```javascript
WC.search({
  q: (String)
}, (err, body) => {
  // ...
})
```
