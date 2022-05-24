import React from "react";

import './Home.css'
import Slider from "./slider/Slider";
import AboutMe from "./aboutme/AboutMe";
import Descripcion from "./descripcion/Descripcion";

class Home extends React.Component {
    render() {
        return (
            <main role="main" className="">
                <Slider />
                <AboutMe />
                <Descripcion />
            </main>
        )
    }
}

export default Home;