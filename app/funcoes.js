const minutosEstudo = document.getElementById('minutos_de_estudo')
const botaoEnviarConfiguracoes = document.getElementById('enviar_configuracoes')
const relogio = document.getElementById('relogio')

let intervalo;
let segundos = 0;
let minutos = 0;
let horas = 0;

botaoEnviarConfiguracoes.addEventListener('click', () => {

})

//Funções



function iniciaCronometro() {

    intervalo = setInterval(() => {
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }
    if (minutos === 60) {
        minutos = 0;
        horas++;
    }
    relogio.innerHTML = `${formataTempo(horas)}:${formataTempo(minutos)}:${formataTempo(segundos)}`;
    }, 1000);
}

function formataTempo(tempo){
    return tempo.toString().padStart(2, '0');
}

function pausaCronometro(){
    clearInterval(intervalo)
}

function zeraCronometro(){
    clearInterval(intervalo);
    
    relogio.innerHTML = '00:00:00';
    segundos = 0;
    minutos = 0;
    horas = 0;
    
}
function visualizaBotoes(posicaoDoClick, botaoIniciar){
    
    if(posicaoDoClick.value == 'INICIAR' || posicaoDoClick.value == 'REINICIAR'){
       posicaoDoClick.style.visibility = 'hidden';
    }
    
    if(posicaoDoClick.value == 'PAUSAR'){
        botaoIniciar.style.visibility = 'visible';
        botaoIniciar.value = 'REINICIAR';
    }

    if(posicaoDoClick.value == 'ZERAR'){
        botaoIniciar.style.visibility = 'visible';
        botaoIniciar.value = 'INICIAR';
    }

}