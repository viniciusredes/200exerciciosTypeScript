/** Escreva um programa que calcula o IMC (Índice de Massa Corporal) de uma pessoa e imprime uma mensagem indicando se a pessoa está abaixo do peso, com peso normal, com sobrepeso ou obesa.
 * 
 * Abaixo do peso < 18,5
 * Peso saudável 18,5 a 24,9
 * Sobrepeso 25,0 a 30,0
 * Obeso 30,1 a 39,9
 * Obeso mórbido > 40
 * 
 **/

const altura: number = 1.73//prompt("Digite sua altura em centimetros");
const peso: number = 100//prompt("Digite seu peso em kgs");
let imc: number = peso / (altura/100) * (altura/100);
let alerta: any;
if(imc != Infinity && imc > 0){
  if(imc > 40){
    alerta = "Obeso mórbido"
  }else if(imc>= 30.1){
    alerta = "Obeso"
  }else if(imc >= 25.0){
    alerta = "Sobrepeso"
  }else if(imc >= 18.5){
    alerta = "peso normal"
  }else if(imc < 18.5){
    alerta = "abaixo do peso"
  }else{
    alerta = "false";
  }
}

if(alerta){
    console.log(`Seu IMC é ${imc}, você está ${alerta}`)
}else{
  console.log('peso invalido')
}