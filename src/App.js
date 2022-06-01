import React from "react";
import './App.css';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./components/home/Home";
import SobreMi from "./components/sobremi/SobreMi";
import Contacto from "./components/contacto/Contacto";
import Test from "./components/test/Test";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Result from "./components/result/Result";
import AvisoLegal from "./components/footer/avisolegal/AvisoLegal";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Menu/>
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route path='/sobremi' element={<SobreMi/>} />
                    <Route path='/contacto' element={<Contacto/>} />
                    <Route path='/test' element={<Test/>} />
                    <Route path='/test/result' element={<Result />} />
                    <Route path='/aviso-legal' element={<AvisoLegal />} />
                    <Route render={() => <h1>Not found!</h1>} />
                </Routes>
                <Footer/>
            </Router>
        );
    }
}

export default App;
