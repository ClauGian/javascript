function amanhecer() {

    var aman = document.querySelector('input#amanhece')
    var md = document.querySelector('input#meiodia')
    var tarde = document.querySelector('input#entarde')
    var noite = document.querySelector('input#noite')
    var resp = document.querySelector('article#resp')
    var msg = document.querySelector('div#msg')
    aman.addEventListener('click', clicaram) 
    md.addEventListener('click', clicarmd)
    tarde.addEventListener('click', clicartarde)
    noite.addEventListener('click', clicarnoite)
    
    function clicaram(){
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') 

        msg.innerHTML = 'Bom Dia! <br> Cada amanhecer é convite sereno à conquista de valores que parecem inalcançáveis.'        

        img.setAttribute('src', 'imagens/alvorecer.png')
        resp.style.background = "#3363c9"

        resp.appendChild(img)
    }


    function clicarmd(){
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') 

        msg.innerHTML = 'Bom Meio de Dia! <br> À medida que o dia avança, aproveita os minutos, sem pressa nem postergação do dever.'    

        img.setAttribute('src', 'imagens/meiodia.png')
        resp.style.background = "#cfd5e1"
        
        resp.appendChild(img)
    }


    function clicartarde(){
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') 

        msg.innerHTML = 'Boa Tarde! <br> A Terra dança no espaço, enquanto o sol descansa no horizonte.<br> Seus raios cansados acenam, aquietando-se num canto do mundo.'

        img.setAttribute('src', 'imagens/entardecer.png')
        resp.style.background = "#ffae39"

        resp.appendChild(img)
    }


    function clicarnoite(){
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') 

        msg.innerHTML = 'Boa Noite! <br> A cada anoitecer, agradeça a Deus por mais um dia vencido <br> e peça a ELE que te dê uma nova oportunidade, ao amanhecer!'        

        img.setAttribute('src', 'imagens/anoitecer.png')
        resp.style.background = "#3f6278"


        resp.appendChild(img)
    }
    
        


}