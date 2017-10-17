import getOr from 'lodash/fp/getOr';
import invoke from 'lodash/fp/invoke';

export function getHeight(args) {
  const desiredHeight = getOr('', 'desiredHeight', args);
  const windowHeight = getOr(0, 'window.innerHeight', global);
  const containerHeight = getOr(windowHeight, 'containerHeight', args);
  const popupRect = invoke('popupEl.getBoundingClientRect', args);
  const popupHeight = getOr(0, 'height', popupRect);

  if (popupHeight > containerHeight) return containerHeight;

  return desiredHeight;
}
