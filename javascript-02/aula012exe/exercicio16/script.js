function verificar(){

    let data = new Date()
    let ano = data.getFullYear()

    let anon = document.querySelector('input#txtano')
    let res = document.querySelector('div#resp')

    if (anon.value.length == 0 || anon.value > ano){
        window.alert('Verifique os dados e tente novamente.')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(anon.value)
        let genero = ''

        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'pessoa do sexo Masculino'
               
            if (idade > 0 && idade <= 5){
                img.setAttribute('src', 'criancam-250.png')
            } else if (idade <= 10){
                img.setAttribute('src', 'criancam1-250.png')
            } else if (idade <= 18){
                img.setAttribute('src', 'menino-250.png')
            } else if (idade <= 50){
                img.setAttribute('src', 'homem1-250.png')
            } else if (idade > 50){
                img.setAttribute('src', 'senhor70-250.png')
            }

        } else if (fsex[1].checked){
            genero = 'pessoa do sexo Feminino'

            if (idade > 0 && idade <= 5){
                img.setAttribute('src', 'criancaf-250.png')
            } else if (idade <= 10){
                img.setAttribute('src', 'criancaf1-250.png')
            } else if (idade <= 18){
                img.setAttribute('src', 'menina-250.png')
            } else if (idade <= 50){
                img.setAttribute('src', 'mulher1-250.png')
            } else if (idade > 50){
                img.setAttribute('src', 'senhora78=250.png')
            }
        }

        res.innerHTML = `<p>Detectamos ${genero} com idade de ${idade} anos.</p>`
        res.appendChild(img)


    }
}