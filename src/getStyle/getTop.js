import getOr from 'lodash/fp/getOr';
import invoke from 'lodash/fp/invoke';

export function getTop(args) {
  const windowHeight = getOr(0, 'window.innerHeight', global);
  const containerHeight = getOr(windowHeight, 'containerHeight', args);
  const popupRect = invoke('popupEl.getBoundingClientRect', args);
  const popupHeight = getOr(0, 'height', popupRect);
  const popupVertical = getOr('top', 'popupVertical', args);
  const targetRect = invoke('targetEl.getBoundingClientRect', args);
  const targetBottom = getOr(0, 'bottom', targetRect);
  const targetTop = getOr(0, 'top', targetRect);
  const targetVertical = getOr('top', 'targetVertical', args);

  if (popupVertical !== 'top') return '';

  if (targetVertical !== 'top' && targetVertical !== 'bottom') return '';

  // If there is ever a need to disable "always-visible positioning", return the base instead
  const baseTop = targetVertical === 'bottom' ? targetBottom : targetTop;
  const bottomMostPoint = Math.max(baseTop + popupHeight, containerHeight); // 100
  const adjustedTop = baseTop - (bottomMostPoint - containerHeight);

  return Math.max(adjustedTop, 0);
}
