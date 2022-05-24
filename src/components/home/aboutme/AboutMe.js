import React from "react";

import './AboutMe.css'

import AboutMeLogo from '../../images/AboutMeLogo.jpg';
import CarbonFootprint from '../../images/carbon-footprint-world.jpg';

class AboutMe extends React.Component {
    render() {
        return (
            <div className="row">
                <p>
                    <br/>
                </p>
                <h2 className="col-10">Conóceme</h2>
                <p aria-hidden="true">
                   <br/>
                </p>
                <div className="col-5">
                    <div className="card bg-dark text-white">
                        <img src={AboutMeLogo} className="card-img-top" alt="imgsobremí" height="340"/>
                        <div className="card-body">
                            <h5 className="card-title">Sobre Mí</h5>
                            <p className="card-text">Soy An Bao Gassó Preixens, una estudiante de Ingeniería Informática de la Facultad de Informática de Barcelona (FIB), UPC. </p>
                            <form method="get" action="/sobremi">
                                <button type="submit">Leer más &raquo;</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-5">
                    <div className="card bg-dark text-white">
                        <img src={CarbonFootprint} className="card-img-top" alt="imgmiproyecto" height="340"/>
                        <div className="card-body">
                            <h5 className="card-title">Mi Proyecto</h5>
                            <p className="card-text">
                                Siempre estoy trabajando en algo. Este proyecto me permitira experimentar con conceptos e ideas nuevas.
                                <br/>
                                <br/>
                                <br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe;