const emailId = document.getElementById("email-id");
const errorMsg = document.getElementById("error-msg");
const icon = document.getElementById("icon");
// 이메일 정규 표현식(검색)
const mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

function checker() {
    icon.style.display = 'inline-block';
    if(emailId.value.match(mailRegex)) {    //emailId에 입력한 값과 mailRegex 정규식이 서로 맞게 동일하냐 검사
        icon.innerHTML = '<i class="fas fa-check-circle"></i>';
        icon.style.color = '#2ecc71';   //아이콘의 색상을 #2ecc71색으로 변경
        errorMsg.style.display = 'none';    //에러 메시지 div 없애기
        emailId.style.border = '2px solid #2ecc71';     //이메일란 박스 색상 초록색 지정
        //아무것도 입력을 하지 않았을때
    } else if (emailId.value == '') {
        icon.style.display = 'none';    //아이콘 공간 없애기
        errorMsg.style.display = 'none';    //에러 메시지 div없애기
        emailId.style.border = '2px solid #d1d3d4'; //이메일란 박스 색상 실버 지정
    }else {
        icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        icon.style.color = '#ff2851';   //아이콘 색상 지정
        errorMsg.style.display = 'block';   //에러메세지 출력
        emailId.style.border = '2px solid #ff2851'; //이메일 란 박스 빨간색 지정
    }
}