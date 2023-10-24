// COMANDOS PARA ATUALIZAR O STATUS DO CONTAINER, INCLUIR E EXCLUIR O FULL-SCREEN E UP-SECTION, COLOCAR OVERFLOW-Y NO FULL-SCREEN
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.expanded');
    const container = document.querySelector('.container');
    const closeButtons = document.querySelectorAll('.btn-close');
    const sectionOne = document.getElementById('section-1');

    sections.forEach(section => {
        section.addEventListener('click', () => {
            sections.forEach(s => {
                s.classList.remove('full-screen');
            });
            section.classList.add('full-screen');
            container.setAttribute('status', 'visible');

            const allSections = document.querySelectorAll('.block');
            allSections.forEach(s => {
                if (s !== section) {
                    s.classList.add('up-section');
                }
            });
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            sections.forEach(s => {
                s.classList.remove('full-screen');
                s.classList.remove('up-section');
            });
            container.setAttribute('status', 'hidden');
            sectionOne.classList.remove('up-section');
        });
    });
});


// COMANDOS PARA TROCA DOS CARDS NA SEÇÃO SOBRE MIM
const buttons = document.querySelectorAll("#btn-cards a");
const cards = document.querySelectorAll(".block-cards");

function showCard(index) {
cards.forEach((card) => (card.style.display = "none"));

buttons.forEach((btn) => btn.classList.replace("btn-active", "btn-not-active"));

cards[index].style.display = "block";

buttons[index].classList.replace("btn-not-active", "btn-active");
}

buttons.forEach((button, index) => {
button.addEventListener("click", () => {
    showCard(index);
});
});
showCard(0);


// COMANDOS PARA TROCA DAS FRASES NA PRIMEIRA SEÇÃO
const firstSpan = document.getElementById('first-span');
        const secundSpan = document.getElementById('secund-span');

        let isFirstSpanVisible = true;

        setInterval(() => {
        if (isFirstSpanVisible) {
            firstSpan.style.display = 'none';
            secundSpan.style.display = 'block';
        } else {
            firstSpan.style.display = 'block';
            secundSpan.style.display = 'none';
        }
        isFirstSpanVisible = !isFirstSpanVisible;
        }, 5000); // 5 Segundos


// COMANDOS PARA TROCA NOS SLIDES DO CONTAINER PROJETOS
document.getElementById('next').onclick = function(){
    let lista = document.querySelectorAll('.item');
    document.getElementById('slides').appendChild(lista[1]);
    document.getElementById('slides').prepend(lista[0]);
}

document.getElementById('prev').onclick = function() {
    let lista = document.querySelectorAll('.item');

    // Move o último item para o início
    document.getElementById('slides').prepend(lista[lista.length - 1]);

    // Move o primeiro item para o início
    document.getElementById('slides').prepend(lista[0]);
}

const item0 = document.getElementById('item-0');
const item1 = document.getElementById('item-1');
item0.innerHTML = item1.innerHTML;
item0.style.backgroundImage = 'url(static/img/fotos/a4pb.webp)';


document.getElementById('btn-slides').onclick = function(){
    let lista = document.querySelectorAll('.item');
    let itemNaPosicao1 = lista[1];
    let idDoItemNaPosicao1 = itemNaPosicao1.getAttribute('id');

    const item0 = document.getElementById('item-0');
    const item1 = document.getElementById(idDoItemNaPosicao1);
    item0.innerHTML = item1.innerHTML;
    if (idDoItemNaPosicao1 === 'item-1') {
        item0.style.backgroundImage = 'url(static/img/fotos/a4pb.webp)';
    } else if (idDoItemNaPosicao1 === 'item-2') {
        item0.style.backgroundImage = 'url(static/img/fotos/ecossistema.webp)';
    } else if (idDoItemNaPosicao1 === 'item-3') {
        item0.style.backgroundImage = 'url(static/img/fotos/nomuh.webp)';
    } else if (idDoItemNaPosicao1 === 'item-4') {
        item0.style.backgroundImage = 'url(static/img/fotos/aprenser.webp)';
    }
}
