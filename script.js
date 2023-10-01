/* Общий стиль страницы */

let html = document.querySelector('html');
html.style.cssText = "font-size: 62.5%; overflow-x: hidden; margin: 0; padding: 0; scroll-behavior: smooth; font-family: Kreadon, Arial, sans-serif;"

let body = document.querySelector('body');
body.style.cssText = "background-color: var(--bg-color); color: #fff; margin: 0;"


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

let script = document.querySelector('script');



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

let arrHref = ["#home", "#skills", "#roadmap", "#portfolio", "#contacts"];
let arrId = ["home", "skills", "roadmap", "portfolio", "contacts"];
let arrValue = ["В начало", "Мои навыки", "Мои планы", "Портфолио", "Контакты"];
for(let i =0; i < arrHref.length; i++) {
let navA = document.createElement('a');
navA.setAttribute('href', arrHref[i]);
navA.textContent = arrValue[i];
navA.style.cssText = "text-decoration: none;font-size: 1.7rem; font-weight: bold; color: var(--text-color); margin-left: 4rem; transition: 0.3s; cursor: pointer;";
nav.insertAdjacentElement('beforeend', navA);

/* изменение цвета при наведении */
navA.onmouseover = function() {
    navA.style.color = "#ebc08d";}
    navA.onmouseleave = function() {
    navA.style.color = "#fff";  }
}



/* создание секций в теле страницы */

let positionX = document.querySelector('body script');

