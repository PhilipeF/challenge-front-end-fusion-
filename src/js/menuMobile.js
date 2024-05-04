const btnMenuMobile = document.getElementById('btn-menu-mobile');
const menuMobile = document.getElementById('menu-mobile');

function animateMenuMobile() {    
    menuMobile.classList.toggle('abrir');
    btnMenuMobile.classList.toggle('ativar');
}

menuMobile.addEventListener('click', animateMenuMobile);

