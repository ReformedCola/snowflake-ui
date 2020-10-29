<template>
  <div class="input">
    <s-input value="Basic input"></s-input>
    <s-input value="Disabled input" disabled></s-input>
    <s-input value="Readonly input" readonly></s-input>
  </div>
</template>

<script>
  import Input from '../../../src/input'

  export default {
    components: {
      's-input': Input
    }
  }
</script>

<style scoped lang="scss">
  .input {
    padding-top: 10px;
  }
</style>