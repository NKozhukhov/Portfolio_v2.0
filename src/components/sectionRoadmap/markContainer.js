import React from 'react'
import "../../style/main.sass"
import MarkBox from "./markBox"
import mark from "../../images/checkMark.png"
import chip from "../../images/chip.png"


class MarkContainer extends React.Component {
    render(){
        return (
            <div className="mark-container">
                <MarkBox markClass="mark1" image={mark}/>
                <MarkBox markClass="mark2" image={mark}/>
                <MarkBox markClass="mark3" image={mark}/>
                <MarkBox markClass="chip" image={chip}/>
            </div>
        )
    }
}

export default MarkContainer 