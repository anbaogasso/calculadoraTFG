import React from "react";

import './PoliticaDePrivacidad.css';
import TitlePolitica from "./titlePolitica/TitlePolitica";
import TextPolitica from "./textPolitica/TextPolitica";

class PoliticaDePrivacidad extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }

    render() {
        return (
            <>
                <TitlePolitica />
                <TextPolitica />
            </>
        )
    }
}

export default PoliticaDePrivacidad;