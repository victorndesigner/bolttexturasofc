window.addEventListener('load', function() {
    ajustarAlturaESeparacaoDasSecoes();
});

window.addEventListener('resize', function() {
    ajustarAlturaESeparacaoDasSecoes();
});

function ajustarAlturaESeparacaoDasSecoes() {
    ajustarAlturaESeparacaoDaSecao('#inicio');
    ajustarAlturaESeparacaoDaSecao('#texturas');
    ajustarAlturaESeparacaoDaSecao('#packs');
}

function ajustarAlturaESeparacaoDaSecao(seletor) {
    var secao = document.querySelector(seletor);
    if (secao) {
        var alturaConteudo = secao.scrollHeight;
        var alturaJanela = window.innerHeight;
        var secoesAbaixo = document.querySelectorAll('section');
        var alturaSecoesAbaixo = 0;

        secoesAbaixo.forEach(function(secaoAbaixo) {
            if (secaoAbaixo !== secao && secaoAbaixo.offsetTop > secao.offsetTop) {
                alturaSecoesAbaixo += secaoAbaixo.scrollHeight;
            }
        });

        secao.style.height = (alturaConteudo > alturaJanela - alturaSecoesAbaixo) ? alturaConteudo + 'px' : 'auto';
    }
}
