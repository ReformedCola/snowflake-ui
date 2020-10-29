<template>
  <div class="grid">
    <s-row class="s-row">
      <s-col span="8">
        <div class="s-col">8</div>
      </s-col>
      <s-col span="8">
        <div class="s-col">8</div>
      </s-col>
      <s-col span="8">
        <div class="s-col">8</div>
      </s-col>
    </s-row>

    <s-row class="s-row">
      <s-col span="6">
        <div class="s-col">6</div>
      </s-col>
      <s-col span="6">
        <div class="s-col">6</div>
      </s-col>
      <s-col span="6">
        <div class="s-col">6</div>
      </s-col>
      <s-col span="6">
        <div class="s-col">6</div>
      </s-col>
    </s-row>

    <s-row class="s-row">
      <s-col span="4">
        <div class="s-col">4</div>
      </s-col>
      <s-col span="4">
        <div class="s-col">4</div>
      </s-col>
      <s-col span="4">
        <div class="s-col">4</div>
      </s-col>
      <s-col span="4">
        <div class="s-col">4</div>
      </s-col>
      <s-col span="4">
        <div class="s-col">4</div>
      </s-col>
      <s-col span="4">
        <div class="s-col">4</div>
      </s-col>
    </s-row>

    <s-row class="s-row">
      <s-col span="2">
        <div class="s-col">2</div>
      </s-col>
      <s-col span="2">
        <div class="s-col">2</div>
      </s-col>
      <s-col span="2">
        <div class="s-col">2</div>
      </s-col>
      <s-col span="2">
        <div class="s-col">2</div>
      </s-col>
      <s-col span="2">
        <div class="s-col">2</div>
      </s-col>
      <s-col span="2">
        <div class="s-col">2</div>
      </s-col>
      <s-col span="2">
        <div class="s-col">2</div>
      </s-col>
      <s-col span="2">
        <div class="s-col">2</div>
      </s-col>
      <s-col span="2">
        <div class="s-col">2</div>
      </s-col>
      <s-col span="2">
        <div class="s-col">2</div>
      </s-col>
      <s-col span="2">
        <div class="s-col">2</div>
      </s-col>
      <s-col span="2">
        <div class="s-col">2</div>
      </s-col>
    </s-row>
  </div>
</template>

<script>
  import Row from '../../../src/row'
  import Col from '../../../src/col'

  export default {
    components: {
      's-row': Row,
      's-col': Col
    }
  }
</script>

<style scoped lang="scss">
  * {
    box-sizing: border-box;
  }

  @mixin center() {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  %whiteColor {
    color: white;
  }

  $layoutPadding: 10px 0;
  $basicHeight: 50px;
  $background: #42B983;
  .grid {
    .s-row {
      padding: $layoutPadding;

      .s-col {
        @include center();
        @extend %whiteColor;
        border: 1px solid #ddd;
        height: $basicHeight;
        background: $background;
      }
    }
  }
</style>