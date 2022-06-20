import React from "react";

import './Contacto.css';

import Formulario from "./formulario/Formulario";
import TitleContacto from "./titleContacto/TitleContacto";
import img from '../images/blancoynegro.jpg';
import mapa from '../images/mapa1.png';

class Contacto extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }

    render() {
        return (
            <main id="contactoMain" role="main" className="flex-shrink-0 mt-5">
                <TitleContacto/>
                <div id="divContacto" className="row" style={{backgroundImage: `url(${img})`, height: "1000px", backgroundRepeat: "no-repeat"}}>
                    <div className="col-md-6">
                        <Formulario />
                    </div>
                    <div className="col-md-6">
                        <img src={mapa} alt="mapaFacu" width="90%" height="450" />
                    </div>
                    <div id="divDirection">
                        <h2 id="direccTitle">Puede localizarme en la siguiente dirección:</h2>
                        <p>
                            Edifici B6 del Campus Nord
                            <br/>
                            C/Jordi Girona, 1-3
                            <br/>
                            08034 Barcelona
                            <br/>
                            T.934 017 000
                        </p>
                    </div>
                </div>
            </main>
        )
    }
}

export default Contacto;