import test from 'ava';
import { getBottom } from '../getBottom';

test('should return "" when popupVertical !== "bottom"', (t) => {
  const expected = '';
  const result = getBottom({
    popupVertical: 'top',
  });

  t.is(result, expected);
});

// test('should return when popupVertical === "bottom"');
