import test from 'ava';
import { snap } from '../snap';

test('should set popupEl.style.position: "absolute"', (t) => {
  const expected = 'absolute';
  const style = {};
  snap({
    _getStyleOverride: () => ({}),
    popupEl: { style },
  });
  const result = style.position;
  t.is(result, expected);
});

test('should set popupEl.style.height: desiredHeight with px suffix when desiredHeight is defined', (t) => {
  const expected = '60px';
  const style = {};
  snap({
    _getStyleOverride: () => ({}),
    desiredHeight: 60,
    popupEl: { style },
  });
  const result = style.height;
  t.is(result, expected);
});

test('should set popupEl.style.height: "" when desiredHeight is not defined', (t) => {
  const expected = '';
  const style = {};
  snap({
    _getStyleOverride: () => ({}),
    popupEl: { style },
  });
  const result = style.height;
  t.is(result, expected);
});

test('should set popupEl.style.width: desiredWidth with px suffix when desiredWidth is defined', (t) => {
  const expected = '60px';
  const style = {};
  snap({
    _getStyleOverride: () => ({}),
    desiredWidth: 60,
    popupEl: { style },
  });
  const result = style.width;
  t.is(result, expected);
});

test('should set popupEl.style.width: "" when desiredWidth is not defined', (t) => {
  const expected = '';
  const style = {};
  snap({
    _getStyleOverride: () => ({}),
    popupEl: { style },
  });
  const result = style.width;
  t.is(result, expected);
});

test('should set popupEl.style.<other property>: empty string when corresponding value in object returned by getStyle is empty string', (t) => {
  const expected = '';
  const style = {};
  snap({
    _getStyleOverride: () => ({
      foo: '',
    }),
    popupEl: { style },
  });
  const result = style.foo;
  t.is(result, expected);
});

test('should set popupEl.style.<other property>: corresponding value + "px" suffix when corresponding value in object returned by getStyle is not empty string', (t) => {
  const expected = '15px';
  const style = {};
  snap({
    _getStyleOverride: () => ({
      foo: 15,
    }),
    popupEl: { style },
  });
  const result = style.foo;
  t.is(result, expected);
});
