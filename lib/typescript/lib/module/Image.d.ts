export default Image;
declare function Image(props: any): React.CElement<import("react-native").TouchableOpacityProps, TouchableOpacity>;
declare namespace Image {
    namespace propTypes {
        const image: PropTypes.Validator<any>;
        const imageStyle: PropTypes.Requireable<any>;
        const index: PropTypes.Requireable<number>;
    }
    const defaultProps: {};
}
import { TouchableOpacity } from "react-native";
import React from "react";
import PropTypes from "prop-types";
