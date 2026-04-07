"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _ImageGrid = require("../ImageGrid.tsx");

var _Image = _interopRequireDefault(require("../Image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const One = () => {
  const {
    data,
    width,
    heightKey,
    widthKey,
    ratioImagePortrait,
    ratioOneLandscape
  } = (0, _react.useContext)(_ImageGrid.ImageGridContext);

  const handleStyle = () => {
    let heightShape = width;
    let widthShape = width;
    const widthImage = Number(data[0][widthKey]);
    const heightImage = Number(data[0][heightKey]);

    if (!Number.isNaN(widthImage) && !Number.isNaN(heightImage)) {
      let ratio = widthImage / heightImage;

      if (heightImage > widthImage) {
        ratio = heightImage / widthImage;
        heightShape = ratio > ratioImagePortrait ? width * ratioImagePortrait : ratio * width;
      } else if (widthImage > heightImage) {
        ratio = widthImage / heightImage;
        heightShape = ratio > ratioOneLandscape ? width / ratioOneLandscape : width / ratio;
      }
    }

    return {
      width: widthShape,
      height: heightShape
    };
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [style.container, handleStyle()]
  }, /*#__PURE__*/_react.default.createElement(_Image.default, {
    key: 0,
    image: data[0],
    index: 0,
    imageStyle: handleStyle()
  }));
};

var _default = One;
exports.default = _default;

const style = _reactNative.StyleSheet.create({
  container: {
    justifyContent: 'space-between'
  }
});
//# sourceMappingURL=One.js.map