for (let i = 0; i< arrId.length; i++ ){
    let section = document.createElement('section');
    section.className = arrId[i];
  section.id = arrId[i];
  section.style.cssText = "box-sizing: border-box; min-height: 100vh; padding: 15rem 5% 2rem;"
  positionX.insertAdjacentElement("beforebegin", section);
  
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
  skills_Heading.style.cssText = "text-align: center; font-size: 5rem; margin:5rem 0 10rem; color: var(--main-color)";





/* progress bar контейнер */


  let skills_Container = document.createElement('div');
  skills_Container.className = "skills-container";
  skills_Container.style.cssText = "display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 5rem;"
  sectionSkills.insertAdjacentElement('beforeend', skills_Container);

  



let arrIcon=["bx bxl-html5", "bx bxl-css3", "bx bxl-git", "bx bxl-javascript"];
let arrPoint=[90, 70, 50, 40];
let arrLang=["HTML", "CSS", "Git/GitHub", "JavaScript"];
let arrSkillBxClass=["skill-box1", "skill-box2", "skill-box3", "skill-box4"];

  for(i = 0; i < arrIcon.length; i++) {

    let percent = arrPoint[i] + "%" ;

  let skills_Box = document.createElement('div');
  skills_Box.className = arrSkillBxClass[i];
  skills_Box.style.cssText = "flex: 1 1 15rem; background: var(--bg-color); padding: 3rem 2rem 4rem; border-radius: 2rem; text-align: center; border: 0.2rem solid var(--second-bg-color); transition: 0.5s ease;"
  skills_Container.insertAdjacentElement('beforeend', skills_Box);
  skills_Box.onmouseover = function() {
    skills_Box.style.borderColor = 'var(--main-color)';
    skills_Box.style.transform = 'scale(1.1)';
  }
  skills_Box.onmouseleave = function() {
  skills_Box.style.borderColor = 'var(--bg-color)';
  skills_Box.style.transform = 'none';
    }


  let skills_Icon = document.createElement('i');
  skills_Icon.className = arrIcon[i];
  skills_Icon.style.cssText = "font-size: 8rem; color: var(--main-color)";
  skills_Box.insertAdjacentElement('afterbegin', skills_Icon);

  let progressBarOuter = document.createElement('div');
  progressBarOuter.style.cssText = "background: conic-gradient(var(--main-color) calc("+ arrPoint[i] +"*1%), var(--second-bg-color) 0deg);position: relative; width: 15rem; height: 15rem; border-radius: 50%;  margin: 3rem auto 3rem;"
  skills_Box.insertAdjacentElement('beforeend', progressBarOuter);

  let progressBarInner = document.createElement('div');
  progressBarInner.className = "progressInner";
  progressBarInner.style.cssText = "position: absolute; width: 12rem; height: 12rem; border-radius: 50%; color: var(--text-color); background-color: var(--bg-color); margin: 1.5rem";
  progressBarOuter.insertAdjacentElement('beforeend', progressBarInner);

  let progressBar_H3 = document.createElement('h3');
  progressBar_H3.textContent = percent;
  progressBar_H3.style.cssText = "position: center; font-size: 2.5rem; z-index: 1; font-weight: bold; margin: 4rem 0 0.1rem";
  progressBarInner.insertAdjacentElement('beforeend', progressBar_H3);

  let progressBar_H4 = document.createElement('h4');
  progressBar_H4.textContent = arrLang[i];
  progressBar_H4.style.cssText = "position: center;z-index: 1; font-weight: bold;  color: var(--main-color); margin: 0";
  progressBarInner.insertAdjacentElement('beforeend', progressBar_H4);

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

  }




  /* Секция 3. Дорожная карта. */


  let sectionRoadmap = document.querySelector('section.roadmap');
  
let roadmapHeading = document.createElement('h2');
roadmapHeading.className = "roadmapHeading";
roadmapHeading.textContent = "Моя дорожная карта";
roadmapHeading.style.cssText = "text-align: center;  font-size: 5rem; margin-bottom: 11rem";
sectionRoadmap.insertAdjacentElement('afterbegin', roadmapHeading);

let roadmapContainer = document.createElement('div');
roadmapContainer.className = "roadmap_container";
roadmapContainer.style.cssText = "display: flex; justify-content: center; align-items: center; margin-top: 7rem";
sectionRoadmap.insertAdjacentElement('beforeend', roadmapContainer);


/* roadmap_box контейнер */

let roadmapBox = document.createElement('div');
roadmapBox.className = "roadmap_box";
roadmapBox.style.cssText = "position: relative; width: 45rem;height: 45rem;border: 0.4rem solid #fff;border-radius: 50%;";
roadmapContainer.insertAdjacentElement('beforeend', roadmapBox);

/* иконки */

let icon_container = document.createElement('div');
icon_container.className = "icon_container";
icon_container.style.cssText = "position: relative;left: -50%;width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;cursor: pointer;";
roadmapBox.insertAdjacentElement('beforeend', icon_container);

let arrIconBoxAttr = ["content1","content2","content3","content4","content5","content6","content7","content8","content9","content10"];
let arrIconBoxSrc = ["images/html.png","images/css.png","images/git.png","images/js.png","images/api.png","images/react.png","images/TS.png","images/node.png","images/mongodb.png","images/palette.png"];
let arrIconBoxNum = [1,2,3,4,5,6,7,8,9,10];

for(let i =0; i <arrIconBoxAttr.length; i++){

let icon_box = document.createElement('div');
icon_box.className = "icon_box";
icon_box.setAttribute('data-id' , arrIconBoxAttr[i]); 
icon_box.style.cssText = "position: absolute;width: 5rem;height: 5rem;border-radius: 50%;transition: 0.5s ease;border: 0.1rem solid #fff;box-shadow: 0 0 0 0.4rem var(--bg-color), 0 0 0 0.6rem #fff;transform: rotate(calc(360deg / 10 * "+ arrIconBoxNum[i] +"));z-index: 9;transform-origin: 25rem;";
icon_container.insertAdjacentElement('beforeend', icon_box);

let roadmapImg =document.createElement("img");
roadmapImg.src = arrIconBoxSrc[i];
roadmapImg.style.cssText = "position: absolute;top: 0;left: 0;width: 100%;height: 100%;border-radius: 50%;object-fit: cover;transform: rotate(calc(-360deg / 10 * "+ arrIconBoxNum[i] +"));transition: 0.5s ease;filter: grayscale(1);"
icon_box.insertAdjacentElement('afterbegin', roadmapImg);
}

let icon_box_active = document.querySelector('[data-id="content1"]');
icon_box_active.className = "icon_box active";

/* content box */

let content_container = document.createElement('div');
content_container.className = "content_container";
content_container.style.cssText = "position: absolute;inset: 0;overflow: hidden;display: flex;justify-content: center;align-items: center;";
roadmapBox.insertAdjacentElement('beforeend', content_container);


/* крутщиеся полоски */

let content_container_rotate = document.createElement('div');
content_container_rotate.className = "rotate";
content_container_rotate.style.cssText = "position: absolute;inset: 6rem;border: 0.4rem solid transparent;border-left: 0.4rem solid var(--blue-color);border-right: 0.4rem solid var(--peach-color);border-radius: 50%;z-index: 1;pointer-events: none";
content_container.insertAdjacentElement('beforeend', content_container_rotate);

content_container_rotate.animate([
  { transform: 'rotate(0deg)' },
  { transform: 'rotate(360deg)' }
], {
  duration: 3000,
  iterations: Infinity
});


let textCont = ["HTML","CSS","Git/GitHub","JavaScript","API","React","TypeScript","Node.js","MongoDB","Design"];
let iconBoxImgSrc = ["images/html.png","images/css.png","images/git.png","images/js.png","images/api.png","images/react.png","images/TS.png","images/node.png","images/mongodb.png","images/palette.png"];

for (let i = 0; i<textCont.length; i++){

let content_box = document.createElement('div');
content_box.className = "content_box";
content_box.id = arrIconBoxAttr[i]; 
content_box.style.cssText = "position: absolute;transform: scale(0);transition: 0.3s;opacity: 0;display: flex;justify-content: center;align-items: center;";
content_container.insertAdjacentElement('beforeend', content_box);

let content_card = document.createElement('div');
content_card.className = "card";
content_card.style.cssText = "position: relative;display: flex;justify-content: center;align-items: center;flex-direction: column;gap: 2rem;";
content_box.insertAdjacentElement('beforeend', content_card); 

let content_card_icon_box = document.createElement('div');
content_card_icon_box.className = "icon_box";
content_card_icon_box.style.cssText = "display: flex;justify-content: center;align-items: center;flex-direction: column;width: 20rem;height: 20rem;border-radius: 1rem;overflow: hidden;";
content_card.insertAdjacentElement('beforeend', content_card_icon_box); 

let icon_box_img =document.createElement("img");
icon_box_img.src = iconBoxImgSrc[i];
icon_box_img.style.cssText = "position: relative;top: 2rem;left: 0;width: 80%;height: 80%;object-fit: cover;";
content_card_icon_box.insertAdjacentElement('beforeend', icon_box_img);

let icon_box_text_box = document.createElement('div');
icon_box_text_box.style.cssText = "display: flex;justify-content: center;align-items: center;flex-direction: column;margin-top: 2rem;";
content_card_icon_box.insertAdjacentElement('beforeend', icon_box_text_box); 

let icon_box_text = document.createElement('h3');
icon_box_text.textContent = textCont[i];
icon_box_text.style.cssText = "position: relative;font-size: 2.5rem;font-weight: bold;color: var(--main-color);line-height: 1rem;text-transform: uppercase;text-align: center;";
icon_box_text_box.insertAdjacentElement('beforeend', icon_box_text); 

}

let content_box_active = document.querySelector("#content1");
content_box_active.className = "content_box active";


/* переключение класса Active по наведению мышки на ярлыки */

let iconBx = document.querySelectorAll(".icon_box");
let contentBx = document.querySelectorAll(".content_box");


for (let i = 0; i < iconBx.length; i++) {

  iconBx[i].addEventListener("mouseover", function () {

    for (let i = 0; i < contentBx.length; i++) {
      contentBx[i].className = "content_box";
    }

    document.getElementById(this.dataset.id).className = "content_box active";

    let contentBxActive = document.querySelector('.content_box.active');
contentBxActive.style.transform = "scale(1)"; 
contentBxActive.style.opacity = "1"; 
contentBxActive.style.transitionDelay = "0.3s"; 



    for (let i = 0; i < iconBx.length; i++) {
      iconBx[i].className = "icon_box";
    }

    this.className = "icon_box active";

    let IconBxActive = document.querySelector('.icon_box.active');
IconBxActive.style.boxShadow = "0 0 0 0.4rem var(--bg-color), 0 0 0 1rem var(--main-color)";
let IconBxImgActive = document.querySelector('.icon_box.active img');
IconBxImgActive.style.filter = "grayscale(0)"; 

  });


  iconBx[i].addEventListener("mouseleave", function () {
    for (let i = 0; i < contentBx.length; i++) {
      contentBx[i].className = "content_box";
    }
    document.getElementById(this.dataset.id).className = "content_box active";
    let contentBxActive = document.querySelector('.content_box.active');
  contentBxActive.style.transform = "scale(0)"; 
  contentBxActive.style.opacity = "0"; 
  contentBxActive.style.transitionDelay = "none"; 

  for (let i = 0; i < iconBx.length; i++) {
    iconBx[i].className = "icon_box";
  }
  this.className = "icon_box active";
  let IconBxActive = document.querySelector('.icon_box.active');
IconBxActive.style.boxShadow = "0 0 0 0.4rem var(--bg-color), 0 0 0 0.6rem var(--text-color)";
let IconBxImgActive = document.querySelector('.icon_box.active img');
IconBxImgActive.style.filter = "grayscale(1)"; 


});


}


/* ярлыки и фишка  */

let marks = document.createElement('div');
roadmapBox.insertAdjacentElement('afterbegin', marks);

let mark = document.createElement('img');
mark.src = 'images/checkmark.png'
mark.style.cssText = "position: absolute;z-index: 11;width: 4rem;height: 4rem;top: 3.5rem; left: 0";
marks.insertAdjacentElement('beforeend', mark);

let mark2 = document.createElement('img');
mark2.src = 'images/checkmark.png'
mark2.style.cssText = "position: absolute;z-index: 11;width: 4rem;height: 4rem;top: -4.5rem;left: 11rem;";
marks.insertAdjacentElement('beforeend', mark2);

let mark3 = document.createElement('img');
mark3.src = 'images/checkmark.png'
mark3.style.cssText = "position: absolute;z-index: 11;width: 4rem;height: 4rem;top: -5rem;left: 26rem;";
marks.insertAdjacentElement('beforeend', mark3);

let chip = document.createElement('img');
chip.src = 'images/chip.png'
chip.style.cssText = "position: absolute;z-index: 11;width: auto;height: 8rem;top: -4rem;left: 38rem;";
marks.insertAdjacentElement('beforeend', chip);

chip.animate([
  { transform: 'translateY(0)' },
  { transform: 'translateY(2rem)' },
  { transform: 'translateY(0)' },
], {
  duration: 2000,
  iterations: Infinity
});




/* секция 5. Контакты */

let sectionContacts = document.querySelector('section.contacts');

let contacts_Heading = document.createElement('h2');
contacts_Heading.className = "heading";
contacts_Heading.textContent = "Напиши мне!";
contacts_Heading.style.cssText = "text-align: center; font-size: 5rem; margin:6rem 0 8rem; color: var(--main-color)";
sectionContacts.insertAdjacentElement('afterbegin', contacts_Heading);

/* *************************************** */

let form = document.createElement("form");
form.setAttribute('action', "#"); 
form.style.cssText = "max-width: 70rem;margin: 1rem auto 3rem;text-align: center;";
sectionContacts.insertAdjacentElement('beforeend', form);

/* *************************************** */

let inputBox1 = document.createElement('div');
inputBox1.className = "input_box";
inputBox1.style.cssText = "display: flex;justify-content: space-between;flex-wrap: wrap;";
form.insertAdjacentElement('beforeend', inputBox1);

let inputName = document.createElement('input');
inputName.setAttribute('type', "text"); 
inputName.setAttribute('placeholder', "Полное имя"); 
inputName.style.cssText = "border: none;width: 45%;padding: 1.5rem;font-size: 1.6rem;color: var(--text-color);background: var(--second-bg-color);border-radius: 0.8rem;margin: 0.7rem 0;";
inputBox1.insertAdjacentElement('beforeend', inputName);
let inputEmail = document.createElement('input');
inputEmail.setAttribute('type', "email"); 
inputEmail.setAttribute('placeholder', "Почта"); 
inputEmail.style.cssText = "border: none;width: 45%;padding: 1.5rem;font-size: 1.6rem;color: var(--text-color);background: var(--second-bg-color);border-radius: 0.8rem;margin: 0.7rem 0;";;
inputBox1.insertAdjacentElement('beforeend', inputEmail);

/* *************************************** */

let inputBox2 = document.createElement('div');
inputBox2.className = "input_box";
inputBox2.style.cssText = "display: flex;justify-content: space-between;flex-wrap: wrap;";
form.insertAdjacentElement('beforeend', inputBox2);

let inputNumber = document.createElement('input');
inputNumber.setAttribute('type', "text"); 
inputNumber.setAttribute('placeholder', "Номер телефона"); 
inputNumber.style.cssText = "border: none;width: 45%;padding: 1.5rem;font-size: 1.6rem;color: var(--text-color);background: var(--second-bg-color);border-radius: 0.8rem;margin: 0.7rem 0;";;
inputBox2.insertAdjacentElement('beforeend', inputNumber);
let inputSecondEmail = document.createElement('input');
inputSecondEmail.setAttribute('type', "text"); 
inputSecondEmail.setAttribute('placeholder', "Дополнительная почта"); 
inputSecondEmail.style.cssText = "border: none;width: 45%;padding: 1.5rem;font-size: 1.6rem;color: var(--text-color);background: var(--second-bg-color);border-radius: 0.8rem;margin: 0.7rem 0;";;
inputBox2.insertAdjacentElement('beforeend', inputSecondEmail);

/* *************************************** */

let textArea = document.createElement('textarea');
textArea.setAttribute('name', ""); 
textArea.setAttribute('id', ""); 
textArea.setAttribute('cols', "30"); 
textArea.setAttribute('rows', "10"); 
textArea.setAttribute('placeholder', "Ваше сообщение"); 
textArea.style.cssText = "border: none; resize: none; width: 95%;padding: 1.5rem;font-size: 1.6rem;color: var(--text-color);background: var(--second-bg-color);border-radius: 0.8rem;margin: 0.7rem 0";
form.insertAdjacentElement('beforeend', textArea);

/* *************************************** */

let inputBtn = document.createElement('a');
inputBtn.setAttribute('href', '#contacts');
inputBtn.textContent = "Отправить";
inputBtn.style.cssText = "margin-top: 2rem; text-decoration: none; display: inline-block;padding: 1rem 4rem;background: var(--main-color);border-radius: 4rem;box-shadow: 0 0 1rem var(--main-color);font-size: 1.6rem;color: var(--second-bg-color);letter-spacing: 0.1rem;font-weight: bold;transition: 0.5s ease;";
form.insertAdjacentElement('beforeend', inputBtn);

inputBtn.onmouseover = function() {
  inputBtn.style.boxShadow = '0 0 1.5rem var(--main-color)';
}
inputBtn.onmouseleave = function() {
  inputBtn.style.boxShadow = '0 0 1rem var(--main-color)';
  }

/* *************************************** */




/* Footer сайта */

let footer = document.createElement('footer');
footer.className = "footer";
footer.style.cssText = "background: var(--second-bg-color);display: flex;justify-content: space-between;align-items: center;flex-wrap: wrap;padding: 2rem 5%;";
positionX.insertAdjacentElement("beforebegin", footer); 

let footer_text_box = document.createElement('div');
footer_text_box.style.cssText = "";
footer.insertAdjacentElement('afterbegin', footer_text_box); 

let footer_text = document.createElement('p');
footer_text.textContent = "Copyright &copy; 2023 by Me | All Rights Reserved.";
footer_text.style.cssText = "font-size: 1.6rem;";
footer_text_box.insertAdjacentElement('afterbegin', footer_text); 

let footer_icon_box = document.createElement('div');
footer_icon_box.style.cssText = "";
footer.insertAdjacentElement('beforeend', footer_icon_box); 

let footer_icon = document.createElement('a');
footer_icon.setAttribute('href', '#home');
footer_icon.style.cssText = "text-decoration: none; display: inline-flex;justify-content: center;align-items: center;padding: 0.8rem;background: var(--main-color);border-radius: 0.8rem;transition: 0.5s ease;";
footer_icon_box.insertAdjacentElement('afterbegin', footer_icon); 

footer_icon.onmouseover = function() {
  footer_icon.style.boxShadow = '0 0 1rem var(--main-color)';
}
footer_icon.onmouseleave = function() {
  footer_icon.style.boxShadow = 'none';
  } 


let footer_icon_i = document.createElement('i');
footer_icon_i.className = "bx bxs-up-arrow-circle";
footer_icon_i.style.cssText = "font-size: 3.4rem;color: var(--second-bg-color);";
footer_icon.insertAdjacentElement('beforeend', footer_icon_i); 




/* скроллинг страницы */

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(" header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      });
    }
  });
};




