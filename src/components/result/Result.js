import React from "react";

import './Result.css';
import Constants from '../../Constants';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            devices: [],
        };
    }

    componentDidMount() {
        fetch(`${Constants.RUTA_API}/get_devices.php`)
            .then(res => res.json())
            .then(result => {
                this.setState({
                    devices: result
                });
            });
    }

    render() {
        const {devices} = this.state;
        return (
            <div>
                <div className="column">
                    <h1 className="is-size-3">Ver dispositivos</h1>
                </div>
                <div className="table-container">
                    <table className="table is-fullwidth is-bordered">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Modelo</th>
                            <th>Marca</th>
                            <th>Peso</th>
                        </tr>
                        </thead>
                        <tbody>
                        {devices.map(dev => {
                            return (
                                <tr>
                                    <td>{dev.id}</td>
                                    <td>{dev.model}</td>
                                    <td>{dev.marca}</td>
                                    <td>{dev.pes}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Result;