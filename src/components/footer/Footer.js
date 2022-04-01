import React from "react";
import './Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <footer className="container">
                <p>&copy; {(new Date().getFullYear())} An Bao Gassó Preixens, Inc. &middot; <a href="#" rel="noopener noreferrer">Política de Privacidad </a>&middot; <a href="top" rel="noopener noreferrer">Términos</a> &middot;
                </p>
                <p className="float-right"><a href="top" rel="noopener noreferrer">Subir</a></p>
            </footer>
        )
    }
}

export default Footer;