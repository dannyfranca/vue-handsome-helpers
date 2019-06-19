const plugin = {}

plugin.install = function (Vue, options = {}) {
  const { scope = 'helpers', proxy = true } = options
  let helpers
  
  if (proxy) helpers = require('@dannyfranca/handsome-helpers/lib/proxyHelpers').default
  else helpers = require('@dannyfranca/handsome-helpers').default
  
  Vue.prototype['$' + scope] = helpers
}

export default plugin
