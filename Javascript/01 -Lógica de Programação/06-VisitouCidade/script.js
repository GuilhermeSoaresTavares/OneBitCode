const nome = prompt("Digite seu nome")
let visitouCidade = prompt("Você já visitou alguma cidade?").toLocaleLowerCase()
let cidades = ""
let numCidade = 0

while (visitouCidade == "sim") {
  let cidadeAtual = prompt("Qual o nome da cidade que você visitou?")
  cidades += " " + cidadeAtual
  numCidade ++
  visitouCidade = prompt("Além de " + cidadeAtual + ". Visitou mais alguma cidade?").toLocaleLowerCase()
}

alert(nome + " você visitou um total de: " + numCidade + " Cidades. \n" +
"Aqui estão elas:" + cidades)