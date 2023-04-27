let word = prompt("Insira a palavra teste")
let palindromo = ""
for(i = word.length; i > 0 ; i--){
  palindromo += word[i-1]
}

const test = word == palindromo ? alert(word + " e " + palindromo + " são palíndromos!" ) : alert(word + " não é palíndromo!" )