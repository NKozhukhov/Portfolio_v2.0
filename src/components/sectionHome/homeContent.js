import React from 'react'
import SocialMedia from "./socialMedia"
import Button from "../button"

class HomeContent extends React.Component {
    render(){
        return (
            <div className="home-content">
                <h2>Привет, меня зовут</h2>
                <h1>Никита Кожухов</h1>
                <h3>А это моя страница Портфолио!</h3>
                <h3>Я - Начинающий <span className="mult-text"></span></h3>
                <p>Моя цель - стать одним из лучших разработчиков в России на языке<span> JavaScript </span>!</p>
                <SocialMedia />
                <Button text="Связаться со мной"/>
            </div>
        )
    }
}

export default HomeContent 