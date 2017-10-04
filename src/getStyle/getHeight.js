import getOr from 'lodash/fp/getOr';
import invoke from 'lodash/fp/invoke';

export function getHeight(args) {
  const containerHeight = getOr(0, 'containerHeight', args);
  const popupRect = invoke('popupEl.getBoundingClientRect', args);
  const popupHeight = getOr(0, 'height', popupRect);
  const popupVertical = getOr('top', 'popupVertical', args);
  const targetRect = invoke('targetEl.getBoundingClientRect', args);
  const targetBottom = getOr(0, 'bottom', targetRect);
  const targetTop = getOr(0, 'top', targetRect);
  const targetVertical = getOr('top', 'targetVertical', args);

  if (popupVertical === 'bottom') {
    const baseBottom = containerHeight - (targetVertical === 'top' ? targetTop : targetBottom);
    const topMostPoint = Math.max(baseBottom + popupHeight, containerHeight); // 100
    const adjustedBottom = baseBottom - (topMostPoint - containerHeight);

    if (adjustedBottom < 0) return containerHeight;

    return '';
  }

  if (popupVertical === 'top') {
    const baseTop = targetVertical === 'bottom' ? targetBottom : targetTop;
    const bottomMostPoint = Math.max(baseTop + popupHeight, containerHeight); // 100
    const adjustedTop = baseTop - (bottomMostPoint - containerHeight);

    if (adjustedTop < 0) return containerHeight;

    return '';
  }

  return '';
}
