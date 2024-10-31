const filterButtons = document.querySelectorAll("#filter-buttons button")   //filter-buttons안의 button선택
const filterableCards = document.querySelectorAll("#filterable-cards .card");

//3개의 필터버튼에 클릭 이벤트 발생시 함수 filterCards 실행
filterButtons.forEach(button => button.addEventListener('click', filterCards));

//필터 선택에 따라서 맞는 카드만 보여주거나 숨기기
function filterCards(e) {
    //모든 필터버튼의 active클래스를 제거한 후 클릭한 버튼에 active 클래스 넣기
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

    //필터와 이름이 같거나 모두 선택이면 show 클래스로 바꾸기 
    filterableCards.forEach(card => {
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.remove("hide");
        }
        card.classList.add("hide");
    });
};