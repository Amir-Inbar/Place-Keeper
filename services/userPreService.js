let gColors = {};
var gUserData = {};
function onMapNav() {
  window.open('../pages/map.html', '_self');
}

function onMainPage() {
  window.open('../index.html', '_self');
}

function onUserColor(colorSelect, colorBy) {
  if (colorBy === 'bgc') {
    gColors['bgc'] = colorSelect;
  } else if (colorBy === 'txt') {
    gColors['txt'] = colorSelect;
  }

  gUserData['colors'] = gColors;
}

function onUserDate(birthDay) {
  gUserData['dbirth'] = birthDay;
  let astro = [
    'today is your lucky day!',
    'today you are going to die!',
    ' today your are going to get 1000$',
  ];
  let astroPick = astro[Math.floor(Math.random() * astro.length)];

  var modal = document.querySelector('.modal');
  modal.innerHTML = `Let's check your birth of date ${birthDay} astrological forecast!:
  ${astroPick}
  `;
  setTimeout(() => {
    modal.style.display = 'none';
  }, 5000);
  modal.style.display = 'block';
}

function onUserEmail(email) {
  gUserData['email'] = email;
}

function onUserAge(age) {
  var modal = document.querySelector('.modal');
  let ageTxt = document.querySelector('.uAge');
  ageTxt.innerHTML = `Age is: ${age}`;
  gUserData['age'] = age;
  let calcAge = validAge().toString();

  console.log(calcAge);
  modal.style.display = 'block';
  if (calcAge !== age) {
    modal.innerText = 'Please choose your correct age';
    modal.classList.add('not-age');
  } else if (calcAge === age) {
    modal.classList.add('valid-age');
    modal.innerText = 'Thank you!';
  }
}

function validAge() {
  let userAge = new Date(gUserData.dbirth);
  let today = new Date();
  let msDiff = today - userAge;
  return Math.floor(msDiff / (365.25 * 24 * 60 * 60 * 1000));
}

function onUserSubmit(ev) {
  ev.preventDefault();
  saveToStorage('userData', gUserData);
}
