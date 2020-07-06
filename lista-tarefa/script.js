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
    limpaInput();
}

//criar uma tarefa
function criaLi(){ 
    const li = document.createElement("li");
    return li;
}

// quando clicar a tecla Enter(13)
inputTarefa.addEventListener("keypress", function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)

    }
})

//limpar os inputs para dd outros dados
function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}
