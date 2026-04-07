function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext, useState } from 'react';
import { Text, Image as RNImage, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { ImageGridContext } from './ImageGrid.tsx';
import { TouchableOpacity } from 'react-native';
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
  } = useContext(ImageGridContext);
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
  const [isError, setError] = useState(false);

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

  return /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: [style.container, imageStyle],
    onPress: onPress,
    activeOpacity: activeOpacity
  }, /*#__PURE__*/React.createElement(View, {
    style: {
      backgroundColor
    }
  }, /*#__PURE__*/React.createElement(ImageWrap, _extends({}, imageProps, {
    source: isError ? emptyImageSource : {
      uri
    },
    style: imageStyle,
    onError: onError,
    resizeMode: 'cover'
  }))), isVideo && (remain === 0 || index !== length - 1) && /*#__PURE__*/React.createElement(View, {
    style: [style.overlay, {
      backgroundColor: backgroundMaskVideo
    }]
  }, /*#__PURE__*/React.createElement(RNImage, {
    style: [style.videoIcon, {
      width: size
    }, videoIconStyle],
    resizeMode: 'contain',
    source: require('./assets/video-icon.png')
  })), remain > 0 && index === length - 1 && /*#__PURE__*/React.createElement(View, {
    style: [style.overlay, {
      backgroundColor: backgroundMask
    }]
  }, /*#__PURE__*/React.createElement(Text, {
    style: [style.titleRemain, {
      fontSize: size
    }, numberRemainStyle]
  }, "+", remain)), showDelete && (componentDelete || /*#__PURE__*/React.createElement(View, {
    style: style.componentDelete
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: style.buttonDelete,
    activeOpacity: activeOpacity,
    onPress: onDelete
  }, /*#__PURE__*/React.createElement(ImageWrap, {
    source: require('./assets/delete.png'),
    style: style.deleteImage,
    tintColor: '#fff'
  })))));
};

export default Image;
const style = StyleSheet.create({
  container: {
    overflow: 'hidden'
  },
  overlay: { ...StyleSheet.absoluteFill,
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
  image: PropTypes.any.isRequired,
  imageStyle: PropTypes.any,
  index: PropTypes.number
};
Image.defaultProps = {};
//# sourceMappingURL=Image.js.map