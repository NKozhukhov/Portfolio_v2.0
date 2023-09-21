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
logo.style.cssText = "width: 8rem; height: auto; filter: drop-shadow(0 0 1.5rem var(--dark-color))";
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
  section.style.cssText = "box-sizing: border-box; min-height: 100vh; padding: 15rem 5% 2rem;"
  body.insertAdjacentElement("beforeend", section);
  
  }



  /* Секция 1. #home. */

  let sectionHome = document.querySelector('section.home');
  sectionHome.style.display = "flex"; 
  sectionHome.style.justifyContent = "space-between";
  sectionHome.style.alignItems = "center";

  /* добавление фото в блок 1 */

let section1_div_img = document.createElement("div");
section1_div_img.className = "imgBx";
section1_div_img.style.boxSizing  = "border-box";
sectionHome.insertAdjacentElement('beforeend', section1_div_img);

let mainImg =document.createElement("img");
mainImg.src = "images/img-left.png";
mainImg.style.width = "70vh";
mainImg.style.boxSizing  = "border-box";
section1_div_img.insertAdjacentElement('afterbegin', mainImg);

/* добавление блока с текстом */

let section1_div_contentBox = document.createElement('div');
section1_div_contentBox.className = "home-content";
sectionHome.insertAdjacentElement('afterbegin', section1_div_contentBox);

let section1_h2 = document.createElement('h2');
section1_h2.textContent = 'Привет, меня зовут';
section1_h2.style.cssText = "font-size: 4rem; font-weight: bold; margin: 0; padding: 0";
section1_div_contentBox.insertAdjacentElement('beforeend', section1_h2);

let section1_h1 = document.createElement('h1');
section1_h1.textContent = 'Никита Кожухов';
section1_h1.style.cssText = "font-size: 6.5rem;font-weight: bold;line-height: 1.2; margin: 0; padding: 0";
section1_div_contentBox.insertAdjacentElement('beforeend', section1_h1);

let section1_h3 = document.createElement('h3');
section1_h3.textContent = 'А это моя страница Портфолио!';
section1_h3.style.cssText = "font-size: 3rem;font-weight: bold; margin: 0; padding: 0";
section1_div_contentBox.insertAdjacentElement('beforeend', section1_h3);

let section1_h3_2 = document.createElement('h3');
section1_h3_2.textContent = 'Я - Начинающий ';
section1_h3_2.style.cssText = "margin: 3rem 0 2rem; font-size: 3rem;font-weight: normal";
section1_div_contentBox.insertAdjacentElement('beforeend', section1_h3_2);

let section1_span = document.createElement('span');
section1_span.className = "mult-text";
section1_span.style.cssText = "font-size: 4rem;font-weight: bold; color: var(--main-color)";
section1_h3_2.appendChild(section1_span);


let section1_p = document.createElement('p');
section1_p.textContent = 'Моя цель - стать одним из лучших разработчиков в России на языке ';
section1_p.style.cssText = "font-size: 2.3rem; margin: 0; padding: 0; max-width: 75vh";
section1_div_contentBox.insertAdjacentElement('beforeend', section1_p);

let section1_span_p = document.createElement('span');
section1_span_p.style.cssText = "color: var(--main-color); font-weight: bold";
section1_span_p.textContent = 'JavaScript!';
section1_p.appendChild(section1_span_p);




/* мульти-текст */

/* мигающий курсор */
let section1_span_cursor = document.createElement('span');
section1_span_cursor.classList.add("cursor");
section1_span_cursor.textContent = ".";
section1_span_cursor.style.cssText = "display: inline-block; width: 0.4rem; background-color: var(--text-color)";
section1_h3_2.appendChild(section1_span_cursor);

function blink() {
  let a = document.getElementsByClassName("cursor");
  for(let i = 0; i < a.length; i++){
    let f = a[i];
    let visib = f.style.visibility;
    f.style.visibility = visib == 'visible' ? 'hidden' : 'visible';
   }
 }
setInterval(blink, 500);



/* анимированный текст */

const textArray = ["JavaScript-Разработчик", "Frontend-Разработчик", "Fullstack-разработчик"];
let textArrayElem = 0;
let symbolIndex = 0;

function type(){
if(symbolIndex < textArray[textArrayElem].length){
section1_span.textContent += textArray[textArrayElem].charAt(symbolIndex);
symbolIndex++;
setTimeout(type, 70);
} else{
setTimeout(erase, 1000);
    }
}

