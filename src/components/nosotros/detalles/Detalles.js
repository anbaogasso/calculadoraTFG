import React from "react";

class Detalles extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2>Objectivo</h2>
                        <p>
                            Ofrecer ...
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h2>Misión</h2>
                        <p>
                            Dar ...
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h2>Visión</h2>
                        <p>
                            Ver ...
                        </p>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}

export default Detalles;