<template>
  <div class="sider-layout">
    <s-layout class="s-layout">
      <s-header class="s-header">
        header
      </s-header>
      <s-layout>
        <s-sider class="s-sider">
          sider
        </s-sider>
        <s-content class="s-content">
          content
        </s-content>
      </s-layout>
      <s-footer class="s-footer">
        footer
      </s-footer>
    </s-layout>

    <hr>

    <s-layout class="s-layout">
      <s-sider class="s-sider">
        sider
      </s-sider>
      <s-layout>
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
    </s-layout>
  </div>
</template>

<script>
  import Layout from '../../../src/Layout'
  import Header from '../../../src/Header'
  import Content from '../../../src/Content'
  import Footer from '../../../src/Footer'
  import Sider from '../../../src/Sider'

  export default {
    components: {
      's-layout': Layout,
      's-header': Header,
      's-content': Content,
      's-footer': Footer,
      's-sider': Sider
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
  .sider-layout {
    .s-layout {
      padding: $layoutPadding;

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

      .s-sider {
        @include center();
        @extend %whiteColor;
        width: 100px;
        background: lighten($background, 10%);
      }
    }
  }
</style>