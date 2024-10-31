const uploadInput = document.getElementById("upload-input");
const chosenImage = document.getElementById("chosen-image");
const fileName = document.getElementById("file-name");

uploadInput.onchange = () => {
    const reader = new FileReader();
    const imageFile = uploadInput.files[0]; //선택한 이미지는 files[0] (한개만 선택시)

    reader.readAsDataURL(imageFile);    //파일리더로 이미지의 주소를 읽는다.(경로)
    reader.onload = () => {
        chosenImage.setAttribute("src", reader.result);
    };

    fileName.textContent = imageFile.name;
}