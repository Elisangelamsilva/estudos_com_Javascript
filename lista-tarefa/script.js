const inputTarefa = document.querySelector(".input-tarefa")
const btnTarefa = document.querySelector(".btn-tarefa")
const tarefa = document.querySelector(".tarefa")

// capturar o event click
btnTarefa.addEventListener("click", function(){
    // quando clicar e não tiver nada
    if(!inputTarefa.value) return;
})