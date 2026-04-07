export default Image;
declare function Image(props: any): JSX.Element;
declare namespace Image {
    namespace propTypes {
        const image: PropTypes.Validator<any>;
        const imageStyle: PropTypes.Requireable<any>;
        const index: PropTypes.Requireable<number>;
    }
    const defaultProps: {};
}
import PropTypes from "prop-types";
