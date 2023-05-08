

//variáveis da aplicação:
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

// função / callback / métodos
function handleTryClick(event) {
  event.preventDefault()  // = não faça o padrão do evento (não envie o formulário...)

  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randomNumber) {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")

    document
      .querySelector(".screen2 h2")
      .innerText =(`Acertou em ${xAttempts} tentativas!`)
  }
  
  inputNumber.value = ""
  xAttempts++
}

function handleResetClick() {
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
  xAttempts = 1
}

/*
onde tenho as screen1.classList, posso fazer uma função nova usando toggle, para simplificar:

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
ai sempre onde tinha screen 1 e 2, eu troco pela função. exemplo:

function handleResetClick() {
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
  xAttempts = 1
}
esse aqui toda de cima ficará assim:

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
}
bem limpa e simplificada. */