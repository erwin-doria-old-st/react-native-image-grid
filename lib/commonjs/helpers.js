"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkLayoutImage = exports.LAYOUT_COLUMN = exports.LAYOUT_ROW_SQUARE = exports.LAYOUT_ROW = void 0;
const LAYOUT_ROW = 'row';
exports.LAYOUT_ROW = LAYOUT_ROW;
const LAYOUT_ROW_SQUARE = 'row_square';
exports.LAYOUT_ROW_SQUARE = LAYOUT_ROW_SQUARE;
const LAYOUT_COLUMN = 'column';
exports.LAYOUT_COLUMN = LAYOUT_COLUMN;

const checkLayoutImage = (data, length, widthKey, heightKey) => {
  if (length >= 2) {
    const firstItem = data[0];

    if (typeof firstItem === 'string' || !(firstItem !== null && firstItem !== void 0 && firstItem[widthKey]) || !(firstItem !== null && firstItem !== void 0 && firstItem[heightKey])) {
      if (length === 5) {
        return LAYOUT_COLUMN;
      }

      return LAYOUT_ROW;
    }

    let isLandscapeFirst = checkLandscape(firstItem, widthKey, heightKey); // mean: is Reactangle Horizontal First Item

    switch (length) {
      case 2:
        const secondItem = data[1];
        let isLandscapeSecond = checkLandscape(secondItem, widthKey, heightKey); // mean: is Reactangle Horizontal Second Item

        if (isLandscapeFirst && isLandscapeSecond) {
          return LAYOUT_COLUMN;
        }

        if (isLandscapeFirst !== isLandscapeSecond) {
          return LAYOUT_ROW_SQUARE;
        }

        return LAYOUT_ROW;

      case 3:
      case 4:
        if (isLandscapeFirst) {
          return LAYOUT_COLUMN;
        }

        return LAYOUT_ROW;

      default:
        return LAYOUT_COLUMN;
    }
  }
};

exports.checkLayoutImage = checkLayoutImage;

const checkLandscape = (data, widthKey, heightKey) => {
  const width = Number(data[widthKey]);
  const height = Number(data[heightKey]);

  if (width > height) {
    return true;
  }

  return false;
};
//# sourceMappingURL=helpers.js.map