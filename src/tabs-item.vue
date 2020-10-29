<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SnowTabsItem',
    inject: ['eventBus'],
    data() {
      return {
        active: false
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: [String, Number],
        required: true
      }
    },
    computed: {
      classes() {
        return {
          active: this.active,
          disabled: this.disabled
        }
      }
    },
    created() {
      if (this.eventBus) {
        this.eventBus.$on('update:selected', (name) => {
          this.active = name === this.name
        })
      }
    },
    methods: {
      onClick() {
        if (this.disabled) { return }
        if (this.eventBus) {
          this.eventBus.$emit('update:selected', this.name, this)
        }
        this.$emit('click', this)
      }
    }
  }
</script>

<style lang="scss" scoped>
  $green: #42B983;
  $disabled-text-color: grey;
  .tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;

    &:hover {
      color: lighten($green, 10%);
    }

    &.active {
      color: $green;
      font-weight: bold;
    }

    &.disabled {
      color: $disabled-text-color;
      cursor: not-allowed;
    }
  }
</style>