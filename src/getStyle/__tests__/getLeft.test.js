import test from 'ava';
import { getLeft } from '../getLeft';

test('should return 40 when popupHorizontal === "left", targetHorizontal === "left", containerWidth === 100, left property of return value of targetEl getBoundingClientRect method === 40, width property of return value of popupEl getBoundingClientRect method === 20', (t) => {
  const expected = 40;
  const result = getLeft({
    containerWidth: 100,
    popupHorizontal: 'left',
    targetHorizontal: 'left',
    popupEl: {
      getBoundingClientRect: () => ({
        width: 20,
      }),
    },
    targetEl: {
      getBoundingClientRect: () => ({
        left: 40,
      }),
    },
  });
  t.is(result, expected);
});

test('should return 20 when popupHorizontal === "left", targetHorizontal === "left", containerWidth === 100, left property of return value of targetEl getBoundingClientRect method === 40, width property of return value of popupEl getBoundingClientRect method === 80', (t) => {
  const expected = 20;
  const result = getLeft({
    containerWidth: 100,
    popupHorizontal: 'left',
    targetHorizontal: 'left',
    popupEl: {
      getBoundingClientRect: () => ({
        width: 80,
      }),
    },
    targetEl: {
      getBoundingClientRect: () => ({
        left: 40,
      }),
    },
  });
  t.is(result, expected);
});

test('should return 0 when popupHorizontal === "left", targetHorizontal === "left", containerWidth === 100, left property of return value of targetEl getBoundingClientRect method === 40, width property of return value of popupEl getBoundingClientRect method === 160', (t) => {
  const expected = 0;
  const result = getLeft({
    containerWidth: 100,
    popupHorizontal: 'left',
    targetHorizontal: 'left',
    popupEl: {
      getBoundingClientRect: () => ({
        width: 160,
      }),
    },
    targetEl: {
      getBoundingClientRect: () => ({
        left: 40,
      }),
    },
  });
  t.is(result, expected);
});

test('should return 60 when popupHorizontal === "left", targetHorizontal === "right", containerWidth === 100, right property of return value of targetEl getBoundingClientRect method === 60, width property of return value of popupEl getBoundingClientRect method === 20', (t) => {
  const expected = 60;
  const result = getLeft({
    containerWidth: 100,
    popupHorizontal: 'left',
    targetHorizontal: 'right',
    popupEl: {
      getBoundingClientRect: () => ({
        width: 20,
      }),
    },
    targetEl: {
      getBoundingClientRect: () => ({
        right: 60,
      }),
    },
  });
  t.is(result, expected);
});

test('should return 50 when popupHorizontal === "left", targetHorizontal === "right", containerWidth === 100, right property of return value of targetEl getBoundingClientRect method === 60, width property of return value of popupEl getBoundingClientRect method === 50', (t) => {
  const expected = 50;
  const result = getLeft({
    containerWidth: 100,
    popupHorizontal: 'left',
    targetHorizontal: 'right',
    popupEl: {
      getBoundingClientRect: () => ({
        width: 50,
      }),
    },
    targetEl: {
      getBoundingClientRect: () => ({
        right: 60,
      }),
    },
  });
  t.is(result, expected);
});

test('should return 0 when popupHorizontal === "left", targetHorizontal === "right", containerWidth === 100, right property of return value of targetEl getBoundingClientRect method === 60, width property of return value of popupEl getBoundingClientRect method === 160', (t) => {
  const expected = 0;
  const result = getLeft({
    containerWidth: 100,
    popupHorizontal: 'left',
    targetHorizontal: 'right',
    popupEl: {
      getBoundingClientRect: () => ({
        width: 160,
      }),
    },
    targetEl: {
      getBoundingClientRect: () => ({
        right: 60,
      }),
    },
  });
  t.is(result, expected);
});

test('should return "" when popupHorizontal !== "left"', (t) => {
  const expected = '';
  const result = getLeft({
    popupHorizontal: 'right',
  });
  t.is(result, expected);
});

test('should return "" when targetHorizontal !== "left" or "right"', (t) => {
  const expected = '';
  const result = getLeft({
    targetHorizontal: 'foo',
  });
  t.is(result, expected);
});
