import getOr from 'lodash/fp/getOr';
import { getStyle } from './getStyle';

export function snap(args) {
  const popupEl = getOr({ style: {} }, 'popupEl', args);
  const getStyleFn = getOr(getStyle, '_getStyleOverride', args);

  popupEl.style.height = '';
  popupEl.style.position = 'absolute';
  popupEl.style.width = '';

  const style = getStyleFn(args);

  Object.keys(style).forEach((key) => {
    popupEl.style[key] = style[key] === '' ? '' : `${style[key]}px`;
  });
}
