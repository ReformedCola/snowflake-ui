---
title: Collapse
---

# Collapse

A content area which can be collapsed and expanded.

## Default

Supports two-way data bindings with `.sync` .

Two attributes are required: `title` and `name` .

### Preview
<ClientOnly>
  <collapse-demo></collapse-demo>
</ClientOnly>

### Code
```javascript
data() {
  return {selected: ['1']}
}
```
```vue
<s-collapse :selected.sync="selected">
  <s-collapse-item title="Home" name="1"> &ensp;  - Home Item</s-collapse-item>
  <s-collapse-item title="Introduction" name="2"> &ensp;  - Introduction Item</s-collapse-item>
  <s-collapse-item title="Components" name="3"> &ensp;  - Components Item</s-collapse-item>
</s-collapse>
```

## Single only

Supports only show one item at a time.

### Preview
<ClientOnly>
  <collapse-single-demo></collapse-single-demo>
</ClientOnly>

### Code
```javascript
data() {
  return {selected: ['1']}
}
```
```vue
<s-collapse :selected.sync="selected" single>
  <s-collapse-item title="Home" name="1"> &ensp;  - Home Item</s-collapse-item>
  <s-collapse-item title="Introduction" name="2"> &ensp;  - Introduction Item</s-collapse-item>
  <s-collapse-item title="Components" name="3"> &ensp;  - Components Item</s-collapse-item>
</s-collapse>
```

## Attributes

### Collapse
| Attributes | Description | Type | Default |
|---|---|:---:|---|---|
| selected | Whether the item is selected as default. Please provide index of the item you want to be selected as default as string in data() | Array | - |
| single | Whether only show one item at a time | Boolean | false |

### CollapseItem
| Attributes | Description | Type | Default |
|---|---|:---:|---|---|
| title | Title of the item, required | String | - |
| name | Name of the item, required | String | - |