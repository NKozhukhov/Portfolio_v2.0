import React from 'react'
import "../../style/main.sass"
import ContentBox from "./contentBox"
import html from "../../images/html.png"
import css from "../../images/css.png"
import git from "../../images/git.png"
import js from "../../images/js.png"
import api from "../../images/api.png"
import react from "../../images/react.png"
import ts from "../../images/ts.png"
import node from "../../images/node.png"
import db from "../../images/mongodb.png"
import palette from "../../images/palette.png"



class ContentContainer extends React.Component {
    render(){
        return (
            <div className="content-container">
                <div className="rotate">
                </div>
                <ContentBox className="content-box active" image={html} id="content1" text="HTML"/>
                <ContentBox className="content-box" image={css} id="content2" text="CSS"/>
                <ContentBox className="content-box" image={git} id="content3" text="GIT"/>
                <ContentBox className="content-box" image={js} id="content4" text="JavaScript"/>
                <ContentBox className="content-box" image={api} id="content5" text="API"/>
                <ContentBox className="content-box" image={react} id="content6" text="REACT"/>
                <ContentBox className="content-box" image={ts} id="content7" text="TypeScript"/>
                <ContentBox className="content-box" image={node} id="content8" text="NodeJS"/>
                <ContentBox className="content-box" image={db} id="content9" text="MongoDB"/>
                <ContentBox className="content-box" image={palette} id="content10" text="Design"/>
            </div>
        )
    }
}

export default ContentContainer 