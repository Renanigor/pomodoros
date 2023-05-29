//Importações
import {botaoIniciar, botaoPausar, botaoZerar, botaoEnviarConfiguracoes,
     minutoEstudo, minutoDescanso, botaoLimparConfiguracoes} from './variaveis.js'

import {iniciaCronometro, pausaCronometro, zeraCronometro, visualizaBotoesStatus} from './funcoesDeIniciacao.js'

import { enviaMinutosEstudo, enviaMinutosDescanso, limpaConfiguracoes } from './funcoesDePersonalizacao.js';

//Eventos
botaoIniciar.addEventListener('click', (e) =>{
    iniciaCronometro(minutoEstudo.value);
    visualizaBotoesStatus(e.target)
})

botaoPausar.addEventListener('click', (e) => {
    pausaCronometro();
    visualizaBotoesStatus(e.target, botaoIniciar)
})

botaoZerar.addEventListener('click', (e) => {
    zeraCronometro();
    visualizaBotoesStatus(e.target, botaoIniciar)
})

botaoEnviarConfiguracoes.addEventListener('click', () => {
    enviaMinutosEstudo( minutoEstudo.value);
    enviaMinutosDescanso( minutoDescanso.value);    
})    

botaoLimparConfiguracoes.addEventListener('click', () => {
    limpaConfiguracoes()

})

