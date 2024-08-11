/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
- passo 1 - dar um jeito de pegar o elemento HTML dos botões
- passo 2 - dar um jeito de identificar o clique do usuário no botão
- passo 3 - desmarcar o botão selecionado anterior
- passo 4 - marcar o botão clicado como se estivesse selecionado
- passo 5 - esconder a imagem anteriormente selecionada
- passo 6 - fazer aparecer a imagem correspondente ao botão clicado
- passo 7 - esconder a informação do dragão anteriormente selecionado
- passo 8 - mostrar a informação do dragão referente ao botão clicado
*/

//- passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagem = document.querySelectorAll('.imagem');
const informacoes = document.querySelectorAll('.informacoes');

//- passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        console.log('clicou');
        //- passo 3 - desmarcar o botão selecionado anterior
        desativarbotaoselecionado();

        //- passo 4 - marcar o botão clicado como se estivesse selecionado
        marcarbotaocomoselecionado(botao);

        //- passo 5 - esconder a imagem anteriormente selecionada
        esconderimagemativa();

        //- passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        mostarimagemdefundo(indice);

        //- passo 7 - esconder a informação do dragão anteriormente selecionado
        esconderinformacoesativa();

        //- passo 8 - mostrar a informação do dragão referente ao botão clicado
        mostrarinformacoes(indice);
    });
});

function marcarbotaocomoselecionado(botao) {
    botao.classList.add('selecionado');
}

function mostrarinformacoes(indice) {
    informacoes[indice].classList.add('ativa');
}

function esconderinformacoesativa() {
    const informacoesAtiva = document.querySelector('.informacoes.ativa');
    informacoesAtiva.classList.remove('ativa');
}

function mostarimagemdefundo(indice) {
    imagem[indice].classList.add('ativa');
}

function esconderimagemativa() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarbotaoselecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

