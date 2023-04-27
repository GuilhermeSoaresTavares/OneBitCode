let num
let vagas = []
let listaVagas = ""

function listarVagas(){
  vagas.forEach(function(item, i){
    listaVagas += "indice: " + i + " - " + "Nome: " + item.nome + " - " + "Candidatos: " + item.candidatos.length + "\n"
  })
  alert(listaVagas)
  listaVagas = ""
}

function criarVaga(){
  let vagaAtual = {
    nome:prompt("Insira o nome da vaga:"),
    descricao: prompt("Insira uma descrição para a vaga:"),
    data: prompt("Insira uma data limite para a vaga(dd-mm-aaa):"),
    candidatos: []
  }
  let vagaAtualConfirm = confirm(
    "Você tem certeza que deseja cadastrar essa vaga?\n Confira os dados abaixo:\n\n"+
    "Nome: " + vagaAtual.nome + "\n"+
    "Descrição: "+ vagaAtual.descricao+"\n"+
    "Data: " + vagaAtual.data 
  )

  if(vagaAtualConfirm){
    vagas.push(vagaAtual)
  }
}

function verVaga(){
  let i = prompt("Qual o índice da vaga que você quer ver?")
  alert(
    "Índice: " + i  + "\n" +
    "Nome: " + vagas[i].nome + "\n" +
    "Descrição: " + vagas[i].descricao  + "\n" +
    "Data: " + vagas[i].data  + "\n" +
    "Candidatos: " + vagas[i].candidatos
  )
}

function cadastrarCandidato(){
  let nomeCandidato = prompt("Qual o nome do candidato?")
  let i = prompt("Qual o indice da vaga?")
  let check = confirm(
    "Você tem certeza que deseja cadastrar  "+ nomeCandidato+" nessa vaga?\n Confira os dados abaixo:\n\n"+
    "Nome: " + vagas[i].nome + "\n"+
    "Descrição: "+ vagas[i].descricao+"\n"+
    "Data: " + vagas[i].data 
  )
  if(check){
    vagas[i].candidatos.push(nomeCandidato)
  }
}

function excluirVaga(){
  let i = parseFloat(prompt("Qual o índice da vaga que você quer excluir?"))
  let check = confirm(
    "Você tem certeza que deseja excluir essa vaga?\n Confira os dados abaixo:\n\n"+
    "Nome: " + vagas[i].nome + "\n"+
    "Descrição: "+ vagas[i].descricao+"\n"+
    "Data: " + vagas[i].data 
  )

  if(check){
    vagas.splice(i,1)
  }

}
function menu(){
  do{
    num = prompt(
    "SISTEMA DE VAGAS DE EMPREGO\n" +
    "Escolha uma das opções do menu abaixo:\n\n"+
    "01 - Listar vagas disponíveis\n"+
    "02 - Criar uma nova vaga\n"+
    "03 - Visualizar uma vaga\n"+
    "04 - Inscrever um candidato em uma vaga\n"+
    "05 - Excluir uma vaga\n" +
    "06 - Sair")

    switch(num){
      case "01":
        listarVagas()
        break

      case "02":
        criarVaga()
        break

      case "03":
        verVaga()
        break

      case "04":
        cadastrarCandidato()
        break
  
      case "05":
        excluirVaga()
        break
          
      case "06":
        alert("Saindo")
        break
    }
  }while(num !== "06")
}

menu()