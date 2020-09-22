const expect = chai.expect
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {

  it('should exist', () => {
    expect(Input).to.exist
  })

  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('could accept value', () => {
      vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('1234')
      vm.$destroy()
    })

    it('could accept disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
      vm.$destroy()
    })

    it('could accept readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
      vm.$destroy()
    })

    it('could accept error', () => {
      vm = new Constructor({
        propsData: {
          error: 'You are wrong'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
      const errorMessage = vm.$el.querySelector('.errorMessage')
      expect(errorMessage.innerText).to.equal('You are wrong')
      vm.$destroy()
    })
  })

  describe('events', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('supports change event', () => {
      vm = new Constructor({}).$mount()
      const callback = sinon.fake()
      vm.$on('change', callback)
      let event = new Event('change')
      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith(event)
    })
    it('supports input event', () => {
      vm = new Constructor({}).$mount()
      const callback = sinon.fake()
      vm.$on('input', callback)
      let event = new Event('input')
      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith(event)
    })
    it('supports focus event', () => {
      vm = new Constructor({}).$mount()
      const callback = sinon.fake()
      vm.$on('focus', callback)
      let event = new Event('focus')
      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith(event)
    })
    it('supports blur event', () => {
      vm = new Constructor({}).$mount()
      const callback = sinon.fake()
      vm.$on('blur', callback)
      let event = new Event('blur')
      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith(event)
    })
  })
})