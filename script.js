AOS.init()
const $navToggler = document.querySelector('.navbar-toggler-icon')
const $nav = document.getElementById('menu')


let menuToggle = false

$navToggler.addEventListener('click', function () {
    
    if (menuToggle === false) {
        $nav.style.display = 'block'
         menuToggle = true
    } else if (menuToggle === true) {
        $nav.style.display = 'none'
        menuToggle = false
    }
})

window.addEventListener('resize', function (){
    if (window.innerWidth >= 768) {
    $nav.style.display = 'none'
    menuToggle = false
    } else if (window.innerWidth > 769) {
        $nav.style.display = 'none'
        }
})