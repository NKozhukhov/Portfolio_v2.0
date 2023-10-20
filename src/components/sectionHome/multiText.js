import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function MultiText() {

    const [text] = useTypewriter({
        words: ["JavaScript-Разработчик", "Frontend-Разработчик", "Fullstack-разработчик"],
        loop: {},
        typeSpeed: 70,
        deleteSpeed: 35,
        
    })

    return (
        <h3>
            Я - Начинающий{' '}
            <span>{text}</span>
            <Cursor />
        </h3>
    )
}


export default MultiText 