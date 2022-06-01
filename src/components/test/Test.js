import React from "react";

import './Test.css';
import { Link } from "react-router-dom";
import {ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Constants from '../../Constants';

class Test extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            newClient: {
                id: "",
                model : "",
                marca : "",
                consum: "",
                tipoconsum: 1,
            },
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmission = this.handleFormSubmission.bind(this);
        this.redirectToSeeResults = this.redirectToSeeResults.bind(this);
    }

    handleChange(event) {
        const key = event.target.id;
        let value = event.target.value;
        this.setState(state => {
            const updatedDevice = state.newClient;
            if (key === "consum") {
                value = parseFloat(value);
            } else if (key === "intConsum1" || key === "intConsum2") {
                value = parseInt(value);
            }
            //Actualizamos el valodr de newClient solo los campos que han cambiado.
            updatedDevice[key] = value;
            return {
                newdeivice: updatedDevice,
            }
        });
    }

    async handleFormSubmission(event) {
        event.preventDefault();
        //Codificar el nuevo dispositivo como JSON
        const usefulLoad = JSON.stringify(this.state.newClient);
        const response = await fetch(`${Constants.RUTA_API}/save_device.php`, {
            method: "POST",
            body: usefulLoad,
        });
        const successful = await response.json();
        if (successful) {
            toast('Guardado satisfactoriamente, pulsa el botón RESULTADOS, para ver los resultados!', {
                position: "top-right",
                autoClose: 6000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            fetch(`${Constants.RUTA_API}/get_id_client_device.php?model=${this.state.newClient.model}&marca=${this.state.newClient.marca}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            newClient: {
                                id: result.id,
                                model : "",
                                marca : "",
                                consum: "",
                                tipoconsum: 1,
                            }
                        });
                    });
        } else {
            toast.error("Error guardando. Intenalo de nuevo");
        }
    }

    redirectToSeeResults() {
        return <Link to={`/test/result/${this.state.newClient.id}`} />
    }

    render() {
        const {newClient} = this.state;
        return (
            <div id="divTest">
                <br/>
                <h1>Calculadora</h1>
                <br/>
                <ToastContainer/>
                <form onSubmit={this.handleFormSubmission} id="formTest">
                    <h2>Dispositivos</h2>
                    <div className="mb-4">
                        <label className="form-label" htmlFor="nameModel">¿Cuál es el modelo de tu dispositivo?</label>
                        <input type="text" className="form-control" id="model" placeholder="ThinkPad E15 Gen 2" onChange={this.handleChange} value={newClient.model}/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="nameBrand" className="form-label">¿Cuál es la marca de tu dispositivo?</label>
                        <input type="text" className="form-control" id="marca"
                               placeholder="Lenovo" onChange={this.handleChange} value={newClient.marca}/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="consumMW" className="form-label">¿Cuál es el consumo eléctrico de tu dispositivo?</label>
                        <input type="number" className="form-control" id="consum"
                               placeholder="10 kWh" onChange={this.handleChange} value={newClient.consum}/>
                    </div>
                    <div className="mb-4">
                        <h6>¿Qué tipo de electricidad utilizas?</h6>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="checkConsum" id="intConsum1" value="1"/>
                            <label className="form-check-label" htmlFor="intConsum1">
                                Electricidad convencional
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="checkConsum" id="intConsum2" value="2"/>
                            <label className="form-check-label" htmlFor="intConsum2">
                                Electricidad renovable
                            </label>
                        </div>
                    </div>
                    <button id="buttonSubmit" type="submit">Submit</button>
                    <br/>
                </form>
                <br/>
                <Link to={`/test/result/${this.state.newClient.id}`} className="button is-info" id="verResultados">RESULTS</Link>
                <br/>
                <br/>
            </div>
        )
    }
}

export default Test;