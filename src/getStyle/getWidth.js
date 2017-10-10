import getOr from 'lodash/fp/getOr';
import invoke from 'lodash/fp/invoke';

export function getWidth(args) {
  const windowWidth = getOr(0, 'window.innerWidth', global);
  const containerWidth = getOr(windowWidth, 'containerWidth', args);
  const popupRect = invoke('popupEl.getBoundingClientRect', args);
  const popupWidth = getOr(0, 'width', popupRect);

  if (popupWidth > containerWidth) return containerWidth;

  return '';
}