function erase(){
if(symbolIndex > 0){
  section1_span.textContent = textArray[textArrayElem].substring(0, symbolIndex-1);
  symbolIndex--;
  setTimeout(erase, 35);
}
else{
  textArrayElem++;
  if(textArrayElem >= textArray.length) textArrayElem = 0;
  setTimeout(type, 500);
}
}

document.addEventListener("DOMContentLoaded", function(){
  setTimeout(type, 1000);
});



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
icon.style.cssText = "text-decoration: none; display: inline-flex;justify-content: center;align-items: center;width: 4rem;height: 4rem;background: transparent;border: 0.2rem solid var(--main-color);border-radius: 50%;font-size: 2.8rem;color: var(--main-color);margin: 8rem 1.5rem 3rem 0;transition: 0.5s ease;" ;
section1_div_iconBox.insertAdjacentElement('beforeend', icon);

icon.onmouseover = function() {
  icon.style.color = 'var(--second-bg-color)';
  icon.style.background = 'var(--main-color)';
  icon.style.boxShadow = '0 0 1rem var(--main-color)';
}
  icon.onmouseleave = function() {
    icon.style.color = "var(--main-color)";  
    icon.style.background = 'transparent';
    icon.style.boxShadow = 'none';
  }
}



/* добавление кнопки связи */

let section1_btn = document.createElement('a');
section1_btn.setAttribute('href', '#contacts');
section1_btn.className = section1_btn;
section1_btn.textContent = "Связаться со мной";
section1_btn.style.cssText = "text-decoration: none; display: inline-block;padding: 1rem 2.8rem;background: var(--main-color);border-radius: 4rem;box-shadow: 0 0 1rem var(--main-color);font-size: 1.6rem;color: var(--second-bg-color);letter-spacing: 0.1rem;font-weight: bold;transition: 0.5s ease;";
section1_div_contentBox.insertAdjacentElement('beforeend', section1_btn);

section1_btn.onmouseover = function() {
  section1_btn.style.boxShadow = '0 0 1.5rem var(--main-color)';
}
section1_btn.onmouseleave = function() {
  section1_btn.style.boxShadow = '0 0 1rem var(--main-color)';
  }





  /* создание секции 2 */

  let sectionSkills = document.querySelector('section.skills');
  sectionSkills.style.backgroundColor = "var(--second-bg-color)";

  let skills_Heading = document.createElement('h2');
  skills_Heading.className = "heading";
  skills_Heading.innerHTML = "Мои текущие навыки";
  sectionSkills.insertAdjacentElement('afterbegin', skills_Heading);
  skills_Heading.style.cssText = "text-align: center; font-size: 5rem; margin-bottom: 8rem; color: var(--text-color)";





/* progress bar контейнер */


  let skills_Container = document.createElement('div');
  skills_Container.className = "skills-container";
  sectionSkills.insertAdjacentElement('beforeend', skills_Container);

  let skills_Box = document.createElement('div');
  skills_Box.className = "skills-box";
  skills_Container.insertAdjacentElement('beforeend', skills_Box);

  let skills_Icon = document.createElement('i');
  skills_Icon.className = "bx bxl-html5";
  skills_Box.insertAdjacentElement('afterbegin', skills_Icon);

  let progressBar = document.createElement('div');
  progressBar.className = "progress";
  skills_Box.insertAdjacentElement('beforeend', progressBar);

  let progressBar_H3 = document.createElement('h3');
  progressBar_H3.textContent = "90 %";
  progressBar.insertAdjacentElement('beforeend', progressBar_H3);

  let progressBar_H4 = document.createElement('h4');
  progressBar_H4.textContent = "HTML";
  progressBar.insertAdjacentElement('beforeend', progressBar_H4);

/* кнопка */

  let progressBar_btn = document.createElement('a');
progressBar_btn.setAttribute('href', '#');
progressBar_btn.className = progressBar_btn;
progressBar_btn.textContent = "Подробнее";
progressBar_btn.style.cssText = "text-decoration: none; display: inline-block;padding: 1rem 2.8rem;background: var(--main-color);border-radius: 4rem;box-shadow: 0 0 1rem var(--main-color);font-size: 1.6rem;color: var(--second-bg-color);letter-spacing: 0.1rem;font-weight: bold;transition: 0.5s ease;";
skills_Box.insertAdjacentElement('beforeend', progressBar_btn);

progressBar_btn.onmouseover = function() {
  progressBar_btn.style.boxShadow = '0 0 1.5rem var(--main-color)';
}
progressBar_btn.onmouseleave = function() {
  progressBar_btn.style.boxShadow = '0 0 1rem var(--main-color)';
  }


