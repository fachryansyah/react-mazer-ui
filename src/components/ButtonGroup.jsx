import React from "react";
import PropTypes from "prop-types";

export default function ButtonGroup(props) {
    const {children} = props;
    return (
        <div className="btn-group">
            {children}
        </div>
    )
}

ButtonGroup.propTypes = {
    children: PropTypes.node
}

ButtonGroup.defaultProps = {
    children: ""
}