import React from "react";
import PropTypes from "prop-types";

export default function DropdownToggle(props) {
    const {children, status, id} = props;
    return (
        <button {...props} className={`btn btn-${status} dropdown-toggle me-1`} type="button" id={id} data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {children}
        </button>
    );
}