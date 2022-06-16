import React from "react";
import logoFIB from "../../images/logo_fib.png";

class Jumbotron extends React.Component {
    render() {
        return(
            <div id="jumbotronSobreMi" className="jumbotron row">
                <p id="sobreMiText" className="col-md-9">
                    <br/>
                    <br/>
                    Soy An Bao Gassó Preixens, una estudiante de Ingeniería Informática de la Facultad de Informática de Barcelona (FIB), UPC.
                    <br/>
                    Actualmente estoy realizando el Trabajo de Fin de Grado sobre la Generación de informes de sostenibilidad de dispositvos en la economia circular.
                </p>
                <img src={logoFIB} className="d-block col-md-2" alt="foto_logoFIB" height="180" width="100%"/>
            </div>
        )
    }
}

export default Jumbotron;