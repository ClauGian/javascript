let val = [2, 5, 9, 7, 3, 4, 8]
/*
for (let pos = 0; pos <= val.length; pos ++){
    console.log(`O valor na posição ${pos} é o numero ${val[pos]}`)
}*/

for(let pos in val){
    console.log(`O valor na posição ${pos} é o numero ${val[pos]}`)
}