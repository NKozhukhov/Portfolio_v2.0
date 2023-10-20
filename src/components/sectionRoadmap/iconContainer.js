import React, {useState} from 'react'
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

const IconContainer = () => {

    const [active, setActive] = useState(false)
    const handleMouseOver = () => {setActive(true)}
    const handleMouseLeave = () => {setActive(false)}

    return (
        <div className="icon-container">
        <IconBox iconId="content1" image={html} className={`${active ? "icon-box active" : "icon-box"}`} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
        <IconBox iconId="content2" image={css} className={`${active ? "icon-box active" : "icon-box"}`} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
        <IconBox iconId="content3" image={git} className={`${active ? "icon-box active" : "icon-box"}`} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
        <IconBox iconId="content4" image={js} className={`${active ? "icon-box active" : "icon-box"}`} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
        <IconBox iconId="content5" image={api} className={`${active ? "icon-box active" : "icon-box"}`} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
        <IconBox iconId="content6" image={react} className={`${active ? "icon-box active" : "icon-box"}`} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
        <IconBox iconId="content7" image={ts} className={`${active ? "icon-box active" : "icon-box"}`} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
        <IconBox iconId="content8" image={node} className={`${active ? "icon-box active" : "icon-box"}`} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
        <IconBox iconId="content9" image={db} className={`${active ? "icon-box active" : "icon-box"}`} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
        <IconBox iconId="content10" image={palette} className={`${active ? "icon-box active" : "icon-box"}`} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
        </div>
    )
}


export default IconContainer 