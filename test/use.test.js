import Vue from 'vue/dist/vue'
import Helpers from '../src/index'

let vm

describe('basic', () => {
  // Install Plugin and mount instance
  beforeAll(async () => {
    Vue.use(Helpers)
    const template = `<div></div>`
    vm = new Vue({
      template
    }).$mount()
  })
  
  afterAll(() => {
    vm.$destroy()
  })
  
  test('check install', async (done) => {
    await vm.$helpers.sleep()
    done()
  })
})

