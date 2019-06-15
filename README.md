# @dannyfranca/vue-handsome-helpers

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]

Implementation of @dannyfranca/vue-handsome-helpers for Vue

## Install

```bash
npm install @dannyfranca/vue-handsome-helpers
```

## Usage

```js
// register globally

import Vue from 'vue'
import helpers from '@dannyfranca/vue-handsome-helpers'

Vue.use(helpers)
```
```js
// to change scope name

Vue.use(helpers, {scope: 'customName'})
```

### Helpers will be available in global instance

```js
const opt = this.$helpers.optionsFromString('x:foo|y:bar')
console.log(opt) // { x: 'foo', y: 'bar' }
```

## Methods
Check the methods in the [original repository](https://github.com/dannyfranca/vue-handsome-helpers).

## License

[MIT License](./LICENSE)

Copyright (c) Danny França <contato@dannyfranca.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/dt/@dannyfranca/vue-handsome-helpers.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@dannyfranca/vue-handsome-helpers

[npm-downloads-src]: https://img.shields.io/npm/v/@dannyfranca/vue-handsome-helpers/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@dannyfranca/vue-handsome-helpers

[circle-ci-src]: https://img.shields.io/circleci/project/github/dannyfranca/vue-handsome-helpers.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/dannyfranca/vue-handsome-helpers

[codecov-src]: https://img.shields.io/codecov/c/github/dannyfranca/vue-handsome-helpers.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/dannyfranca/vue-handsome-helpers

[david-dm-src]: https://david-dm.org/dannyfranca/vue-handsome-helpers/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/dannyfranca/vue-handsome-helpers

[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com
