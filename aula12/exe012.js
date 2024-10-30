var agora = new Date
var horatual = agora.getHours()
console.log(`Horário do sistema: ${horatual}`)

var hora = 15


console.log(`Agora são exatamente ${hora} horas`)

if (hora >= 6 && hora <= 12) {
    console.log('Tenha um BOM DIA!')
} else if (hora > 12 && hora <= 18) {
    console.log('Tenha uma BOA TARDE!')
} else if (hora > 18 && hora <= 24) {
    console.log('Tenha uma BOA NOITE!')    
} else if (hora < 6) {
    console.log('Tenha uma BOA MADRUGADA!!')
}

