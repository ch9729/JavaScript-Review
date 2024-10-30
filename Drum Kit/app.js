const btn1 = document.querySelector(".w");

const btnAll = document.querySelectorAll(".drum");

// 모든 버튼 이벤트
for(i = 0; i < btnAll.length ; i++) {
    btnAll[i].addEventListener('click',handleClick);
}
//document.addEventListener('click',handleClick);

//키보드 이벤트
document.addEventListener("keydown",handleKeyboard);

function handleClick(e) {
    //e.target : 내가 선택한 버튼
    const name = e.target.className[0]; //클래스 명이 2개라서 그중 첫번쨰 클래스에 찾아가기 위해
    drumSound(name);
    animation(name);
}

function handleKeyboard(e) {
    let key = e.key;    //입력한 키보드의 버튼을 key변수명으로 지정
    drumSound(key);
    animation(key);
}

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

function animation(key) {
    const btn = document.querySelector('.' + key);
    btn.classList.add('pressed'); //클래스를 추가
    setTimeout(() => {  //특정 시간이 지난 다음에 코드를 실행하는 함수(0.2초 뒤에 활성화)
        btn.classList.remove('pressed');    
    } , 200);   //0.2초 뒤에 클래스를 제거
}