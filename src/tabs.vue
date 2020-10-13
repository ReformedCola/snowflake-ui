<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'SnowTabs',
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    data() {
      return {
        eventBus: new Vue()
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    methods: {
      checkChildren() {
        if (this.$children.length === 0) {
          console && console.warn &&
          console.warn(`Tab's child components should be tabs-head and tabs-body, but you didn't write any child component`)
        }
      },
      selectTab() {
        this.$children.forEach((vm) => {
          if (vm.$options.name === 'SnowTabsHead') {
            vm.$children.forEach((childVm) => {
              if (childVm.$options.name === 'SnowTabsItem' && childVm.name === this.selected) {
                this.eventBus.$emit('update:selected', this.selected, childVm)
              }
            })
          }
        })
      }
    },
    mounted() {
      this.checkChildren()
      this.selectTab()
    }
  }
</script>

<style lang="scss" scoped>
  .tabs {

  }
</style>