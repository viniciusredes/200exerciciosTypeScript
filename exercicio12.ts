//Escreva um programa que verifica a situação de um estudante de acordo com sua média final.
let nota: number = 6.5
if(nota >= 7.0){
  console.log("aprovado")
}else if(nota > 4.0 && nota < 7.0){
  console.log("Em recuperação")
}else{
  console.log("reprovado")
}