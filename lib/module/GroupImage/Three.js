import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { ImageGridContext } from '../ImageGrid.tsx';
import { LAYOUT_COLUMN, LAYOUT_ROW } from '../helpers';
import Image from '../Image';

const Three = () => {
  const {
    data,
    width,
    layout,
    spaceSize,
    length
  } = useContext(ImageGridContext);
  const subLayout = layout === LAYOUT_ROW ? LAYOUT_COLUMN : LAYOUT_ROW;
  const commonSize = width / 2 - spaceSize / 2;

  const handleStyleMain = () => {
    let widthShape = commonSize;
    let heightShape = width;

    if (layout === LAYOUT_COLUMN) {
      widthShape = width;
      heightShape = commonSize;
    }

    return {
      width: widthShape,
      height: heightShape
    };
  };

  const handleStyleSub = () => {
    const style = {
      width: commonSize,
      height: commonSize
    };
    return style;
  };

  return /*#__PURE__*/React.createElement(View, {
    style: [style.container, {
      width,
      height: width,
      flexDirection: layout
    }]
  }, /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Image, {
    index: 0,
    image: data[0],
    imageStyle: handleStyleMain()
  })), /*#__PURE__*/React.createElement(View, {
    style: [style.container, {
      flexDirection: subLayout
    }]
  }, [...data].splice(1, length).map((item, index) => {
    return /*#__PURE__*/React.createElement(Image, {
      key: index,
      image: item,
      index: index + 1,
      imageStyle: handleStyleSub()
    });
  })));
};

export default Three;
const style = StyleSheet.create({
  container: {
    justifyContent: 'space-between'
  }
});
//# sourceMappingURL=Three.js.map