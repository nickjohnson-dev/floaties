import test from 'ava';
import { getHeight } from '../getHeight';

test('should return desiredHeight when popupVertical === "bottom", targetVertical === "bottom", containerHeight === 100, bottom property of return value of targetEl getBoundingClientRect method === 60, height property of return value of popupEl getBoundingClientRect method === 20', (t) => {
  const expected = 60;
  const result = getHeight({
    containerHeight: 100,
    desiredHeight: 60,
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

test('should return desiredHeight when popupVertical === "bottom", targetVertical === "bottom", containerHeight === 100, bottom property of return value of targetEl getBoundingClientRect method === 60, height property of return value of popupEl getBoundingClientRect method === 80', (t) => {
  const expected = 60;
  const result = getHeight({
    containerHeight: 100,
    desiredHeight: 60,
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

test('should return 100 when popupVertical === "bottom", targetVertical === "bottom", containerHeight === 100, bottom property of return value of targetEl getBoundingClientRect method === 60, height property of return value of popupEl getBoundingClientRect method === 160', (t) => {
  const expected = 100;
  const result = getHeight({
    containerHeight: 100,
    desiredHeight: 60,
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

test('should return desiredHeight when popupVertical === "bottom", targetVertical === "top", containerHeight === 100, top property of return value of targetEl getBoundingClientRect method === 40, height property of return value of popupEl getBoundingClientRect method === 20', (t) => {
  const expected = 60;
  const result = getHeight({
    containerHeight: 100,
    desiredHeight: 60,
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

test('should return desiredHeight when popupVertical === "bottom", targetVertical === "top", containerHeight === 100, top property of return value of targetEl getBoundingClientRect method === 40, height property of return value of popupEl getBoundingClientRect method === 50', (t) => {
  const expected = 60;
  const result = getHeight({
    containerHeight: 100,
    desiredHeight: 60,
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

test('should return 100 when popupVertical === "bottom", targetVertical === "top", containerHeight === 100, top property of return value of targetEl getBoundingClientRect method === 40, height property of return value of popupEl getBoundingClientRect method === 160', (t) => {
  const expected = 100;
  const result = getHeight({
    containerHeight: 100,
    desiredHeight: 60,
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

test('should return desiredHeight when popupVertical === "top", targetVertical === "top", containerHeight === 100, top property of return value of targetEl getBoundingClientRect method === 40, height property of return value of popupEl getBoundingClientRect method === 20', (t) => {
  const expected = 60;
  const result = getHeight({
    containerHeight: 100,
    desiredHeight: 60,
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

test('should return desiredHeight when popupVertical === "top", targetVertical === "top", containerHeight === 100, top property of return value of targetEl getBoundingClientRect method === 40, height property of return value of popupEl getBoundingClientRect method === 80', (t) => {
  const expected = 60;
  const result = getHeight({
    containerHeight: 100,
    desiredHeight: 60,
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

test('should return 100 when popupVertical === "top", targetVertical === "top", containerHeight === 100, top property of return value of targetEl getBoundingClientRect method === 40, height property of return value of popupEl getBoundingClientRect method === 160', (t) => {
  const expected = 100;
  const result = getHeight({
    containerHeight: 100,
    desiredHeight: 60,
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

test('should return desiredHeight when popupVertical === "top", targetVertical === "bottom", containerHeight === 100, bottom property of return value of targetEl getBoundingClientRect method === 60, height property of return value of popupEl getBoundingClientRect method === 20', (t) => {
  const expected = 60;
  const result = getHeight({
    containerHeight: 100,
    desiredHeight: 60,
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

test('should return desiredHeight when popupVertical === "top", targetVertical === "bottom", containerHeight === 100, bottom property of return value of targetEl getBoundingClientRect method === 60, height property of return value of popupEl getBoundingClientRect method === 50', (t) => {
  const expected = 60;
  const result = getHeight({
    containerHeight: 100,
    desiredHeight: 60,
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

test('should return 100 when popupVertical === "top", targetVertical === "bottom", containerHeight === 100, bottom property of return value of targetEl getBoundingClientRect method === 60, height property of return value of popupEl getBoundingClientRect method === 160', (t) => {
  const expected = 100;
  const result = getHeight({
    containerHeight: 100,
    desiredHeight: 60,
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

test('should return desiredHeight when popupVertical !== "bottom" or "top"', (t) => {
  const expected = 60;
  const result = getHeight({
    desiredHeight: 60,
    popupVertical: 'foo',
  });
  t.is(result, expected);
});

test('should return desiredHeight when targetVertical !== "bottom" or "top"', (t) => {
  const expected = 60;
  const result = getHeight({
    desiredHeight: 60,
    targetVertical: 'foo',
  });
  t.is(result, expected);
});

test('should return "" when desiredHeight would be returned and is undefined', (t) => {
  const expected = '';
  const result = getHeight({
    targetHorizontal: 'foo',
  });
  t.is(result, expected);
});
