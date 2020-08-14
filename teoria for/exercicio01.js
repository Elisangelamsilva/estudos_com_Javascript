const dados = [
    {nome: "Cu de bebo", cpf: "2345678-7"},
    {nome: "Eliane", cpf: "2345678-7"},
    {nome: "Carla", cpf: "2345678-7"},

]

for(let registro of dados){
    console.log(`O cliente ${registro.nome} portador do CPF ${registro.cpf} está em divida.`)
}