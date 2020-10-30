<template>
  <div class="collapse-wrapper">
    <s-collapse :selected.sync="selected">
      <s-collapse-item title="Home" name="1"> &ensp;  - Home Item</s-collapse-item>
      <s-collapse-item title="Introduction" name="2"> &ensp;  - Introduction Item</s-collapse-item>
      <s-collapse-item title="Components" name="3"> &ensp;  - Components Item</s-collapse-item>
    </s-collapse>
  </div>
</template>

<script>
  import Collapse from '../../../src/Collapse'
  import CollapseItem from '../../../src/Collapse-item'

  export default {
    components: {
      's-collapse': Collapse,
      's-collapse-item': CollapseItem,
    },
    data() {
      return {selected: ['1']}
    },
  }
</script>

<style lang="scss" scoped>
  .collapse-wrapper {
    padding-top: 10px;
  }
</style>