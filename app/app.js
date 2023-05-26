import { iniciaCronometro, pausaCronometro, zeraCronometro, visualizaBotoes } from "./funcoes.js"

//Variáveis
const botaoIniciar = document.getElementById('botao_iniciar')
const botaoPausar = document.getElementById('botao_pausar')
const botaoZerar = document.getElementById('botao_zerar')

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
