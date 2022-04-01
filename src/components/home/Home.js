import React from "react";

import './Home.css'
import img1 from '../images/environment.jpg'

import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import Test from "./test/Test";

class Home extends React.Component {
    handleClick () {
    }

    render() {
        return (
            <>
                <Menu />
                <main role="main" className="flex-shrink-0 mt-5">
                    <div className="container">
                        <h1>Calcula tu huella de carbono</h1>
                        <Test />
                        <div className="row">
                            <div className="col-md-6" id="text">
                                <h2>Calculadora de Emisiones</h2>
                                <br/>
                                <h5>Haz el test y descubre cuál es tu huella de carbono según tus dispositivos TIC.</h5>
                                <br/>
                                <button type="button" onClick={this.handleClick} className="btn btn-primary btn-lg">COMENZAR</button>
                            </div>
                            <div className="col-md-6">
                                <img src={img1} alt="img1" width="400" height="400"/>
                                <br/>
                                <a href="https://www.freepik.es/vectores/ecologico">Vector de ecologico creado por freepik - www.freepik.es</a>
                            </div>
                            <br/>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        )
    }
}

export default Home;