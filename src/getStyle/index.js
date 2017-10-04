import getOr from 'lodash/fp/getOr';
import includes from 'lodash/fp/includes';
import { getBottom } from './getBottom';
import { getHeight } from './getHeight';
import { getLeft } from './getLeft';
import { getRight } from './getRight';
import { getTop } from './getTop';
import { getWidth } from './getWidth';

export function getStyle(args) {
  const popupHorizontal = getOr('left', 'popupHorizontal', args);
  const popupVertical = getOr('top', 'popupVertical', args);
  const targetHorizontal = getOr('left', 'targetHorizontal', args);
  const targetVertical = getOr('top', 'targetVertical', args);

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

  return {
    bottom: getBottom(args),
    height: getHeight(args),
    left: getLeft(args),
    right: getRight(args),
    top: getTop(args),
    width: getWidth(args),
  };
}
