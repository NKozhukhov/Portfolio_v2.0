import React from 'react'
import HomeContent from './homeContent'
import Image from '../image'
import mainImage from '../../images/img-left.png'
import "../../style/main.sass"





class SectionHome extends React.Component {
    render(){
        return (
            <section className="home" id="home">
                <HomeContent />
                <Image className="home-image" image={mainImage} alt="" />
            </section>
        )
    }
}

export default SectionHome 