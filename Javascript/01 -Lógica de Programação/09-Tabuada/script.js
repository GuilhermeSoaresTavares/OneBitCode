let x = parseFloat(prompt("Digite o número que vocÊ quer a tabuada:"))
let result = "TABUADA DO " + x + "\n"

for(i = 1; i <= 20; i++){
   result += x + " x " + i + " = " + (x * i)  + "\n"
}

alert(result)
