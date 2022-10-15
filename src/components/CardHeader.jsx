import React from "react";
import PropTypes from "prop-types";

export default function CardHeader(props) {
    const { title, className } = props;
    return (
        <h4 {...props} className={`card-title ${className}`}>
            {title}
        </h4>
    );
}

CardHeader.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string
}

CardHeader.defaultProps = {
    title: null,
    className: ""
}