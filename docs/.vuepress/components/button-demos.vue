<template>
  <div class="s-button">
    <div class="s-button-wrapper">
      <s-button>Default Button</s-button>
      <s-button icon="settings">Default Button</s-button>
      <s-button :loading="true">Default Button</s-button>
      <s-button disabled>Default Button</s-button>
    </div>
  </div>
</template>

<script>
  import Button from '../../../src/button'

  export default {
    components: {
      's-button': Button
    },
  }
</script>

<style scoped lang="scss">
  .s-button {
    &-wrapper {
      padding-top: 10px;
    }
  }
</style>

