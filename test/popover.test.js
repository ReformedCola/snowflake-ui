const expect = chai.expect
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {

  it('should exist', () => {
    expect(Popover).to.exist
  })

  it('could accept position', (done) => {
    Vue.component('g-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-popover position="bottom" ref="a"> 
        <template slot="content">
          Popover Content
        </template>
        <button>Click me !!</button>
      </g-popover>
    `
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      vm.$el.querySelector('button').click()
      vm.$nextTick(() => {
        const {contentWrapper} = vm.$refs.a.$refs
        expect(contentWrapper.classList.contains('position-bottom')).to.be.true
        done()
      })
    })
  })

  xit('could accept trigger', (done) => {
    Vue.component('g-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-popover trigger="hover" ref="a"> 
        <template slot="content">
          Popover Content
        </template>
        <button>Click me !!</button>
      </g-popover>
    `
    const vm = new Vue({
      el: div
    })

    let event = new Event('mouseenter')
    vm.$el.dispatchEvent(event)
    vm.$nextTick(() => {
      vm.$nextTick(() => {
        const {contentWrapper} = vm.$refs.a.$refs
        expect (contentWrapper).to.exist
        done()
      })
    })
  })
})