//******************************************************************************* */


/* Секция 4. Добавление API на сайт */


let sectionPortfolio = document.querySelector('section.portfolio');
sectionPortfolio.style.backgroundColor = "var(--second-bg-color)";

let portfolio_Heading = document.createElement('h2');
portfolio_Heading.className = "heading";
portfolio_Heading.textContent = "тут будет API";
sectionPortfolio.insertAdjacentElement('afterbegin', portfolio_Heading);
portfolio_Heading.style.cssText = "text-align: center; font-size: 5rem; margin:0 0 6rem; color: var(--text-color)";

let apiCont = document.createElement('div');
apiCont.style.cssText = `display: flex;
justify-content: center;
align-items: center;

flex-direction: column;
gap: 2rem;`;
sectionPortfolio.insertAdjacentElement('beforeend', apiCont);

//*************создание блоков API*************** */


let arrApiName = ["weather", "map", "photo"];

for(let i = 0; i < arrApiName.length; i++){
let apiBox = document.createElement('div');
apiBox.className = arrApiName[i]; 
apiBox.style.cssText = "";
apiCont.insertAdjacentElement('beforeend', apiBox);
}

//*************************API. Weather***********************************  */ 

let apiWeather = document.querySelector(".weather");
apiWeather.style.cssText = "width: 50%;"

