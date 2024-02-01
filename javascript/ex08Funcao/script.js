
// Tipos de funções

// Functions declaration - funções de declaração
// è o jeito mais básico de definir uma função

// Exemplo:


function ola(){
    return document.write('Olá mundo')
}


// Functions expression - funções de expressão
// Como mencionado anteriormente, as expression e declaration 
// são muito parecidas, a diferença é que uma função de expressão 
// pode ser lidada como uma qualquer expressão em JavaScript, por exemplo:

// Exemplo:

const ola2 = function(){
    return document.write('Olá mundo 2')
}


// Arrrow Functions - funções de seta
// outras palavras, as arrow functions são simplificações para 
// as functions expression:

// Exemplo:

const ola3 = () => {
    return document.write('Olá mundo 3')
}