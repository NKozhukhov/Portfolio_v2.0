import React from 'react'

class Navbar extends React.Component {
    render(){
        return (
            <nav className="navbar">
                <a href="#home" className="active">В начало</a>
                <a href="#skills">Мои навыки</a>
                <a href="#roadmap">Мои планы</a>
                <a href="#portfolio">Портфолио</a>
                <a href="#contacts">Контакты</a>
            </nav>
        )
    }
}

export default Navbar 