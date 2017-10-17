import getOr from 'lodash/fp/getOr';
import { getStyle } from './getStyle';

export function snap(args) {
  const desiredHeight = getOr('', 'desiredHeight', args);
  const desiredWidth = getOr('', 'desiredWidth', args);
  const popupEl = getOr({ style: {} }, 'popupEl', args);
  const getStyleFn = getOr(getStyle, '_getStyleOverride', args);

  popupEl.style.height = desiredHeight === '' ? '' : `${desiredHeight}px`;
  popupEl.style.position = 'absolute';
  popupEl.style.width = desiredWidth === '' ? '' : `${desiredWidth}px`;

  const style = getStyleFn(args);

  Object.keys(style).forEach((key) => {
    popupEl.style[key] = style[key] === '' ? '' : `${style[key]}px`;
  });
}
