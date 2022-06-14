import React from "react";

import './Test.css';
import {ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Constants from '../../Constants';
import TitleTest from "./titleTest/TitleTest";
import Title from "./title/Title";
import Abstract from "./abstract/Abstract";
import './Result.css';

class Test extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            newClient: {
                id: "",
                model : "",
                brand : "",
                type: "",
                weight: "",
                units: 1,
                hours: 0,
                distance: 17345.85,
            },
            deviceclient: {
                id: "",
                model : "",
                brand : "",
                type: "",
                weight: "",
                units: "",
                hours: "",
                distance: "",
            },
            device: {
                type: "",
                footprint: "",
                trees: "",
                cars: "",
                water: "",
            },
            infoType: "nothing",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmission = this.handleFormSubmission.bind(this);
        this.handleNew = this.handleNew.bind(this);
    }

    handleChange(event) {
        const key = event.target.id;
        let value = event.target.value;
        this.setState(state => {
            const updatedDevice = state.newClient;
            if (key === "weight") {
                value = parseFloat(value);
            } else if (key === "units") {
                value = parseInt(value);
            } else if (key === "hours") {
                value = parseFloat(value);
            } else if (key === "distance") {
                value = parseFloat(value);
            }
            //Actualizamos el valodr de newClient solo los campos que han cambiado.
            updatedDevice[key] = value;
            return {
                newClientDevice: updatedDevice,
            }
        });
    }

    tipoDeDispositivo = () => {
        let value = this.state.deviceclient.type;
        if (value === "portátil" || value === "portatil" || value === "laptop") {
            this.setState({
                infoType: "laptop",
            });
        } else if (value === "ordenador sobremesa" || value === "sobremesa" || value === "ordenador de sobremesa" || value === "desktop") {
            this.setState({
                infoType: "desktop",
            });
        } else if (value === "monitor ordenador" || value === "monitor" || value === "monitor de ordenador") {
            this.setState({
                infoType: "computerMonitor",
            });
        } else {
            this.setState({
                infoType: "nothing",
            });
        }
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
            this.setState({
                deviceclient: this.state.newClient,
                newClient: {
                    id: "",
                    model : "",
                    brand : "",
                    type: "",
                    weight: "",
                    units: 1,
                    hours: 0,
                    distance: 17345.85,
                }
            });
            this.tipoDeDispositivo();
            fetch(`${Constants.RUTA_API}/get_type_devices.php?type=${this.state.infoType}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            device: result,
                            isLoaded: true
                        });
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        })
                    })
            toast('Guardado satisfactoriamente, para ver los resultados ve hacia abajo!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.error("Error guardando. Intenalo de nuevo");
        }
    }

    handleNew(event) {
        event.preventDefault();
        this.setState({
            device: {
                type: "",
                footprint: "",
                trees: "",
                cars: "",
                water: "",
            },
            deviceclient: {
                id: "",
                model : "",
                brand : "",
                type: "",
                weight: "",
                units: "",
                hours: "",
                distance: "",
            },
        });
    }

    render() {
        const {newClient, deviceclient, device} = this.state;
        return (
            <>
                <TitleTest/>
                <div id="divTest">
                    <ToastContainer/>
                    <h2 id="infoCalculadora">Calculadora para generar informes de sostenibilidad mediante las estimaciones de CO2 por cada dispositivo que introduzcas a continuación.</h2>
                    <form onSubmit={this.handleFormSubmission} id="formTest">
                        <h2 id="testTitles">Dispositivo TIC</h2>
                        <div className="mb-4">
                            <label className="form-label" htmlFor="typeDevice">¿Qué tipo de dispositivo es?</label>
                            <input type="text" className="form-control" id="type" placeholder="Portátil, ordenador sobremesa o monitor ordenador" onChange={this.handleChange} value={newClient.type} required/>
                            <div className="invalid-feedback">
                                Este campo es obligatorio.
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="form-label" htmlFor="nameModel">¿Cuál es el modelo de tu dispositivo?</label>
                            <input type="text" className="form-control" id="model" placeholder="ThinkPad E15 Gen 2" onChange={this.handleChange} value={newClient.model} required/>
                            <div className="invalid-feedback">
                                Este campo es obligatorio.
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="nameBrand" className="form-label">¿Cuál es la marca de tu dispositivo?</label>
                            <input type="text" className="form-control" id="brand"
                                   placeholder="Lenovo" onChange={this.handleChange} value={newClient.brand} required/>
                            <div className="invalid-feedback">
                                Este campo es obligatorio.
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="weight" className="form-label">¿Cuál es el peso de su dispositivo? (en Kg)</label>
                            <input type="number" step="0.001" className="form-control" id="weight" min="0" max="300"
                                   placeholder="1.34" onChange={this.handleChange} value={newClient.weight} required/>
                            <div className="invalid-feedback">
                                Este campo es obligatorio.
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="units" className="form-label">¿Cuantas unidades son?</label>
                            <input type="number" className="form-control" id="units" min="1" max="300"
                                   placeholder="1" onChange={this.handleChange} value={newClient.units}/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="hoursOfUse" className="form-label">Opcional: Horas de uso de su dispositivo. (en horas)</label>
                            <input type="string" className="form-control" id="hours"
                                   placeholder="20998.49" onChange={this.handleChange} value={newClient.hours}/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="distanceKm" className="form-label">Opcional: Distáncia que hay entre la ciudad de orgen del dispositivo (dónde se ha fabricado) y su destino (la ciudad de residencia o de trabajo). (en Km)</label>
                            <input type="string" className="form-control" id="distance"
                                   placeholder="17345.85" onChange={this.handleChange} value={newClient.distance}/>
                            <h2 id="infoAddicional">Aviso: Si no se introduce nada, se asumirá que son 17345.85 km, que es la distancia existente entre Pekín (China) y Barcelona (España).</h2>
                        </div>
                        <button id="buttonSubmit" type="submit">ENVIAR</button>
                        <br/>
                    </form>
                </div>
                <main role="main" className="flex-shrink-0 mt-5" id="mainResult">
                    <Title/>
                    <Abstract key={deviceclient.id} deviceclient={deviceclient}/>
                    <div id="principal" className="row">
                        <div className="col-4">
                            <h3 id="titulo1Co2">EL CO2 EVITADO ES: </h3>
                        </div>
                        <div className="col-4">
                            <h2 id="co2calculado">{device.footprint}</h2>
                        </div>
                        <div className="col-2">
                            <h3 id="titulo1Co2">kg!</h3>
                        </div>
                    </div>
                    <div id="ticket-button" className="row">
                        <div className="col-md-10">
                            <h2 id="textEquivalencias">Esto equivale a: </h2>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row" id="indicadoresTest">
                            <div className="col-md-4">
                                <div id="drawCircleRed">
                                    <p id="num">{device.trees}</p>
                                    <p id="text1Trees">árboles</p>
                                    <p id="text2Trees">absorbiendo CO2 en un día</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div id="drawCircleYellow">
                                    <p id="num">{device.cars}</p>
                                    <p id="text1coches">Coches</p>
                                    <p id="text2coches">eliminados de circulación en un día</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div id="drawCirclePink">
                                    <p id="num">{device.water}</p>
                                    <p id="text1Agua">litros de agua</p>
                                    <p id="text2Agua">ahorrados</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="ticket-button" className="row">
                        <div className="col-md-10" id="divbutton-ticket">
                            <button id="descargarInfo" type="button" onSubmit={this.handleNew} >Descargar informe</button>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

export default Test;