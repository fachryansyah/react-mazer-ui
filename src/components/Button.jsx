import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
    const { label, status, isRounded, disabled, size, icon, className, onClick } = props;

    const getClassStatus = (val) => {
        const listStatus = {
            "primary": "btn-primary",
            "primary-outline": "btn-outline-primary",
            "secondary": "btn-secondary",
            "secondary-outline": "btn-outline-secondary",
            "info": "btn-info",
            "info-outline": "btn-outline-info",
            "warning": "btn-warning",
            "warning-outline": "btn-outline-warning",
            "danger": "btn-danger",
            "danger-outline": "btn-outline-danger",
            "success": "btn-success",
            "success-outline": "btn-outline-success",
            "light": "btn-light",
            "light-outline": "btn-outline-light",
            "dark": "btn-dark",
            "dark-outline": "btn-outline-dark"
        }

        return listStatus[val];
    }

    const setIsRounded = (val) => {
        return val ? "rounded-pill" : "";
    }

    const setDisabled = (val) => {
        return val ? "disabled" : ""
    }

    const setIcon = (val) => {
        return val ? "icon" : ""
    }

    const getClassSize = (val) => {
        const listSize = {
            large: "btn-lg",
            small: "btn-sm"
        }
        
        return listSize[val];
    }

    return (
        <button 
            onClick={onClick}
            className={`btn ${getClassStatus(status)} ${getClassSize(size)} ${setIsRounded(isRounded)} ${setIcon(icon)} ${setDisabled(disabled)} ${className}`}
        >
            {icon}{label}
        </button>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    status: PropTypes.string,
    isRounded: PropTypes.bool,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.element
};

Button.defaultProps = {
    className: "",
    onClick: undefined,
    status: "primary",
    isRounded: false,
    size: "",
    disabled: false,
    icon: ""
};