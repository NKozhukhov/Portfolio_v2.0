import React from 'react'

class Heading extends React.Component {
    render(){
        return (
                <h2 className="heading">{this.props.heading}</h2>
        )
    }
}

export default Heading 