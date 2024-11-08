
let agora = new Date();
let hora = agora.getHours().toString().padStart(2, '0') + ':' + agora.getMinutes().toString().padStart(2, '0'); 

let date = new Date()
let data = date.getDate()

console.log (`Hoje dia ${data}. Agora são exatamente ${hora} horas`)

if (hora >= 0 && hora <= 5){
    console.log ('Uma boa madrugada para você!')
} else if (hora <= 12){
    console.log ('Um bom dia para você!')
} else if(hora <= 18){
    console.log ('Uma boa tarde para você!')
} else if(hora <= 24){ 
    console.log ('Uma boa noite para você!')
}   

// No formato hora+minutos o sistema não entende o if
    
  