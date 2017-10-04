import test from 'ava';
import { getRight } from '../getRight';

test('should return 40 when popupHorizontal === "right", targetHorizontal === "right", containerWidth === 100, right property of return value of targetEl getBoundingClientRect method === 60, width property of return value of popupEl getBoundingClientRect method === 20', (t) => {
  const expected = 40;
  const result = getRight({
    containerWidth: 100,
    popupHorizontal: 'right',
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

test('should return 20 when popupHorizontal === "right", targetHorizontal === "right", containerWidth === 100, right property of return value of targetEl getBoundingClientRect method === 60, width property of return value of popupEl getBoundingClientRect method === 80', (t) => {
  const expected = 20;
  const result = getRight({
    containerWidth: 100,
    popupHorizontal: 'right',
    targetHorizontal: 'right',
    popupEl: {
      getBoundingClientRect: () => ({
        width: 80,
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

test('should return 0 when popupHorizontal === "right", targetHorizontal === "right", containerWidth === 100, right property of return value of targetEl getBoundingClientRect method === 60, width property of return value of popupEl getBoundingClientRect method === 160', (t) => {
  const expected = 0;
  const result = getRight({
    containerWidth: 100,
    popupHorizontal: 'right',
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

test('should return 60 when popupHorizontal === "right", targetHorizontal === "left", containerWidth === 100, left property of return value of targetEl getBoundingClientRect method === 40, width property of return value of popupEl getBoundingClientRect method === 20', (t) => {
  const expected = 60;
  const result = getRight({
    containerWidth: 100,
    popupHorizontal: 'right',
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

test('should return 50 when popupHorizontal === "right", targetHorizontal === "left", containerWidth === 100, left property of return value of targetEl getBoundingClientRect method === 40, width property of return value of popupEl getBoundingClientRect method === 50', (t) => {
  const expected = 50;
  const result = getRight({
    containerWidth: 100,
    popupHorizontal: 'right',
    targetHorizontal: 'left',
    popupEl: {
      getBoundingClientRect: () => ({
        width: 50,
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

test('should return 0 when popupHorizontal === "right", targetHorizontal === "left", containerWidth === 100, left property of return value of targetEl getBoundingClientRect method === 40, width property of return value of popupEl getBoundingClientRect method === 160', (t) => {
  const expected = 0;
  const result = getRight({
    containerWidth: 100,
    popupHorizontal: 'right',
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

test('should return "" when popupHorizontal !== "right"', (t) => {
  const expected = '';
  const result = getRight({
    popupHorizontal: 'left',
  });
  t.is(result, expected);
});

test('should return "" when targetHorizontal !== "right" or "left"', (t) => {
  const expected = '';
  const result = getRight({
    targetHorizontal: 'foo',
  });
  t.is(result, expected);
});
