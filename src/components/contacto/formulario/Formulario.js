import React from "react";
import Constants from "../../../Constants";
import {ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";

class Formulario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newMessage: {
                name: "",
                email : "",
                subject : "",
                text: "",
            },
        };
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleToSendForm = this.handleToSendForm.bind(this);
    }

    handleChangeMessage (event) {
        const key = event.target.id;
        let value = event.target.value;
        this.setState(state => {
            const updatedMessage = state.newMessage;
            if (key === "email") {
                value = String(value);
            }
            //Actualizamos el valodr de newClient solo los campos que han cambiado.
            updatedMessage[key] = value;
            return {
                newmessage: updatedMessage,
            }
        });
    }

    async handleToSendForm(event) {
        event.preventDefault();
        //Codificar el nuevo dispositivo como JSON
        const usefulLoad = JSON.stringify(this.state.newMessage);
        const response = await fetch(`${Constants.RUTA_API}/new_message.php`, {
            method: "POST",
            body: usefulLoad,
        });
        const successful = await response.json();
        if (successful) {
            toast('Mensaje enviado!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            this.setState({
                newMessage: {
                    name: "",
                    email : "",
                    subject : "",
                    text: "",
                },
            });
        } else {
            toast.error("Hubo un error intentando enviar tu mensaje. Por favor inténtalo de nuevo más tarde.");
        }
    }

    render() {
        const {newMessage} = this.state;
        return (
            <>
                <ToastContainer/>
                <form onSubmit={this.handleToSendForm} className="mb-5 needs-validation">
                    <div className="form-group">
                        <label htmlFor="inputName" className="form-label">Su nombre</label>
                        <input type="text" className="form-control" id="name" onChange={this.handleChangeMessage} value={newMessage.name} required/>
                        <div className="invalid-feedback">
                            Este campo es obligatorio.
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail" className="form-label">Su correo electrónico</label>
                        <input type="email" className="form-control" id="email" onChange={this.handleChangeMessage} value={newMessage.email} required/>
                        <div className="invalid-feedback">
                            Este campo es obligatorio.
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAsunto" className="form-label">Asunto</label>
                        <input type="text" className="form-control" id="subject" onChange={this.handleChangeMessage} value={newMessage.subject} required/>
                        <div className="invalid-feedback">
                            Este campo es obligatorio.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputMensaje" className="form-label">Mensaje </label>
                        <textarea className="form-control" id="text" rows="4" onChange={this.handleChangeMessage} value={newMessage.text} required />
                        <div className="invalid-feedback">
                            Este campo es obligatorio.
                        </div>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                        <label className="form-check-label" htmlFor="invalidCheck">
                            <p>Acepto los <Link to={'/aviso-legal'} className="text-reset">términos</Link> y las <Link to={'/politica-de-privacidad'} className="text-reset">condiciones</Link>.</p>
                        </label>
                        <div className="invalid-feedback">
                            Debe aceptar antes de enviar.
                        </div>
                    </div>
                    <br/>
                    <button id="buttonEnviarContacto" className="btn btn-primary" type="submit">ENVIAR</button>
                </form>
            </>
        )
    }
}

export default Formulario;