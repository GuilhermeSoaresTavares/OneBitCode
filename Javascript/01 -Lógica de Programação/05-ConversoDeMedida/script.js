let valMetros = parseFloat(prompt("Insira o valor em Metros:"))
const unidade = prompt("Insira a medida que gostaria de converter:").toLocaleLowerCase()

switch (unidade){
  case "mm":
    valMetros *= 1000
    alert(valMetros + "mm")
    break
  case "cm":
    valMetros *= 10
    alert(valMetros+"cm")
    break
  case "dm":
    valMetros *= 10
    alert(valMetros+"dm")
    break
  case "dam":
    valMetros /= 10
    alert(valMetros+"dam")
    break
  case "hm":
    valMetros /= 100
    alert(valMetros+"hm")
    break
  case "km":
    valMetros /= 1000
    alert(valMetros + "Km")
    break
  default:
    alert("Por favor, inisra apenas uma das unidades abaixo:\n"+
    "mm | cm | dm | dam | hm | km")
}