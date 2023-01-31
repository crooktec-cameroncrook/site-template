const navBar = document.querySelector('.home-nav');
const hamButton = document.querySelector('#ham');

hamButton.addEventListener('click', () => {
    navBar.classList.toggle('responsive-nav');
    console.log('Working');
})