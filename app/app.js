//Importações
import {botaoIniciar, botaoPausar, botaoZerar, botaoEnviarConfiguracoes, minutoEstudo} from './variaveis.js'
import {iniciaCronometro, pausaCronometro, zeraCronometro, visualizaBotoes, enviaProIntervalo} from './funcoes.js'

//Eventos
botaoIniciar.addEventListener('click', (e) =>{
    iniciaCronometro();
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
    enviaProIntervalo(minutoEstudo) 

})    

