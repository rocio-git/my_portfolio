'use strict';

const transitionElement = document.querySelector('.header__menu');
const toggleButton = document.querySelector('.header__toggle');


function isMobileDevice() {
  return window.innerWidth <= 768; // 화면 너비가 768px 이하면 모바일로 간주
}

function toggleElement() {
  if (isMobileDevice()) {
    if (transitionElement.classList.contains('open')) {
      transitionElement.style.opacity = '0'; // 트랜지션 효과 시작을 위해 투명도를 0으로 설정
      setTimeout(() => {
        transitionElement.style.display = 'none'; // display 속성 변경
      }, 300); // 트랜지션 시간과 동일한 시간 지연
      transitionElement.classList.remove('open'); // active 클래스 제거
    } else {
      transitionElement.style.display = 'flex'; // display 속성 변경
      setTimeout(() => {
        transitionElement.style.opacity = '1'; // 투명도를 1로 설정하여 나타나는 효과
      }, 50); // display 속성이 변경되고 나서 바로 적용되지 않으므로 약간의 시간 지연
      transitionElement.classList.add('open'); // active 클래스 추가
    }
  }
}

toggleButton.addEventListener('click', toggleElement);