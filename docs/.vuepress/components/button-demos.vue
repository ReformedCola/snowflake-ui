<template>
  <div>
    <g-button>Defaulted Button</g-button>
    <g-button icon="settings">Default Button</g-button>
    <g-button :loading="true">Default Button</g-button>
    <g-button disabled>Default Button</g-button>

    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
  import Button from '../../../src/button'

  export default {
    components: {
      'g-button': Button
    },
    data() {
      return {
        content: `
          <g-button>Default Button</g-button>
          <g-button icon="settings">Default Button</g-button>
          <g-button :loading="true">Default Button</g-button>
          <g-button disabled>Default Button</g-button>
      `.replace(/\t+| +/g, '').trim()
      }
    }
  }
</script>

