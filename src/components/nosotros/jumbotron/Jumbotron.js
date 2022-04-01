import React from "react";

class Jumbotron extends React.Component {
    render() {
        return(
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-3">Nosotros </h1>
                    <p>
                        Soy An Bao Gassó Preixens, una estudiante de Ingeniería Informática de la Facultad de Informática de Barcelona (FIB), UPC.
                        <br/>
                        Actualmente estoy realizando el Trabajo de Fin de Grado sobre la Generación de informes de sostenibilidad de dispositvos en la economia circular.
                    </p>
                </div>
            </div>
        )
    }
}

export default Jumbotron;