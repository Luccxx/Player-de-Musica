
const button = document.getElementById('tocar')
const music = document.getElementById('musica')
const pause = document.getElementById('pausar')
const reiniciar = document.getElementById('reiniciar')
const progresso = document.getElementById('progressoMusica');
const next = document.getElementById('next')
const back = document.getElementById('back')
let descrition = document.getElementById('descrition')
let img = document.getElementById('img');

back.addEventListener('click', voltar)
next.addEventListener('click', proximo)
button.addEventListener('click', play)
pause.addEventListener('click', stop)
reiniciar.addEventListener('dblclick', restart)

function proximo(){
    img.style.transform = "rotateY(360deg)"
    music.src = "/music/even_flow.mp3"
    img.src = "/img/pearl_jam.jpg"
    descrition.innerHTML = "Pearl Jam"
}

function voltar(){
    img.style.transform = "rotateY(-0deg)"
    music.src = "/music/back_in_black.mp3"
    img.src = "/img/acdc.jpg"
    descrition.innerHTML = "AC DC"
}

function play(){
    music.play()
    
}

function stop(){
    music.pause()
}

function restart(){
    music.currentTime = 0
}

function progressoMusica() {
    const duracaoTotal = music.duration
    const tempoAtual = music.currentTime
    const porcentagemConcluida = (tempoAtual / duracaoTotal) * 100
    progresso.value = porcentagemConcluida
}

setInterval(progressoMusica, 1000)