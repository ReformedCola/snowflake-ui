<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
      <s-button @click="visible=false">Close</s-button>
    </div>
  </transition>
</template>

<script>
  import Button from './button'
  export default {
    name: 'SnowSider',
    data() {
      return {
        visible: true
      }
    },
    components: {
      's-button': Button
    }
  }
</script>

<style lang="scss" scoped>
  .sider {
    position: relative;

    > button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .slide-enter-active, .slide-leave-active {
    transition: width .3s
  }
  .slide-enter, .slide-leave-to {
    width: 0;
  }
</style>