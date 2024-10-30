## Event효과 주사위

- html
```javaScript
<body>

    <div class="container">
      <h1>Refresh Me</h1>

      <div class="dice">
        <p>Player 1</p>
        <img class="img1" src="">
      </div>

      <div class="dice">
        <p>Player 2</p>
        <img class="img2" src="">
      </div>
      
    </div>

      <script src="app.js"></script>
  </body>
```

- 랜덤 숫자 1~6을 변수에 입력
```javaScript
let r1 = Math.floor(Math.random() * 6 + 1);
let r2 = Math.floor(Math.random() * 6 + 1);
```
- 지정된 요소의 속성 값을 설정
```javaScript
// setAttribute : setAttribute(name, value) 
// name : 값을 설정할 속성의 이름을 지정하는 문자열
// value : 속성에 할당할 값이 포함된 문자열
img1.setAttribute('src',`images/dice${r1}.png`);
img2.setAttribute('src',`images/dice${r2}.png`);
// 클래스명 img1,img2 각각의 src속성에 값을 할당
```

---
## Event효과 백그라운드 적용

- html
```javaScript
<body id="gradient">
    <h1>벡그라운드 생성기</h1>
	<input class="color1" type="color" name="color1" value="#00ff00">
	<input class="color2" type="color" name="color2" value="#ff0000">
	<h2>Current CSS Background</h2>
	<h3></h3>
	<script type="text/javascript" src="app.js"></script>
</body>
```

- html내 요소를 찾아 변수 지정
```javaScript
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');

const gradient = document.getElementById('gradient');
```

- 두개의 컬러입력에 이벤트 달기
```javaScript
//color1,color2 각 변수에 색을 지정할시 점진적으로 변화하는 css 생성
//linear-gradient(to right,색상1,색상2) : 오른쪽 진행 순으로 색상이 점차 변화

color1.addEventListener('input', () => {
    gradient.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
});

color2.addEventListener('input', () => {
    gradient.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
});
```

---
## Event효과 클릭,키보드 입력에 따른 각각의 소리 출력
- html
```javaScript
<body>

  <h1 id="title">Drum 🥁 Kit</h1>
  <div class="set">
    <button class="a drum">a</button>
    <button class="s drum">s</button>
    <button class="d drum">d</button>
    <button class="f drum">f</button>
    <button class="g drum">g</button>
    <button class="h drum">h</button>
    <button class="j drum">j</button>
  </div>


  <footer>
    Made with ❤️ in London.
  </footer>

  <script src="app.js"></script>
  
</body>
```

- html내 요소를 찾아 변수 지정
```javaScript
//querySelectorAll : 특정 요소 내 지정한 모든 요소를 반환
const btnAll = document.querySelectorAll(".drum");
```

- 소리 출력 메서드 구현
```javaScript
//value의 값이 일치하면 해당 소리를 출력
function drumSound(value) {
    if(value == 'a'){
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play()
    }else if (value == 's') {
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play()
    }else if(value == 'd') {
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play()
    }else if(value == 'f') {
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play()
    }else if(value == 'g') {
        var audio = new Audio('sounds/snare.mp3');
        audio.play()
    }else if(value == 'h') {
        var audio = new Audio('sounds/crash.mp3');
        audio.play()
    }else if(value == 'j') {
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play()
    }
}
```

- 버튼 이벤트
```javaScript
//반복문을 사용하여 해당 값을 클릭시 handleClick(콜백 함수)가 발생
for(i = 0; i < btnAll.length ; i++) {
    btnAll[i].addEventListener('click',handleClick);
}

function handleClick(e) {
    //e.target : 내가 선택한 버튼
    const name = e.target.className[0]; //클래스 명이 2개라서 그중 첫번쨰 클래스에 찾아가기 위해
    drumSound(name);
};
```

