import React from "react";

import './PoliticaDePrivacidad.css';
import TitlePolitica from "./titlePolitica/TitlePolitica";
import TextPolitica from "./textPolitica/TextPolitica";

class PoliticaDePrivacidad extends React.Component {
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