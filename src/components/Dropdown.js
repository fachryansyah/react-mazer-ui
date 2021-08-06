import React from "react";
import PropTypes from "prop-types";
import "bootstrap/js/dist/dropdown";

export default function Dropdown(props) {
    const { label, children, direction } = props;
    return (
        <div className="btn-group">
            <div {...props} className="dropdown dropup">
                {children}
            </div>
        </div>
    );
}


Dropdown.propTypes = {
    label: PropTypes.string,
    children: PropTypes.element,
    direction: PropTypes.string
}

Dropdown.defaultProps = {
    label: null,
    children: null,
    direction: null
}