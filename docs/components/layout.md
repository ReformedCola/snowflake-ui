---
title: Layout
---

# Layout

Handling the overall layout of a page.

## Default

### Preview
<ClientOnly>
  <layout-demo></layout-demo>
</ClientOnly>

### Code
```vue
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
```

## With Sider

### Preview
<ClientOnly>
  <layout-sider-demo></layout-sider-demo>
</ClientOnly>

### Code
```vue
<!-- Layout 1 -->
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

<!-- Layout 2 -->
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
```