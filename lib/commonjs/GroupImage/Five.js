"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _ImageGrid = require("../ImageGrid.tsx");

var _helpers = require("../helpers");

var _Image = _interopRequireDefault(require("../Image"));

var _Two = _interopRequireDefault(require("./Two"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable react-native/no-inline-styles */
const Five = () => {
  const {
    data,
    width,
    spaceSize,
    length
  } = (0, _react.useContext)(_ImageGrid.ImageGridContext);
  const commonSize = width / 3 - spaceSize * 2 / 3;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [style.container, {
      width
    }]
  }, /*#__PURE__*/_react.default.createElement(_Two.default, {
    dataProps: [...data].splice(0, 2),
    layoutProps: _helpers.LAYOUT_ROW_SQUARE
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [style.container, {
      flexDirection: 'row',
      marginTop: spaceSize
    }]
  }, [...data].splice(2, length).map((item, index) => {
    return /*#__PURE__*/_react.default.createElement(_Image.default, {
      key: index,
      image: item,
      index: index + 2,
      imageStyle: {
        width: commonSize,
        height: commonSize
      }
    });
  })));
};

var _default = Five;
exports.default = _default;

const style = _reactNative.StyleSheet.create({
  container: {
    justifyContent: 'space-between'
  }
});
//# sourceMappingURL=Five.js.map