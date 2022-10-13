import React, { useMemo } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import "./Spinner.css";
import { colors } from "../constants/colors";

// constant of props
const types = ["border", "growing"];
const sizes = ["sm", "md", "lg"];

export default function Spinner(props) {
  const { type, status, size } = props;

  const typeDef = useMemo(() => {
    let typed;
    if (type === "border") typed = "border";
    if (type === "growing") typed = "grow";

    return typed;
  }, [type]);

  // type class
  const typeClass = useMemo(() => `spinner-${typeDef}`, [typeDef]);

  // status class by bootstrap's colors
  const statusClass = useMemo(() => (status ? `text-${status}` : null), [
    status,
  ]);

  // size class
  const sizeClass = useMemo(() => {
    if (size === "sm") return `spinner-${typeDef}-sm`;
    if (size === "lg") return `spinner-${typeDef}-lg`;

    return null;
  }, [size, typeDef]);

  return (
    <div className={clsx(typeClass, statusClass, sizeClass)} role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  );
}

Spinner.propTypes = {
  type: PropTypes.oneOf(types),
  status: PropTypes.oneOf(colors),
  size: PropTypes.oneOf(sizes),
};

Spinner.defaultProps = {
  type: "border",
  size: "md",
};
