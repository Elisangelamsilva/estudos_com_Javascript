var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >= 5 & hora <= 12){
    console.log(`Bom dia!`)
} else if (hora > 12 & hora < 18){
    console.log("Boa tarde!")
}if (hora <= 18 & hora >= 23) { 
    console.log ('Boa noite!')
} if (hora >= 1 & hora <= 4) {
    console.log("Boa madrugada!")
}