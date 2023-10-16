import React from 'react'
import "./style/main.sass"
import Header from './components/header/header'
import SectionHome from './components/sectionHome/sectionHome'
import SectionSkills from './components/sectionSkills/sectionSkills'
import SectionRoadmap from './components/sectionRoadmap/sectionRoadmap'

class App extends React.Component {
    render(){
return (
    <div>
        <Header />
        <SectionHome />
        <SectionSkills />
        <SectionRoadmap />
    </div>
    
)

    }
}

export default App 