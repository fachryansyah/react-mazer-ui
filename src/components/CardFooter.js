import React from "react";
import PropTypes from "prop-types";

export default function CardFooter(props) {
    const { children, className } = props;
    return (
        <div {...props} className={`card-footer ${className}`}>
            {children}
        </div>
    );
}

CardFooter.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}

CardFooter.defaultProps = {
    children: null,
    className: ""
}