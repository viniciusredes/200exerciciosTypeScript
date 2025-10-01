//Escreva um programa que recebe um número e verifica se ele é positivo, negativo ou zero.
let num: number = 5;
//console.log(`O numero é ${Math.sign(num) === 1 ? "Positivo" : (Math.sign(num) === 0 ? "Zero":"Negativo")}`)
if(num > 0){
  console.log(`o número ${num} é positivo`);
}else if(num < 0){
  console.log(`o número ${num} é negativo`);
}else{
  console.log(`o número é zero`)
}