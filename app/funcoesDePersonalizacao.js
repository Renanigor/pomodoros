import { inserirMinutoDescanso, inserirMinutoEstudo, inserirTempoDescansado, inserirTempoEstudado, minutoDescanso, minutoEstudo } from "./variaveis.js";

let tempoTotalEstudado = 0;
let tempoTotalDescansado = 0;


export function enviaMinutosEstudo(estudando){
    if (estudando >= 1)    
    inserirMinutoEstudo.innerHTML = `<p> ${estudando}:00 </p>`;
    // minutoEstudo.value = '';  
}

export function enviaMinutosDescanso(descansando){
    if (descansando >= 1)      
    inserirMinutoDescanso.innerHTML = `<p> ${descansando}:00 </p>`;   
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
    if (Number.isInteger(tempoTotalEstudado)){
        inserirTempoEstudado.innerHTML = `<h6> ${tempoTotalEstudado}:00 </h6>`;
    }

}

export function marcaTempoDeDescanso(){
    tempoTotalDescansado += parseInt(minutoDescanso.value)
    if (Number.isInteger(tempoTotalDescansado)){
    inserirTempoDescansado.innerHTML = `<h6> ${tempoTotalDescansado}:00 </h6>`; 
    }
}