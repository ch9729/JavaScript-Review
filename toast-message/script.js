let x;
const toast = document.getElementById("toast");

function showToast() {
    clearTimeout(closeToast, 1000);
    toast.style.transform = "translateX(0)";
    x = setTimeout(() => {
        toast.style.transform = "translateX(400px)";
    }, 4000);
}
function closeToast() {
    toast.style.transform = "translateX(400px)";
}