var horario = new Date
var hora = horario.getHours()
var dia = document.querySelector('div#dia')
dia.innerHTML = `Agora são ${hora} horas.`