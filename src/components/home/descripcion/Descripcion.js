import React from "react";

import fondo from '../../images/fondo1.jpg';

class Descripcion extends React.Component {
    render() {
        return (
            <div id="description" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" id="description2">
                        <img src={fondo} className="d-block w-100" alt="TICO2description"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h3 id="titleTICO2">TICO2</h3>
                            <p>El objetivo principal de este proyecto es diseñar un explorador/exportador de informes de trazabilidad y de impacto ambiental de dispositivos informáticos.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Descripcion;