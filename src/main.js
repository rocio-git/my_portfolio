//Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector('.home__container');
const homeheight = home.offsetHeight;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeheight;
});
