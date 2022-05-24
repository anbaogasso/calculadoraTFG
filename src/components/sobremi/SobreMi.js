import React from "react";

import './SobreMi.css'

import Jumbotron from "./jumbotron/Jumbotron";
import Detalles from "./detalles/Detalles";

class SobreMi extends React.Component {
    render() {
        return (
            <>
                <main role="main" className="flex-shrink-0 mt-5">
                    <Jumbotron />
                    <Detalles />
                </main>
            </>
        );
    }
}

export default SobreMi;