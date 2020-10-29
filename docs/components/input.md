---
title: Input
---

# Input

A basic widget for getting the user input is a text field.
Keyboard and mouse can be used for providing or changing data.

## Default

### Preview
<ClientOnly>
 <input-demo></input-demo>
</ClientOnly>

### Code
```vue
<s-input value="Basic input"></s-input>
<s-input value="Disabled input" disabled></s-input>
<s-input value="Readonly input" readonly></s-input>
```

## Data Binding

This component supports two-way data binding.

### Preview
<ClientOnly>
 <input-data-binding-demo></input-data-binding-demo>
</ClientOnly>

### Code
```javascript
data: {
  return {
    value: 'Edit me'
  }
}
```
```vue
<s-input v-model="value"></s-input>
<div>
  Value: {{value}}
</div>
```

## Error Message

To show an error message, you need to set `error` props.

### Preview
<ClientOnly>
 <input-error-demo></input-error-demo>
</ClientOnly>

### Code
```vue
<s-input value="Error input" error="Invalid input!"></s-input>
```

## Attributes
| Attributes | Description | Type | Default |
|---|---|:---:|---|---|
| value | The input content value | String | - |
| disabled | Whether the input is disabled | Boolean | false |
| readonly | Whether the input is readonly | Boolean | false |
| error | Error message | String | - |