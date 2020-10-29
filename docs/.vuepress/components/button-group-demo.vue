<template>
  <div class="s-button-group">
    <div class="s-button-group-wrapper">
      <s-button-group>
        <s-button icon="left">Prev</s-button>
        <s-button>More</s-button>
        <s-button icon="right" icon-position="right">Next</s-button>
      </s-button-group>
    </div>
  </div>
</template>

<script>
  import Button from '../../../src/button'
  import ButtonGroup from '../../../src/button-group'

  export default {
    components: {
      's-button': Button,
      's-button-group': ButtonGroup
    },
  }
</script>

<style scoped lang="scss">
  .s-button-group {
    &-wrapper {
      padding-top: 10px;
    }
  }
</style>