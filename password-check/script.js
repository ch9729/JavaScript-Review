function checkPassword() {
    const password1 = document.getElementById('password').value;
    const password2 = document.getElementById('cnfrm-password').value;
    const message = document.getElementById('message');

    if(password1.length >= 4) {
        if(password1 == password2) {
            message.style.display = 'inline';
            message.textContent = "패스워드 매치";
            message.style.backgroundColor = 'green';
    
        }else if(password1 != password2) {
            message.style.display = 'inline';
            message.textContent = "패스워드가 틀립니다.";
            message.style.backgroundColor = 'red';
        }else {
            message.style.display = 'none';
        }
        
    }else{
        alert("4자리 이상 입력하세요.")
        message.textContent = "";
    }
}