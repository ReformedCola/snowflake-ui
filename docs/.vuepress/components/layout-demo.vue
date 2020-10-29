<template>
  <div class="default-layout">
    <s-layout class="s-layout">
      <s-header class="s-header">
        header
      </s-header>
      <s-content class="s-content">
        content
      </s-content>
      <s-footer class="s-footer">
        footer
      </s-footer>
    </s-layout>
  </div>
</template>

<script>
  import Layout from '../../../src/Layout'
  import Header from '../../../src/Header'
  import Content from '../../../src/Content'
  import Footer from '../../../src/Footer'

  export default {
    components: {
      's-layout': Layout,
      's-header': Header,
      's-content': Content,
      's-footer': Footer
    }
  }
</script>

<style scoped lang="scss">
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
  .default-layout {
    padding: $layoutPadding;

    .s-layout {
      .s-header, .s-footer {
        @include center();
        @extend %whiteColor;
        height: $basicHeight;
        background: lighten($background, 20%);
      }

      .s-content {
        @include center();
        @extend %whiteColor;
        height: $basicHeight * 2;
        background: $background;
      }
    }
  }
</style>