let apiWeather_heading = document.createElement('h3');
apiWeather_heading.textContent = "API. Weather.";
apiWeather_heading.style.cssText = "text-align: center; font-size: 3rem; margin:0 0 4rem; color: var(--main-color)";
apiWeather.insertAdjacentElement('beforeend', apiWeather_heading);

let apiWeather_cont = document.createElement('div');
apiWeather_cont.className = 'apiWeather_cont';
apiWeather_cont.style.cssText = `display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 2rem;`
apiWeather.insertAdjacentElement('beforeend', apiWeather_cont);

let apiWeather_box = document.createElement('div');
apiWeather_box.className = 'apiMapBx';
apiWeather_box.style.cssText = `text-align: center;
flex: 1 1 20rem;
background: var(--bg-color);
padding: 6rem 2rem 8rem;
border-radius: 2rem;
border: 0.2rem solid var(--second-bg-color);
transition: all 0.5s ease 0s;
box-shadow:0 0 1rem var(--main-color);`
apiWeather_cont.insertAdjacentElement('beforeend', apiWeather_box);

let p_weatherClass = ["city", "date", "temperature", "status"];
let p_weatherStyle = ["text-align: center; font-size: 3.3rem; margin:1rem 0 2rem; color: var(--main-color); font-weight: bold", 
"text-align: center; font-size: 2rem; margin:0; color: var(--main-color)", 
"text-align: center; font-size: 5rem; margin:0 0 1rem; color: var(--main-color)", 
"text-align: center; font-size: 2rem; margin:0; color: var(--main-color);font-weight: bold"];

