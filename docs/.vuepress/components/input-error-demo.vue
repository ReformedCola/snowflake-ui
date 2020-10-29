<template>
  <div class="input">
    <s-input value="Error input" error="Invalid input!"></s-input>
  </div>
</template>

<script>
  import Input from '../../../src/input'

  export default {
    components: {
      's-input': Input
    },
  }
</script>

<style scoped lang="scss">
  .input {
    padding-top: 10px;
  }
</style>