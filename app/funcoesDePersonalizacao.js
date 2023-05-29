import { inserirMinutoDescanso, inserirMinutoEstudo, inserirTempoDescansado, inserirTempoEstudado, minutoDescanso, minutoEstudo, statusDeEstudo } from "./variaveis.js";

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
}

export function marcaTempoDeEstudo(){
    
    tempoTotalEstudado += parseInt(minutoEstudo.value)
    inserirTempoEstudado.innerHTML = `<h4> ${tempoTotalEstudado} </h4>`;   
}

export function marcaTempoDeDescanso(){

    tempoTotalDescansado += parseInt(minutoDescanso.value)
    inserirTempoDescansado.innerHTML = `<h4> ${tempoTotalDescansado} </h4>`;

}