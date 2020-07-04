// array campos que armazena cada entrada do formulário. API do DOM que nos permite buscar elementos através de seletores CSS.

var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {
    var tr = document.createElement('tr');

    campos.forEach(function(campo) {
        // cria uma td sem informações
        var td = document.createElement('td');
        // atribui o valor do campo à td
        td.textContent = campo.value;
        // adiciona a td na tr
        tr.appendChild(td);
        });
});