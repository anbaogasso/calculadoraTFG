import React from "react";
import './Menu.css'
import {Link} from "react-router-dom";
import logo from "../images/logo_large.png"

class Menu extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand">
                        <img id="logo" src={logo} alt="logo" width="150" height="60" className="d-inline-block align-text-top"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-md-6">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link">Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/sobremi'} className="nav-link">Sobre Mí </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to={'/contacto'} className="nav-link">Contacto </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Menu;