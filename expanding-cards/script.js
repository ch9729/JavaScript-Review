//클래스명 .확실히 붙히기!!!!
const panels = document.querySelectorAll('.panel');

panels.forEach(e => {
   e.addEventListener('click', () => {
        removeActiveClasses()
        e.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(e => {
        e.classList.remove('active')
    })
}