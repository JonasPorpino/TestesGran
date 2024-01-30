

const carros=['gol', 'fusca', 'virtus', 'ka']


//document.write(carros)

console.table(carros)

for(i in carros)[
    document.write(carros[i]+'<br>')

]

document.write('<p></p>')

carros.push('fiesta') // adicionar ao arrey no final
carros.unshift('palio') // adiciona ao arrey no inicio

for(i in carros)[
    document.write(carros[i]+'<br>')

]

carros.pop() // deleta do fim
carros.shift() // deleta do inicio


document.write('<p></p>')

carros.splice(1,0,"uno") // ( item, exclusao, adição)
carros.splice(4,1,"mob") // ( item, exclusao, adição)

for(i in carros)[
    document.write(carros[i]+'<br>')

]

document.write('<p></p>')

carros.sort() // ordenação

for(i in carros)[
    document.write(carros[i]+'<br>')

]