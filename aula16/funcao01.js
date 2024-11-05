function parimpar(n) {
    if (n %2 == 0){
        return 'PAR'
    } else {
        return 'IMPAR'
    }    
}
    let res = parimpar(8)
    console.log (`O Número 8 é: ${res}`)
    console.log(parimpar(8))