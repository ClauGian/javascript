let valores = [2, 5, 8, 3]

for (let pos in valores){
    console.log(`O valor na posição ${pos} é o numero ${valores[pos]}`)
}
console.log()
for (let pos = 0; pos < valores.length; pos++){
    console.log(`O valor na posição ${pos} é o numero ${valores[pos]}`)
}

// PARA DETERMINAR O MAIOR E O MENOR ELEMENTO DO VETOR
let maior = Math.max.apply(Math,valores)
console.log(maior)

let menor = Math.min.apply(Math,valores)
console.log(menor)

//PARA SOMAR OS ELEMENTOS DE UM VETOR
let soma = 0
for (let i = 0; i < valores.length; i++) {
    soma += valores[i];
}
console.log(soma)

