<template>
  <button class="s-button" :class="{[`icon-${iconPosition}`]: true}"
          @click="$emit('click')">
    <s-icon class="icon" v-if="icon && !loading" :name="icon"></s-icon>
    <s-icon class="loading icon" v-if="loading" name="loading"></s-icon>
    <div class="s-button-content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  import Icon from './icon'

  export default {
    name: 'SnowButton',
    components: {
      's-icon': Icon
    },
    // props: ['icon', 'iconPosition']
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return value === 'left' || value === 'right'
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  $font-size: 14px;
  $button-height: 32px;
  $button-bg: white;
  $button-active-bg: #eee;
  $border-radius: 4px;
  $color: #333;
  $border-color: #999;
  $border-color-hover: #666;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .s-button {
    font-size: $font-size;
    height: $button-height;
    padding: 0 0.6em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

    &:disabled {
      cursor: not-allowed;
    }

    &:hover {
      border-color: $border-color-hover;
    }

    &:active {
      background-color: $button-active-bg;
    }

    &:focus {
      outline: none;
    }

    > .icon {
      order: 1;
      margin-right: .3em;
    }

    > .s-button-content {
      order: 2;
    }

    &.icon-right {
      > .icon {
        order: 2;
        margin-right: 0;
        margin-left: .3em;
      }

      > .s-button-content {
        order: 1;
      }
    }

    .loading {
      animation: spin 1s infinite linear;
    }
  }
</style>