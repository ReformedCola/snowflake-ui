<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SnowLayout',
    data() {
      return {
        layoutClass: {
          hasSider: false
        }
      }
    },
    mounted() {
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'SnowSider') {
          this.layoutClass.hasSider = true
        }
      })
    },
  }
</script>

<style lang="scss" scoped>
  .layout {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    border: 1px solid red;
    &.hasSider {
      flex-direction: row;
    }
  }
</style>