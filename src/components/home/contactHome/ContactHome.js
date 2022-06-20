import React from "react";
import Constants from "../../../Constants";
import {toast, ToastContainer} from "react-toastify";
import {Link} from "react-router-dom";

class ContactHome extends React.Component {
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
        this.handleChangeMessHome = this.handleChangeMessHome.bind(this);
        this.handleToSendFormHome = this.handleToSendFormHome.bind(this);
    }

    handleChangeMessHome (event) {
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

    async handleToSendFormHome(event) {
        event.preventDefault();
        //Codificar el nuevo dispositivo como JSON
        const usefulLoad = JSON.stringify(this.state.newMessage);
        const response = await fetch(`${Constants.RUTA_API}/new_message.php`, {
            method: "POST",
            body: usefulLoad,
        });
        const successful = await response.json();
        if (successful) {
            toast('Mensaje enviado correctamente!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            this.setState({
                newMessage: {
                    name: "",
                    email: "",
                    subject: "",
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
            <div id="ContactHomeMain">
                <ToastContainer/>
                <h1 id="titleContactHome">Contacta conmigo</h1>
                <form onSubmit={this.handleToSendFormHome}>
                    <div className="row" id="divPrimeraLineaContact">
                        <div className="col-md-4">
                            <input type="text" className="form-control" placeholder="Nombre y Apellidos" id="name" onChange={this.handleChangeMessHome} value={newMessage.name} required/>
                            <div className="invalid-feedback">
                                Este campo es obligatorio.
                            </div>
                        </div>
                        <div className="col-md-4">
                            <input type="email" className="form-control" placeholder="Email" id="email" onChange={this.handleChangeMessHome} value={newMessage.email} required/>
                            <div className="invalid-feedback">
                                Este campo es obligatorio.
                            </div>
                        </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" placeholder="Asunto" id="subject" onChange={this.handleChangeMessHome} value={newMessage.subject} required/>
                            <div className="invalid-feedback">
                                Este campo es obligatorio.
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" placeholder="Cuéntame sus dudas" id="text" rows="5" onChange={this.handleChangeMessHome} value={newMessage.text} required />
                        <div className="invalid-feedback">
                            Este campo es obligatorio.
                        </div>
                    </div>
                    <div id="terminosHome" className="form-check justify-content-center">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                        <label className="form-check-label" htmlFor="invalidCheck">
                            <p>Acepto los <Link to={'/aviso-legal'} className="text-reset">términos</Link> y las <Link to={'/politica-de-privacidad'} className="text-reset">condiciones</Link>.</p>
                        </label>
                        <div className="invalid-feedback">
                            Debe aceptar antes de enviar.
                        </div>
                    </div>
                    <button id="buttonSolicitarInfo" className="btn btn-primary justify-content-center" type="submit">SOLICITA INFORMACIÓN</button>
                </form>
            </div>
        )
    }
}

export default ContactHome;