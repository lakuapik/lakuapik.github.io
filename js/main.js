// main.js

console.log('🏕️ davids (lakuapik) website.');

window.themeSwitcher = function(toggle = true) {
  // inspired by https://github.com/picocss/examples/blob/master/v2-html-classless/js/minimal-theme-switcher.js
  var savedTheme = localStorage.getItem('picoPreferredColorScheme');
  var preferedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  var htmlTheme = document.querySelector('html').getAttribute('data-theme');
  var theme = savedTheme || htmlTheme || preferedTheme;
  var newTheme = toggle ? (theme == 'dark' ? 'light' : 'dark') : theme;
  document.querySelector('html').setAttribute('data-theme', newTheme);
  localStorage.setItem('picoPreferredColorScheme', newTheme);
}

window.themeSwitcher(toggle = false);