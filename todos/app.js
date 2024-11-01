const addForm = document.querySelector(".add"); //입력 폼
const list = document.querySelector('.todos');
const search = document.querySelector('.search input'); //클래스 search 의 입력창

//검색어로 필터링 함수
const filterTodos = (term) => {
    Array.from(list.children)
    .filter((todo) => !todo.textContent.includes(term))
    .forEach(todo => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo) => todo.textContent.includes(term))
    .forEach(todo => todo.classList.remove('filtered'));
}

search.addEventListener("keyup", () => {
    const term = search.value.trim();
    filterTodos(term);
    //console.log(term);
})

// 할일 추가 함수
const generateTemplate = (todo) => {
    const html= `<li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
          <i class="fas fa-edit edit"></i>
        </li>`;
    list.innerHTML += html;
}

//submit 입력창에서 내용을 입력하고 엔터하면 자동을 발생
addForm.addEventListener('submit', e => {
    e.preventDefault(); //서버로 제출 이벤트를 중지
    const todo = addForm.add.value.trim();  //입력한 할일을 공백제거한 후 변수로 저장
    if(todo.trim()){    //내용이 하나도 없을때(공백일때)
        generateTemplate(todo);
        addForm.reset();    //안의 내용 초기화
    }
});

list.addEventListener('click', e => {
    //클릭한 것이 휴지통 아이콘이 맞으면
    if(e.target.classList.contains('delete')) { //class이름중 delete명이 있는지 확인
        e.target.parentElement.remove();    //누른 부모태그를 삭제하기 위해선 parentElement사용
    }
    //클릭한 것이 수정 아이콘이 맞으면
    if(e.target.classList.contains('edit')) {
        alert("미구현");
    }
});