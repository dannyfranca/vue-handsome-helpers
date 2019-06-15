import helpers from '@dannyfranca/handsome-helpers'

const plugin = {}

plugin.install = function (Vue, options = {}) {
  const { scope = 'helpers' } = options
  Vue.prototype['$' + scope] = helpers
}

export default plugin
