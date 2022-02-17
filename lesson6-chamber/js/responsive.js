function showNav() {
    const button = document.querySelector('.button');
    const mainnav = document.querySelector('.navigation')
    button.addEventListener('click', () => {mainnav.classList.toggle('open')}, false);
    window.onresize = () => {if (window.innerWidth > 900) mainnav.classList.remove('open')};
  }