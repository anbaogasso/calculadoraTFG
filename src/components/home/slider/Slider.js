import React from "react";

import hojas from '../../images/hojas_fondo.jpg';

class Slider extends React.Component {
    render() {
        return (
            <div id="slider" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={hojas} className="d-block w-100" alt="hojas"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Calculadora de Emisiones</h3>
                            <p>Haz el test y descubre cuál es tu huella de carbono según tus dispositivos TIC.</p>
                            <form method="get" action="/result">
                                <button id="comenzarTest" type="submit">COMENZAR</button>
                            </form>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slider;