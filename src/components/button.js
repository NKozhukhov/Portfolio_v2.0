import React from 'react'

class Button extends React.Component {
    render(){
        return (
            <a href="#contacts" className="btn">{this.props.text}</a>
        )
    }
}

export default Button 