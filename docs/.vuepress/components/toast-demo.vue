<template>
  <div class="toast">
    <s-button @click="$toast('Show on top', {position: 'top'})">Show on top</s-button>
    <s-button @click="$toast('Show in middle', {position:'middle'})">Show in middle</s-button>
    <s-button @click="$toast('Show at bottom', {position:'bottom'})">Show at bottom</s-button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Toast from '../../../src/Toast'
  import Button from '../../../src/Button'
  import plugin from '../../../src/plugin'

  Vue.use(plugin)

  export default {
    components: {
      's-button': Button,
      's-toast': Toast
    }
  }
</script>

<style scoped lang="scss">
  .toast {
    padding-top: 10px;
  }
</style>