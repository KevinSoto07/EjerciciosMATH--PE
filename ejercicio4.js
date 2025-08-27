import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Ingrese el número de habitación: ", function(num){
    num = Number(num);
    let piso = Math.ceil(num / 10);
    console.log("La habitación " + num + " está en el piso " + piso);
    rl.close()
})