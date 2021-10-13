import React from "react";
import PropTypes from "prop-types";
import logo from '../assets/images/logo/logo.png';
import '../assets/css/app.css';

const HorizontalLayout = ({
    children
}) => {

    return (
        <div id="main" className="layout-horizontal">
            <header className="mb-5">
                <div className="header-top">
                    <div className="container">
                        <div className="logo">
                            <a href="#">
                                <img src={logo} alt="Logo" srcSet="" />
                            </a>
                        </div>
                        <div className="header-top-right">

                            {/*Burger button responsive*/}
                            <a href="#" className="burger-btn d-block d-xl-none">
                                < i className="bi bi-justify fs-3" />
                            </a>
                        </div>
                    </div>
                </div>
                <nav className="main-navbar">
                    <div className="container">
                        <ul>
                            {/* TODO NavBar Component to integrate*/}
                        </ul>
                    </div>
                </nav>

            </header>

            <div className="content-wrapper container">
                {children}
            </div>

            <footer>
                <div className="container">
                    <div className="footer clearfix mb-0 text-muted">
                        <div className="float-start">
                            <p>2021 &copy; Mazer</p>
                        </div>
                        <div className="float-end">
                            <p>Crafted with <span className="text-danger"><i className="bi bi-heart" /></span> by <a
                                href="http://ahmadsaugi.com">A. Saugi</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default HorizontalLayout;

HorizontalLayout.prototype = {
  children : PropTypes.element
};

HorizontalLayout.defaultProps = {
    children : <></>
};