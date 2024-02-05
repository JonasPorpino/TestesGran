

// fatorial de 5 = 5!
// 5 * 4 * 3 * 2 * 1

function fatorial(x){
    if(x<1){
        return 1
    } else {
        return x * fatorial(x-1)
    }
}

document.write(fatorial(5))