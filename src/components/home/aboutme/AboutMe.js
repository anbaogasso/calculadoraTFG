import React from "react";

import AboutMeLogo from '../../images/AboutMeLogo.jpg';
import CarbonFootprint from '../../images/carbon-footprint-world.jpg';
import TitleAboutMe from "./titleAboutMe/TitleAboutMe";
import {Link} from "react-router-dom";

class AboutMe extends React.Component {
    render() {
        return (
            <div id="divAboutMe" className="row">
                <TitleAboutMe/>
                <div id="divCuadrosMe" className="row">
                    <div className="col-md-4">
                        <div className="card bg-dark text-white">
                            <img src={AboutMeLogo} className="card-img-top" alt="imgsobremí" height="340"/>
                            <div className="card-body">
                                <h5 id="cardTitle" className="card-title">Sobre Mí</h5>
                                <p id="card1Text" className="card-text">Soy An Bao Gassó Preixens, una estudiante de Ingeniería Informática de la Facultad de Informática de Barcelona (FIB), UPC. </p>
                                <Link to={'sobremi'} id="submitLeerMas" className="button is-info">Leer más &raquo;</Link>
                                <p />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-dark text-white">
                            <img src={CarbonFootprint} className="card-img-top" alt="imgmiproyecto" height="340"/>
                            <div className="card-body">
                                <h5 id="cardTitle" className="card-title">Mi Proyecto</h5>
                                <p id="alinearCuadro" className="card-text">
                                    Este proyecto pertenece al prototipo inicial de mi Trabajo de Fin de Grado de la FIB y por lo tanto, me permitirá aprender nuevas tecnologías, diseñar y programar apliaciones web y distribuidas, y conocer conceptos nuevos sobre la economía circula y sus consecuencias.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe;