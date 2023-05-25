import { iniciaCronometro, pausaCronometro } from "./funcoes.js"

//Variáveis
const botaoIniciar = document.getElementById('botao_iniciar')
const botaoPausar = document.getElementById('botao_pausar')
const botaoZerar = document.getElementById('botao_zerar')



//Eventos
botaoIniciar.addEventListener('click', () =>{
    iniciaCronometro()
})

botaoPausar.addEventListener('click', () => {
  pausaCronometro()
})
