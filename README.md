# Snowflake UI

[![Build Status](https://travis-ci.com/ReformedCola/snowflake-ui.svg?branch=master)](https://travis-ci.com/ReformedCola/snowflake-ui)
![npm](https://img.shields.io/npm/v/snowflake-ui?color=%230a7bbb)
![NPM](https://img.shields.io/npm/l/snowflake-ui)

## Introduction

This is a UI Library that I made while I was learning Vue 2.

I hope this is useful to you. 😉

## Start to Use

1. Add CSS Styles
    
    Please enable border-box before using this UI library.
    ```
    *, *::before, *::after {box-sizing: border-box;}
    ```
    Browsers that are IE 8 or higher version support border-box.
    
    You may need to set default variables such as colors, font sizes, etc. (Will change to SCSS variables later)
    ```
    html {
      --button-height: 32px;
      --font-size: 14px;
      --button-bg: white;
      --button-active-bg: #eee;
      --border-radius: 4px;
      --color: #333;
      --border-color: #999;
      --border-color-hover: #666;
    }
    ```
    Browsers that are IE 15 or higher version support styles above.
2. Install snowflake-ui
    ```
   npm i --save snowflake-ui
   ```
3. Import snowflake-ui
    ```
   import {Button, ButtonGroup, Icon} from 'snowflake-ui'
   import 'snowflake-ui/dist/index.css'
   
   export default {
     name: 'app',
     components: {
       'g-button': Button,
       'g-icon': Icon
     }
   }
   ```

## Documentation

## Questions

## Changelog

## Stay in Touch

## Contribution
