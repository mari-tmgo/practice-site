// =========================================================
// SCRIPT FILE — only handles the EN / DE language buttons.
// You shouldn't need to edit this.
// =========================================================

(function () {
  var buttons = document.querySelectorAll('.lang-switch button');

  function setLanguage(lang) {
    document.body.classList.remove('lang-en', 'lang-de');
    document.body.classList.add('lang-' + lang);
    document.documentElement.lang = lang;
    buttons.forEach(function (b) {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () { setLanguage(b.dataset.lang); });
  });

  var saved = 'en';
  try { saved = localStorage.getItem('lang') || 'en'; } catch (e) {}
  setLanguage(saved);
})();
