import React from "react";

import '../AvisoLegal.css';
import hojas from "../../../images/hojas_fondo.jpg";

class SlideAvisoLegal extends React.Component {
    render() {
        return (
            <div id="sliderAvisoLegal" className="carousel slide" data-bs-ride="carousel">
                <div id="sliderAvisoLegal" className="carousel slide" data-bs-ride="carousel">
                    <div id="AvisoLegalItem" className="carousel-item active">
                        <img src={hojas} className="d-block w-100" alt="hojas"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h1 id="titleaviso">Aviso legal</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SlideAvisoLegal;