---
title: Toast
---

# Toast

Show a message after user finish some actions.
Also, you can show raw html code by using it.

## this.$toast

To use this component, you have to use `Vue.use(plugin)` tp register as global function.
Then you can set 3 positions where it shows a message.

## Default

### Preview
<ClientOnly>
  <toast-demo></toast-demo>
</ClientOnly>

### Code
```javascript
import plugin from 'plugin'
Vue.use(plugin)
```
```vue
<s-button @click="$toast('Show on top')">Show on top</s-button>
<s-button @click="$toast('Show in middle', {position:'middle'})">Show in middle</s-button>
<s-button @click="$toast('Show at bottom', {position:'bottom'})">Show at bottom</s-button>
```

## Close Button

By setting options for Toast, you can specify the text of close button.
Also, you can set a callback function when user hits the button.

### Preview
<ClientOnly>
  <toast-close-demo></toast-close-demo>
</ClientOnly>

### Code
```javascript
methods: {
  onClickButton() {
    this.$toast('Do you love me?', {
      closeButton: {
        text: 'Yes, I do!',
        callback: () => {
          console.log('She said she does!')
        }
      }
    })
  }
}
```
```vue
<s-button @click="onClickButton">Show it</s-button>
```

## HTML Support

Also, you can use html tags in the content of Toast.

### Preview
<ClientOnly>
  <toast-html-demo></toast-html-demo>
</ClientOnly>

### Code
```javascript
methods: {
  onClickButton() {
    this.$toast('<span style="color: #42B983;"><strong>Do you love me?</strong></span>', {
      closeButton: {
        text: 'Yes, I do!',
        callback: () => {
          console.log('She said she does!')
        }
       },
       enableHtml: true
    })
  }
}
```
```vue
<s-button @click="onClickButton">Show with HTML elements</s-button>
```

## Attributes

| Attributes | Description | Type | Default |
|---|---|:---:|---|---|
| autoClose | When set false, it needs user to click close button to close the Toast. When set number, it will close within `number` seconds  | Boolean / Number | 5 |
| closeButton | Set message content, also set a callback when clicking close button | Object | `{text: 'Close', callback: undefined}` |
| enableHtml | Set true to transfer message to HTML elements | Boolean | false |
| position | Set position for message, values can be `top`, `bottom` and `middle` | String | `top` |