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