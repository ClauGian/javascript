function carregar(){

    let img = document.querySelector('img#imagem')
    let horas = document.querySelector('div#horario')

    let qhora = new Date()
    let horario = qhora.getHours()
    
    horas.innerHTML = `Agora são exatamente ${horario} horas.`

    if (horario >= 5 && horario <= 12){
        img.src = 'imagens/alvorecer.png'
        document.body.style.backgroundImage = "URL('imagens/fundoamanh.jpg')"

    } else if (horario <= 18){
        img.src = 'imagens/entardecer.png'
        document.body.style.backgroundImage = "URL('imagens/fundoent.jpg')"
        
    } else if (horario <= 24){
        img.src = 'imagens/anoitecer.png'
        document.body.style.backgroundImage = "URL('imagens/fundonoite.jpg')"

    }

    
}