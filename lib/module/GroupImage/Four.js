import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { ImageGridContext } from '../ImageGrid.tsx';
import { LAYOUT_COLUMN, LAYOUT_ROW } from '../helpers';
import Image from '../Image';

const Four = () => {
  const {
    data,
    width,
    layout,
    spaceSize,
    length
  } = useContext(ImageGridContext);
  const subLayout = layout === LAYOUT_ROW ? LAYOUT_COLUMN : LAYOUT_ROW;
  const commonSize = width / 3 - spaceSize * 2 / 3;
  useEffect(() => {}, []);

  const handleStyleMain = () => {
    let widthShape = width - commonSize - spaceSize;
    let hightShape = width;

    if (layout === LAYOUT_COLUMN) {
      widthShape = width;
      hightShape = width - commonSize - spaceSize;
    }

    return {
      width: widthShape,
      height: hightShape
    };
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
      imageStyle: {
        width: commonSize,
        height: commonSize
      }
    });
  })));
};

export default Four;
const style = StyleSheet.create({
  container: {
    justifyContent: 'space-between'
  }
});
//# sourceMappingURL=Four.js.map