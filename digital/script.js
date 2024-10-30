const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const seconds = document.getElementById('seconds');
const btn = document.getElementById('stop');

//10보다 작은 숫자는 앞에 0을 나타낸다.
//setInterval(함수,시간) : 주기적으로 시간뒤에 함수를 실행함
const timer = setInterval(() => {
    const date_now = new Date();
    //10보다 작으면 변수의 값을 바꾸다보니 const 말고 let 사용
    let hr = date_now.getHours();     //시간
    let min =  date_now.getMinutes(); //분
    let sec = date_now.getSeconds();  //초

    if(hr < 10) {
        hr = "0" + hr
    }
    if(min < 10) {
        min = "0" + min
    }
    if(sec < 10) {
        sec = "0" + sec
    }

    //계산된 시간, 분, 초를 각각 화면에 출력
    hour.textContent = hr;
    minute.textContent = min;
    seconds.textContent = sec;

}, 1000);

//멈춤버튼을 눌렀을때 타이머 멈춤
btn.addEventListener('click',() => {
    clearInterval(timer);
})
