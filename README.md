# floaties

[![npm](https://img.shields.io/npm/v/floaties.svg?style=flat-square)](https://www.npmjs.com/package/floaties)
[![Travis](https://img.shields.io/travis/nickjohnson-dev/floaties.svg?style=flat-square)](https://travis-ci.org/nickjohnson-dev/floaties)

Simple helpers for creating popups.

## `getPosition`

Returns object with styles (`bottom`, `left`, `right`, `top`) to achieve desired popup position relative to target. Popup position defaults to top-left of popup aligned with top-left of target.

```javascript
import { getPosition } from 'floaties';

const popup = document.querySelector('.my-popup');
const target = document.querySelector('.my-target');

const position = getPosition({
  popupEl: popup,
  targetEl: target,
});
```
