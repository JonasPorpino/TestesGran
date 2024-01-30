
let nota1 =Number(prompt('Digite a 1º nota'))
let nota2 =Number(prompt('Digite a 2º nota'))
let nota3 =Number(prompt('Digite a 3º nota'))
let nota4 =Number(prompt('Digite a 4º nota'))

const media = ( nota1+nota2+nota3+nota4)/4

if(media>=7){
    alert('Média do aluno '+media+' Aprovado!')
}else if(media<5){
    alert('Média do aluno '+media+' Reprovado!')
} else{
    alert('Média do aluno '+media+' Recuperação!')
}


/**
 * 
 * if ternário
 * 
 * let mensagem = media >= 7 'Aprovado':'Reprovado'
 * console.log(mensagem)
 * 
 */