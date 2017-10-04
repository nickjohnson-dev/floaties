import test from 'ava';
import { getWidth } from '../getWidth';

test('should return "" when popupHorizontal === "right", targetHorizontal === "right", containerWidth === 100, right property of return value of targetEl getBoundingClientRect method === 60, width property of return value of popupEl getBoundingClientRect method === 20', (t) => {
  const expected = '';
  const result = getWidth({
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

test('should return "" when popupHorizontal === "right", targetHorizontal === "right", containerWidth === 100, right property of return value of targetEl getBoundingClientRect method === 60, width property of return value of popupEl getBoundingClientRect method === 80', (t) => {
  const expected = '';
  const result = getWidth({
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

test('should return 100 when popupHorizontal === "right", targetHorizontal === "right", containerWidth === 100, right property of return value of targetEl getBoundingClientRect method === 60, width property of return value of popupEl getBoundingClientRect method === 160', (t) => {
  const expected = 100;
  const result = getWidth({
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

test('should return "" when popupHorizontal === "right", targetHorizontal === "left", containerWidth === 100, left property of return value of targetEl getBoundingClientRect method === 40, width property of return value of popupEl getBoundingClientRect method === 20', (t) => {
  const expected = '';
  const result = getWidth({
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

test('should return "" when popupHorizontal === "right", targetHorizontal === "left", containerWidth === 100, left property of return value of targetEl getBoundingClientRect method === 40, width property of return value of popupEl getBoundingClientRect method === 50', (t) => {
  const expected = '';
  const result = getWidth({
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

test('should return 100 when popupHorizontal === "right", targetHorizontal === "left", containerWidth === 100, left property of return value of targetEl getBoundingClientRect method === 40, width property of return value of popupEl getBoundingClientRect method === 160', (t) => {
  const expected = 100;
  const result = getWidth({
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

test('should return "" when popupHorizontal === "left", targetHorizontal === "left", containerWidth === 100, left property of return value of targetEl getBoundingClientRect method === 40, width property of return value of popupEl getBoundingClientRect method === 20', (t) => {
  const expected = '';
  const result = getWidth({
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

test('should return "" when popupHorizontal === "left", targetHorizontal === "left", containerWidth === 100, left property of return value of targetEl getBoundingClientRect method === 40, width property of return value of popupEl getBoundingClientRect method === 80', (t) => {
  const expected = '';
  const result = getWidth({
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

test('should return 100 when popupHorizontal === "left", targetHorizontal === "left", containerWidth === 100, left property of return value of targetEl getBoundingClientRect method === 40, width property of return value of popupEl getBoundingClientRect method === 160', (t) => {
  const expected = 100;
  const result = getWidth({
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

test('should return "" when popupHorizontal === "left", targetHorizontal === "right", containerWidth === 100, right property of return value of targetEl getBoundingClientRect method === 60, width property of return value of popupEl getBoundingClientRect method === 20', (t) => {
  const expected = '';
  const result = getWidth({
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

test('should return "" when popupHorizontal === "left", targetHorizontal === "right", containerWidth === 100, right property of return value of targetEl getBoundingClientRect method === 60, width property of return value of popupEl getBoundingClientRect method === 50', (t) => {
  const expected = '';
  const result = getWidth({
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

test('should return 100 when popupHorizontal === "left", targetHorizontal === "right", containerWidth === 100, right property of return value of targetEl getBoundingClientRect method === 60, width property of return value of popupEl getBoundingClientRect method === 160', (t) => {
  const expected = 100;
  const result = getWidth({
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

test('should return "" when popupHorizontal !== "right" or "left"', (t) => {
  const expected = '';
  const result = getWidth({
    popupHorizontal: 'foo',
  });
  t.is(result, expected);
});

test('should return "" when targetHorizontal !== "right" or "left"', (t) => {
  const expected = '';
  const result = getWidth({
    targetHorizontal: 'foo',
  });
  t.is(result, expected);
});
