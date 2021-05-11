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
const body = document.body;

checkbox.addEventListener('change', changeTheme);

if (localStorage.getItem('theme') === null) {
  localStorage.setItem('theme', Theme.LIGHT);
}
body.className = localStorage.getItem('theme');
if (localStorage.getItem('theme') === Theme.DARK) {
  checkbox.checked = true;
}

function changeTheme() {
  if (checkbox.checked) {
    if (body.className === Theme.LIGHT) {
      body.classList.remove(Theme.LIGHT);
    }
    body.classList.add(Theme.DARK);
    
      
  } else  {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    
  }
  localStorage.setItem('theme', body.classList);
}
