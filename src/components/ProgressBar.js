import React from "react";
import PropTypes from "prop-types";

export default function ProgressBar(props) {
  const { status, value, min, max, label, striped, size } = props;

  const setIsLabel = (val) => {
    return val ? "progress-label" : "";
  }

  const setIsStripped = (val) => {
    return val ? "progress-bar-striped" : "";
  }
  
  return (
    <div className={`progress progress-${status} progress-${size}`}>
      <div
        className={`progress-bar ${setIsLabel(label)} ${setIsStripped(striped)}`}
        role="progressbar"
        style={{ width: `${value}%` }}
        aria-valuenow={`${value}`}
        aria-valuemin={`${min}`}
        aria-valuemax={`${max}`}
      ></div>
    </div>
  );
}

ProgressBar.propTypes = {
    status: PropTypes.string,
    size: PropTypes.string,
    label: PropTypes.string,
    striped: PropTypes.string,
    value: PropTypes.string,
    min: PropTypes.string,
    max: PropTypes.string,
}

ProgressBar.defaultProps = {
    status: "primary",
    size: "",
    value: "",
    min: "0",
    max: "0",
}