for(let i =0; i< p_weatherClass.length; i++){

let p_weather = document.createElement('p');
p_weather.className = p_weatherClass[i];
p_weather.style.cssText = p_weatherStyle[i];
apiWeather_box.insertAdjacentElement('beforeend', p_weather);
}
let aaa = document.querySelector(".date");
let p_weather_icon = document.createElement('div');
p_weather_icon.className = "weatherIcon";
p_weather_icon.style.cssText = "";
aaa.insertAdjacentElement('afterend', p_weather_icon);

let date = new Date();
let month = date.toLocaleString('ru-RU', { month: 'long' });
let day = date.getUTCDate();
let newdate = month + ", " + day;

fetch('https://api.openweathermap.org/data/2.5/weather?q=moscow,ru&appid=cd4ba4b6c271c357674c856245416fbe&lang=ru')
.then(function(resp) {return resp.json()})
.then(function(data) {
  
document.querySelector(".city").textContent = data.name;
document.querySelector(".date").textContent = newdate; 
document.querySelector(".weatherIcon").innerHTML = '<img src ="https://openweathermap.org/img/wn/03d@2x.png">';
document.querySelector(".temperature").innerHTML = Math.round(data.main.temp - 273) + "&deg;";
document.querySelector(".status").textContent = data.weather[0]['description'];
})
.catch(function(){

});  



