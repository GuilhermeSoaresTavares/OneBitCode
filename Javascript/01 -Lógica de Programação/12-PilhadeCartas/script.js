let baralho = []
let baralhoView
let menu
let newCard
do{

  if(baralho[0] !== undefined){
    baralhoView = ""
    for(let i = 0; baralho.length > i; i++){
      baralhoView += i+1 + "º" + " - "+ baralho[i] + "\n"
    }
  }else if(baralho[0] == undefined){
    baralhoView = "O baralho está vazio no momento"
  }
   menu = prompt(
    "Baralho:\n" +
    baralhoView + "\n" +
    "Selecione uma das opções abaixo:\n"+
    "1 - Adicionar uma carta\n" +
    "2 - Puxar uma carta\n" +
    "3 - Sair")

    switch(menu){
      case '1':
      newCard = baralho.push(prompt("Escolha a carta a se colocada no topo do baralho"))
        break
      
      case "2":
        alert("Retirando a carta: " + baralho.pop())
        break

      case "3":
        alert("Saindo...")
        break
      default:
        alert("Por favor, escolha apenas umas das opções disponíveis no menu!")
    }

}while(menu !== "3")