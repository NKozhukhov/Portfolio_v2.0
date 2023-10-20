
import React from 'react'
import Button from "../button"
import ProgressBar from "./progressBar"

class SkillsBox extends React.Component {
    render(){
        return (
            <div className="skills-box">
                <i className={this.props.icon}></i>
                <ProgressBar percent={this.props.percent} skillName={this.props.skillName} outer={this.props.outer}/>
                <Button text="Подробнее" />
            </div>
        )
    }
}

export default SkillsBox 