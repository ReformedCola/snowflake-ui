const expect = chai.expect
import Vue from 'vue'
import Collapse from '../src/collapse'
import CollapseItem from '../src/collapse-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Collapse', () => {

  it('should exist', () => {
    expect(Collapse).to.exist
  })

  it('could accept selected', (done) => {

    Vue.component('s-collapse', Collapse)
    Vue.component('s-collapse-item', CollapseItem)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
        <s-collapse :selected="xxx">
          <s-collapse-item title="title1" name="1"><span id="content-1">1</span></s-collapse-item>
          <s-collapse-item title="title2" name="2"><span id="content-2">2</span></s-collapse-item>
          <s-collapse-item title="title3" name="3"><span id="content-3">3</span></s-collapse-item>
        </s-collapse>
    `
    const vm = new Vue({
      el: div,
      data: {
        xxx: ['1', '2']
      }
    })
    setTimeout(() => {
      expect(vm.$el.querySelector('#content-1')).to.exist
      expect(vm.$el.querySelector('#content-2')).to.exist
      expect(vm.$el.querySelector('#content-3')).to.not.exist
      done()
    })
  })

  it('could accept single', (done) => {

    Vue.component('s-collapse', Collapse)
    Vue.component('s-collapse-item', CollapseItem)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
        <s-collapse :selected.sync="xxx" single>
          <s-collapse-item title="title1" name="1"><span id="content-1">1</span></s-collapse-item>
          <s-collapse-item title="title2" name="2"><span id="content-2">2</span></s-collapse-item>
          <s-collapse-item title="title3" name="3"><span id="content-3">3</span></s-collapse-item>
        </s-collapse>
    `
    const vm = new Vue({
      el: div,
      data: {
        xxx: ['1']
      }
    })
    setTimeout(() => {
      vm.$el.querySelector('[data-name="2"]').click()
      setTimeout(() => {
        expect(vm.$el.querySelector('#content-1')).to.not.exist
        expect(vm.$el.querySelector('#content-2')).to.exist
        done()
      })
    })
  })

  it('will trigger update:selected event', (done) => {
    Vue.component('s-collapse', Collapse)
    Vue.component('s-collapse-item', CollapseItem)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
        <s-collapse :selected="xxx" @update:selected="onSelect">
          <s-collapse-item title="title1" name="1"><span id="content-1">1</span></s-collapse-item>
          <s-collapse-item title="title2" name="2"><span id="content-2">2</span></s-collapse-item>
          <s-collapse-item title="title3" name="3"><span id="content-3">3</span></s-collapse-item>
        </s-collapse>
    `
    const callback = sinon.fake()
    const vm = new Vue({
      el: div,
      data: {
        xxx: ['1']
      },
      methods: {
        onSelect: callback
      }
    })
    setTimeout(() => {
      vm.$el.querySelector('[data-name="2"]').click()
      setTimeout(() => {
        expect(callback).to.have.been.called
        done()
      })
    })
  })
})
