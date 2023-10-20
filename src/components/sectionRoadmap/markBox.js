import React from 'react'
import "../../style/main.sass"
import Image from "../image"



class MarkBox extends React.Component {
    render(){
        return (
            <div className={this.props.markClass}>
                <Image image={this.props.image} />
            </div>
        )
    }
}

export default MarkBox 