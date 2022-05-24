import React from "react";

import './Result.css';
import {ToastContainer} from 'react-toastify'
import FilaDeTablaDeDevices from './FilaDeTablaDeDevices';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            devices: [],
        };
    }
    async componentDiMount() {
        const response = await fetch(`${Constants.RUTA_API}/get_devices.php`);
        const devices = await response.json();
        this.setState({
            devices: devices,
        });
    }
    render() {
        return (
            <div>
                <div className="column">
                    <h1 className="is-size-3">Ver dispositivos TIC</h1>
                    <ToastContainer></ToastContainer>
                </div>
                <div className="table-container">
                    <table className="table is-fullwidth is-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Model</th>
                                <th>Marca</th>
                                <th>Pes</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <body>
                            {this.state.devices.map(devices => {
                                return <FilaDeTablaDeDevices key={devices.ID} devices={devices}></FilaDeTablaDeDevices>;
                            })}
                        </body>
                    </table>
                </div>
            </div>
        )
    }
}

export default Result;