import { inserirMinutoDescanso, inserirMinutoEstudo } from "./variaveis.js";

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
