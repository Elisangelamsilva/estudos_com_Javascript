// array campos que armazena cada entrada do formulário. API do DOM que nos permite buscar elementos através de seletores CSS.

var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {
    var tr = document.createElement('tr');

    // cria uma coluna com o valor de cada campo do nosso array
    campos.forEach(function(campo) {
        // cria uma td sem informações
        var td = document.createElement('td');
        // atribui o valor do campo à td
        td.textContent = campo.value;
        // adiciona a td na tr
        tr.appendChild(td);
    });

    // nova td que armazenará o volume da negociação
    var tdVolume = document.createElement('td');
    // as posições 1 e 2 do array armazenam os campos de quantidade e valor, respectivamente
    tdVolume.textContent = campos[1].value * campos[2].value;
    // adicionando a td que faltava à tr
    tr.appendChild(tdVolume);

});