window.addEventListener('DOMContentLoaded',() => document.documentElement.setAttribute('color-theme', 'light'))

const checkbox = document.getElementById('theme');

checkbox.addEventListener('click', e => {
  if (e.target.checked) {
    document.documentElement.setAttribute('color-theme', 'dark');
  } else {
    document.documentElement.setAttribute('color-theme', 'light');
  }
});