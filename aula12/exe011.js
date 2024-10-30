var idade = 64

console.log(`Você tem ${idade} anos`)

if (idade < 16) {
    console.log('Menor de idade, não pode votar.')

} else if (idade < 18 || idade > 65){
    console.log('Você pode votar, más o voto é facultativo.')

} else if (idade > 18){    
    console.log('Maior de idade e o voto é obrigatório.')
}

