function abrirPagina(url) {
    window.location.href = url;
}

function abrirNovaPagina() {
    var resposta = confirm("Deseja abrir outra página?");
    if (resposta) {
        abrirPagina("https://lchavesz.github.io/meus-codi2/");
    }
}

function Hover(btn) {
    btn.style.position = 'absolute';
    btn.style.top = Posicao(10, 90);
    btn.style.left = Posicao(10, 90);
}

function Posicao(min, max) {
    return (Math.random() * (max - min) + min) + '%';
}

