import React from 'react'
import SocialMedia from "./socialMedia"
import Button from "../button"
import MultiText from "./multiText"

class HomeContent extends React.Component {
    render(){
        return (
            <div className="home-content">
                <h2>Привет, меня зовут</h2>
                <h1>Никита Кожухов</h1>
                <h3>А это моя страница Портфолио!</h3>
                <MultiText />
                <p>Моя цель - стать одним из лучших разработчиков в России на языке<span> JavaScript </span>!</p>
                <SocialMedia />
                <Button text="Связаться со мной"/>
            </div>
        )
    }
}

export default HomeContent 