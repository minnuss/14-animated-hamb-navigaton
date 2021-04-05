const navContent = document.querySelector('.navigation__content');
const hambBtn = document.querySelector('.navigation__content__button');

hambBtn.addEventListener('click', () => {
    // console.log('clicked')
    navContent.classList.toggle('active');
})