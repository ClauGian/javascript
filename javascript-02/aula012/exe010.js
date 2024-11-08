var idade = 70

if (idade < 16){
    console.log('O cidadão não pode votar.')
} else if (idade < 18 || idade > 65){
    console.log('O cidadão pode votar, mas é facultativo.')    
} else {
    console.log('O voto é obrigatóro')
}

