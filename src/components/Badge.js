import React from "react";
import PropTypes from "prop-types";

export default function Badge(props) {
    const { status, label, light , className} = props;

    const getClassStatus = (val) => {
        return val ? `bg-light-${status}` : `bg-${status}`;
    }

    return (
        <span className={`badge ${getClassStatus(light)} ${className}`}>
            {label}
        </span>
    );
}

Badge.propTypes = {
    status: PropTypes.string,
    label: PropTypes.string,
    light: PropTypes.bool,
    className: PropTypes.string
}

Badge.defaultProps = {
    status: "",
    label: null,
    light: false,
    className: ""
}