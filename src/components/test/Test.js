import React from "react";

import './Test.css';

class Test extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            marcaDisp : '',
            modeloDisp : '',
            consumoMW : '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert(this.state.modeloDisp)
    }

    handleChangeBrand = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render() {
        const {
            marcaDisp, modeloDisp, consumoMW} = this.state
        return (
            <div>
                <div className="accordion accordion-flush" id="accordionTest">
                    <h1>Calculadora</h1>
                    <br/>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Dispositivos
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
                            <div className="accordion-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="formGroupExampleInput" className="form-label">¿Cuál es la marca de tu dispositivo?</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput"
                                               placeholder="Lenovo" onChange={this.handleChangeBrand} name="marcaDisp" value={marcaDisp}/>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="formGroupExampleInput" className="form-label">¿Cuál es la marca de tu dispositivo?</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput"
                                               placeholder="ThinkPad E15 Gen 2" onChange={this.handleChangeBrand} name="modeloDisp" value={modeloDisp}/>
                                    </div>
                                    <button id="buttonSubmit" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Electricidad
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingOne">
                            <div className="accordion-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="formGroupExampleInput" className="form-label">¿Cuál es el consumo eléctrico de tu dispositivo?</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput"
                                               placeholder="10 kWh" onChange={this.handleChangeBrand} name="consumoMW" value={consumoMW}/>
                                    </div>
                                    <div className="mb-4">
                                        <h6>¿Qué tipo de electricidad utilizas?</h6>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Electricidad convencional
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Electricidad renovable
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <br/>
                </div>
                <div id="resultados">
                    <h1>Resultados</h1>
                    <p>Marca: {this.state.marcaDisp}</p>
                    <p>Modelo: {this.state.modeloDisp}</p>
                    <p>LA HUELLA ANUAL DE SU DISPOSITIVO ÉS DE {this.state.consumoMW*100} KILOGRAMOS DE CO2.</p>
                </div>
            </div>

        )
    }
}

export default Test;