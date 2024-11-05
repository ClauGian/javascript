/*let num = [5, 8, 4]
console.log('let num = [5, 8, 4]')
num[3]=6
console.log(`num[3]=6 [${num}]`)
num.push(7)
console.log(`num.push(7) [${num}]`)
num.sort()
console.log(`num.sort() [${num}]`)
console.log([num.length]) */

let num = [5, 8, 4]
num [4] = 6
num [3] = 2

console.log(num)

for (let pos in num){
   console.log(`Na posição ${pos} eu tenho o valor ${num[pos]}.`) 
}
console.log(num[3])

num.indexOf(2)
console.log(`em qual posição esta o numero 2: ${num.indexOf(2)}`)
