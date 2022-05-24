import React from "react";

class Formulario extends React.Component {
    render() {
        return (
            <form className="mb-5 needs-validation">
                <div className="form-group">
                    <label for="inputName" className="form-label">Su nombre</label>
                    <input type="text" className="form-control" id="inputName" required/>
                    <div className="invalid-feedback">
                        Este campo es obligatorio.
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputEmail" className="form-label">Su correo electrónico</label>
                    <input type="email" className="form-control" id="inputEmail" required/>
                    <div className="invalid-feedback">
                        Este campo es obligatorio.
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAsunto" className="form-label">Asunto</label>
                    <input type="text" className="form-control" id="inputAsunto" required/>
                    <div className="invalid-feedback">
                        Este campo es obligatorio.
                    </div>
                </div>
                <div className="mb-3">
                    <label for="inputMensaje" className="form-label">Mensaje </label>
                    <textarea className="form-control" id="inputMensaje" rows="4" required></textarea>
                    <div className="invalid-feedback">
                        Este campo es obligatorio.
                    </div>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                    <label className="form-check-label" for="invalidCheck">
                        Acepto los términos y las condiciones.
                    </label>
                    <div className="invalid-feedback">
                        Debe aceptar antes de enviar.
                    </div>
                </div>
                <br/>
                <button className="btn btn-primary" type="submit">ENVIAR</button>
            </form>
        )
    }
}

export default Formulario;