import React from "react";

import hojas from '../../images/hojas_fondo.jpg';

class Abstract extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {deviceclient} = this.props;
        return(
            <div id="abstractContainer">
                <img src={hojas} className="d-block w-100" height="200" alt="hojas"/>
                <ul id="listaDetalles">
                    <h3 id="tituloDispositivosResult">Información del dispositivo: </h3>
                    <li>Tipo de dispositivo: {deviceclient.type}</li>
                    <li>Modelo: {deviceclient.model}</li>
                    <li>Marca: {deviceclient.brand}</li>
                    <li>Unidades: {deviceclient.units}</li>
                </ul>
            </div>
        );
    }
}

export default Abstract;