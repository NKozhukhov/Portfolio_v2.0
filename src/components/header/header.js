import React from 'react'
import "../../style/main.sass"
import Image from '../image'
import logo from '../../images/logo.png'
import Navbar from './navbar'



class Header extends React.Component {
    render(){
return (
    <header class="header">
        <Image className ="logo" image={logo} alt="logo" />
        <Navbar />
    </header>

    
)

    }
}

export default Header 