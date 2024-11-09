function mostrar() {

    let oinicio = document.querySelector('input#noinicio')
    let ofim    = document.querySelector('input#nofim')
    let opasso  = document.querySelector('input#nopasso')
    let res     = document.querySelector('div#resp')
    
    
    
    if (oinicio.length == 0 || ofim.length == 0){
        window.alert = 'Por favor, preencha corretamente os campos.'

    } else {
        res.innerHTML = '<p>Contando...<br></p>'
        let inicio  = Number(oinicio.value)
        let fim     = Number(ofim.value)
        let passo   = Number(opasso.value)

        if (passo <= 0){
            window.alert('Passo não pode ser 0. Estamos considerando (1).')
            passo = 1
        }

        if (inicio < fim){        
            for (let c = inicio; c <= fim; c += passo){
                res.innerHTML += `\u{1f449}${c }..`
            }
            res.innerHTML += `  \u{1f3c1}`
        } else {
            for (let c = inicio; c >= fim; c -= passo){
                res.innerHTML += `\u{1f449}${c}..`
            }
            res.innerHTML += `  \u{1f3c1}`
        }
    }
}