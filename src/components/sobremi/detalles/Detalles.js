import React from "react";

class Detalles extends React.Component {
    render() {
        return (
            <div id="divDetalles" className="row">
                <div className="col-md-4">
                    <h2 id="titleDetalles">Objectivo</h2>
                    <p>
                        Su objetivo es ofrecer un generador de informes sostenibles básico para empresas, organizaciones y/o particulares. A partir de este prototipo, éstos podrán modificarlo para adaptarlo a sus necesidades de manera libre y gratuitamente.
                    </p>
                </div>
                <div className="col-md-4">
                    <h2 id="titleDetalles">Misión</h2>
                    <p>
                        Ofrecer una calculadora libre para poder generar informes de sostenibilidad de dispositivos TIC. Ayudando a empresas, organizaciones y/o particulares a medir su impacto ambiental de sus ordenadores.
                    </p>
                </div>
                <div className="col-md-4">
                    <h2 id="titleDetalles">Visión</h2>
                    <p>
                        Proporcionar acceso libre a una calculadora básica en un solo clic.
                    </p>
                </div>
            </div>
        );
    }
}

export default Detalles;