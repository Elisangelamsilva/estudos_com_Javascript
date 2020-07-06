const inputTarefa = document.querySelector(".input-tarefa")
const btnTarefa = document.querySelector(".btn-tarefa")
const tarefa = document.querySelector(".tarefa")



// capturar o event click
btnTarefa.addEventListener("click", function(){
    // quando clicar e não tiver nada
    if(!inputTarefa.value) return;
    // capturar o texto e jogar em outra função
    criaTarefa(inputTarefa.value)
})


function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefa.appendChild(li);
}

//criar uma tarefa
function criaLi(){ 
    const li = document.createElement("li");
    return li;
}