//***************************  API. Map   ************************************  */ 

let apiMap = document.querySelector(".map");
apiMap.style.cssText = `display:inline-block;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 2rem;`;

let apiMap_heading = document.createElement('h3');
apiMap_heading.textContent = "API. Map.";
apiMap_heading.style.cssText = "text-align: center; font-size: 3rem; margin:10rem 0 4rem; color: var(--main-color)";
apiMap.insertAdjacentElement('beforeend', apiMap_heading);


let apiap_cont = document.createElement('div');
apiap_cont.id = 'map';
apiap_cont.style.cssText = "width: 800px; height: 500px; border: 1rem solid var(--bg-color); box-shadow:0 0 1rem var(--main-color);"
apiMap.insertAdjacentElement('beforeend', apiap_cont);

//************************************************** */


    function init(){
            let myMap = new ymaps.Map("map", {
                center: [55.814427, 37.386324],
                zoom: 14,
                controls: ['routeButtonControl']
            });

let control = myMap.controls.get('routeButtonControl');

let location = ymaps.geolocation.get();

location.then(function(res) {
  let locationText = res.geoObjects.get(0).properties.get('text');
  console.log(locationText);

  control.routePanel.state.set({
    type: 'masstransit',
    fromEnabled: true,
    from: locationText,
    toEnabled: true,
    to: 'бульвар Строителей, 4к1'
    });
});

let placemark = new ymaps.Placemark([55.814427, 37.386324],{},{
iconLayout: 'default#image',
iconImageHref: 'images/logo.png',
iconImageSize: [40,40],
iconImageOffset: [-30,-30]
});
myMap.geoObjects.add(placemark);

myMap.controls.remove('searchControl');

         /* myMap.controls.remove('geolocationControl'); // удалить геолокацию
            myMap.controls.remove('searchControl'); // удалить поиск
            myMap.controls.remove('trafficControl'); // удалить контроль трафика
            myMap.controls.remove('typeSelector'); // удалить тип
            myMap.controls.remove('fullscreenControl'); // удалить кнопку перехода в полноэкранный режим
            myMap.controls.remove('zoomControl'); // удалить контрол зуммирования
            myMap.controls.remove('rulerControl'); // удалить контрол правил
            myMap.behaviors.disable(['scrollZoom']); // отключить скролл карты (опционально) */

}

