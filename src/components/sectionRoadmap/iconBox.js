import React from 'react'
import "../../style/main.sass"
import Image from "../image"

class IconBox extends React.Component {
    render(){
        return (
            <div className={this.props.className} id={this.props.iconId}>
                <Image image={this.props.image}/>
            </div>
        )
    }
}

export default IconBox 