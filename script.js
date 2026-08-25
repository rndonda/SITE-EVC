const content = window.siteContent;
const bookList = document.querySelector('#book-list');
bookList.innerHTML = content.books.map((book, index) => `<article class="book-card"><div class="book-cover ${book.color}"><span>${book.label}</span><strong>${book.title}</strong><i>Kelvin Muyoko</i><b class="book-number">0${index + 1}</b></div><div class="book-info"><h3>${book.title}</h3><p>${book.subtitle}</p><a href="#contact">Commander <span>→</span></a></div></article>`).join('');
const resourceList = document.querySelector('#resource-list');
resourceList.innerHTML = content.resources.map((item, index) => `<article class="resource-card"><div class="resource-index">0${index + 1}</div><p class="resource-meta">${item.type} <span>·</span> ${item.date}</p><h3>${item.title}</h3><p>${item.text}</p><a href="#contact" aria-label="Lire ${item.title}">Lire <span>→</span></a></article>`).join('');
document.querySelector('#year').textContent = new Date().getFullYear();
const button = document.querySelector('.menu-toggle'); const nav = document.querySelector('nav');
button.addEventListener('click', () => { const open = button.getAttribute('aria-expanded') === 'true'; button.setAttribute('aria-expanded', String(!open)); nav.classList.toggle('open'); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); button.setAttribute('aria-expanded', 'false'); }));
