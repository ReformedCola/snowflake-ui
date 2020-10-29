<template>
  <div class="popover-hover">
    <s-popover trigger="hover">
      <s-button>Top</s-button>
      <template slot="content">
        Content
      </template>
    </s-popover>
    <s-popover position="bottom" trigger="hover">
      <s-button>Bottom</s-button>
      <template slot="content">
        Content
      </template>
    </s-popover>
    <s-popover position="left" trigger="hover">
      <s-button>Left</s-button>
      <template slot="content">
        Content
      </template>
    </s-popover>
    <s-popover position="right" trigger="hover">
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
  .popover-hover {
    padding-top: 10px;
  }
</style>