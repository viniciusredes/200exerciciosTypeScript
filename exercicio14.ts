//Escreva um programa que verifica se um ano é bissexto.
let ano: number = 1950;
if(parseFloat(ano.toString().slice(-2)) % 4 == 0){
  console.log(`O ano de ${ano} é bissexto`)
}else{
  console.log(`O ano de ${ano} não é bissexto`)
}