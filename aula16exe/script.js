
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true    
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true 
    } else {
        return false
    }
}

function adicionar(){
    
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value)) 
        let item = document.createElement('option')
        item.text = (`O valor ${num.value} foi adicionado`)
        lista.appendChild(item)
        res.innerHTML = ''        
    } else {
        window.alert('Valor invalido ou já se encontra na lista')
    }
    num.value = ''
    num.focus()   
}

function finalizar(){

    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    } else {       
        /*
        let maior = Math.max.apply(Math, valores)==> OPÇÃO P/ ACHAR MAIOR VALOR
        let menor = Math.min.apply(Math, valores)=>OPÇÃO P/ ACHAR MENOR VALOR         
        let soma = 0
        for (let i = 0; i < valores.length; i++) {=> OPÇÃO PARA SOMAR VALORES
            soma += valores[i];
        } */
        
        let qtde = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0        
        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        let media = 0
        media = soma / qtde
        
        res.innerHTML += (`<p>Ao todo, temos ${qtde} números cadastrados</p><br>`)
        res.innerHTML += (`<p>O Maior valor informado foi: ${maior}.</p><br>`)
        res.innerHTML += (`<p>O Menor valor informado foi: ${menor}.</p><br>`)
        res.innerHTML += (`<p>Somando todos os valores, temos: ${soma}.</p><br>`)        
        res.innerHTML += (`<p>A Média dos valores digitados é: ${media}.</p><br>`) 
    }
}


    
    




    
    
    

        


