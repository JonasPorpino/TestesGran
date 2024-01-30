const anoVotação = Number(prompt('Digite o ano de Eleição'))
const anoNascimento = Number(prompt('Digite o ano de nascimento'))

const idade =anoVotação-anoNascimento

if(idade<16){
    document.write('Você não tem idade mínima para votar. Idade: '+idade+' anos')
} else if(idade >= 18 && idade < 65){
    document.write('Você é obrigato a votar! Idade: '+idade+' anos')
} else {
    document.write('Você pode ou não votar, é facultativo! Idade: '+idade+' anos')
}
