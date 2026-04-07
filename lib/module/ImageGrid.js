import React, { createContext } from 'react';
import { Dimensions, Image } from 'react-native';
import PropTypes from 'prop-types';
import Grid from './Grid.js';
import { checkLayoutImage, LAYOUT_ROW } from './helpers';
const {
  width: windowWidth
} = Dimensions.get('window');
// Create context with default values
export const ImageGridContext = /*#__PURE__*/createContext({
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
  ImageWrap: Image
});
export function ImageGrid(props) {
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
  const layout = checkLayoutImage(data, length, widthKey, heightKey) || LAYOUT_ROW;
  const value = { ...ImageGrid.defaultProps,
    ...props,
    layout,
    length,
    remain,
    data
  };

  if (data.length) {
    return /*#__PURE__*/React.createElement(ImageGridContext.Provider, {
      value: value
    }, /*#__PURE__*/React.createElement(Grid, null));
  }

  return null;
}
ImageGrid.propTypes = {
  dataImage: PropTypes.any.isRequired,
  sourceKey: PropTypes.string,
  width: PropTypes.number,
  colorLoader: PropTypes.any,
  spaceSize: PropTypes.number,
  containerStyle: PropTypes.any,
  activeOpacity: PropTypes.number,
  maximum: PropTypes.number,
  onPressImage: PropTypes.func,
  backgroundMask: PropTypes.string,
  backgroundMaskVideo: PropTypes.string,
  numberRemainStyle: PropTypes.any,
  videoIconStyle: PropTypes.any,
  videoKey: PropTypes.string,
  videoURLKey: PropTypes.string,
  conditionCheckVideo: PropTypes.any,
  heightKey: PropTypes.string,
  widthKey: PropTypes.string,
  componentDelete: PropTypes.element,
  onDeleteImage: PropTypes.func,
  showDelete: PropTypes.bool,
  ratioImagePortrait: PropTypes.number,
  ratioImageLandscape: PropTypes.number,
  prefixPath: PropTypes.string,
  backgroundColorKey: PropTypes.string,
  ImageWrap: PropTypes.elementType
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
  ImageWrap: Image
};
//# sourceMappingURL=ImageGrid.js.map