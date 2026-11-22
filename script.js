// Меню на телефоне
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const setMenu = open => {
  nav.classList.toggle('is-open', open);
  burger.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', open);
};
burger.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));

// Отзывы: остальные по кнопке
const moreBtn = document.getElementById('moreReviews');
moreBtn.addEventListener('click', () => {
  document.querySelectorAll('.review.is-hidden').forEach(r => r.classList.remove('is-hidden'));
  moreBtn.hidden = true;
});
