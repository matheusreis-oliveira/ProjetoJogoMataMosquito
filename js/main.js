// encontrar a altura e largura da pagina do usuario em tempo
var largura = 0
var altura = 0

function ajustaTamanhoTela() {
    largura = window.innerWidth
    altura = window.innerHeight
}

ajustaTamanhoTela()

// criando posições randomicas para a mosca com base nos limitadores de alturaXlargura da pagina
function posicaoRandomica() {

    var posicaoX = Math.floor(Math.random() * largura) - 100
    var posicaoY = Math.floor(Math.random() * altura) - 100

    // tirar a probabilidade de posições negativas
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    // criar o elemento html
    var mosca = document.createElement('img')
    mosca.src = 'img/mosca.png'
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'

    document.body.appendChild(mosca)
}

// tamanhos randomicos para a mosca
function tamanhoAleatorio() {
    var tamanho = Math.floor(Math.random() * 3)

    switch (tamanho) {
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'
    }
}

// orientação da mosca direita/esquerda de forma aleatoria
function ladoAleatorio() {
    var lado = Math.floor(Math.random() * 2)

    switch (lado) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

