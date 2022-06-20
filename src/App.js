import React from "react";
import './App.css';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./components/home/Home";
import SobreMi from "./components/sobremi/SobreMi";
import Contacto from "./components/contacto/Contacto";
import Test from "./components/test/Test";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import AvisoLegal from "./components/footer/avisolegal/AvisoLegal";
import PoliticaDePrivacidad from "./components/footer/politicadeprivacidad/PoliticaDePrivacidad";
import PageNotFound from "./components/pagenotfound/PageNotFound";

class App extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }

    render() {
        return (
            <Router>
                <Menu/>
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route path='/sobremi' element={<SobreMi/>} />
                    <Route path='/contacto' element={<Contacto/>} />
                    <Route path='/test' element={<Test/>} />
                    <Route path='/aviso-legal' element={<AvisoLegal/>} />
                    <Route path='/politica-de-privacidad' element={<PoliticaDePrivacidad/>} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
                <Footer />
            </Router>
        );
    }
}

export default App;
