import React from 'react'
import "../../style/main.sass"
import Image from "../image"

const IconBox = (props) => {



    return (
            <div id={props.iconId} className={props.className} onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave}>
                <Image image={props.image} />
            </div>
        )
    }

export default IconBox 

