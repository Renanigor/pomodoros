
// Variáveis que não podem estar em outro arquivo.
let intervalo
let segundos = 0;
let minutos = 0;
let horas = 0;

let relogio = document.getElementById('relogio')

//Funções
export function iniciaCronometro() {

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

export function formataTempo(tempo){
    return tempo.toString().padStart(2, '0');
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

export function enviaProIntervalo(minutos){
    console.log(minutos.value);
    minutos.style.display = 'none';
}