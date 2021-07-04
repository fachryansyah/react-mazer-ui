import React from "react";
import PropTypes from "prop-types";
import "bootstrap/js/dist/dropdown";

export default function Dropdown(props) {
    const { label, children } = props;
    return (
        <div {...props} className="dropdown">
            {children}
        </div>
    );
}

