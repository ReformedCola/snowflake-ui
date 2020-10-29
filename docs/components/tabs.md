---
title: Tabs
---

# Tabs

Tabs make it easy to switch between different views.

## Preview
<ClientOnly>
  <tabs-demo></tabs-demo>
</ClientOnly>

## Code
```javascript
data() {
  return {
    selected: '1'
  }
}
```
```vue
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
```

## Attributes

### Tabs
| Attributes | Description | Type | Default |
|---|---|:---:|---|---|
| selected | Whether the tab is selected as default. Please provide index of the tab you want to be selected as default in data() | Boolean | false |

### TabsItem
| Attributes | Description | Type | Default |
|---|---|:---:|---|---|
| name | Tab's key | String | - |
| disabled | Whether the tab is disabled | Boolean | false |

### TabsPane
| Attributes | Description | Type | Default |
|---|---|:---:|---|---|
| name | TabPane's key | String | - |