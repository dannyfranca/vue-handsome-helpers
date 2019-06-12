// @ts-ignore: Cannot find module
import _Vue from 'vue'
// @ts-ignore: Cannot find module
import {PluginObject} from 'vue/types/plugin'
// @ts-ignore: Cannot find module
import typeOptions from '~/types/options'

const helpers: PluginObject = {}

helpers.install = function (Vue: typeof _Vue, options: typeOptions) {
  const {scope = 'helpers'} = options
  Vue.prototype['$' + scope] = require('@dannyfranca/handsome-helpers')
}

export default helpers
