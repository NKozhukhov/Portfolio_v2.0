import React from 'react'
import "./style/main.sass"
import Header from './components/header/header'
import SectionHome from './components/sectionHome/sectionHome'
import SectionSkills from './components/sectionSkills/sectionSkills'
import SectionRoadmap from './components/sectionRoadmap/sectionRoadmap'
import SectionApi from './components/sectionApi/sectionApi'
import SectionContacts from './components/sectionContacts/sectionContacts'
import Footer from './components/footer/footer'


class App extends React.Component {
    render(){
return (
    <div>
        <Header />
        <SectionHome />
        <SectionSkills />
        <SectionRoadmap />
        <SectionApi />
        <SectionContacts />
        <Footer />

    </div>
    
)

    }
}

export default App 