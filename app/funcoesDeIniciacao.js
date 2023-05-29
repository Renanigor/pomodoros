import { minutoEstudo, minutoDescanso, statusDeEstudo, alarme, botaoPausar, botaoZerar } from "./variaveis.js";

// Variáveis que não podem estar em outro arquivo.
let intervalo
let segundos = 0;
let minutos = 0;
let horas = 0;
let relogio = document.getElementById('relogio')

export function iniciaCronometro(tempoDeEstudo) {        
    
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
    
    tempoDeEstudoAlcancado(minutos, tempoDeEstudo)
}, 10);
}

export function pausaCronometro(){    
    clearInterval(intervalo)
}

export function zeraCronometro(){
    clearInterval(intervalo);
    
    relogio.innerHTML = '00:00:00';
    segundos = 0;
    minutos = 0;
    horas = 0;
}

export function visualizaBotoesStatus(posicaoDoClick, botaoIniciar){
    
    if(posicaoDoClick.value == 'INICIAR' || posicaoDoClick.value == 'REINICIAR'){
        posicaoDoClick.style.visibility = 'hidden';
       
       statusDeEstudo.innerHTML = 'ESTUDANDO'
    } 
    if(posicaoDoClick.value == 'PAUSAR'){
        botaoIniciar.style.visibility = 'visible';
        botaoIniciar.value = 'REINICIAR';
        
        statusDeEstudo.innerHTML = 'PARADO'
    }   
    
    if(posicaoDoClick.value == 'ZERAR'){
        botaoIniciar.style.visibility = 'visible';
        botaoIniciar.value = 'INICIAR';
        
        statusDeEstudo.innerHTML = 'ZERADO'
    }
}

function tempoDeEstudoAlcancado(minutos, tempoDeEstudo){
    if (minutos == parseInt(tempoDeEstudo)){
        quandoTempoDeEstudoAlcancado()
        tempoDeDescansar(minutoDescanso.value);
    }
}

function tempoDeDescansar(minutosDeDescanso) {
    contagemRegressiva(minutosDeDescanso)
}

function contagemRegressiva(minutosDeDescanso) {
    
    botaoPausar.style.visibility = 'hidden';
    botaoZerar.style.visibility = 'hidden';
    
    intervalo = setInterval(() => {
        if (segundos === 0) {
            minutosDeDescanso--;
            segundos = 59;
        } else {
            segundos--;
        }
        if (minutosDeDescanso === 0 && segundos === 0) {
            //Remove a classe
            relogio.classList.remove("minutos_descansar"); 
            
            //Para o relógio
            clearInterval(intervalo);
            alarme.play();
            alert('Volte a estudar!');

            reiniciaORelogio();
            
        }
        relogio.innerHTML = `${formataTempo(horas)}:${formataTempo(minutosDeDescanso)}:${formataTempo(segundos)}`;
    }, 10);
}

function formataTempo(tempo){
    return tempo.toString().padStart(2, '0');
}

function quandoTempoDeEstudoAlcancado(){
    //Mensagem
    clearInterval(intervalo);
    alarme.play();
    alert('Tempo de estudo alcançado, vá descansar!');
    
    //Status e Style
    statusDeEstudo.innerHTML = 'DESCANSANDO';
    relogio.classList.add("minutos_descansar"); 

}

function reiniciaORelogio(){
    //Funções
    zeraCronometro();
    iniciaCronometro(minutoEstudo.value);
    
    //Style
    botaoPausar.style.visibility = 'visible';
    botaoZerar.style.visibility = 'visible';
    statusDeEstudo.innerHTML = 'ESTUDANDO'
}