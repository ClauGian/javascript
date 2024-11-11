function soma(n1, n2){
    return n1 + n2
}
console.log(soma(5, 7))

// aqui ele retorna 12

function soma(n1, n2){
    return n1 + n2
}
console.log(soma(5))

// se eu informar somente um dos elementos ele retorna NaN

function soma(n1=0, n2=0){
    return n1 + n2
}
console.log(soma(5))
// colocando n1 e n2 = 0
// aqui se eu informar somente um elemento ele retorna o valor 5
