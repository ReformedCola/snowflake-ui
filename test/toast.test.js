const expect = chai.expect
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {

  it('should exist', () => {
    expect(Toast).to.exist
  })

  describe('props', function () {
    it('could accept autoClose', (done) => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: 1
        }
      }).$mount(div)
      vm.$on('close', () => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
    })
    it('could accept closeButton', (done) => {
      const callback = sinon.fake()
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: 'Close it',
            callback,
          },
        }
      }).$mount()
      let closeButton = vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim()).to.eq('Close it')
      setTimeout(() => {
        closeButton.click()
        expect(callback).to.have.been.called
        done()
      }, 200)
    })
    it('could accept enableHtml', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          enableHtml: true
        }
      })
      vm.$slots.default = ['<strong id="test">Hi</strong>']
      vm.$mount()
      let strong = vm.$el.querySelector('#test')
      expect(strong).to.be.exist
    })
    it('could accept position', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          position: 'bottom'
        }
      }).$mount()
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    })
  })

})