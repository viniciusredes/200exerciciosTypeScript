//Escreva um programa que verifica se um número está dentro de um determinado intervalo.
let intervaloInferior: number = 0;
let intervalosuperior: number = 100;
let numero: number = 50;
let resultado: string
if(intervaloInferior < numero && intervalosuperior > numero){
  resultado = "dentro";
}else{
  resultado = "fora";
}
console.log(`O número ${numero} está ${resultado} do intervalo de ${intervaloInferior} e ${intervalosuperior}`)