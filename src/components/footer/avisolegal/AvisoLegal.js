import React from "react";

import './AvisoLegal.css';
import SlideAvisoLegal from "./slideavisolegal/SlideAvisoLegal";
import TextAvisoLegal from "./textavisolegal/TextAvisoLegal";

class AvisoLegal extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }

    render() {
        return (
            <>
                <SlideAvisoLegal />
                <TextAvisoLegal />
            </>
        )
    }
}

export default AvisoLegal;