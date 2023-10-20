import React from 'react'
import "../../style/main.sass"

class Input extends React.Component {
    render(){
        return (
            <input type={this.props.type} placeholder={this.props.placeholder} className ={this.props.className} value={this.props.value} />
        )
    }
    

}

export default Input 