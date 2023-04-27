let imoveis = []
let menu
let imoveisView

do{
  menu = prompt("Total de Imóveis Cadastrados:\n"+
  imoveis.length + "\n" +
  "Escolha uma das opções abaixo:" + "\n" +
  "1 - Salvar um novo imóvel" + "\n" +
  "2 - Visualizar imóveis" + "\n" +
  "3 - Sair")

  switch(menu){
    case "1":
      imoveis.push(
        {
        nomeProprietario: prompt("Qual o nome do Proprietário?"),
        qtdQuartos: prompt("Quantos quartos?"),
        qtdBanheiros: prompt("Quantos banheiros?"),
        garagem: prompt("Possui garagem?")
        }
      )
      break

    case "2":
      for(let i = 0; imoveis.length > i; i++){

        alert( "Imóvel " + (i+1) + ": \n" +
        "Proprietário: " + imoveis[i].nomeProprietario + "\n" +
        "Quartos: " + imoveis[i].qtdQuartos + "\n" +
        "Banheiros: " + imoveis[i].qtdBanheiros + "\n" +
        "Possui garagem? " + imoveis[i].garagem + "\n\n"
        )
      }
      break
    case "3":
      alert("Saindo")
      break
    default:
      alert("Por favor, escolha uma das opções do menu")
      break
  }

}while(menu !== "3")
console.log(imoveis)