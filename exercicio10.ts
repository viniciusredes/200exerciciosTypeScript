//Escreva um programa que recebe duas notas de um aluno, calcula a média e imprime se o aluno foi aprovado ou reprovado (considerando que a média para aprovação é 7).

let n1: number = 5;
let n2: number = 9.5;
let media: number= (n1 + n2)/2

if(media >= 7){
  console.log(`Você foi aprovado com média ${media}`)
}else{
  console.log(`Você foi reprovado com média ${media}`)
}