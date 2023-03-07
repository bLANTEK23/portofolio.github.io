
//navabrfixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const backtop = document.querySelector('#back-top')

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        backtop.classList.remove('hidden');
        backtop.classList.add('flex');
    }else{
        header.classList.remove('navbar-fixed');
        backtop.classList.remove('flex');
        backtop.classList.add('hidden');
    }
};


//hambuger 

const hambuger = document.querySelector('#hambuger');
const navMenu = document.querySelector('#nav-menu');

hambuger.addEventListener('click', function () {
    hambuger.classList.toggle('hambuger-active');
    navMenu.classList.toggle('hidden');
}); 

//klik diluar humbuger

window.addEventListener('click', function (e) {
    if(e.target != hambuger && e.target != navMenu) {
        hambuger.classList.remove('hambuger-active');
        navMenu.classList.add('hidden');
    }
});

//darkmode toggle
const checkbox = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

checkbox.addEventListener('click', function() {
    if(checkbox.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }else{
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

//pindah kan toggle

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
   checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }