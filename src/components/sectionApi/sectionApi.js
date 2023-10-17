import React from 'react'
import "../../style/main.sass"
import Heading from "../heading"
import Weather from "./weather"
import Map from "./map"
import Pictures from "./pictures"

class SectionApi extends React.Component {
    render(){
        return (
            <section className="portfolio" id="portfolio">
                <Heading heading="API" />
                    <div className="api-container">
                        <Weather />
                        <Map />
                        <Pictures />
                    </div>
            </section>
        )
    }
    

}

export default SectionApi 