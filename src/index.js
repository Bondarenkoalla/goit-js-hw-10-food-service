import './sass/main.scss';
import listData from './menu.json';
import itemTpl from './templates/list-item.hbs';

const menu = document.querySelector('.js-menu');
const menuItem = createListItem(listData);
menu.insertAdjacentHTML('beforeend', menuItem);
function createListItem(listData) {
  return itemTpl(listData);
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkbox = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');

checkbox.addEventListener('change', changeTheme);

if (!localStorage.theme) {
  localStorage.setItem('theme', Theme.LIGHT);
}
body.classList = localStorage.getItem('theme');
if (localStorage.getItem('theme') === Theme.DARK) {
  checkbox.checked = true;
}

function changeTheme() {
  if (checkbox.checked === true) {
    if (body.className = Theme.LIGHT) {
      body.classList.remove(Theme.LIGHT);
    }
    body.classList.add(Theme.DARK);
    checkbox.checked = true;
      
  } else if ((body.className = Theme.DARK)) {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    checkbox.checked = false;
  }
  localStorage.setItem('theme', body.classList);
}
