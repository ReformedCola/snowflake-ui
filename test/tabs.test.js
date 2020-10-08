const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

  it('should exist', () => {
    expect(Tabs).to.exist
  })

  it('could accept selected prop', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-tabs selected="tos">
        <g-tabs-head>
          <g-tabs-item name="lol"> League of Legends </g-tabs-item>
          <g-tabs-item name="tos"> Tree of Savior </g-tabs-item>
          <g-tabs-item name="tft"> Teamfight Tactics </g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="lol"> LOL News </g-tabs-pane>
          <g-tabs-pane name="tos"> TOS News </g-tabs-pane>
          <g-tabs-pane name="tft"> TFT News </g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    `
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector(`.tabs-item[data-name="tos"]`)
      expect(x.classList.contains('active')).to.be.true
      done()
    })
  })

  it ('could accept direction prop', () => {

  })

})