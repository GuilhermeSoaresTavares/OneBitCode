let v1 = parseFloat(prompt("Velocidade Veículo 01:"))
let v2 = parseFloat(prompt("Velocidade Veículo 02:"))

if(v1 > v2){
  alert("O veículo 01 é mais rápido que o veículo 02")
} else if (v2 > v1){
  alert("O veículo 02 é mais rápido que o veículo 01") 
}else{
  alert("Ambos veículos tem a mesma velocidade")
}

