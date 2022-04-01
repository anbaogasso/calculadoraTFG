import React from "react";

class Test extends React.Component{
    render() {
        return (
            <>
                <h3>ELECTRICIDAD</h3>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">¿Cuál es el consumo eléctrico de tu dispositivo?</label>
                    <input type="text" className="form-control" id="formGroupExampleInput"
                           placeholder="10 kWh"/>
                </div>
                <h6>¿Qué tipo de electricidad utilizas?</h6>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Electricidad convencional
                        </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                           checked/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Electricidad renovable
                        </label>
                </div>
            </>
        )
    }


}

export default Test;