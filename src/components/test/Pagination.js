import React from "react";

class Pagination extends React.Component {
    render() {
        return (
            <nav aria-label="...">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <a className="page-link" href="top">Anterior</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="top">1</a></li>
                    <li className="page-item active" aria-current="page">
                        <a className="page-link" href="top">2</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="top">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="top">Siguiente</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Pagination;