// encontrar a altura e largura da pagina do usuario em tempo
var largura = 0
var altura = 0
var vidas = 1
var tempo = 30

var criaMoscaTempo = 2000

var nivel = window.location.search
nivel = nivel.replace('?', '')

// aplicando os niveis de dificuldade
if (nivel === 'facil') {
    //tempo de 2000ms
    criaMoscaTempo = 2000
} else if (nivel === 'normal') {
    //tempo de 1500ms
    criaMoscaTempo = 1500
} else if (nivel === 'dificil') {
    //tempo de 1000ms
    criaMoscaTempo = 1000
}

function ajustaTamanhoTela() {
    largura = window.innerWidth
    altura = window.innerHeight
}

ajustaTamanhoTela()

// ajustando o cronometro
var cronometro = setInterval(function () {

    tempo -= 1

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }

}, 1000)

// criando posições randomicas para a mosca com base nos limitadores de alturaXlargura da pagina
function posicaoRandomica() {

    // remover o mosquito anterior caso ele exista
    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove()

        // controlando os pontos de vida
        if (vidas > 3) {
            window.location.href = 'fimDeJogo.html'
        } else {
            document.getElementById('vida' + vidas).src = 'img/coracao_vazio.png'
            vidas++
        }

    }

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
    mosca.id = 'mosca'
    // controlando os pontos de vida
    mosca.onclick = function () {
        this.remove()
    }

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