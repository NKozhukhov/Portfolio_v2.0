import React from 'react'
import "../../style/main.sass"
import SkillsBox from "./skillsBox"
import Heading from "../heading"


class SectionSkills extends React.Component {
    render(){
        return (
            <section className="skills" id="skills">
                <Heading heading="Мои навыки" />
                <div className="skills-container">
                    <SkillsBox percent="90%" skillName="HTML" outer="outer outer90" icon="bx bxl-html5"/>
                    <SkillsBox percent="70%" skillName="CSS" outer="outer outer70" icon="bx bxl-css3"/>
                    <SkillsBox percent="50%" skillName="GIT" outer="outer outer50" icon="bx bxl-git"/>
                    <SkillsBox percent="40%" skillName="JavaScript" outer="outer outer40" icon="bx bxl-javascript"/>
                </div>
            </section>
        )
    }
}

export default SectionSkills 