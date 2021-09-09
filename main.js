'use strict'


// Navbar가 스크롤 될때 투명과 불투명 반응형
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height; 
document.addEventListener('scroll',() =>{
    if(window.scrollY > navbarHeight){
    navbar.classList.add('navbar--dark');
}
    else{
        navbar.classList.remove('navbar--dark');

    }
}); 


//Navbar btn 눌렀을때 원하는 Section으로 Scrolling

const navbarMenu =document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event)  =>{
 const target = event.target;
 const link = target.dataset.link;
 if (link == null){
     return;
 }

 scrollIntoView(link);
});


//  Contact Me 버튼  프로그래밍
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});



//Home Scroll에 따른 Home 투명도 변환

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () =>{
    home.style.opacity = 1-window.scrollY/homeHeight;
});




//Scroll 될 때 Arrow Up 버튼 나타나게
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=>{
    if(window.scrollY > homeHeight /2){
    arrowUp.classList.add('visible');
    }

    else{
        arrowUp.classList.remove('visible');
    }
});


//Arrow btn 누를때 맨위로 올라가게
arrowUp.addEventListener('click', () =>{

    scrollIntoView('#home');
});




//Project 항목 버튼 누를때 원하는 항목만 보이게
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e)=>{
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    console.log(filter);
    if(filter == null){
        return;
    }
projectContainer.classList.add('anim-out');

    //이전 선택된 박스에서 선택된 액티브 없애고 다른애로 옮겨가기

    const active = document.querySelector('.categories__btn.selected');
    active.classList.remove('selected');
    const target = 
    e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');

    setTimeout(()=>{
        projects.forEach((project)=>{
            if(filter === '*' || filter === project.dataset.type){
                project.classList.remove('invisible');
        }
                    else{
                        project.classList.add('invisible');
        }
        });
        projectContainer.classList.remove('anim-out');},300);
});


function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}


