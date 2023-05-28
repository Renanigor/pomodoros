import { inserirMinutoDescanso, inserirMinutoEstudo, minutoEstudo, minutoDescanso, statusDeEstudo } from "./variaveis.js";
// Variáveis que não podem estar em outro arquivo.
let intervalo
let segundos = 0;
let minutos = 0;
let horas = 0;

let relogio = document.getElementById('relogio')

//Funções
export function iniciaCronometro(tempoDeEstudo) {
    
    statusDeEstudo.innerHTML = 'ESTUDANDO'

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
}, 100);

}


export function formataTempo(tempo){
    return tempo.toString().padStart(2, '0');
}

export function pausaCronometro(){
    
    statusDeEstudo.innerHTML = 'PARADO'

    clearInterval(intervalo)
}

export function zeraCronometro(){
    clearInterval(intervalo);
    
    relogio.innerHTML = '00:00:00';
    segundos = 0;
    minutos = 0;
    horas = 0;
    
}

export function visualizaBotoes(posicaoDoClick, botaoIniciar){
    
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

export function enviaMinutosEstudo(estudando){
    if (estudando >= 1)    
    inserirMinutoEstudo.innerHTML = `<p> ${estudando}:00 </p>`;
    // minutoEstudo.value = '';  
}

export function enviaMinutosDescanso(descansando){
    if (descansando >= 1)      
    inserirMinutoDescanso.innerHTML = `<p> ${descansando}:00 </p>`   
    // minutoDescanso.value = '';
 
}

export function limpaConfiguracoes(){

    inserirMinutoEstudo.innerHTML = '';

    inserirMinutoDescanso.innerHTML = '';

}

//Funções que controlam a contagem do relógio.
function tempoDeEstudoAlcancado(minutos, tempoDeEstudo){
    if (minutos == parseInt(tempoDeEstudo)){
        pausaCronometro();
        tempoDeDescansar(minutoDescanso.value);
    }
}


function tempoDeDescansar(minutos) {
    relogio.classList.add("minutos_descansar"); 
    alert('Tempo de estudo alcançado, vá descansar!');
    
    relogio.innerHTML = `${formataTempo(horas)}:${formataTempo(minutos)}:${formataTempo(segundos)}` 
    contagemRegressiva(minutos)

}

function contagemRegressiva(minutos) {
    
    statusDeEstudo.innerHTML = 'DESCANSANDO'
    
    intervalo = setInterval(() => {
        if (segundos === 0) {
            minutos--;
            segundos = 59;
        } else {
            segundos--;
        }
        if (minutos === 0 && segundos === 0) {
            clearInterval(intervalo);
            alert('Volte a estudar!')
            zeraCronometro();
            iniciaCronometro(minutoEstudo.value)
            relogio.classList.remove("minutos_descansar"); 

        }
        relogio.innerHTML = `${formataTempo(horas)}:${formataTempo(minutos)}:${formataTempo(segundos)}`;
    }, 100);

}
