let html = document.querySelector('html');
html.style.cssText = "font-size: 62.5%; overflow-x: hidden; margin: 0; padding: 0; box-sizing: border-box; text-decoration: none; border: none; outline: none; scroll-behavior: smooth; font-family: Kreadon, Arial, sans-serif;"

let body = document.querySelector('body');
body.style.cssText = "background-color:  #48416a; color: #fff; "


/* Шрифты */

let head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', '<style> @font-face {font-family: "Kreadon"; font-style: normal; font-weight: normal; src: local("Kreadon"), url("/fonts/regular_Kreadon.ttf") format("ttf");} @font-face {font-family: "Kreadon"; font-style: normal; font-weight: lighter; src: local("Kreadon"), url("/fonts/light_Kreadon.ttf") format("ttf");} @font-face {font-family: "Kreadon"; font-style: normal; font-weight: bold; src: local("Kreadon"), url("/fonts/bold_Kreadon.ttf") format("ttf");} </style>')




