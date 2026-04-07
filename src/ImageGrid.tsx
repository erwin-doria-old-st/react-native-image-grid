import React, { createContext } from 'react';
import { Dimensions, Image } from 'react-native';
import PropTypes from 'prop-types';

import Grid from './Grid.js';
import { checkLayoutImage, LAYOUT_ROW } from './helpers';

const { width: windowWidth } = Dimensions.get('window');

interface ImageGridContextType {
  dataImage: any[];
  colorLoader: string[];
  sourceKey: string;
  videoURLKey: string;
  width: number;
  spaceSize: number;
  activeOpacity: number;
  maximum: number;
  backgroundMask: string;
  backgroundMaskVideo: string;
  videoKey: string;
  conditionCheckVideo: boolean;
  heightKey: string;
  widthKey: string;
  onPressImage: () => void;
  emptyImageSource: any;
  showDelete: boolean;
  onDeleteImage: () => void;
  ratioImagePortrait: number;
  ratioImageLandscape: number;
  prefixPath: string;
  backgroundColorKey: string;
  ImageWrap: React.ComponentType<any>;
  layout?: string;
  length?: number;
  remain?: number;
  data?: any[];
}

// Create context with default values
export const ImageGridContext = createContext<ImageGridContextType>({
  dataImage: [],
  colorLoader: [
    '#fcf8e8',
    '#d4e2d4',
    '#ecb390',
    '#df7861',
    '#dff3e3',
    '#86aba1',
    '#f4eeed',
  ],
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
  ImageWrap: Image,
});

interface ImageGridProps {
  dataImage: any[];
  sourceKey?: string;
  width?: number;
  colorLoader?: string[];
  spaceSize?: number;
  containerStyle?: any;
  activeOpacity?: number;
  maximum?: number;
  onPressImage?: () => void;
  backgroundMask?: string;
  backgroundMaskVideo?: string;
  numberRemainStyle?: any;
  videoIconStyle?: any;
  videoKey?: string;
  videoURLKey?: string;
  conditionCheckVideo?: boolean;
  heightKey?: string;
  widthKey?: string;
  componentDelete?: React.ReactElement;
  onDeleteImage?: () => void;
  showDelete?: boolean;
  ratioImagePortrait?: number;
  ratioImageLandscape?: number;
  prefixPath?: string;
  backgroundColorKey?: string;
  ImageWrap?: React.ComponentType<any>;
}

export function ImageGrid(props: ImageGridProps) {
  const { dataImage, widthKey, heightKey } = props;
  const maximum = props.maximum ?? 6;

  const data = [...dataImage];
  const length = maximum > data.length ? data.length : maximum;
  const remain = data.length - length;
  data.length = length > 6 ? 6 : length;
  const layout =
    checkLayoutImage(data, length, widthKey, heightKey) || LAYOUT_ROW;

  const value: ImageGridContextType = {
    ...ImageGrid.defaultProps,
    ...props,
    layout,
    length,
    remain,
    data,
  };

  if (data.length) {
    return (
      <ImageGridContext.Provider value={value}>
        <Grid />
      </ImageGridContext.Provider>
    );
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
  ImageWrap: PropTypes.elementType,
};

ImageGrid.defaultProps = {
  dataImage: [],
  colorLoader: [
    '#fcf8e8',
    '#d4e2d4',
    '#ecb390',
    '#df7861',
    '#dff3e3',
    '#86aba1',
    '#f4eeed',
  ],
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
  ImageWrap: Image,
};
