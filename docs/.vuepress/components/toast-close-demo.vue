<template>
  <div class="toast">
    <s-button @click="onClickButton">Show it</s-button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Toast from '../../../src/Toast'
  import Button from '../../../src/Button'
  import plugin from '../../../src/plugin'

  Vue.use(plugin)

  export default {
    methods: {
      onClickButton() {
        this.$toast('Do you love me?', {
          closeButton: {
            text: 'Yes, I do!',
            callback: () => {
              console.log('She said she does!')
            }
          }
        })
      }
    },
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