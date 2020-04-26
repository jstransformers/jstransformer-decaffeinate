# jstransformer-decaffeinate

[decaffeinate](https://github.com/decaffeinate/decaffeinate) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-decaffeinate/master.svg)](https://travis-ci.org/jstransformers/jstransformer-decaffeinate)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-decaffeinate/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-decaffeinate)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-decaffeinate/master.svg)](http://david-dm.org/jstransformers/jstransformer-decaffeinate)
[![NPM version](https://img.shields.io/npm/v/jstransformer-decaffeinate.svg)](https://www.npmjs.org/package/jstransformer-decaffeinate)

## Installation

    npm install jstransformer-decaffeinate

## API

```js
var decaf = require('jstransformer')(require('jstransformer-decaffeinate'))

decaf.render('square = (x) -> x * x').body
//=> 'let square = x => x * x;'
```

## License

MIT
