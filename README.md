# Snowflake UI

[![Build Status](https://travis-ci.com/ReformedCola/snowflake-ui.svg?branch=master)](https://travis-ci.com/ReformedCola/snowflake-ui)
![npm](https://img.shields.io/npm/v/snowflake-ui?color=%230a7bbb)
![NPM](https://img.shields.io/npm/l/snowflake-ui)

## Introduction

Snowflake is a simple and useful UI Library that I made while I was learning Vue 2 and inspired by Ant Design and Element.

It provides some useful components, and suitable for PC and mobile.
 
Hope it's useful to you. 😉

## Start to Use

1. Add CSS Styles
    
    Please enable border-box before using this UI library.
    ```
    *, *::before, *::after {box-sizing: border-box;}
    ```
    
    This feature supports IE8+ browsers.
    
2. Install snowflake-ui
    ```
   npm i --save snowflake-ui
   ```
3. Import snowflake-ui
    ```
   import {Button} from 'snowflake-ui'
   import 'snowflake-ui/dist/index.css'
   
   export default {
     name: 'app',
     components: {
       's-button': Button
     }
   }
   ```

## Documentation

The documentation is developed with [vuepress](https://vuepress.vuejs.org/).
All usages of components are included in this docs.
Please check [this](https://horzhiyuan.com/snowflake-ui/) out.

## Questions & Stay in Touch

[Shoot me an email](mailto:zhiyuanfw@gmail.com).

## Contribution

Any contributions will help me to improve this UI library.
Feel free to join me.