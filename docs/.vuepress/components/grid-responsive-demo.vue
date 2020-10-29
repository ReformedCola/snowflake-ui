<template>
  <div class="response-wrapper">
    <s-row class="s-row">
      <s-col class="s-col" :span="24" :ipad="{span:'11',offset:'0'}" :narrow-pc="{span:'8',offset:'0'}"
             :pc="{span:'6',offset:'0'}">
        1
      </s-col>
      <s-col class="s-col-2" :span="24" :ipad="{span:'11',offset:'2'}" :narrow-pc="{span:'12',offset:'4' }"
             :pc="{span:'18',offset:'0'}">
        2
      </s-col>
    </s-row>
  </div>
</template>

<script>
  import Col from '../../../src/col'
  import Row from '../../../src/row'

  export default {
    components: {
      's-col': Col,
      's-row': Row
    },
  }
</script>

<style lang="scss" scoped>
  $background: #42B983;
  .s-row {
    color: white;
    padding: 10px 0;

    .s-col {
      background: $background;
    }

    .s-col-2 {
      background: lighten($background,20%)
    }
  }
</style>