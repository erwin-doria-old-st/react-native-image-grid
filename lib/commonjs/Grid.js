"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _ImageGrid = require("./ImageGrid.tsx");

var _GroupImage = require("./GroupImage");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Grid = () => {
  const {
    containerStyle,
    length
  } = (0, _react.useContext)(_ImageGrid.ImageGridContext);

  const renderGroup = () => {
    switch (length) {
      case 2:
        return /*#__PURE__*/_react.default.createElement(_GroupImage.Two, null);

      case 3:
        return /*#__PURE__*/_react.default.createElement(_GroupImage.Three, null);

      case 4:
        return /*#__PURE__*/_react.default.createElement(_GroupImage.Four, null);

      case 5:
        return /*#__PURE__*/_react.default.createElement(_GroupImage.Five, null);

      case 6:
        return /*#__PURE__*/_react.default.createElement(_GroupImage.Six, null);

      default:
        //default is 1
        return /*#__PURE__*/_react.default.createElement(_GroupImage.One, null);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [style.container, containerStyle]
  }, renderGroup());
};

var _default = Grid;
exports.default = _default;

const style = _reactNative.StyleSheet.create({
  container: {
    overflow: 'hidden'
  }
});
//# sourceMappingURL=Grid.js.map