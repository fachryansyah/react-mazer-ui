import React from "react";
import PropTypes from 'prop-types';

export default function Icon(props) {
    const { name } = props
    return (
        <i className={`${name} align-middle mx-2`} />
    )
}

Icon.propTypes = {
    name: PropTypes.string
}

Icon.defaultProps = {
    name: ""
}