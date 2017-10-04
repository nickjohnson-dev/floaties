import getOr from 'lodash/fp/getOr';
import invoke from 'lodash/fp/invoke';

export function getRight(args) {
  const containerWidth = getOr(0, 'containerWidth', args);
  const popupRect = invoke('popupEl.getBoundingClientRect', args);
  const popupWidth = getOr(0, 'width', popupRect);
  const popupHorizontal = getOr('left', 'popupHorizontal', args);
  const targetRect = invoke('targetEl.getBoundingClientRect', args);
  const targetRight = getOr(0, 'right', targetRect);
  const targetLeft = getOr(0, 'left', targetRect);
  const targetHorizontal = getOr('left', 'targetHorizontal', args);

  if (popupHorizontal !== 'right') return '';

  if (targetHorizontal !== 'right' && targetHorizontal !== 'left') return '';

  // If there is ever a need to disable "always-visible positioning", return the base instead
  const baseRight = containerWidth - (targetHorizontal === 'left' ? targetLeft : targetRight);
  const leftMostPoint = Math.max(baseRight + popupWidth, containerWidth); // 100
  const adjustedRight = baseRight - (leftMostPoint - containerWidth);

  return Math.max(adjustedRight, 0);
}
