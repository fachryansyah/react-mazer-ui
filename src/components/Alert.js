import React from "react";
import PropTypes from "prop-types";
import "bootstrap/js/dist/alert";

export default function Alert(props) {
    const {status, heading, content, light, dismissable} = props;

    const getClassStatus = (val) => {
        return val ? `alert-light-${status}` : `alert-${status}`;
    }

    const getClassDismissable = (val) => {
        return val ? "alert-dismissible fade show" : "";
    }

    return (
        <div className={`alert ${getClassStatus(light)} ${getClassDismissable(dismissable)}`} role="alert">
            {heading ? (
                <h4 className="alert-heading">{heading}</h4>
            ): null}

            {content ? (
                <p>{content}</p>
            ): null}

            {dismissable ? (
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
            ): null}
        </div>
    )
}

Alert.propTypes = {
    status: PropTypes.string,
    heading: PropTypes.string,
    content: PropTypes.string,
    light: PropTypes.bool,
    dismissable: PropTypes.bool
}

Alert.defaultProps = {
    status: "primary",
    heading: "",
    content: "",
    light: false,
    dismissable: false
}