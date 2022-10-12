import React from "react";
import PropTypes from "prop-types";
import "bootstrap/js/dist/alert";

export default function Alert(props) {
    const { status, heading, content, light, isOpen, toggle } = props;

    const getClassStatus = (val) => {
        return val ? `alert-light-${status}` : `alert-${status}`;
    }

    return (
        <>
            {typeof toggle == "function" ? (
                <>
                    {isOpen ? (
                        <div className={`alert ${getClassStatus(light)} alert-dismissible fade show`} role="alert">
                            {heading ? (
                                <h4 className="alert-heading">{heading}</h4>
                            ) : null}

                            {content ? (
                                <p>{content}</p>
                            ) : null}

                            <button type="button" className="btn-close" aria-label="Close" onClick={toggle} />
                        </div>
                    ) : null}
                </>
            ) : (
                <div className={`alert ${getClassStatus(light)}`} role="alert">
                    {heading ? (
                        <h4 className="alert-heading">{heading}</h4>
                    ) : null}

                    {content ? (
                        <p>{content}</p>
                    ) : null}
                </div>
            )}
        </>
    )
}

Alert.propTypes = {
    status: PropTypes.string,
    heading: PropTypes.string,
    content: PropTypes.string,
    light: PropTypes.bool,
    isOpen: PropTypes.bool,
    toggle: PropTypes.func
}

Alert.defaultProps = {
    status: "primary",
    heading: "",
    content: "",
    light: false,
    isOpen: true,
    toggle: false
}