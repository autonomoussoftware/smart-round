# smart-round

[![Build Status](https://travis-ci.org/autonomoussoftware/smart-round.svg?branch=master)](https://travis-ci.org/autonomoussoftware/smart-round)
[![Code Style](https://img.shields.io/badge/code%20style-bloq-0063a6.svg)](https://github.com/bloq/eslint-config-bloq)
[![Known Vulnerabilities](https://snyk.io/test/github/autonomoussoftware/smart-round/badge.svg?targetFile=package.json)](https://snyk.io/test/github/autonomoussoftware/smart-round:package.json)

Round big numbers with arbitrary precision

## Installation

```bash
$ npm install --save smart-round
```

## Usage

The module exports a function that let you initialize a rounder function.

### `smartRound(maxPrecision, minDecimals, maxDecimals)`

`maxPrecision`: Amount of significant digits to return.
`minDecimals`: Minimum amount of decimals to return.
`maxDecimals`: Maximum amount of decimals to return.

### `rounder(number, shouldFormat)`

`number`: The value to round as any type supported by [`bignumber.js`](https://github.com/MikeMcl/bignumber.js) package.
`shouldFormat`: Whether the returned string should be formatted or not, using [`accounting`](https://github.com/openexchangerates/accounting.js) package.


## Example

```js
const smartRound = require('smart-round')

const rounder1 = smartRound(6, 0, 6)

console.log(rounder1('1234.56789', false)) // '1234.57'
console.log(rounder1('1234.56789', true)) // '1,234.56'

const rounder2 = smartRound(4, 2, 6)

console.log(rounder2('1234', true)) // '1,234.00'
console.log(rounder2('0.000123456', true)) // '0.000123'
```

### ES5 support

A transpiled version is available in `es5/index.js`. To use that specific version, this syntax is also supported:

```js
var smartRound = require('smart-round/es5');
```

## License

MIT
