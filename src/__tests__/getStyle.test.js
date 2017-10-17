import test from 'ava';
import { getStyle } from '../getStyle';

test('should return object with return values of individual get<style-name> functions', (t) => {
  const expected = {
    bottom: '',
    height: '',
    left: 0,
    right: '',
    top: 0,
    width: '',
  };
  const result = getStyle({});
  t.deepEqual(result, expected);
});

test('should throw when popupHorizontal is not "left" or "right"', (t) => {
  t.throws(() => {
    getStyle({
      popupHorizontal: 'foo',
      popupVertical: 'top',
      targetHorizontal: 'left',
      targetVertical: 'top',
    });
  });
});

test('should throw when popupVertical is not "top" or "bottom"', (t) => {
  t.throws(() => {
    getStyle({
      popupHorizontal: 'left',
      popupVertical: 'foo',
      targetHorizontal: 'left',
      targetVertical: 'top',
    });
  });
});

test('should throw when targetHorizontal is not "left" or "right"', (t) => {
  t.throws(() => {
    getStyle({
      popupHorizontal: 'left',
      popupVertical: 'top',
      targetHorizontal: 'foo',
      targetVertical: 'top',
    });
  });
});

test('should throw when targetVertical is not "top" or "bottom"', (t) => {
  t.throws(() => {
    getStyle({
      popupHorizontal: 'left',
      popupVertical: 'top',
      targetHorizontal: 'left',
      targetVertical: 'foo',
    });
  });
});
