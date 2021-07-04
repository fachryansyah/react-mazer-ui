import React from "react";
import PropTypes from "prop-types";

export default function Breadcrumb(props) {
    const { item, className } = props;

    // TODO : add custom class item

    const isActive = (val) => {
        return val ? "active" : "";
    }

    return (
        <nav className={`breadcrumb ${className}`}>
            {item.map((v, i) => (
                <li key={i} className={`breadcrumb-item ${isActive(v.active)}`}>
                    {v.active ? (
                        <>{v.label}</>
                    ) : (
                        <a href="#">{v.label}</a>
                    )}
                </li>
            ))}
        </nav>
    );
}

Breadcrumb.propTypes = {
    item: PropTypes.array,
    className: PropTypes.string
}

Breadcrumb.defaultProps = {
    item: [],
    className: ""
}