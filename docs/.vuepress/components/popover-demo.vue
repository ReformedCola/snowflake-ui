<template>
  <div class="popover">
    <s-popover>
      <s-button>Top</s-button>
      <template slot="content">
        Content
      </template>
    </s-popover>
    <s-popover position="bottom">
      <s-button>Bottom</s-button>
      <template slot="content">
        Content
      </template>
    </s-popover>
    <s-popover position="left">
      <s-button>Left</s-button>
      <template slot="content">
        Content
      </template>
    </s-popover>
    <s-popover position="right">
      <s-button>Right</s-button>
      <template slot="content">
        Content
      </template>
    </s-popover>
  </div>
</template>

<script>
  import Popover from '../../../src/Popover'
  import Button from '../../../src/Button'

  export default {
    components: {
      's-popover': Popover,
      's-button': Button
    }
  }
</script>

<style scoped lang="scss">
  .popover {
    padding-top: 10px;
  }
</style>