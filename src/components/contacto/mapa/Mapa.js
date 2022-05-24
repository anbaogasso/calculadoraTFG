import React from "react";

class Mapa extends React.Component {
    render() {
        return (
            <div className="embed-responsive embed-responsive-4by3">
                <iframe title="mapa_contacte" className="embed-responsive-item" src="https://www.google.com/maps/place/FIB+Facultat+d'Inform%C3%A0tica+de+Barcelona/@41.3894451,2.1133652,15z/data=!4m5!3m4!1s0x0:0xf3ab8ba023c5cd56!8m2!3d41.3894451!4d2.1133652"></iframe>
            </div>
        )
    }
}

export default Mapa;