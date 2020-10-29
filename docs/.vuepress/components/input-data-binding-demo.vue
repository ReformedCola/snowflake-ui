<template>
  <div class="input">
    <s-input v-model="value"></s-input>
    <div class="value">
      Value: {{value}}
    </div>
  </div>
</template>

<script>
  import Input from '../../../src/input'

  export default {
    components: {
      's-input': Input
    },
    data() {
      return {
        value: 'Edit me'
      }
    }
  }
</script>

<style scoped lang="scss">
  .input {
    padding-top: 10px;
    .value {
      padding-top: 4px;
    }
  }
</style>