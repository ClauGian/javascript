
function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO - Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')

        var idade = ano - Number(fano.value)   

        var genero = ""

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            
            if (idade > 0 && idade <= 5){
                //bebe
                img.setAttribute('src', 'foto-criançam-250.png') 
            } else if (idade <= 10){
                //crianca
                img.setAttribute('src', 'foto-criançam1-250.png') 
            } else if (idade <= 20){
                //adolescente
                img.setAttribute('src', 'foto-menino-250.png') 
            } else if (idade <= 65){
                //adulto
                img.setAttribute('src', 'foto-homem1-250.png') 
            } else {
                //idoso
                img.setAttribute('src', 'foto-senhor70-250.png') 
            }           

        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade > 0 && idade <= 5){
                //bebe
                img.setAttribute('src', 'foto-criançaf-250.png') 
            } else if (idade <= 10) {
                //crianca
                img.setAttribute('src', 'foto-criançaf1-250.png') 
            } else if (idade <= 20){
                //adolescente
                img.setAttribute('src', 'foto-menina-250.png') 
            } else if (idade <= 65){
                //adulto
                img.setAttribute('src', 'foto-mulher1-250.png') 
            } else {
                //idoso
                img.setAttribute('src', 'foto-senhora78-250.png') 
            } 


        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade.`
        res.appendChild(img)
    }   
  
}   