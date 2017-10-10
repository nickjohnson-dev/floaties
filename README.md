# floaties

[![npm](https://img.shields.io/npm/v/floaties.svg?style=flat-square)](https://www.npmjs.com/package/floaties)
[![Travis](https://img.shields.io/travis/nickjohnson-dev/floaties.svg?style=flat-square)](https://travis-ci.org/nickjohnson-dev/floaties)
[![Codecov](https://img.shields.io/codecov/c/github/nickjohnson-dev/floaties.svg?style=flat-square)](https://codecov.io/gh/nickjohnson-dev/floaties)

Simple helpers for creating popups.

- Snap any popup corner to any target corner
- Uses **bottom**, **height**, **left**, **right**, **top**, and **width** to keep the popup fully on-screen at all times
  - Combine with `overflow: auto;` in the popup element to make sure content is always available.

## snap

Mutates input popup element, setting styles required to achieve desired popup position relative to target.

```javascript
import { snap } from 'floaties';

const popupEl = document.querySelector('.my-popup');
const targetEl = document.querySelector('.my-target');

snap({
  popupEl,
  targetEl,
});
```


## getStyle

Returns object with styles required to achieve desired popup position relative to target. Popup position defaults to top-left of popup aligned with top-left of target.

```javascript
import { getStyle } from 'floaties';

const popupEl = document.querySelector('.my-popup');
const targetEl = document.querySelector('.my-target');

const style = getStyle({
  popupEl,
  targetEl,
});
```

## Options

|Property|Type|Description|Default Value|
|---|---|---|---|
|popupEl|HTMLElement|The popup element which should be positioned relative to the target.|N/A|
|popupHorizontal|String|The side of the popup that should be attached to the target side specified in `targetHorizontal`. Possible values are `'left'` and `'right'`.|'left'|
|popupVertical|String|The side of the popup that should be attached to the target side specified in `targetVertical`. Possible values are `'top'` and `'bottom'`.|'top'|
|targetEl|HTMLElement|The target element to which the popup should be positioned relatively.|N/A|
|targetHorizontal|String|The side of the target to which the side of the popup specified in `popupHorizontal` should be attached. Possible values are `'left'` and `'right'`.|'left'|
|targetVertical|String|The side of the target to which the side of the popup specified in `popupVertical` should be attached. Possible values are `'top'` and `'bottom'`.|'top'|
