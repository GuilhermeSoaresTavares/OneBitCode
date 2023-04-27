//Fuções Auxiliares para criar labels e inputs
function createLabel(text, htmlFor) {
  const label = document.createElement('label')
  label.innerText = text
  label.htmlFor = htmlFor
  return label
}

function createInput(id, value, name, type = 'text', placeholder = '') {
  const input = document.createElement('input')
  input.id = id
  input.value = value
  input.name = name
  input.type = type
  input.placeholder = placeholder
  return input
}

//Variávies de escopo global para auxiliar na construção
const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0

//Adicionando evento no botão que cria os campos de experiência

addTechBtn.addEventListener('click', function (ev) {
  // Selecionando a UL onde será inserida
  const stackInputs = document.getElementById('stackInputs')

  const newRow = document.createElement('li')
  newRow.id = 'inputRow-' + inputRows
  newRow.className = 'inputRow'

  const techNameLabel = createLabel('Nome:', 'techName' + inputRows)
  const techNameInput = createInput('techName-' + inputRows, null, 'techName')

  const expLabel = createLabel('Experiência: ')
  const id1 = 'expRadio-' + inputRows + '.1'
  const expRadio1 = createInput(
    id1,
    '0 - 2 Anos',
    'techExp-' + inputRows,
    'radio'
  )
  const expLabel1 = createLabel('0 - 2 Anos', id1)

  const id2 = 'expRadio-' + inputRows + '.2'
  const expRadio2 = createInput(
    id2,
    '2 - 4 Anos',
    'techExp-' + inputRows,
    'radio'
  )
  const expLabel2 = createLabel('2 - 4 Anos', id2)

  const id3 = 'expRadio-' + inputRows + '.3'
  const expRadio3 = createInput(id3, '4+ Anos', 'techExp-' + inputRows, 'radio')
  const expLabel3 = createLabel('4+ Anos', id3)

  const removeRowBtn = document.createElement('button')
  removeRowBtn.type = 'button'
  removeRowBtn.innerText = 'Remover'

  removeRowBtn.addEventListener('click', function () {
    stackInputs.removeChild(newRow)
  })

  inputRows++

  newRow.append(
    techNameLabel,
    techNameInput,
    expLabel,
    expRadio1,
    expLabel1,
    expRadio2,
    expLabel2,
    expRadio3,
    expLabel3,
    removeRowBtn
  )

  stackInputs.appendChild(newRow)
})

form.addEventListener('submit', function (ev) {
  ev.preventDefault()

  const fullNameInput = document.getElementById('fullname')
  const inputRows = document.querySelectorAll('.inputRow')

  let technologies = []
  console.log(inputRows)
  inputRows.forEach(function (row) {
    const techName = document.querySelector(
      '#' + row.id + ' input[name="techName"]'
    ).value
    const techExp = document.querySelector(
      '#' + row.id + ' input[type="radio"]:checked'
    ).value

    technologies.push({ name: techName, exp: techExp })
  })

  const newDev = { fullname: fullNameInput.value, technologies }
  developers.push(newDev)
  alert('Dev cadastrado com sucesso!')

  fullNameInput.value = ''
  inputRows.forEach(function (row) {
    row.remove()
  })
  console.log(developers)
})
