function gerar(){

    var numero = document.querySelector('input#onumero')
    var tab = document.querySelector('select#tabuada')

    if (numero.value.length == 0){
        window.alert('Digite um número para prosseguir.')

    } else {
        var num = Number(numero.value)
        tab.innerHTML = ""

        for (var c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${num}  x  ${c}  =  ${num * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }

    }

}