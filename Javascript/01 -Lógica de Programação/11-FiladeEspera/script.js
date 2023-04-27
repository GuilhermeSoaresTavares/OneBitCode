let menu 
let pacientes = []
let pacientesView

do{

  if(pacientes[0] == undefined){
    pacientesView = "A fila de pacientes está vazia no momento."
  }else{
    pacientesView = ""
    for(let i = 0; pacientes.length > i; i++){
      pacientesView += i+1 + "º" + " - " + pacientes[i] + "\n"
    }
  }

  menu = prompt("Seja bem vindo!\n"+
  "Está é a fila de pacientes:\n"+
  pacientesView + "\n" +
  "Escolha uma das opções abaixo:\n" +
  "1 - Inserir novo paciente na fila\n"+
  "2 - Atender o próximo paciente\n"+
  "3 - Sair")
  switch(menu){
    case "1":
      pacientes.push(prompt("Qual o nome do novo paciente?"))
      alert("Inserindo novo paciente...")
      break

    case "2":
      if(pacientes[0] == "A fila de pacientes está vazia no momento."){
        alert("A fila de atendimento está vazia no momento. Insira pelo menos um paciente para podermos antender.")
        pacientes.shift()
      } else{
        alert("Atendendo o paciente " + pacientes.shift())
      }
      break

    case "3":
      alert("Saindo...")
      break

    default:
      alert("Por favor, insira apenas uma das opções existentes no menu")

  }
}while(menu != 3)