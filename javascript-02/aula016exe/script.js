
let num = document.querySelector('input#numero')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#resp')
let val = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n)<= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}

function adicionar(){
    
    if (isNumero(num.value) && !inLista(num.value, val)){

        val.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ""
    } else {
        window.alert('Valor inválido ou já se encontra na lista!')
    }
    num.value = ""
    num.focus()
}

function verificar(){

    if (val.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let qtde = val.length
        let maior = val[0]
        let menor = val[0]
        let soma = 0
        
        for (let pos in val){
            soma += val[pos]
            if (val[pos] > maior)
                maior = val[pos]           
            if (val[pos] < menor)
                menor = val[pos]
        }
        let media = (soma / qtde)


        res.innerHTML = ""
        res.innerHTML += `<p>Foram cadastrados <strong>${qtde}</strong> números.</p>`
        res.innerHTML += `<p>O maior número digitado foi: <strong>${maior}</strong>.</p>`
        res.innerHTML += `<p>O menor número digitado foi: <strong>${menor}</strong>.</p>`
        res.innerHTML += `<p>A soma dos números digitados é de: <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p>A média entre os números digitados é de: <strong>${media}</strong>.</p>`


    }

    
}