ymaps.ready(init); 



//***************************  API. Photo   ************************************  */ 


let apiPhoto = document.querySelector(".photo");
apiPhoto.style.cssText = `display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 5rem;
margin-bottom: 10rem`;

let apiPhoto_heading = document.createElement('h3');
apiPhoto_heading.textContent = "API. Photo.";
apiPhoto_heading.style.cssText = "text-align: center; font-size: 3rem; margin:10rem 0 0; color: var(--main-color)";
apiPhoto.insertAdjacentElement('beforeend', apiPhoto_heading);

let apiPhoto_Btn = document.createElement('button');
apiPhoto_Btn.className = 'Photo_Btn';
apiPhoto_Btn.setAttribute('type', "button");
apiPhoto_Btn.textContent = 'Следующая';
apiPhoto_Btn.style.cssText = "background: var(--main-color);border-radius: 2rem;text-align: center; width: 16rem; height: 5rem; border: 0.2rem solid var(--bg-color); box-shadow:0 0 1rem var(--main-color);font-size: 1.7rem;color: var(--dark-color);font-weight: bold;transition: 0.5s ease;"
apiPhoto.insertAdjacentElement('beforeend', apiPhoto_Btn);

apiPhoto_Btn.onmouseover = function() {
  apiPhoto_Btn.style.boxShadow = '0 0 1.5rem var(--main-color)';
}
apiPhoto_Btn.onmouseleave = function() {
  apiPhoto_Btn.style.boxShadow = '0 0 1rem var(--main-color)';
  }

let apiPhoto_Box = document.createElement('div');
apiPhoto_Box.className = 'Photo_img';
apiPhoto_Box.style.cssText = "margin-top: -3rem;max-width: 500px; height: auto; border: 1rem solid var(--bg-color); box-shadow:0 0 1rem var(--main-color);border-radius: 3rem"
apiPhoto.insertAdjacentElement('beforeend', apiPhoto_Box);


let photoImg =document.createElement("img");
photoImg.src = "https://images.dog.ceo/breeds/hound-ibizan/n02091244_5400.jpg";
photoImg.style.cssText = "width: 100%; height: 100%";
photoImg.style.boxSizing  = "border-box";
apiPhoto_Box.insertAdjacentElement('afterbegin', photoImg);



//************************************** */

function fetchHandler () { 
  fetch('https://dog.ceo/api/breeds/image/random')
.then(function(resp) {return resp.json()})
.then(function(data) {
  photoImg.src = data.message
})};


apiPhoto_Btn.addEventListener('click', () => {

  fetchHandler()
});


