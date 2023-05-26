//Funções
const relogio = document.getElementById('relogio')
let intervalo;


export function iniciaCronometro() {
    
    let segundos = 0;
    let minutos = 0;
    let horas = 0;
    
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
    relogio.innerHTML = `${horas}:${minutos}:${segundos}`;
    }, 1000);
    }
  

export function pausaCronometro(){
    clearInterval(intervalo)
}

export function zeraCronometro(){
    clearInterval(intervalo)
    relogio.innerHTML = '00:00:00'
    
}
export function visualizaBotoes(posicaoDoClick, botaoIniciar){
    
    if(posicaoDoClick.value == 'INICIAR'){
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