import React from "react";

import hojas from '../../images/hojas_fondo.jpg';
import { Link } from "react-router-dom";

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.redirectToTest = this.redirectToTest.bind(this);
    }
    redirectToTest() {
        return <Link to='/test' />
    }

    render() {
        return (
            <div id="slider" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={hojas} className="d-block w-100" alt="hojas"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Calculadora de Emisiones</h3>
                            <p>Haz el test y descubre cuál es tu huella de carbono según tus dispositivos TIC.</p>
                            <br/>
                            <Link to={'/test'} id="comenzarTest" className="button is-info">COMENZAR</Link>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slider;