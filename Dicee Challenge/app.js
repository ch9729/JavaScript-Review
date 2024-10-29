const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const h1 = document.querySelector('h1');

//랜덤숫자 1-6까지 만들어 변수에 입력
let r1 = Math.floor(Math.random() * 6 + 1);
let r2 = Math.floor(Math.random() * 6 + 1);

img1.setAttribute('src',`/Dicee Challenge/images/dice${r1}.png`);
img2.setAttribute('src',`/Dicee Challenge/images/dice${r2}.png`);

// 이긴 플레이어를 화면에 표시
if(r1 > r2){
    h1.textContent = "🚩Player1 Win"
}else if (r1 < r2){
    h1.textContent = "Player2 Win🚩"
}else {
    h1.textContent = "Draw!"
}