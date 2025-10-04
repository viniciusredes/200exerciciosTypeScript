//Escreva um programa que determina a estação do ano com base no mês.
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Digite o número que representa mês que deseja
    1 - Janeiro | 2 - Fevereiro  | 3 - Março     | 
    4 - Abril   | 5 - Maio       | 6 - Junho     |
    7 - Julho   | 8 - Agosto     | 9 - Setembro  |
    10 - Outubro | 11 - Novembro | 12 - Dezembro |`
    , (mes: string) => {     
    switch(parseInt(mes)){
      case 1:
      case 2:
      case 3:
        console.log("Verão");
        break;
      case 4:
      case 5:
      case 6:
        console.log("Outono");
        break;
      case 7:
      case 8:
      case 9:
        console.log("Inverno");
        break;
      case 10:
      case 11:
      case 12:
        console.log("Primavera");
        break;
      default:
        console.log("Esse número não representa um mês válido")
    }
  rl.close();
});

