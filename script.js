const hambBtn = document.querySelector('.hamburger-button');

const navUl = document.querySelector('.nav-ul');

hambBtn.addEventListener('click', menuOnOff);

function menuOnOff() {
    navUl.classList.toggle("none");
}
