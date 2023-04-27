let option = 0
do {
  option = parseFloat(prompt(
    "Por Favor, escolha uma das opções abaixo:\n"+
    "01 - Opção 01\n"+
    "02 - Opção 02\n"+
    "03 - Opção 03\n"+
    "04 - Opção 04\n"+
    "05 - Encerrar\n"
    ))
  switch(option){
    case 1:
      alert("Opção 01 escolhida")
      break
    case 2:
      alert("Opção 02 escolhida")
      break

    case 3:
      alert("Opção 03 escolhida")
      break

    case 4:
      alert("Opção 04 escolhida")
      break

    case 5:
      alert("Encerrando o programa...")
    }
} while (option !== 5)