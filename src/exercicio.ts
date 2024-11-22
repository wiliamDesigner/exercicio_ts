function multiplicacao(numero1: number, numero2: number):number{
    return numero1 * numero2;
}
const valor1: number = 2;
const valor2: number = 10;

const resultado: number = multiplicacao(valor1, valor2);

console.log(`O resultado da multiplicação é: ${resultado}`);

console.log("*------------------*");

function saudacao(nome:string):string{
    return `Olá,${nome}!Seja bem vindo!`;
}

console.log(saudacao("joao"));

console.log("*------------------*")