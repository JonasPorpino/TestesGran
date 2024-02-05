
let tabuleiro
let board
let aviso
let jogador
let linha
let coluna


function iniciar(){
    tabuleiro = []
    board = document.getElementById('board')
    aviso = document.getElementById('aviso')
    jogador = 1

    for(let i =0; i<3; i++){
        tabuleiro[i] = []
        for(let j=0; j<3; j++){
            tabuleiro[i][j]=0
        }
    }

    console.table(tabuleiro)
}

// tabela dinamica
function exibir(){
    let tabela = '< table cellpadding="10" border="1">'
    // criar a quantidade de linhas
    
    for(let l=0; l<3; l++){
        tabela += '<tr>'
        
        // criando colula
        for(let c=0; c<3; c++){
            tabela += '<td> - </td>'
        }
    }

    tabela += '</table>'

    board.innerHTML = tabela
}

function jogar(){

}

function checar(){

}