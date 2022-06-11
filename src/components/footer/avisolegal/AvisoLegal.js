import React from "react";

import './AvisoLegal.css';
import SlideAvisoLegal from "./slideavisolegal/SlideAvisoLegal";
import TextAvisoLegal from "./textavisolegal/TextAvisoLegal";

class AvisoLegal extends React.Component {
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