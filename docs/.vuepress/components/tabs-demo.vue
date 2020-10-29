<template>
  <div class="tabs">
    <s-tabs :selected="selected">
      <s-tabs-head>
        <s-tabs-item name="1">Home</s-tabs-item>
        <s-tabs-item name="2">Introduction</s-tabs-item>
        <s-tabs-item name="3">Components</s-tabs-item>
        <s-tabs-item name="4" disabled>Contributions</s-tabs-item>
      </s-tabs-head>
      <s-tabs-body>
        <s-tabs-pane name="1">Home page</s-tabs-pane>
        <s-tabs-pane name="2">Introduction page</s-tabs-pane>
        <s-tabs-pane name="3">Components page</s-tabs-pane>
        <s-tabs-pane name="4">Contributions page</s-tabs-pane>
      </s-tabs-body>
    </s-tabs>
  </div>
</template>

<script>
  import Tabs from '../../../src/Tabs'
  import TabsItem from '../../../src/tabs-item'
  import TabsPane from '../../../src/tabs-pane'
  import TabsHead from '../../../src/tabs-head'
  import TabsBody from '../../../src/tabs-body'

  export default {
    data() {
      return {
        selected: '1'
      }
    },
    components: {
      's-tabs': Tabs,
      's-tabs-item': TabsItem,
      's-tabs-pane': TabsPane,
      's-tabs-head': TabsHead,
      's-tabs-body': TabsBody
    }
  }
</script>

<style scoped lang="scss">

</style>