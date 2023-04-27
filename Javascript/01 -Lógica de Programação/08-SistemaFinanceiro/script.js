let saldo = parseFloat(prompt("Qual o valor inical?"))
let action
let operacao
do{
  alert("Este é o seu saldo atual: " + saldo)
  action = parseFloat(prompt(
    "Por favor, e uma opção abaixo\n"+
    "01 - Adicionar valor\n"+
    "02 - Retirar valor\n"+
    "03 - Sair"))
    switch(action){
      case 01:
        operacao = parseFloat(prompt("Quantos você gostaria de adicionar?"))
        saldo += operacao
        break

      case 02:
        operacao = parseFloat(prompt("Quantos você gostaria de retirar?"))
        saldo -= operacao
        break

      case 03:
        alert("Seu saldo atual é: "+saldo + "\n" + "Encerrando o programa...")
        break

      default:
        alert("Por favor, selecione uma das opções do menu")
      
    }
   } while(action !== 03)