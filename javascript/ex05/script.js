/**
 * 
 * loop for com in
 * O laço for...in interage sobre propriedades 
 * enumeradas de um objeto, na ordem original de 
 * inserção. O laço pode ser executado para cada 
 * propriedade distinta do objeto.
 * 
 * for (variavel in objeto) {...}
 * 
 */

// uso de objeto
const pessoa = {
    nome: 'Manuel Gomes',
    idade: 45,
    cidade:'Belém',
    estado: 'Paraíba'
}

for(atributo in pessoa){
    document.write(atributo+': '+pessoa[atributo]+'<br>')
}

document.write('<p></p>')

/**
 * 
 * O loop for...of percorre objetos iterativos (en-US) 
 * (incluindo Array, Map, Set, o objeto arguments (en-US) 
 * e assim por diante), chamando uma função personalizada 
 * com instruções a serem executadas para o valor de cada 
 * objeto distinto.
 * 
 * for (variavel of iteravel) {declaração}
 * 
 */

// uso de arrei
const carros =[
    'Gol',
    'Fusca',
    'Virtus',
    'ka'
]

for (let elemento of carros){
    document.write(elemento+'<br>')

}