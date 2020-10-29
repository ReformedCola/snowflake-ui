---
title: Button
---

# Button

Common usages of Button is shown as followed.

## Default

### Preview
<ClientOnly>
<button-demos></button-demos>
</ClientOnly>

### Code
```vue
<s-button>Default Button</s-button>
<s-button icon="settings">Default Button</s-button>
<s-button :loading="true">Default Button</s-button>
<s-button disabled>Default Button</s-button>
```

## Button Group

Buttons can be grouped with `<ButtonGroup/>` Components.
Usually, they are used for indicating next page or prev page.
Common usages of Button Group is shown as followed.

### Preview
<ClientOnly>
<button-group-demo></button-group-demo>
</ClientOnly>

### Code
```vue
<s-button-group>
  <s-button icon="left">Prev</s-button>
  <s-button>More</s-button>
  <s-button icon="right" icon-position="right">Next</s-button>
</s-button-group>
```

## Attributes
| Attributes | Description | Type | Default |
|---|---|:---:|---|---|
| icon | Name of icon | String | - |
| icon-position | Position of icon | String | `left` |
| loading | Set the loading status of button | Boolean | false |
| disabled | Disabled state of button | Boolean | false