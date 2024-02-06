
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
    exibir()
}

// tabela dinamica
function exibir(){
    let tabela = '<table cellpadding="10" border="1">'
    // criar a quantidade de linhas
    
    for(let l=0; l<3; l++){
        tabela += '<tr>'
        
        // criando colula
        for(let c=0; c<3; c++){
            // conferir se deve colar x para o jogador 1 e o para o jogador 2
            switch(tabuleiro[l][c]){
                case -1: marcador = 'X'; break;
                case 1: marcador = 'O'; break;
                default: marcador = ' - ';
            }
            tabela += '<td>'+ marcador +'</td>'
        }
        tabela+='</tr>'
    }

    tabela += '</table>'

    board.innerHTML = tabela

}

// marcar posição na tabela
function jogar(){
    aviso.innerHTML = 'Vez do jogador: '+ numeroJogador()

    linha = document.getElementById('linha').value - 1
    coluna = document.getElementById('coluna').value - 1

    // uso do if ternario
    if(tabuleiro[linha][coluna] == 0){
        tabuleiro[linha][coluna] = numeroJogador() == 1 ? 1 : -1
    } else {
        aviso.innerHTML = 'Esse capo já foi marcado'

    }
   
    console.table(tabuleiro)

    jogador++
    exibir()
    checar()
}

function checar(){

    // conferir se um dos jogadores ganha na linha
    for(let i=0; i<3; i++){
        let soma = 0
        soma = tabuleiro[i][0] + tabuleiro[i][0] + tabuleiro[i][2]

        if(soma == 3 || soma == -3){
            aviso.innerHTML = 'O jogador '+ numeroJogador() + ' ganhou!'
        }
    }

    // conferir se um dos jogadores ganha na coluna
    for(let i=0; i<3; i++){
        let soma = 0
        soma = tabuleiro[0][i] + tabuleiro[1][i] + tabuleiro[2][i]

        if(soma == 3 || soma == -3){
            aviso.innerHTML = 'O jogador '+ numeroJogador() + ' ganhou!'
        }
    }

    // conferir se um dos jogadores ganha na diagonal
    soma = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2]

    if(soma == 3 || soma == -3){
        aviso.innerHTML = 'O jogador '+ numeroJogador() + ' ganhou!'
    }
    

}

function numeroJogador(){
    return jogador%2 + 1
}