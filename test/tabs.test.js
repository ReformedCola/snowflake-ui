const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('s-tabs', Tabs)
Vue.component('s-tabs-head', TabsHead)
Vue.component('s-tabs-body', TabsBody)
Vue.component('s-tabs-item', TabsItem)
Vue.component('s-tabs-pane', TabsPane)

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
      <s-tabs selected="tos">
        <s-tabs-head>
          <s-tabs-item name="lol"> League of Legends </s-tabs-item>
          <s-tabs-item name="tos"> Tree of Savior </s-tabs-item>
          <s-tabs-item name="tft"> Teamfight Tactics </s-tabs-item>
        </s-tabs-head>
        <s-tabs-body>
          <s-tabs-pane name="lol"> LOL News </s-tabs-pane>
          <s-tabs-pane name="tos"> TOS News </s-tabs-pane>
          <s-tabs-pane name="tft"> TFT News </s-tabs-pane>
        </s-tabs-body>
      </s-tabs>
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