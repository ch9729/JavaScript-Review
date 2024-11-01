//모든 박스를 boxes 상수에 저장
const boxes = document.querySelectorAll(".box");

//윈도우창에서 스크롤하면 checkBoxes 함수 실행
window.addEventListener("scroll",checkBoxes);

checkBoxes();   //첫 1회 호출

function checkBoxes() {
    //트리거 포인트 화면의 4/5 지점
    const triggerBottom = (window.innerHeight / 5) * 4;

    boxes.forEach( box => {
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < triggerBottom) {
            box.classList.add("show");
        }else {
            box.classList.remove("show");
        }
    });
}