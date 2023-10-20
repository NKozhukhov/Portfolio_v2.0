import React from 'react'
import "../../style/main.sass"
import Image from "../image"


class ContentBox extends React.Component {
    render(){
        return (
            <div className={this.props.className} id={this.props.id}>
                <div className="card">
                    <div className="icon-box">
                        <Image image={this.props.image} />
                        <div className="text-box">
                            <h3>{this.props.text}</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentBox 