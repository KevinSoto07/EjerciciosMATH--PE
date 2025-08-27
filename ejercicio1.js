import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Ingresa un número: ", function(num){
    num = Number(num);
    console.log("El cuadrado es: " + (num * num));
    console.log("La raíz cuadrada es: " + Math.sqrt(num));
    rl.close();
})