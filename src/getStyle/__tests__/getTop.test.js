import test from 'ava';
import { getTop } from '../getTop';

test('should return 40 when popupVertical === "top", targetVertical === "top", containerHeight === 100, top property of return value of targetEl getBoundingClientRect method === 40, height property of return value of popupEl getBoundingClientRect method === 20', (t) => {
  const expected = 40;
  const result = getTop({
    containerHeight: 100,
    popupVertical: 'top',
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

test('should return 20 when popupVertical === "top", targetVertical === "top", containerHeight === 100, top property of return value of targetEl getBoundingClientRect method === 40, height property of return value of popupEl getBoundingClientRect method === 80', (t) => {
  const expected = 20;
  const result = getTop({
    containerHeight: 100,
    popupVertical: 'top',
    targetVertical: 'top',
    popupEl: {
      getBoundingClientRect: () => ({
        height: 80,
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

test('should return 0 when popupVertical === "top", targetVertical === "top", containerHeight === 100, top property of return value of targetEl getBoundingClientRect method === 40, height property of return value of popupEl getBoundingClientRect method === 160', (t) => {
  const expected = 0;
  const result = getTop({
    containerHeight: 100,
    popupVertical: 'top',
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

test('should return 60 when popupVertical === "top", targetVertical === "bottom", containerHeight === 100, bottom property of return value of targetEl getBoundingClientRect method === 60, height property of return value of popupEl getBoundingClientRect method === 20', (t) => {
  const expected = 60;
  const result = getTop({
    containerHeight: 100,
    popupVertical: 'top',
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

test('should return 50 when popupVertical === "top", targetVertical === "bottom", containerHeight === 100, bottom property of return value of targetEl getBoundingClientRect method === 60, height property of return value of popupEl getBoundingClientRect method === 50', (t) => {
  const expected = 50;
  const result = getTop({
    containerHeight: 100,
    popupVertical: 'top',
    targetVertical: 'bottom',
    popupEl: {
      getBoundingClientRect: () => ({
        height: 50,
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

test('should return 0 when popupVertical === "top", targetVertical === "bottom", containerHeight === 100, bottom property of return value of targetEl getBoundingClientRect method === 60, height property of return value of popupEl getBoundingClientRect method === 160', (t) => {
  const expected = 0;
  const result = getTop({
    containerHeight: 100,
    popupVertical: 'top',
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

test('should return "" when popupVertical !== "top"', (t) => {
  const expected = '';
  const result = getTop({
    popupVertical: 'bottom',
  });
  t.is(result, expected);
});

test('should return "" when targetVertical !== "top" or "bottom"', (t) => {
  const expected = '';
  const result = getTop({
    targetVertical: 'foo',
  });
  t.is(result, expected);
});
