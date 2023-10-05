// COMANDO PARA TROCAR O STATUS DO BODY CASO O JS ESTIVER DESABILITADO 
document.addEventListener("DOMContentLoaded", function() {
    document.body.setAttribute("status", "js-active");
});


// COMANDOS DAR O EFEITO DE TRANSIÇÃO DE OPACIDADE EM CADA SESSÃO 
const observer = new IntersectionObserver((entries) =>
        {
            entries.forEach((entry)=>{
                if (entry.isIntersecting){
                    entry.target.classList.add('show');
                }else{
                    entry.target.classList.remove('show');
                }
            });
        });
        const occultElements = document.querySelectorAll('.occult')
        occultElements.forEach((el) => observer.observe(el));


// COMANDOS PARA TROCA DAS FOTOS NO CONTAINER EXPERIENCIA
const cardPerfil = document.getElementById('card-perfil');
        function alternarStatus() {
            if (cardPerfil.getAttribute('status') === 'front') {
                cardPerfil.setAttribute('status', 'back');
                setTimeout(alternarStatus, 3500); // Alterna para back após 3.5 segundos
            } else {
                cardPerfil.setAttribute('status', 'front');
                setTimeout(alternarStatus, 6000); // Alterna para front após 6 segundos
            }
        }

        // Iniciar alternância inicial para back
        setTimeout(alternarStatus, 6000);




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

// COMANDOS PARA OS CARDS VOLTAREM PRO LUGAR
function toggleCard(card) {
    if (card.classList.contains('flipped')) {
        card.classList.remove('flipped');
    } else {
        card.classList.add('flipped');
    }
}