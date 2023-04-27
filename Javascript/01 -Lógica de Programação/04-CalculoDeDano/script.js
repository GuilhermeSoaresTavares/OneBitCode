let nameAtack = prompt("Nome do Atacante:")
let atack = parseFloat(prompt("Poder de Ataque::"))

let nameDefense = prompt("Nome do Defensor:")
let life = parseFloat(prompt("Pontos de Vida:"))
let defense = parseFloat(prompt("Pontos de Defesa:"))
let shield = prompt("Defensou possui escudo?")
shield = (shield == "sim") ? true : false;
console.log(shield)

let hit = 0


if (atack > defense && shield == false){
  hit = atack - defense
}else if (atack > defense && shield == true){
  hit = (atack - defense ) / 2
} 

alert(
  "Quantidade de Dano: " + hit + "\n" +
  "Nome do Atacante: " + nameAtack + "\n" +
  "Poder de Ataque: " + atack + "\n\n" +
  "Nome do Defensor: " + nameDefense + "\n" +
  "Pode de Defesa" + defense + "\n" +
  "Vida do Defensor: " + (life - hit) + "\n" +
  "Defensor tem Escudo?: " + shield
)