import getOr from 'lodash/fp/getOr';
import includes from 'lodash/fp/includes';

export function getPosition(args) {
  const targetEl = getOr({ getBoundingClientRect: () => ({}) }, 'targetEl', args);
  const popupHorizontal = getOr('left', 'popupHorizontal', args);
  const popupVertical = getOr('top', 'popupVertical', args);
  const targetHorizontal = getOr('left', 'targetHorizontal', args);
  const targetVertical = getOr('top', 'targetVertical', args);
  const windowHeight = getOr(getOr(0, 'innerHeight', window), 'windowHeight', args);
  const windowWidth = getOr(getOr(0, 'innerWidth', window), 'windowWidth', args);
  const targetRect = targetEl.getBoundingClientRect();
  const targetX = targetRect[targetHorizontal];
  const targetY = targetRect[targetVertical];
  const withPx = x => `${x}px`;

  if (!includes(popupHorizontal, ['left', 'right'])) {
    throw new Error('Invalid value for popupHorizontal. Expected one of ["left", "right"].');
  }

  if (!includes(popupVertical, ['bottom', 'top'])) {
    throw new Error('Invalid value for popupVertical. Expected one of ["bottom", "top"].');
  }

  if (!includes(targetHorizontal, ['left', 'right'])) {
    throw new Error('Invalid value for targetHorizontal. Expected one of ["left", "right"].');
  }

  if (!includes(targetVertical, ['bottom', 'top'])) {
    throw new Error('Invalid value for targetVertical. Expected one of ["bottom", "top"].');
  }

  const horizontalValue = popupHorizontal === 'right'
    ? windowWidth - targetX
    : targetX;

  const verticalValue = popupVertical === 'bottom'
    ? windowHeight - targetY
    : targetY;

  return {
    bottom: '',
    left: '',
    right: '',
    top: '',
    [popupHorizontal]: withPx(horizontalValue),
    [popupVertical]: withPx(verticalValue),
  };
}
