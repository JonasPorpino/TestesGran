// array com 3 linhas e 4 colunas

const notas = [
    [5,6,7,8],
    [6,7,8,9],
    [9,8,7,6]
]

for(i in notas){
    document.write(notas[i]+'<br>')
}

document.write('<p></p>')

// array de objetos

const pessoas = [
    {nome: 'Camargo', telefone: '(83) 99999-8888', endereco: 'ABC'},
    {nome: 'Chicó', telefone: '(83) 99999-7777', endereco: 'DEF'},
    {nome: 'João Grilo', telefone: '(83) 99999-6666', endereco: 'GHI'},
    {nome: 'Antônio Morais', telefone: '(83) 99999-5555', endereco: 'JLM'},
]

// inserir exatamente como foi declarado
for(i in pessoas){
    document.write('Nome: '+pessoas[i].nome+' Telefone: '+ pessoas[i].telefone+' Endereço: '+ pessoas[i].endereco+'<br>')
}

console.log(pessoas)