- 키보드 이벤트
```javaScript
//keydown : Key를 눌렀을 때 발생하는 Event 함수
document.addEventListener("keydown",handleKeyboard);

function handleKeyboard(e) {
    let key = e.key;    //입력한 키보드의 버튼을 key변수명으로 지정
    drumSound(key);
};
```

---

## 현재시간 불러오기

- html
```javaScript
<body>
    <div class="clock">
        <div id="hour">00</div>
        <span>:</span>
        <div id="minute">00</div>
        <span>:</span>
        <div id="seconds">00</div>
    </div>
    <button type="button" id="stop">멈춤</button>
    <!--Script-->
    <script src="script.js"></script>
</body>
```

- html내 요소를 찾아 변수 지정
```javaScript
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const seconds = document.getElementById('seconds');
const btn = document.getElementById('stop');
```

- 날짜를 저장할 수 있고, 날짜와 관련된 메서드도 제공해주는 내장 객체 생성
```javaScript
    const date_now = new Date();
    let hr = date_now.getHours();
    let min = date_now.getMinutes();
    let sec = date_now.getSeconds();
```

- 주기적으로 업데이트를 하기 위한 메서드 작성(new Date()와 같이 활용)
```javaScript
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

}, 1000); //밀리초로 계산되므로 1000 = 1초
```

- 타이머 멈춤 버튼
```javaScript
//setInterval 함수의 반환값을 변수에 할당해두고, clearInterval을 호출하여 반복을 중단
btn.addEventListener('click',() => {
    clearInterval(timer);
})
```

#### 요약
- new Date()를 통하여 현재의 시간, 분, 초, 요일 등을 가져올수 있다.
- get`가져올 날`()을 통해 현재 가져올 데이터를 꺼내올수 있다.
- setInterval(콜백함수, 시간) : '시간(ms)을 간격으로 '콜백함수'를 반복 호출 하는 함수
- clearInterval(변수) : 반복 중단

---

## 스톱워치 만들기
- html
```javaScript
<body>
    <div class="container">
      <div class="timerDisplay">00 : 00 : 00 : 000</div>
      <div class="buttons">
        <button id="startTimer">시작</button>
        <button id="pauseTimer">멈춤</button>
        <button id="resetTimer">리셋</button>
      </div>
    </div>
    <!--Script-->
    <script src="script.js"></script>
  </body>
```

- html내 요소를 찾아 변수 지정
```javaScript
const startTimer = document.getElementById('startTimer');
const pauseTimer = document.getElementById('pauseTimer');
const resetTimer = document.getElementById('resetTimer');
//여러변수를 한번에 선언하고 초기화
let [milliseconds, seconds, minutes, hours] = [0,0,0,0];
let timerDisplay = document.querySelector(".timerDisplay");
let timer = null;
```

- 타이머 표시 함수
```javaScript
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
    // milliseconds는 10ms마다 증가하고 milliseconds가 1000이 되면 1초가 되며 이때 0으로 초기화 ...
}
```

- 시작 이벤트 
```javaScript
startTimer.addEventListener('click',() => {
    //클릭하면 타이머를 시작
    if(timer != null){  //이미 타이머 실행중
        clearInterval(timer);   //만약 시작 버튼을 여러번 클릭시 ex)참조값으로 예를 들었을때 첫번때 참조값은 쌓이지만 두번째 참조값만 없애므로 계속 실행이 진행된다.
        //return; 이안되는 이유는 해당 이벤트를 밖으로 빠져나오므로 사용이 불가
    }
    timer = setInterval(displayTimer,10);   //10ms 마다 함수 실행
});
```

- 멈춤
```javaScript
pauseTimer.addEventListener('click',() => {
    clearInterval(timer);
});
```

- 리셋
```javaScript
resetTimer.addEventListener('click',() => {
    clearInterval(timer);
    [milliseconds, seconds, minutes, hours] = [0,0,0,0];
    timerDisplay.textContent = '00 : 00 : 00 : 000 ';
});
//멈추고 나면 변수들이 다시 0으로 초기화가 되며 text값들은 0으로 변경
```

---