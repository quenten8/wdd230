function showNav() {
    const button = document.querySelector('.button');
    const mainnav = document.querySelector('.navigation')
    button.addEventListener('click', () => {mainnav.classList.toggle('open')}, false);
    window.onload = () => {if (window.innerWidth > 900) mainnav.classList.add('open')};
    window.onresize = () => {if (window.innerWidth > 900) mainnav.classList.add('open')};
  }