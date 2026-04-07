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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Two = ({
  layoutProps,
  dataProps
}) => {
  const {
    data: dataMain,
    width,
    layout: layoutMain,
    spaceSize
  } = (0, _react.useContext)(_ImageGrid.ImageGridContext);
  const data = dataProps || dataMain;
  const layoutChange = layoutProps || layoutMain;
  const layout = layoutProps || layoutChange.match('row') ? 'row' : 'column';
  const widthCommon = width / 2 - spaceSize / 2;

  const handleStyle = () => {
    let widthShape = widthCommon;
    let heightShape = width;

    switch (layoutChange) {
      case _helpers.LAYOUT_ROW_SQUARE:
        widthShape = widthCommon;
        heightShape = widthCommon;
        break;

      case _helpers.LAYOUT_COLUMN:
        widthShape = width;
        heightShape = widthCommon;
        break;

      default:
    }

    return {
      width: widthShape,
      height: heightShape
    };
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [style.container, {
      width,
      height: layoutChange === _helpers.LAYOUT_ROW_SQUARE ? widthCommon : width,
      flexDirection: layout
    }]
  }, data.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement(_Image.default, {
      key: index,
      image: item,
      index: index,
      imageStyle: handleStyle()
    });
  }));
};

var _default = Two;
exports.default = _default;

const style = _reactNative.StyleSheet.create({
  container: {
    justifyContent: 'space-between'
  }
});
//# sourceMappingURL=Two.js.map