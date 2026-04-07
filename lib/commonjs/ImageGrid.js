"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageGrid = ImageGrid;
exports.ImageGridContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = _interopRequireDefault(require("./Grid.js"));

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const {
  width: windowWidth
} = _reactNative.Dimensions.get('window');

// Create context with default values
const ImageGridContext = /*#__PURE__*/(0, _react.createContext)({
  dataImage: [],
  colorLoader: ['#fcf8e8', '#d4e2d4', '#ecb390', '#df7861', '#dff3e3', '#86aba1', '#f4eeed'],
  sourceKey: 'url',
  videoURLKey: 'url',
  width: windowWidth,
  spaceSize: 3,
  activeOpacity: 0.9,
  maximum: 6,
  backgroundMask: 'rgba(0,0,0,0.6)',
  backgroundMaskVideo: 'rgba(0,0,0,0.6)',
  videoKey: 'isVideo',
  conditionCheckVideo: true,
  heightKey: 'height',
  widthKey: 'width',
  onPressImage: () => {},
  emptyImageSource: require('./assets/emptyImage.png'),
  showDelete: false,
  onDeleteImage: () => {},
  ratioImagePortrait: 1.618,
  ratioImageLandscape: 1.2,
  prefixPath: '',
  backgroundColorKey: 'backgroundColor',
  ImageWrap: _reactNative.Image
});
exports.ImageGridContext = ImageGridContext;

function ImageGrid(props) {
  var _props$maximum;

  const {
    dataImage,
    widthKey,
    heightKey
  } = props;
  const maximum = (_props$maximum = props.maximum) !== null && _props$maximum !== void 0 ? _props$maximum : 6;
  const data = [...dataImage];
  const length = maximum > data.length ? data.length : maximum;
  const remain = data.length - length;
  data.length = length > 6 ? 6 : length;

  const layout = (0, _helpers.checkLayoutImage)(data, length, widthKey, heightKey) || _helpers.LAYOUT_ROW;

  const value = { ...ImageGrid.defaultProps,
    ...props,
    layout,
    length,
    remain,
    data
  };

  if (data.length) {
    return /*#__PURE__*/_react.default.createElement(ImageGridContext.Provider, {
      value: value
    }, /*#__PURE__*/_react.default.createElement(_Grid.default, null));
  }

  return null;
}

ImageGrid.propTypes = {
  dataImage: _propTypes.default.any.isRequired,
  sourceKey: _propTypes.default.string,
  width: _propTypes.default.number,
  colorLoader: _propTypes.default.any,
  spaceSize: _propTypes.default.number,
  containerStyle: _propTypes.default.any,
  activeOpacity: _propTypes.default.number,
  maximum: _propTypes.default.number,
  onPressImage: _propTypes.default.func,
  backgroundMask: _propTypes.default.string,
  backgroundMaskVideo: _propTypes.default.string,
  numberRemainStyle: _propTypes.default.any,
  videoIconStyle: _propTypes.default.any,
  videoKey: _propTypes.default.string,
  videoURLKey: _propTypes.default.string,
  conditionCheckVideo: _propTypes.default.any,
  heightKey: _propTypes.default.string,
  widthKey: _propTypes.default.string,
  componentDelete: _propTypes.default.element,
  onDeleteImage: _propTypes.default.func,
  showDelete: _propTypes.default.bool,
  ratioImagePortrait: _propTypes.default.number,
  ratioImageLandscape: _propTypes.default.number,
  prefixPath: _propTypes.default.string,
  backgroundColorKey: _propTypes.default.string,
  ImageWrap: _propTypes.default.elementType
};
ImageGrid.defaultProps = {
  dataImage: [],
  colorLoader: ['#fcf8e8', '#d4e2d4', '#ecb390', '#df7861', '#dff3e3', '#86aba1', '#f4eeed'],
  sourceKey: 'url',
  videoURLKey: 'url',
  width: windowWidth,
  spaceSize: 3,
  activeOpacity: 0.9,
  maximum: 6,
  backgroundMask: 'rgba(0,0,0,0.6)',
  backgroundMaskVideo: 'rgba(0,0,0,0.6)',
  videoKey: 'isVideo',
  conditionCheckVideo: true,
  heightKey: 'height',
  widthKey: 'width',
  onPressImage: () => {},
  emptyImageSource: require('./assets/emptyImage.png'),
  showDelete: false,
  onDeleteImage: () => {},
  ratioImagePortrait: 1.618,
  ratioImageLandscape: 1.2,
  prefixPath: '',
  backgroundColorKey: 'backgroundColor',
  ImageWrap: _reactNative.Image
};
//# sourceMappingURL=ImageGrid.js.map