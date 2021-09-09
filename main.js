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











function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}


