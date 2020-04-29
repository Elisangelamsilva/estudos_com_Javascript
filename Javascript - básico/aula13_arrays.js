// string são indexadas em cada caracterie, já os arreys são indexados por elementos.

const alunos = ['Luiz', 'Maria', 'João'];

//exibição
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]);

//editar um valor 
alunos[0] = 'Eduardo';
alunos[3] = 'Luiza';
console.log(alunos);

// tamanho da array
console.log(alunos.length);
alunos[alunos.length] = 'Fábio';
console.log(alunos);

// adicionar um elemento 
alunos.push('Otávio');
console.log(alunos);
alunos.unshift('Marcos'); // adicona no inicio
console.log(alunos);
const removido = alunos.pop(); // removendo o elemento final e salvando em variavel
console.log(alunos);
const removida = alunos.shift(); // remove do começo
console.log(alunos);

// deletar indices
delete alunos[1]; // indice ficar vazio
console.log(alunos);
