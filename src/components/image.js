import React from 'react'

class Image extends React.Component {
    render(){
        return (
            <img className={this.props.className} src={this.props.image} alt={this.props.alt}/>
        )
    }
}

export default Image 