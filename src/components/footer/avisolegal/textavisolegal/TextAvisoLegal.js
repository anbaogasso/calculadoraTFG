import React from "react";

import '../AvisoLegal.css';

class TextAvisoLegal extends React.Component {
    render() {
        return (
            <div id="avisoLegalContainer" className="container-xl">
                <p id="avisoLegalText">La mayor parte de las leyes y reglamentos relativos a las telecomunicaciones globales requieren que las páginas web que no sean estrictamente personales o privadas, incluyan una página que contengan un aviso legal. Esto incluye páginas de naturaleza periodística y blogs.
                    El nombre de la persona responsable de los contenidos deberá aparecer en la página, junto con su dirección y su información de contacto. Por ejemplo, un número telefónico o una dirección de correo electrónico. También se puede incluir otra información necesaria. Te recomendamos que consultes a un asesor legal y te asegurares que la información de tu página web es la indicada.
                </p>
                <br/>
            </div>
        )
    }
}

export default TextAvisoLegal;