//Перевернуть карточку
var cards = document.querySelectorAll('.program__item');
if (cards) {
    cards.forEach(card => {
        card.addEventListener("click", function (e) {
            card.classList.toggle('_active')
        });
    });
}

function indents() {
    const header = document.querySelector('.header');
    const page = document.querySelector('.page');

    //Оступ от шапки
    let hHeader = window.getComputedStyle(header, false).height;
    hHeader = Number(hHeader.slice(0, hHeader.length - 2));

    page.style.paddingTop = hHeader + 'px';
};

window.addEventListener('resize', () => {
    indents();
});

indents();