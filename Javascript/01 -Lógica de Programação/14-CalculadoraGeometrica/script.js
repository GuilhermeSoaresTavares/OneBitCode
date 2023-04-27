let menu
let base
let altura
let lado
let baseMaior
let baseMenor
let pi = 3.14

let areaTriangulo = function(base, altura){
  return (base * altura) / 2
}
let areaRetangulo = function(base, altura){
  return base * altura
}
let areaTrapezio = function(baseMaior,baseMenor,altura){
  return (baseMaior + baseMenor) * altura / 2
}
let areaCirculo = function(pi, raio){
  return (raio * raio) * pi 
}

do{
  menu = prompt("Calculadora Geométrica\n" +
  "Escolha uma das opções do menu abaixo:\n"+
  "1 - Área do Triângulo\n2 - Área do Retângulo\n3 - Área do Quadrado\n4 - Área do Trapézio\n5 - Área do Círculo\n6 - Sair")
  switch(menu){
    case "1":
      base = parseFloat(prompt("Insira o valor da base do triângulo:"))
      altura = parseFloat(prompt("Insira o valor da altura do triângulo:"))
      alert("Área do Triângulo = " + areaTriangulo(base, altura))
      break

    case "2":
      base = parseFloat(prompt("Insira o valor da base do retângulo:"))
      altura = parseFloat(prompt("Insira o valor da altura do retângulo:"))
      alert("Área do Retângulo = " + areaRetangulo(base, altura))
      break

    case "3":
      lado = parseFloat(prompt("Insira o valor do lado do quadrado:"))
      alert("Área do Quadrado = " + areaRetangulo(lado, lado))
      break

    case "4":
      baseMaior = parseFloat(prompt("Insira o valor da base maior do trapézio:"))
      baseMenor = parseFloat(prompt("Insira o valor da base menor do trapézio:"))
      altura =  parseFloat(prompt("Insira o valor da altura do trapézio:"))
      alert("Área do Trapézio = " + areaTrapezio(baseMaior, baseMenor, altura))
      break

    case "5":
      raio = parseFloat(prompt("Insira o valor raio do círculo:"))
      alert("Área do Círculo = " + areaCirculo(pi, raio))
      break

    case "6":
      alert("Saindo")
      break
    default:
      alert("Por favor, escolha apenas uma das opções do menu.")
  }

}while(menu != 6)