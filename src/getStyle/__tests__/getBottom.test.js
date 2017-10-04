import test from 'ava';
import { getBottom } from '../getBottom';

test('should return 40 when popupVertical === "bottom", targetVertical === "bottom", containerHeight === 100, bottom property of return value of targetEl getBoundingClientRect method === 60, height property of return value of popupEl getBoundingClientRect method === 20', (t) => {
  const expected = 40;
  const result = getBottom({
    containerHeight: 100,
    popupVertical: 'bottom',
    targetVertical: 'bottom',
    popupEl: {
      getBoundingClientRect: () => ({
        height: 20,
      }),
    },
    targetEl: {
      getBoundingClientRect: () => ({
        bottom: 60,
      }),
    },
  });
  t.is(result, expected);
});

test('should return 20 when popupVertical === "bottom", targetVertical === "bottom", containerHeight === 100, bottom property of return value of targetEl getBoundingClientRect method === 60, height property of return value of popupEl getBoundingClientRect method === 80', (t) => {
  const expected = 20;
  const result = getBottom({
    containerHeight: 100,
    popupVertical: 'bottom',
    targetVertical: 'bottom',
    popupEl: {
      getBoundingClientRect: () => ({
        height: 80,
      }),
    },
    targetEl: {
      getBoundingClientRect: () => ({
        bottom: 60,
      }),
    },
  });
  t.is(result, expected);
});

test('should return 0 when popupVertical === "bottom", targetVertical === "bottom", containerHeight === 100, bottom property of return value of targetEl getBoundingClientRect method === 60, height property of return value of popupEl getBoundingClientRect method === 160', (t) => {
  const expected = 0;
  const result = getBottom({
    containerHeight: 100,
    popupVertical: 'bottom',
    targetVertical: 'bottom',
    popupEl: {
      getBoundingClientRect: () => ({
        height: 160,
      }),
    },
    targetEl: {
      getBoundingClientRect: () => ({
        bottom: 60,
      }),
    },
  });
  t.is(result, expected);
});

test('should return 60 when popupVertical === "bottom", targetVertical === "top", containerHeight === 100, top property of return value of targetEl getBoundingClientRect method === 40, height property of return value of popupEl getBoundingClientRect method === 20', (t) => {
  const expected = 60;
  const result = getBottom({
    containerHeight: 100,
    popupVertical: 'bottom',
    targetVertical: 'top',
    popupEl: {
      getBoundingClientRect: () => ({
        height: 20,
      }),
    },
    targetEl: {
      getBoundingClientRect: () => ({
        top: 40,
      }),
    },
  });
  t.is(result, expected);
});

test('should return 50 when popupVertical === "bottom", targetVertical === "top", containerHeight === 100, top property of return value of targetEl getBoundingClientRect method === 40, height property of return value of popupEl getBoundingClientRect method === 50', (t) => {
  const expected = 50;
  const result = getBottom({
    containerHeight: 100,
    popupVertical: 'bottom',
    targetVertical: 'top',
    popupEl: {
      getBoundingClientRect: () => ({
        height: 50,
      }),
    },
    targetEl: {
      getBoundingClientRect: () => ({
        top: 40,
      }),
    },
  });
  t.is(result, expected);
});

test('should return 0 when popupVertical === "bottom", targetVertical === "top", containerHeight === 100, top property of return value of targetEl getBoundingClientRect method === 40, height property of return value of popupEl getBoundingClientRect method === 160', (t) => {
  const expected = 0;
  const result = getBottom({
    containerHeight: 100,
    popupVertical: 'bottom',
    targetVertical: 'top',
    popupEl: {
      getBoundingClientRect: () => ({
        height: 160,
      }),
    },
    targetEl: {
      getBoundingClientRect: () => ({
        top: 40,
      }),
    },
  });
  t.is(result, expected);
});

test('should return "" when popupVertical !== "bottom"', (t) => {
  const expected = '';
  const result = getBottom({
    popupVertical: 'top',
  });
  t.is(result, expected);
});

test('should return "" when targetVertical !== "bottom" or "top"', (t) => {
  const expected = '';
  const result = getBottom({
    targetVertical: 'foo',
  });
  t.is(result, expected);
});
