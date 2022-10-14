import React, { useState } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/toast";

export default function Toasts(props) {
  const { header_icon, header, body, time, show, dark } = props;
  const [isOpen, setIsOpen] = useState(show);
  const styles = {
    darkBody: {
      backgroundColor: "#292B3F",
      color: "#A5ACCB"
    }
  }
  
  return (
    <div className={`toast overflow-hidden ${isOpen ? "show d-block" : "d-none"}`} role="alert" aria-live="assertive" aria-atomic="true">
      <div className={`toast-header rounded-top border-0 ${dark && "bg-dark text-white"}`}>
          {header_icon}
          <strong className="me-auto">{header}</strong>
          <small>{time} mins ago</small>
          <button type="button" className={`btn-close ${dark && "btn-close-white"}`} onClick={()=>setIsOpen(!isOpen)}></button>
      </div>
      <div className="toast-body rounded-bottom" style={dark && styles.darkBody}>
          {body}
      </div>
    </div>
  )
}

Toasts.propTypes = {
  header_icon: PropTypes.element,
  header: PropTypes.string,
  body: PropTypes.string,
  time: PropTypes.number,
  show: PropTypes.bool
}

Toasts.defaultProps = {
  header_icon: <svg className="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#007aff"></rect></svg>,
  header: "Bootstrap",
  body: "Hello, world! This is a toast message.",
  time: 11,
  show: false
};