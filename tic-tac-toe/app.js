const gameboard = document.querySelector("#gameboard");
const info = document.querySelector("#info");
const startCells = ["", "", "", "", "", "", "", "", ""];

//순서
let go = "circle";
info.textContent = "Circle 먼저 시작";

function createBoard() {
    startCells.forEach((_cell, index) => {
        //각각의 셀(9)에 div태그 만들어서 클래스 square 추가 id 추가 클릭 이벤트 추가해서 게임보드에 자식으로 붙인다.
      const cellElement = document.createElement('div');    //div 태그 만든다.
      cellElement.classList.add('square');
      cellElement.id = index;   //id의 이름은 인덱스 번호로 작성
      cellElement.addEventListener('click', addGo);
      gameboard.append(cellElement);
    });
}
  
  createBoard();

function addGo(e) {
    //console.log(e.target);
    const goDisplay = document.createElement('div');
    goDisplay.classList.add(go);
    e.target.append(goDisplay);
    go = go ==="circle" ? "cross" : "circle";
    info.textContent = go + "턴입니다.";
    e.target.removeEventListener("click", addGo);   //클릭 이벤트 제거
    //승리 체크
    checkScore();
};

function checkScore() {
    const allSquares = document.querySelectorAll(".square");    //모든 셀
    const winningCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    winningCombos.forEach(array => {
        const circleWins = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains("circle")
        );
        if (circleWins) {
            info.textContent = "Circle 승리!";
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
            return;
        }

        const crossWins = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains("cross")
        );
        if(crossWins) {
            info.textContent = "Cross 승리!";
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
            return;
        }
    });
}
