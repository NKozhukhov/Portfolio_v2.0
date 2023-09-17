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



/* создание секций в теле страницы */

for (let i = 0; i< arrId.length; i++ ){
    let section = document.createElement('section');
    section.className = arrId[i];
  section.id = arrId[i];
  section.style.cssText = "min-height: 100vh; padding: 15rem 5% 2rem;"
  body.insertAdjacentElement("beforeend", section);
  
  }



  /* Секция 1. #home. */

  let sectionHome = document.querySelector('section.home');

  /* добавление фото в блок 1 */

let section1_div_img = document.createElement("div");
section1_div_img.className = "imgBx";
sectionHome.insertAdjacentElement('beforeend', section1_div_img);

let mainImg =document.createElement("img");
mainImg.src = "images/img-left.png";
mainImg.style.cssText = "width: 50vh; height: auto;"

section1_div_img.insertAdjacentElement('afterbegin', mainImg);

/* добавление блока с текстом */

let section1_div_contentBox = document.createElement('div');
section1_div_contentBox.className = "home-content";
sectionHome.insertAdjacentElement('afterbegin', section1_div_contentBox);

let section1_h2 = document.createElement('h2');
section1_h2.textContent = 'Привет, меня зовут';
section1_div_contentBox.insertAdjacentElement('beforeend', section1_h2);

let section1_h1 = document.createElement('h1');
section1_h1.textContent = 'Никита Кожухов';
section1_div_contentBox.insertAdjacentElement('beforeend', section1_h1);

let section1_h3 = document.createElement('h3');
section1_h3.textContent = 'А это моя страница Портфолио!';
section1_div_contentBox.insertAdjacentElement('beforeend', section1_h3);

let section1_h3_2 = document.createElement('h3');
section1_h3_2.textContent = 'Я - Начинающий Разработчик';
section1_div_contentBox.insertAdjacentElement('beforeend', section1_h3_2);

let section1_p = document.createElement('p');
section1_p.textContent = 'Моя цель - стать одним из лучших разработчиков в России на языке JavaScript';
section1_div_contentBox.insertAdjacentElement('beforeend', section1_p);

/* добавление иконок */

head.insertAdjacentHTML('beforeend', '<link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"/>')

let section1_div_iconBox = document.createElement('div');
section1_div_iconBox.className = "social-media";
section1_div_contentBox.insertAdjacentElement('beforeend', section1_div_iconBox);

let socialMediaClass = ["bx bxl-vk", "bx bxl-instagram-alt", "bx bxl-whatsapp", "bx bxl-telegram", "bx bxl-github"];
for(let i =0; i < socialMediaClass.length; i++) {
let icon = document.createElement('a');
icon.setAttribute('href', '#');
icon.className = socialMediaClass[i];
section1_div_iconBox.insertAdjacentElement('beforeend', icon);
}

/* добавление кнопки связи */

let section1_btn = document.createElement('a');
section1_btn.setAttribute('href', '#contacts');
section1_btn.className = section1_btn;
section1_btn.textContent = "Связаться со мной";
section1_div_contentBox.insertAdjacentElement('beforeend', section1_btn);
