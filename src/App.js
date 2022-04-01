import React from "react";
import './App.css';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./components/home/Home";
import Nosotros from "./components/nosotros/Nosotros";
import Contacto from "./components/contacto/Contacto";
import Test from "./components/home/test/Test";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Home />
                    <Routes>
                        <Route exact path="/" component={Home} />
                        <Route path="/nosotros" component={Nosotros} />
                        <Route path="/contacto" component={Contacto} />
                        <Route path="/test" component={Test} />
                        <Route render={() => <h1>Not found!</h1>} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;
