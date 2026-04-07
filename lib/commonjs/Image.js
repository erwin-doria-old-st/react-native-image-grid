"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ImageGrid = require("./ImageGrid.tsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const COLOR_GREY = '#323232';

const Image = props => {
  const {
    image,
    imageStyle,
    index
  } = props;
  const {
    sourceKey,
    activeOpacity,
    onPressImage,
    imageProps,
    remain,
    length,
    backgroundMask,
    numberRemainStyle,
    backgroundMaskVideo,
    videoIconStyle,
    videoKey,
    conditionCheckVideo,
    width,
    colorLoader,
    videoURLKey,
    emptyImageSource,
    componentDelete,
    showDelete,
    onDeleteImage,
    prefixPath,
    data,
    backgroundColorKey,
    ImageWrap
  } = (0, _react.useContext)(_ImageGrid.ImageGridContext);
  const isVideo = (image === null || image === void 0 ? void 0 : image[videoKey]) === conditionCheckVideo;
  const uri = prefixPath + (typeof image === 'string' ? image : isVideo ? image[videoURLKey] : image[sourceKey]);
  const size = index === 0 ? Math.round(width / 7) : index === 1 && length === 2 ? Math.round(width / 9) : Math.round(width / (index + length * 2));

  const handleBackgroundColor = () => {
    var _data$index;

    const color = data === null || data === void 0 ? void 0 : (_data$index = data[index]) === null || _data$index === void 0 ? void 0 : _data$index[backgroundColorKey];

    if (color && typeof color === 'string') {
      return color;
    }

    if (typeof colorLoader === 'string') {
      return colorLoader;
    }

    if (typeof colorLoader === 'object') {
      if (colorLoader.length > 1) {
        const random = Math.floor(Math.random() * colorLoader.length);
        return colorLoader[random];
      }

      return colorLoader[0];
    }

    return COLOR_GREY;
  };

  const backgroundColor = handleBackgroundColor();
  const [isError, setError] = (0, _react.useState)(false);

  const onPress = () => {
    onPressImage(image, index);
  };

  const onError = () => {
    setError(true);
    imageProps === null || imageProps === void 0 ? void 0 : imageProps.onError();
  };

  const onDelete = () => {
    if (isError) {
      setError(false);
    }

    onDeleteImage(image, index);
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: [style.container, imageStyle],
    onPress: onPress,
    activeOpacity: activeOpacity
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      backgroundColor
    }
  }, /*#__PURE__*/_react.default.createElement(ImageWrap, _extends({}, imageProps, {
    source: isError ? emptyImageSource : {
      uri
    },
    style: imageStyle,
    onError: onError,
    resizeMode: 'cover'
  }))), isVideo && (remain === 0 || index !== length - 1) && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [style.overlay, {
      backgroundColor: backgroundMaskVideo
    }]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: [style.videoIcon, {
      width: size
    }, videoIconStyle],
    resizeMode: 'contain',
    source: require('./assets/video-icon.png')
  })), remain > 0 && index === length - 1 && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [style.overlay, {
      backgroundColor: backgroundMask
    }]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [style.titleRemain, {
      fontSize: size
    }, numberRemainStyle]
  }, "+", remain)), showDelete && (componentDelete || /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: style.componentDelete
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: style.buttonDelete,
    activeOpacity: activeOpacity,
    onPress: onDelete
  }, /*#__PURE__*/_react.default.createElement(ImageWrap, {
    source: require('./assets/delete.png'),
    style: style.deleteImage,
    tintColor: '#fff'
  })))));
};

var _default = Image;
exports.default = _default;

const style = _reactNative.StyleSheet.create({
  container: {
    overflow: 'hidden'
  },
  overlay: { ..._reactNative.StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleRemain: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Avenir'
  },
  videoIcon: {
    tintColor: '#fff'
  },
  componentDelete: {
    position: 'absolute',
    top: 8,
    right: 8
  },
  buttonDelete: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 8,
    borderRadius: 4,
    paddingVertical: 6
  },
  deleteImage: {
    width: 16,
    height: 16,
    tintColor: '#fff'
  }
});

Image.propTypes = {
  image: _propTypes.default.any.isRequired,
  imageStyle: _propTypes.default.any,
  index: _propTypes.default.number
};
Image.defaultProps = {};
//# sourceMappingURL=Image.js.map