function gerar(){

    var num = parseInt(document.getElementById("num").value);
    var resposta = document.getElementById('resposta');
   
    var gerar='';
    
    for(var c = 1; c <= 10 ; c ++)        
        gerar +=num+" x "+c+" = "+num*c+"<br />";    
        resposta.innerHTML = gerar;
        
  }
  