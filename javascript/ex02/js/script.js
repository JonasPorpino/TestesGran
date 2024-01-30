/**
 * verificar o aumento salarial para:
 * estagiário: 100%
 * analista: 50%
 * gerente: 30%
 * presidente: 10%
 *  */ 

const salario = prompt('digite o salário')
const cargo = prompt('digite o cargo 1(est) 2(an) 3(ger) 4(pr)')
let aumento = 0

switch(cargo){
    case '1':   aumento=2; break; // 2 equivale a ao dobro
    case '2':   aumento=1.5; break; // 1.5 equivale a um + 50%
    case '3':   aumento=1.3; break; // 1.3 equivale a um + 30%
    case '4':   aumento=1.1; break; // 1.1 equivale a um + 10%
}

const novoSalario = salario * aumento

alert('O novo salário é R$: '+novoSalario)