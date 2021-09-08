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