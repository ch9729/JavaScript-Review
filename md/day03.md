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