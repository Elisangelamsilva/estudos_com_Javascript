// IIFE
function meuEScopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    // // evento de submissão quando o form for enviado
    // form.onsubmit = function (event) {
    //     event.preventDefault();
    // };

    // Mesma coisa só que com outro método 

    function recebeEventoForm (evento) {
        evento.preventDefault();

       const nome = form .querySelector('.nome');
       const sobrenome = form .querySelector('.sobrenome');
       const peso = form .querySelector('.peso');
       const altura = form .querySelector('.altura');

       pessoas.push({
           nome: nome.value,
           sobrenome: sobrenome.nodeValue,
           peso: peso.Value,
           altura: altura.Value,
       });

       console.log(pessoas);

       resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}` +
       `${peso.value} ${sobrenome.value}</p>`;

    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEScopo ();