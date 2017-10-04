import getOr from 'lodash/fp/getOr';
import { getStyle } from './getStyle';

export function snap(args) {
  const popupEl = getOr({ style: {} }, 'popupEl', args);
  const style = getStyle(args);

  Object.keys(style).forEach((key) => {
    popupEl.style[key] = style[key] === '' ? '' : `${style[key]}px`;
  });
}
