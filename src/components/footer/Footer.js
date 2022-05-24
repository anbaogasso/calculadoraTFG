import React from "react";

import './Footer.css';
import logo from '../images/logo_white_large.png';

import {Link} from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <footer className="fixed-bottom bg-secondary text-white bg-dark">
                <div className="container-fluid">
                    <nav className="row">
                        <Link to='/' className="col-12 col-md-2 d-flex align-items-center justify-content-center">
                            <img src={logo} alt="logo" className="mx-2" height='60'/>
                        </Link>
                        <ul className="col-12 col-md-4 list-unstyled text-white">
                            <li className='font-weight-bold mb-2'>Enlaces</li>
                            <li>
                                <Link to='/sobremi' className="text-reset">Sobre Mí</Link>
                            </li>
                            <li>
                                <Link to='/contacto' className="text-reset">Contacto</Link>
                            </li>
                        </ul>
                        <ul className="col-12 col-md-2 list-unstyled text-white">
                            <li className='font-weight-bold mb-2'>Síguenos</li>
                            <li className="d-flex justify-content-between">
                                <i className="bi bi-facebook"/>
                                <i className="bi bi-instagram"/>
                                <i className="bi bi-twitter"/>
                                <i className="bi bi-youtube"/>
                            </li>
                        </ul>
                        <div className="container">
                            <p>&copy; {(new Date().getFullYear())} An Bao Gassó Preixens, Inc. &middot; <Link to={'/aviso-legal'} className="text-reset">Política de Privacidad </Link>&middot; <a href="top" rel="noopener noreferrer" className="text-reset">Términos</a> &middot;
                            </p>
                        </div>
                    </nav>
                </div>
            </footer>
        )
    }
}

export default Footer;