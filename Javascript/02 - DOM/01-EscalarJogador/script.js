const players = []

function escalatePlayer() {
  let name = document.getElementById('name').value
  let position = document.getElementById('position').value
  let number = document.getElementById('number').value

  let check = confirm(
    'Você tem certeza que deseja escalar o ' +
      name +
      ' como ' +
      position +
      ' e com o número ' +
      number +
      '?'
  )

  if (check) {
    players.push({
      name,
      position,
      number
    })
  }
  console.log(players)

  printPlayer(name, position, number)
}

function printPlayer(name, position, number) {
  const tbody = document.getElementById('tbody')

  let tr = document.createElement('tr')
  // Por que utilziar o 'n'?
  // Estou usando o método querySelector para poder pegar uma Node HTMLAllCollection.
  // Porém, ele utiliza CSS3 para consultar a DOM e não vai acertar id ou class iniciando com dígito
  // https://stackoverflow.com/questions/37270787/uncaught-syntaxerror-failed-to-execute-queryselector-on-document
  tr.className = 'n' + number

  let nameTd = document.createElement('td')
  nameTd.innerText = name
  tr.appendChild(nameTd)

  let positionTd = document.createElement('td')
  positionTd.innerText = position
  tr.appendChild(positionTd)

  let numberTd = document.createElement('td')
  numberTd.innerText = number
  tr.appendChild(numberTd)

  tbody.appendChild(tr)
}

// function removePlayer() {
//   const tbody = document.querySelector('#tbody')
//   let numberRemove = '.' + document.querySelector('#removeNumber').value
//   alert(numberRemove)
//   let check = confirm(
//     'Você tem certeza que quer excluir o jogador camisa: ' + numberRemove
//   )
//   if (check) {
//     let itemRemove = document.querySelector(numberRemove)
//     tbody.removeChild(itemRemove)
//   }
// }

function removePlayer() {
  const tbody = document.getElementById('tbody')
  let numberRemove = document.getElementById('removeNumber').value
  let check = confirm(
    'Você tem certeza que quer excluir o jogador camisa: ' + numberRemove
  )
  if (check) {
    let itemRemove = document.querySelector('.n' + numberRemove)
    tbody.removeChild(itemRemove)
  }
}
