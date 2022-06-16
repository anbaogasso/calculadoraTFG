import React from "react";

import './SobreMi.css'

import Jumbotron from "./jumbotron/Jumbotron";
import Detalles from "./detalles/Detalles";
import TitleSobreMi from "./titlesobremi/TitleSobreMi";
import foto_hojas from '../images/hojas_fondo.jpg';

class SobreMi extends React.Component {
    render() {
        return (
            <div id="divSobreMiPrincipal">
                <TitleSobreMi/>
                <Jumbotron />
                <Detalles />
                <img src={foto_hojas} className="d-block" alt="foto_hojas" height="160" width="100%"/>
            </div>
        );
    }
}

export default SobreMi;