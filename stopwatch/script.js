const startTimer = document.getElementById('startTimer');
const pauseTimer = document.getElementById('pauseTimer');
const resetTimer = document.getElementById('resetTimer');
let [milliseconds, seconds, minutes, hours] = [0,0,0,0];
let timerDisplay = document.querySelector(".timerDisplay");
let timer = null;

//시작버튼 이벤트
startTimer.addEventListener('click',() => {
    //클릭하면 타이머를 시작
    if(timer != null){  //이미 타이머 실행중
        clearInterval(timer);   //만약 시작 버튼을 여러번 클릭시 ex)참조값으로 예를 들었을때 첫번때 참조값은 쌓이지만 두번째 참조값만 없애므로 계속 실행이 진행된다.
        //return; 이안되는 이유는 해당 이벤트를 밖으로 빠져나오므로 사용이 불가
    }
    timer = setInterval(displayTimer,10);   //10ms 마다 함수 실행
});

//멈추기
pauseTimer.addEventListener('click',() => {
    clearInterval(timer);
});

//리셋하기
resetTimer.addEventListener('click',() => {
    clearInterval(timer);
    [milliseconds, seconds, minutes, hours] = [0,0,0,0];
    timerDisplay.textContent = '00 : 00 : 00 : 000 ';
})

function displayTimer() {
    //10ms 마다 함수 실행
    milliseconds += 10;
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerDisplay.textContent = `${h} : ${m} : ${s} : ${ms}`;
}