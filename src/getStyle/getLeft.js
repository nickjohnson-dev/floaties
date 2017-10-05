import getOr from 'lodash/fp/getOr';
import invoke from 'lodash/fp/invoke';

export function getLeft(args) {
  const windowWidth = getOr(0, 'window.innerWidth', global);
  const containerWidth = getOr(windowWidth, 'containerWidth', args);
  const popupRect = invoke('popupEl.getBoundingClientRect', args);
  const popupWidth = getOr(0, 'width', popupRect);
  const popupHorizontal = getOr('left', 'popupHorizontal', args);
  const targetRect = invoke('targetEl.getBoundingClientRect', args);
  const targetRight = getOr(0, 'right', targetRect);
  const targetLeft = getOr(0, 'left', targetRect);
  const targetHorizontal = getOr('left', 'targetHorizontal', args);

  if (popupHorizontal !== 'left') return '';

  if (targetHorizontal !== 'left' && targetHorizontal !== 'right') return '';

  // If there is ever a need to disable "always-visible positioning", return the base instead
  const baseLeft = targetHorizontal === 'right' ? targetRight : targetLeft;
  const bottomMostPoint = Math.max(baseLeft + popupWidth, containerWidth);
  const adjustedLeft = baseLeft - (bottomMostPoint - containerWidth);

  return Math.max(adjustedLeft, 0);
}
