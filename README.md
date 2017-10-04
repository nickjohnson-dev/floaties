# floaties

[![npm](https://img.shields.io/npm/v/floaties.svg?style=flat-square)](https://www.npmjs.com/package/floaties)
[![Travis](https://img.shields.io/travis/nickjohnson-dev/floaties.svg?style=flat-square)](https://travis-ci.org/nickjohnson-dev/floaties)
[![Codecov](https://img.shields.io/codecov/c/github/nickjohnson-dev/floaties.svg?style=flat-square)](https://codecov.io/gh/nickjohnson-dev/floaties)

Simple helpers for creating popups.

## `getStyle`

Returns object with styles required to achieve desired popup position relative to target. Popup position defaults to top-left of popup aligned with top-left of target.

```javascript
import { getStyle } from 'floaties';

const popup = document.querySelector('.my-popup');
const target = document.querySelector('.my-target');

const position = getStyle({
  popupEl: popup,
  targetEl: target,
});
```
