import React from "react";
import PropTypes from "prop-types";

export default function DropdownItem(props) {
    const {children} = props;
    return (
        <a {...props} href="#" className="dropdown-item">
            {children}
        </a>
    );
}