const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');

const gradient = document.getElementById('gradient');

const h3 = document.querySelector('h3');

// 두개의 컬러입력에 이벤트 달기
color1.addEventListener('input', () => {
    gradient.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
    h3.textContent = gradient.style.background;
});

// color1.addEventListener('input', setColor);  위 코드를 콜백 함수로 작성

color2.addEventListener('input', () => {
    gradient.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
    h3.textContent = gradient.style.background;
})

// color2.addEventListener('input', setColor);  위 코드를 콜백 함수로 작성

//함수 선언문
// function setColor() {
//     gradient.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
// }

//함수 표현식  (표현식은 변수가 생성이 우선이라 코드가 위에 작성 필요)
// const setColor = () => {
//     gradient.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
// }

