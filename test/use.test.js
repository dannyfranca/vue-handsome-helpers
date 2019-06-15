import Vue from 'vue/dist/vue'
import Plugin from '../src/index'

let vm

describe('basic', () => {
  // Install Plugin and mount instance
  beforeAll(async () => {
    Vue.use(Plugin)
    const template = `<div>{{message}}</div>`
    vm = new Vue({
      data: { message: null },
      template
    }).$mount()
  })
  
  afterAll(() => {
    vm.$destroy()
  })
  
  test('render', async (done) => {
    vm.message = 'Working'
    Vue.nextTick(() => {
      expect(vm.$el.innerHTML).toContain('Working')
      done()
    })
  })
  
  test('check install', async (done) => {
    await vm.$helpers.sleep()
    done()
  })
})

