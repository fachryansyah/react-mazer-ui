import React from "react";
import PropTypes from "prop-types";

export default function Image(props) {
    const {source} = props;
    return (
        <img {...props} className="img-fluid w-100" src={source} />
    );
}

Image.propTypes = {
    source: PropTypes.string
}

Image.defaultProps = {
    source: null
}