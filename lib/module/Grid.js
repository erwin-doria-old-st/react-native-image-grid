import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { ImageGridContext } from './ImageGrid.tsx';
import { Five, Four, One, Six, Three, Two } from './GroupImage';

const Grid = () => {
  const {
    containerStyle,
    length
  } = useContext(ImageGridContext);

  const renderGroup = () => {
    switch (length) {
      case 2:
        return /*#__PURE__*/React.createElement(Two, null);

      case 3:
        return /*#__PURE__*/React.createElement(Three, null);

      case 4:
        return /*#__PURE__*/React.createElement(Four, null);

      case 5:
        return /*#__PURE__*/React.createElement(Five, null);

      case 6:
        return /*#__PURE__*/React.createElement(Six, null);

      default:
        //default is 1
        return /*#__PURE__*/React.createElement(One, null);
    }
  };

  return /*#__PURE__*/React.createElement(View, {
    style: [style.container, containerStyle]
  }, renderGroup());
};

export default Grid;
const style = StyleSheet.create({
  container: {
    overflow: 'hidden'
  }
});
//# sourceMappingURL=Grid.js.map