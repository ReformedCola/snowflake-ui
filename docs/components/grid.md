---
title: Grid
---

# Grid

Grid system of Snowflake UI.

## Default

Based on 12 Grids System, it divided the design area into 24 aliquots.

### Preview
<ClientOnly>
  <grid-demo></grid-demo>
</ClientOnly>

### Code
```vue
<!-- Row 1 -->
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

<!-- Row 2 -->
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

<!-- Row 3 -->
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

<!-- Row 4 -->
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
```

## Gutter

### Preview
<ClientOnly>
  <grid-gutter-demo></grid-gutter-demo>
</ClientOnly>

### Code
```vue
<!-- Row 1 -->
<s-row class="s-row" gutter="10">
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

<!-- Row 2 -->
<s-row class="s-row" gutter="10">
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
```

## Offset

### Preview
<ClientOnly>
  <grid-offset></grid-offset>
</ClientOnly>

### Code
```vue
<!-- Row 1 -->
<s-row class="s-row" gutter="10">
  <s-col span="8">
    <div class="s-col">8</div>
  </s-col>
  <s-col span="8" offset="8">
    <div class="s-col">8</div>
  </s-col>
</s-row>

<!-- Row 2 -->
<s-row class="s-row" gutter="10">
  <s-col span="6" offset="6">
    <div class="s-col">6</div>
  </s-col>
  <s-col span="6" offset="6">
    <div class="s-col">6</div>
  </s-col>
</s-row>

<!-- Row 3 -->
<s-row class="s-row" gutter="10">
  <s-col span="4">
    <div class="s-col">4</div>
  </s-col>
  <s-col span="4" offset="4">
    <div class="s-col">4</div>
  </s-col>
  <s-col span="4" offset="8">
    <div class="s-col">4</div>
  </s-col>
</s-row>

<!-- Row 4 -->
<s-row class="s-row" gutter="10">
  <s-col span="2">
    <div class="s-col">2</div>
  </s-col>
  <s-col span="2" offset="2">
    <div class="s-col">2</div>
  </s-col>
  <s-col span="2">
    <div class="s-col">2</div>
  </s-col>
  <s-col span="2" offset="2">
    <div class="s-col">2</div>
  </s-col>
  <s-col span="2">
    <div class="s-col">2</div>
  </s-col>
  <s-col span="2" offset="2">
    <div class="s-col">2</div>
  </s-col>
  <s-col span="2">
    <div class="s-col">2</div>
  </s-col>
  <s-col span="2" offset="2">
    <div class="s-col">2</div>
  </s-col>
</s-row>
```

## Responsive

Supports ipad, narrowPc, pc, widePc, and mobile.

The default is mobile responsive, span would be 24, if your don't provide other 4 attributes.

<span style="color:red;">Note: If you to set these 4 attributes, you will need to provide corresponding value of span and offset as an object.</span>

### Preview
<ClientOnly>
  <grid-responsive-demo></grid-responsive-demo>
</ClientOnly>

### Code
```vue
<s-row class="s-row">
  <s-col class="s-col" :span="24" :ipad="{span:'11',offset:'0'}" 
         :narrow-pc="{span:'8',offset:'0'}" :pc="{span:'6',offset:'0'}">
    1
  </s-col>
  <s-col class="s-col-2" :span="24" :ipad="{span:'11',offset:'2'}" 
         :narrow-pc="{span:'12',offset:'4' }" :pc="{span:'18',offset:'0'}">
    2
  </s-col>
</s-row>
```

## Attributes

### Row

| Attributes | Description | Type | Default |
|---|---|:---:|---|---|
| align | The horizontal alignment of the flex layout: `left`, `center` or `right` | String | `left` |
| gutter | Spacing between grids | String/Number | 0 |

### Col

| Attributes | Description | Type | Default |
|---|---|:---:|---|---|
| span | Raster number of cells to occupy, 0 corresponds to `display: none` | String/Number | - |
| offset | The number of cells to offset Col from the left | String/Number | 0 |
| ipad | `screen > 576px`, an object containing above props | Object | -
| narrow-pc | `screen > 768px`, an object containing above props | Object | -
| pc | `screen > 992px`, an object containing above props | Object | -
| wide-pc | `screen > 1200px`, an object containing above props | Object | -