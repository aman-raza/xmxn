# xmxn

[![npm (scoped)](https://img.shields.io/npm/v/@amanraza/xmxn.svg)](https://www.npmjs.com/package/@amanraza/xmxn)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@amanraza/xmxn.svg)](https://www.npmjs.com/package/@amanraza/xmxn)


Capitalises a string.

## Install

```
$ npm install @amanraza/xmxn
```

## Usage

```js
const xmxn = require("@amanraza/xmxn");

xmxn("hello");
//=> "Hello"

xmxn(9999);
//=> Uncaught TypeError: xmxn needs a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
