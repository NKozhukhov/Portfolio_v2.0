import React from 'react'
import "./style/main.sass"
import Header from './components/header/header'
import SectionHome from './components/sectionHome/sectionHome'
import SectionSkills from './components/sectionSkills/sectionSkills'

class App extends React.Component {
    render(){
return (
    <div>
        <Header />
        <SectionHome />
        <SectionSkills />
    </div>
    
)

    }
}

export default App 