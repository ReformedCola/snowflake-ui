<template>
  <div class="tabs-head" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SnowTabsHead',
    inject: ['eventBus'],
    mounted() {
      this.eventBus.$on('update:selected', (item, vm) => {
        this.$nextTick(() => {
          let {left: thisLeft} = this.$refs.head.getBoundingClientRect()
          let {width, left: vmLeft} = vm.$el.getBoundingClientRect()
          this.$refs.line.style.width = `${width}px`
          this.$refs.line.style.left = `${vmLeft - thisLeft}px`
        })
      })
    }
  }
</script>

<style lang="scss" scoped>
  $tab-height: 40px;
  $green: #42B983;
  $border-color: #ddd;
  .tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    position: relative;
    border-bottom: 1px solid $border-color;

    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 2px solid $green;
      transition: all 300ms;
    }

    > .actions-wrapper {
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1em;
    }
  }
</style>