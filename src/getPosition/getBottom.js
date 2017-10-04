import getOr from 'lodash/fp/getOr';

export function getBottom(args) {
  const popupVertical = getOr('top', 'popupVertical', args);

  if (popupVertical !== 'bottom') return '';

  return 'error';
}
