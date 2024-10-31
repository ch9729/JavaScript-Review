let show = true;    //메뉴 보이기

const container = document.querySelector(".container");
const menu = document.getElementById("menu");
const add =document.getElementById("add");
const items = document.querySelectorAll(".item");    //모든 메뉴아이템
const numbers = ["one", "two", "three", "four", "five", "six"];

container.addEventListener("click", () => {
    if(show) {
        add.style.transform = 'rotate(45deg)';  //45도 회전
        menu.style.transform = 'scale(1)';      //크기 1

        //items.forEach((item,i) => item.classList.add(numbers[i]));
        for(i = 0 ; i < items.length; i++) {
            items[i].classList.add(numbers[i]);
        };
        show = false;   //한번 더 클릭시 else문으로 간다.
    }else{
        add.style.transform = "ratate(0deg)";
        menu.style.transform = "scale(.9)";

        //위에 추가한 클래스들을 제거
        items.forEach((item,i) => item.classList.remove(numbers[i]));
        show = true;    //현재 false인 상태로 유지 되므로 true로 바꿔주기 전까지 실행이 안됨
    }
    
});