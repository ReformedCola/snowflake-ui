<template>
  <div class="s-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'SnowButtonGroup',
    mounted() {
      for (let node of this.$el.children) {
        let name = node.nodeName.toLowerCase()
        if (name !== 'button') {
          console.warn(`All child elements of s-button-group should be s-button, but you used ${name}`)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .s-button-group {
    display: inline-flex;
    vertical-align: middle;

    > .s-button {
      border-radius: 0;
      &:not(:first-child) {
        margin-left: -1px;
      }
      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }

      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }

      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>