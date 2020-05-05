# is-url

Check whether a string is a URL.

## Installation

```sh
$ npm install is-url
```
or using yarn
```sh
$ yarn add is-url
```

## Usage

```javascript
const isUrl = require("is-url");
// import isUrl from "is-url"; // or using ES6

const url = "your-string-goes-here"

if (isUrl(url)) {
  // Valid url
} else {
  // Invalid url
}
```

## API

### `isUrl(string)`

Returns a Boolean indicating whether `string` is a URL.

## License

MIT
