function isChecked() {
    const checkBox = document.getElementById('my-checkbox');
    const message = document.getElementById('message');

    if(checkBox.checked) {
        message.textContent = "체크됨";
    }else {
        message.textContent = "체크안됨";
    }
}