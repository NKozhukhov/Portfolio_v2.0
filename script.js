/* Общий стиль страницы */

let html = document.querySelector('html');
html.style.cssText = "font-size: 62.5%; overflow-x: hidden; margin: 0; padding: 0; scroll-behavior: smooth; font-family: Kreadon, Arial, sans-serif;"

let body = document.querySelector('body');
body.style.cssText = "background-color: var(--bg-color); color: #fff; "


/* Шрифты */

let head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', '<style> @font-face {font-family: "Kreadon"; font-style: normal; font-weight: normal; src: local("Kreadon"), url("/fonts/regular_Kreadon.ttf") format("ttf");} @font-face {font-family: "Kreadon"; font-style: normal; font-weight: lighter; src: local("Kreadon"), url("/fonts/light_Kreadon.ttf") format("ttf");} @font-face {font-family: "Kreadon"; font-style: normal; font-weight: bold; src: local("Kreadon"), url("/fonts/bold_Kreadon.ttf") format("ttf");} </style>')

/* цветовые стили */

document.documentElement.style.setProperty('--bg-color', '#48416a');
document.documentElement.style.setProperty('--text-color', '#fff');
document.documentElement.style.setProperty('--second-bg-color', '#60578b');
document.documentElement.style.setProperty('--main-color', '#ebc08d');
document.documentElement.style.setProperty('--blue-color', '#9dbfed');
document.documentElement.style.setProperty('--violet-color', '#b79af4');
document.documentElement.style.setProperty('--peach-color', '#eeab9b');
document.documentElement.style.setProperty('--dark-color', '#383258');



/* Шапка сайта */

let header = document.createElement('header');
header.className = 'header';
header.id = 'header';
header.style.cssText = "box-sizing: border-box; position: fixed; top: 0; left: 0; width: 100%; padding: 1rem 5%; background-color: var(--bg-color); display: flex; justify-content: space-between; align-items: center; z-index: 20;"
body.insertAdjacentElement('afterbegin', header);

let logo = document.createElement('img');
logo.className = 'logo';
logo.src = 'images/Logo.png'
logo.style.cssText = "width: 8rem; height: auto; filter: drop-shadow(0 0 1rem var(--dark-color))";
header.insertAdjacentElement('afterbegin', logo);

let nav = document.createElement('nav');
nav.className = 'nav';
nav.id = 'nav';
header.insertAdjacentElement('beforeend', nav);

/* список навигации */

let arrId = ["home", "skills", "roadmap", "portfolio", "contacts"];
let arrValue = ["В начало", "Мои навыки", "Мои планы", "Портфолио", "Контакты"];
for(let i =0; i < arrId.length; i++) {
let navA = document.createElement('a');
navA.id = arrId[i];
navA.textContent = arrValue[i];
navA.style.cssText = "font-size: 1.7rem; font-weight: bold; color: var(--text-color); margin-left: 4rem; transition: 0.3s; cursor: pointer;";
nav.insertAdjacentElement('beforeend', navA);

/* изменение цвета при наведении */
navA.onmouseover = function() {
    navA.style.color = "#ebc08d";}
    navA.onmouseleave = function() {
    navA.style.color = "#fff";  }
}

