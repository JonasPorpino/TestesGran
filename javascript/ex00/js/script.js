function somar(){
    let n1 = Number(document.getElementById('numero1').value)
    let n2 = Number(document.getElementById('numero2').value)

    soma = n1 + n2

    const resultado = document.getElementById('resultado')
    
    resultado.innerHTML=" igual à "+ soma
}

function subtrair(){
    let n1 = Number(document.getElementById('numero1').value)
    let n2 = Number(document.getElementById('numero2').value)

    sub = n1 - n2

    const resultado = document.getElementById('resultado')
    
    resultado.innerHTML=" igual à "+sub
}

function vezes(){
    let n1 = Number(document.getElementById('numero1').value)
    let n2 = Number(document.getElementById('numero2').value)

    vez = n1 * n2

    const resultado = document.getElementById('resultado')
    
    resultado.innerHTML=" igual à "+vez
}

function dividir(){
    let n1 = Number(document.getElementById('numero1').value)
    let n2 = Number(document.getElementById('numero2').value)

    divid = n1 / n2

    const resultado = document.getElementById('resultado')
    
    resultado.innerHTML=" igual à "+divid
}