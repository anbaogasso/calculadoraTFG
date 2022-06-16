import React from "react";

import './Home.css'
import Slider from "./slider/Slider";
import AboutMe from "./aboutme/AboutMe";
import Descripcion from "./descripcion/Descripcion";
import ContactHome from "./contactHome/ContactHome";

class Home extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }

    render() {
        return (
            <main role="main">
                <Slider />
                <Descripcion />
                <AboutMe />
                <ContactHome />
            </main>
        )
    }
}

export default Home;