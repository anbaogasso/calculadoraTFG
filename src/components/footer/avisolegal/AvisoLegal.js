import React from "react";

import './AvisoLegal.css';
import SlideAvisoLegal from "./slideavisolegal/SlideAvisoLegal";
import TextAvisoLegal from "./textavisolegal/TextAvisoLegal";

class AvisoLegal extends React.Component {
    render() {
        return (
            <main role="main" className="flex-shrink-0 mt-5">
                <SlideAvisoLegal />
                <TextAvisoLegal />
            </main>
        )
    }
}

export default AvisoLegal;