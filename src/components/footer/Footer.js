import React from "react";

import './Footer.css';
import logo from '../images/logo_white_large.png';

import {Link} from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <footer className="fixed-bottom bg-secondary text-white bg-dark">
                <div id="divFooter" className="container-fluid">
                    <nav className="row">
                        <Link to={'/'} className="col-12 col-md-4 d-flex align-items-center justify-content-center">
                            <img src={logo} alt="logo" height="60" className="mx-2"/>
                        </Link>
                        <ul className="col-12 col-md-4 list-unstyled text-white col-12">
                            <h2 id="footerTitles">Enlaces</h2>
                            <li>
                                <Link to={'/test'} className="text-reset">Calculadora</Link>
                            </li>
                            <li>
                                <Link to={'/sobremi'} className="text-reset">Sobre Mi</Link>
                            </li>
                            <li>
                                <Link to={'/contacto'} className="text-reset" >Contacto</Link>
                            </li>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled text-white">
                            <h2 id="footerTitles">Sígueme</h2>
                            <li className="d-flex justify-content-between">
                                <i className="bi bi-facebook"/>
                                <i className="bi bi-instagram"/>
                                <i className="bi bi-twitter"/>
                                <i className="bi bi-youtube"/>
                            </li>
                        </ul>
                    </nav>
                    <div className="container-fluid">
                        <p id="footerP">&copy; {(new Date().getFullYear())} An Bao Gassó Preixens, Inc. &middot; <Link to={'/aviso-legal'} className="text-reset">Aviso Legal </Link>&middot; <Link to={'/politica-de-privacidad'} className="text-reset">Política de Privacidad </Link> &middot;
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;