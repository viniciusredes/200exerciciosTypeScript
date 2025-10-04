//Escreva um programa que determina o número de dias em um mês.
const prompt = require('prompt-sync')();
let mes: any = prompt(
  `Digite o número que representa mês que deseja
    1 - Janeiro | 2 - Fevereiro  | 3 - Março     | 
    4 - Abril   | 5 - Maio       | 6 - Junho     |
    7 - Julho   | 8 - Agosto     | 9 - Setembro  |
    10 - Outubro | 11 - Novembro | 12 - Dezembro |`
  )
  switch(parseInt(mes)){
    case 1:    
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      console.log("31 dias");
      break;
    case 4:
    case 6:    
    case 9:
    case 11:    
    console.log("30 dias");
      break;
    case 2:
      console.log("28 dias")
      break;
    default:
      console.log("Esse número não representa um mês válido")
  }