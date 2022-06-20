import React from "react";

import './PageNotFound.css'
import planet from '../images/mano-sujetando-tierra-derritiendose_24381-1106.png';

const PageNotFound = () => {
    return (
        <div id="wrapper" className="row">
            <br/>
            <img src={planet} alt="planeta" className="col-md-6" width="600" height="600"/>
            <div id="info" className="col-md-5">
                <h1 id="error404">404</h1>
                <h2 id="error">ERROR</h2>
                <h3 id="pageNotFound">This page could not be found!</h3>
            </div>
        </div>
    )
}

export default PageNotFound;