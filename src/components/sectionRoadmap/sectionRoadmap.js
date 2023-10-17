import React from 'react'
import "../../style/main.sass"
import Heading from "../heading"
import IconContainer from "./iconContainer"
import ContentContainer from "./contentContainer"
import MarkContainer from "./markContainer"


class SectionRoadmap extends React.Component {
    render(){
        return (
            <section className="roadmap" id="roadmap">
                <Heading heading="Дорожная карта" />
                <div className="roadMap-container">
                    <div className="roadMap-box">
                        <MarkContainer />
                        <IconContainer />
                        <ContentContainer />
                    </div>
                </div>
            </section>
        )
    }
    

}

export default SectionRoadmap 