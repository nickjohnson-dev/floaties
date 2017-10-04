import getOr from 'lodash/fp/getOr';
import { getPosition } from './getPosition';

export function snap(args) {
  const popupEl = getOr({ style: {} }, 'popupEl', args);
  const { bottom, left, right, top } = getPosition(args);

  popupEl.style.position = 'absolute';
  popupEl.style.bottom = bottom;
  popupEl.style.left = left;
  popupEl.style.right = right;
  popupEl.style.top = top;
}
