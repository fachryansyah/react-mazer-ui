import React from "react";
import PropTypes from "prop-types";

export default function CardBody(props) {
    const { children, className } = props;
    return (
        <div {...props} className={`card-body ${className}`}>
            {children}
        </div>
    );
}

CardBody.propTypes = {
    children: PropTypes.element,
    className: PropTypes.string
}

CardBody.defaultProps = {
    children: null,
    className: ""
}