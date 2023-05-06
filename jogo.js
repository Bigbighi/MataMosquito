var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;
var criaMosca = 0;

//converter setInterval de milessimos para segundos
const  convertsecondsToMili = function (seconds){
    seconds = seconds * 1000
    return seconds
}


//dificuldade
var dificuldade = window.location.search 
dificuldade = dificuldade.replace('?', '')

if(dificuldade === 'normal'){
    criaMosca = 2
}else if(dificuldade === 'dificil'){
    criaMosca = 1
}else if(dificuldade === 'chucknorris'){
    criaMosca = 0.8
}

//capturar o tamanho da tela do usuário
function ajustaPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura + " " + largura)
}
ajustaPalcoJogo();

var conometro = setInterval(function(){
    tempo -= 1
    if(tempo <= 0){
        clearInterval(cronometro)
        window.location.href = 'vitoria.html'
    }
    document.getElementById('cronometro').innerHTML = tempo
},convertsecondsToMili(1))

//posição randomica da mosca
function posicaoRandomica(){

    //remover o mosquito (caso exista)
    var removerMosca = document.getElementById('mosca')
    if(removerMosca){
        removerMosca.remove()

        console.log('v' + vidas)
        if(vidas > 3){
            window.location.href = 'fimJogo.html'
        }
        document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
        
        vidas ++

    }
    
    var posicaoX = Math.floor((Math.random() * largura)) - 90
    var posicaoY = Math.floor((Math.random() * altura )) - 90
    //tratamento para imagem não estourar o body
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX + " " + posicaoY)

    //criar mosca
    var mosca = document.createElement('img')
    mosca.src = 'imagens/mosca.png'
    mosca.className = tamanhoRandom() + ' ' + ladoAleatorio()
    mosca.id = 'mosca'
    mosca.onclick = function () {
        var acerto = true
        this.remove()
    }

    //posicao randomica
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    document.body.appendChild(mosca)
}

//tamanho randomico mosca
function tamanhoRandom () {
    var classe = Math.floor(Math.random() * 3)

    switch (classe){
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'
    }
}

//lado da mosca aleatorio
function ladoAleatorio() {
    var classe = Math.floor(Math.random () * 2)
    
    switch(classe){
        case 0 :
            return 'ladoA'
        case 1 :
            return 'ladoB'
    }
}
