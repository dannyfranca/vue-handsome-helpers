# js-handsome-helpers

Time-saving helpers for JavaScript and TypeScript.

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
Check the methods in the [original repository](https://github.com/dannyfranca/js-handsome-helpers).
