import React from "react";

import './Test.css';
import {ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Constants from '../../Constants';
import TitleTest from "./titleTest/TitleTest";
import Title from "./title/Title";
import Abstract from "./abstract/Abstract";
import './Result.css';
import TestDetails from "./testDetails/TestDetails";
import {Link} from "react-router-dom";

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
                manuconst: "",
                transportconst: "",
                useconst: "",
                trees: "",
                cars: "",
                water: "",
            },
            infoType: "nothing",
            impact: {
                manufacturing: "",
                transport: "",
                use: "",
                total: "",
                totalCO2: "",
                equivalenceInTrees: "",
                equivalenceInCars: "",
                watersaving: "",
                workhours: "",
                eurosbacktosociety: "",
            },
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmission = this.handleFormSubmission.bind(this);
        this.handleNew = this.handleNew.bind(this);
        this.handleDownload = this.handleDownload.bind(this);
        this.redirectToHome = this.redirectToHome.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0,0)
    }

    redirectToHome() {
        return <Link to='/' />
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
            impact: {
                manufacturing: "",
                transport: "",
                use: "",
                total: "",
                totalCO2: "",
                equivalenceInTrees: "",
                equivalenceInCars: "",
                watersaving: "",
            },
        });
    }

    handleDownload = (e) => {
        e.preventDefault();
        let brand = this.state.deviceclient.brand;
        let model = this.state.deviceclient.model;
        let type = this.state.device.type;
        let name = brand + '-' + model + '-' + type + '-' + "results";
        const json = JSON.stringify(this.state.impact);
        console.log(json);
        this.downloadObjectAsJson(json, name);
    }

    downloadObjectAsJson = (exportObj, exportName) => {
        let dataSr = "data:text/json; charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
        let downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataSr);
        downloadAnchorNode.setAttribute("download", exportName + ".json");
        document.body.appendChild(downloadAnchorNode); //required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }

    tipoDeDispositivo = () => {
        let value = this.state.deviceclient.type;
        if (value === "portátil" || value === "portatil" || value === "laptop") {
            this.setState({
                infoType: "laptop",
            });
        } else if (value === "ordenador sobremesa" || value === "sobremesa" || value === "ordenador de sobremesa" || value === "desktop" || value === "ordenador") {
            this.setState({
                infoType: "desktop",
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
            if (this.state.infoType === "nothing") {
                toast("Hay algún error en los datos introducidos, por favor inténtalo de nuevo", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                this.handleNew();
            } else {
                fetch(`${Constants.RUTA_API}/get_type_devices.php?type=${this.state.infoType}`)
                    .then(res => res.json())
                    .then(
                        (result) => {
                            this.setState({
                                device: result,
                                isLoaded: true
                            });
                            this.formulaToCalculateTheImpact();
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
            }
        } else {
            toast.error("Error guardando. Inténtalo de nuevo");
        }
    }

    formulaToCalculateTheImpact = () => {
        const {device, deviceclient} = this.state;
        let calcMan = device.manuconst;
        let calTran = device.transportconst * deviceclient.distance;
        let calUse = device.useconst * deviceclient.hours;
        let totalCalc = ((calcMan + calTran) + calUse);
        let totalUnits = totalCalc * deviceclient.units;
        let calcTrees = (device.trees * totalUnits).toFixed(3);
        let calcCars = (device.cars * totalUnits).toFixed(3);
        let calcWater = (device.water * totalUnits).toFixed(3);
        let calcWork = (device.work * deviceclient.units).toFixed(3);
        let calcEuro = (device.euro * deviceclient.units).toFixed(3);
        this.setState(state => {
            const updatedImpact = state.impact;
            updatedImpact["manufacturing"] = calcMan;
            updatedImpact["transport"] = calTran.toFixed(3);
            updatedImpact["use"] = calUse.toFixed(3);
            updatedImpact["total"] = totalCalc.toFixed(3);
            updatedImpact["totalCO2"] = totalUnits.toFixed(3);
            updatedImpact["equivalenceInTrees"] = calcTrees;
            updatedImpact["equivalenceInCars"] = calcCars;
            updatedImpact["watersaving"] = calcWater;
            updatedImpact["workhours"] = calcWork;
            updatedImpact["eurosbacktosociety"] = calcEuro;
            return {
                newimapct: updatedImpact,
            }
        });
    }

    render() {
        const {newClient, deviceclient, impact} = this.state;
        return (
            <>
                <TitleTest/>
                <TestDetails />
                <div id="divTest">
                    <ToastContainer/>
                    <form onSubmit={this.handleFormSubmission} id="formTest">
                        <h2 id="testTitles">Dispositivo TIC</h2>
                        <div className="mb-4">
                            <label className="form-label" htmlFor="typeDevice">¿Qué tipo de dispositivo es?</label>
                            <input type="text" className="form-control" id="type" placeholder="Portátil o ordenador de sobremesa" onChange={this.handleChange} value={newClient.type} required/>
                            <div className="invalid-feedback">
                                Este campo es obligatorio.
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="form-label" htmlFor="nameModel">¿Cuál es el modelo de su dispositivo?</label>
                            <input type="text" className="form-control" id="model" placeholder="ThinkPad E15 Gen 2" onChange={this.handleChange} value={newClient.model} required/>
                            <div className="invalid-feedback">
                                Este campo es obligatorio.
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="nameBrand" className="form-label">¿Cuál es la marca de su dispositivo?</label>
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
                            <input type="number" step="0.01" className="form-control" id="hours" min="0"
                                   placeholder="20998.49" onChange={this.handleChange} value={newClient.hours}/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="distanceKm" className="form-label">Opcional: Distáncia que hay entre la ciudad de orgen del dispositivo (dónde se ha fabricado) y su destino (la ciudad de residencia o de trabajo). (en Km)</label>
                            <input type="number" step="0.01" className="form-control" id="distance" min="0"
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
                            <h2 id="co2calculado">{this.state.impact.totalCO2}</h2>
                        </div>
                        <div className="col-2">
                            <h3 id="titulo1Co2">kg de co2eq!</h3>
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
                                    <p id="num">{this.state.impact.equivalenceInTrees}</p>
                                    <p id="text1Trees">árboles</p>
                                    <p id="text2Trees">absorbiendo CO2 en un día</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div id="drawCircleYellow">
                                    <p id="num">{this.state.impact.equivalenceInCars}</p>
                                    <p id="text1coches">Coches</p>
                                    <p id="text2coches">eliminados de circulación en un día</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div id="drawCirclePink">
                                    <p id="num">{this.state.impact.watersaving}</p>
                                    <p id="text1Agua">litros de agua</p>
                                    <p id="text2Agua">ahorrados</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="divtablaResumen" className="row">
                        <div className="col-md-10">
                            <h3 id="titleTablaResumen">Resultados detallados:</h3>
                        </div>
                        <div className="col-md-10">
                            <table id="tablaResumen" className="table table-sm table-borderless">
                                <thead className="table-dark">
                                <tr>
                                    <th scope="col">Etapa</th>
                                    <th scope="col">Global warming (GWP100a)</th>
                                    <th scope="col">Unidad</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Fabricación + Materiales</td>
                                    <td>{impact.manufacturing}</td>
                                    <td>kg co2eq</td>
                                </tr>
                                <tr>
                                    <td>Transporte</td>
                                    <td>{impact.transport}</td>
                                    <td>kg co2eq</td>
                                </tr>
                                <tr>
                                    <td>Uso</td>
                                    <td>{impact.use}</td>
                                    <td>kg co2eq</td>
                                </tr>
                                <tr className="table-dark">
                                    <td>Total</td>
                                    <td>{impact.total}</td>
                                    <td>kg  co2eq</td>
                                </tr>
                                <tr className="table-dark">
                                    <td>Total con {deviceclient.units} unidad/es</td>
                                    <td>{impact.totalCO2}</td>
                                    <td>kg  co2eq</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="divimpactesocial" className="row">
                        <div className="col-md-10">
                            <p id="titlesocialimpact" className="col-md-10">Si reutiliza su dispositivo puede contribuir a generar:</p>
                        </div>
                    </div>
                    <div id="circlesSocial" className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div id="drawCircleGreen">
                                    <p id="num">{impact.workhours}</p>
                                    <p id="text1Social">horas de trabajo</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div id="drawCircleBlue">
                                    <p id="num">{impact.eurosbacktosociety}</p>
                                    <p id="text2Social">€</p>
                                    <p id="text3Social">de retorno a la sociedad</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="ticket-button" className="row">
                        <div className="col-md-10">
                            <button id="descargarInfo" type="button" onClick={this.handleDownload}>Descargar informe</button>
                        </div>
                        <div className="col-md-8">
                            <Link to={'/'} id="backToHome" className="button is-info">Volver al Home</Link>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

export default Test;