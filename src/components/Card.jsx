import React from "react";
import PropTypes from "prop-types";

export default function Card(props) {
    const { children, className } = props;
    return (
        <div {...props} className={`card ${className}`}>
            {children}
        </div>
    )
}

Card.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}

Card.defaultProps = {
    children: null,
    className: ""
}