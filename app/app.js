//Importações
import {botaoIniciar, botaoPausar, botaoZerar, botaoEnviarConfiguracoes,
     minutoEstudo, minutoDescanso, botaoLimparConfiguracoes} from './variaveis.js'

import {iniciaCronometro, pausaCronometro, zeraCronometro, visualizaBotoes, 
    enviaMinutosDescanso, enviaMinutosEstudo, limpaConfiguracoes} from './funcoes.js'

//Eventos
botaoIniciar.addEventListener('click', (e) =>{
    iniciaCronometro(minutoEstudo.value);
    visualizaBotoes(e.target)
})

botaoPausar.addEventListener('click', (e) => {
    pausaCronometro();
    visualizaBotoes(e.target, botaoIniciar)
})

botaoZerar.addEventListener('click', (e) => {
    zeraCronometro();
    visualizaBotoes(e.target, botaoIniciar)
})

botaoEnviarConfiguracoes.addEventListener('click', () => {
    enviaMinutosEstudo( minutoEstudo.value);
    enviaMinutosDescanso( minutoDescanso.value);    
})    

botaoLimparConfiguracoes.addEventListener('click', () => {
    limpaConfiguracoes()

})

