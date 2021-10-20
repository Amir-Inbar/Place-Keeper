const init = () => {
  navSide();
  changeColor();
};

const navSide = () => {
  const elBurger = document.querySelector('.burger');
  const elNavLink = document.querySelector('.nav-links');
  const elNavLinks = document.querySelectorAll('.nav-links div');

  elNavLink.classList.toggle('nav-active');
  elNavLink.style.opacity = 1;
  elNavLink.style.transition = `transform .9s ease-in`;

  elNavLinks.forEach((link, idx) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navSlide .9s ease forwards ${idx / 7 + 0.5}s`;
    }
  });
  elBurger.classList.toggle('toggle');
};

function onUserPrefs() {
  window.open('../pages/user-prefs.html', '_self');
}

function onMapNav() {
  window.open('../pages/map.html', '_self');
}

function changeColor() {
  let userData = loadFromStorage('userData');
  if (!userData) return;
  var body = document.querySelector('body');

  body.style.background = userData.colors.bgc;
  body.style.color = userData.colors.txt;
}
