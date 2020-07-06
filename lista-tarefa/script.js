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
    criaBotaoApagar(li);
    salvarTarefa();
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

// li pq vai ser onde vai ser adicionado o botão
function criaBotaoApagar(li){
    li.inputTarefa += ' ';
    const botaoApagar = document.createElement("button");
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar') //criando a class
    li.appendChild(botaoApagar)

}

// requisição do botão Apagar
document.addEventListener("click", function(e){
const el = e.target;
    //ter certeza que o botão certo tá sendo clicado
    if(el.classList.contains("apagar")){
        //remover o li - pai e filho(conteúdo)
        el.parentElement.remove()
    }
})

function salvarTarefa(){
    const liTarefas = tarefa.querySelectorAll("li")
    const listaDeTarefas = []

    // mostrar e add os textos dentro da array
    for(let tarefas of liTarefas){
        const tarefaTexto = tarefas.innerText
        tarefaTexto = tarefaTexto.replace("Apagar", '').trim()
        listaDeTarefas.push(tarefaTexto)
    }

    // formato de textos Json / string similar a array
    const tarefasJSON = JSON.stringify(listaDeTarefas)
    //local no navegador que pode salvar coisas
    localStorage.setItem('tarefa', tarefasJSON)
}