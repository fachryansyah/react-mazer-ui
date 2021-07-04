import React from "react";
import PropTypes from "prop-types";

export default function DropdownMenu(props) {
    const {children} = props;
    return (
        <div {...props} className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ margin: 0 }}>
            {children}
        </div>
    );
}