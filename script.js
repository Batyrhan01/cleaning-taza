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

// Форма заявки: открывает WhatsApp с готовым текстом
const PHONE = '77073941397';
const dateInput = document.querySelector('#form [name="date"]');
dateInput.min = new Date().toISOString().slice(0, 10);

document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target.elements;
  const lines = [
    'Здравствуйте! Хочу заказать уборку.',
    `Имя: ${f.name.value.trim()}`,
    `Телефон: ${f.phone.value.trim()}`,
    `Услуга: ${f.service.value}`
  ];
  if (f.date.value) {
    const [y, m, d] = f.date.value.split('-');
    lines.push(`Дата: ${d}.${m}.${y}`);
  }
  window.open(`https://wa.me/${PHONE}?text=` + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
});
