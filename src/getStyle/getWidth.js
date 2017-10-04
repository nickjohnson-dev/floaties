import getOr from 'lodash/fp/getOr';
import invoke from 'lodash/fp/invoke';

export function getWidth(args) {
  const containerWidth = getOr(0, 'containerWidth', args);
  const popupRect = invoke('popupEl.getBoundingClientRect', args);
  const popupWidth = getOr(0, 'width', popupRect);
  const popupHorizontal = getOr('left', 'popupHorizontal', args);
  const targetRect = invoke('targetEl.getBoundingClientRect', args);
  const targetRight = getOr(0, 'right', targetRect);
  const targetLeft = getOr(0, 'left', targetRect);
  const targetHorizontal = getOr('left', 'targetHorizontal', args);

  if (popupHorizontal === 'right') {
    const baseRight = containerWidth - (targetHorizontal === 'left' ? targetLeft : targetRight);
    const leftMostPoint = Math.max(baseRight + popupWidth, containerWidth); // 100
    const adjustedRight = baseRight - (leftMostPoint - containerWidth);

    if (adjustedRight < 0) return containerWidth;

    return '';
  }

  if (popupHorizontal === 'left') {
    const baseLeft = targetHorizontal === 'right' ? targetRight : targetLeft;
    const rightMostPoint = Math.max(baseLeft + popupWidth, containerWidth); // 100
    const adjustedLeft = baseLeft - (rightMostPoint - containerWidth);

    if (adjustedLeft < 0) return containerWidth;

    return '';
  }

  return '';
}
