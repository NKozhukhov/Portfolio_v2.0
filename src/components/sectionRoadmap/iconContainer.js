import React from 'react'
import "../../style/main.sass"
import IconBox from "./iconBox"
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




class IconContainer extends React.Component {
    render(){
        return (
            <div className="icon-container">
            <IconBox className="icon-box active" iconId="content1" image={html}/>
            <IconBox  className="icon-box" iconId="content2" image={css}/>
            <IconBox  className="icon-box" iconId="content3" image={git}/>
            <IconBox  className="icon-box" iconId="content4" image={js}/>
            <IconBox  className="icon-box" iconId="content5" image={api}/>
            <IconBox  className="icon-box" iconId="content6" image={react}/>
            <IconBox  className="icon-box" iconId="content7" image={ts}/>
            <IconBox  className="icon-box" iconId="content8" image={node}/>
            <IconBox  className="icon-box" iconId="content9" image={db}/>
            <IconBox  className="icon-box" iconId="content10" image={palette}/>
        </div>
        )
    }
}

export default IconContainer 