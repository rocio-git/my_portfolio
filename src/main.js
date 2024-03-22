'use strict';

//Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeheight;
});



// Arrow-up버튼을 아래로 스크롤 시 투명하게 처리함
const arrowUp = document.querySelector('.arrow-up');
arrowUp.style.opacity = 0;
document.addEventListener('scroll', () => {
if( window.scrollY > homeHeight / 2) {
arrowUp.style.opacity = 1;
} else {
  arrowUp.style.opacity = 0;
}
});



//Navbar 토글버튼 클릭 처리
const navBarMenu = document.querySelector('.header__menu');
const navBarToggle = document.querySelector('.header__toggle');

navBarToggle.addEventListener('click', () => {
  navBarMenu.classList.toggle('open');
});



//Navbar 메뉴 클릭시 메뉴 자동 닫기
navBarMenu.addEventListener('click', () => {
  navBarMenu.classList.remove('open');
});
