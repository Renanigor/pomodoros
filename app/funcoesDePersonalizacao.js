import { inserirMinutoDescanso, inserirMinutoEstudo, inserirTempoDescansado, inserirTempoEstudado, minutoDescanso, minutoEstudo } from "./variaveis.js";

let tempoTotalEstudado = 0;
let tempoTotalDescansado = 0;


export function enviaMinutosEstudo(estudando){
    if (estudando >= 1)    
    inserirMinutoEstudo.innerHTML = `<h3 class="inputs"> ${estudando}:00 </h3>`;
    // minutoEstudo.value = '';  
}

export function enviaMinutosDescanso(descansando){
    if (descansando >= 1)      
    inserirMinutoDescanso.innerHTML = `<h3 class="inputs"> ${descansando}:00 </h3>`;   
    // minutoDescanso.value = '';
}

export function limpaConfiguracoes(){

    inserirMinutoEstudo.innerHTML = '';
    inserirMinutoDescanso.innerHTML = '';

    minutoEstudo.value = '';
    minutoDescanso.value = '';

    inserirTempoEstudado.value = '';
    inserirTempoDescansado.value = '';
}

export function marcaTempoDeEstudo(){
    
    tempoTotalEstudado += parseInt(minutoEstudo.value)
    inserirTempoEstudado.innerHTML = `<h4> ${tempoTotalEstudado} </h4>`;   
}

export function marcaTempoDeDescanso(){

    tempoTotalDescansado += parseInt(minutoDescanso.value)
    inserirTempoDescansado.innerHTML = `<h4> ${tempoTotalDescansado} </h4>`;

}