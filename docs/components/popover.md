---
title: Popover
---

# Popover

The floating card popped by clicking or hovering.

## Default

### Preview
<ClientOnly>
  <popover-demo></popover-demo>
</ClientOnly>

### Code
```vue
<!-- Top popover-->
<s-popover>
  <s-button>Top</s-button>
  <template slot="content">
    Content
  </template>
</s-popover>

<!-- Bottom popover-->
<s-popover position="bottom">
  <s-button>Bottom</s-button>
  <template slot="content">
    Content
  </template>
</s-popover>

<!-- Left popover-->
<s-popover position="left">
  <s-button>Left</s-button>
  <template slot="content">
    Content
  </template>
</s-popover>

<!-- Right popover-->
<s-popover position="right">
  <s-button>Right</s-button>
  <template slot="content">
    Content
  </template>
</s-popover>
```

## With Hover

### Preview
<ClientOnly>
  <popover-hover-demo></popover-hover-demo>
</ClientOnly>

### Code
```vue
<!-- Top popover-->
<s-popover trigger="hover">
  <s-button>Top</s-button>
  <template slot="content">
    Content
  </template>
</s-popover>

<!-- Bottom popover-->
<s-popover position="bottom" trigger="hover">
  <s-button>Bottom</s-button>
  <template slot="content">
    Content
  </template>
</s-popover>

<!-- Left popover-->
<s-popover position="left" trigger="hover">
  <s-button>Left</s-button>
  <template slot="content">
    Content
  </template>
</s-popover>

<!-- Right popover-->
<s-popover position="right" trigger="hover">
  <s-button>Right</s-button>
  <template slot="content">
    Content
  </template>
</s-popover>
```

## Attributes

| Attributes | Description | Type | Default |
|---|---|:---:|---|---|
| position | Position of content when it pops, value can be `top`, `bottom`, `left`, `right` | String | `top` |
| trigger | How to trigger popping action, value can be `click`, `hover` | String | `click` |