import React from "react";
import Constants from "../../Constants";

class ProvaBaseDeDades extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            device: [],
        }
    }

    componentDidMount() {
        fetch(`${Constants.RUTA_API}/get_all_type_devices.php`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        device: result,
                    });
                })
    }

    render() {
        const {device} = this.state;
        return (
            <>
                <br/>
                <br/>
                <br/>
                <h1>Prova Base de Datos: </h1>
                <ul className="text-white">
                    {device.map(dev => (
                        <li key={dev.id}>
                            Tipo: {dev.type} <br/>
                            {dev.footprint} kg de CO2 <br/>
                            {dev.trees} árboles <br/>
                            {dev.water} litros de agua ahorrados.
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

export default ProvaBaseDeDades;
