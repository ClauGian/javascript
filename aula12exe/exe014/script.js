
function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var msg2 = document.querySelector('div#msg2')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    //var hora = 14

    if (hora >= 5 && hora <= 12) {       
        img.src ="amanhecer-250.png"
        document.body.style.background = "#cc937f"
        msg2.innerHTML = 'Bom Dia'

    } else if (hora > 12 && hora < 18){      
        img.src ="entardecer-250.png"
        document.body.style.background = "#905219"
        msg2.innerHTML = 'Boa Tarde'

    } else if (hora > 18 ){       
        img.src ="anoitecer-250.png"
        document.body.style.background = "#1c2a45"
        msg2.innerHTML = 'Boa Noite'
    }
   
}
    