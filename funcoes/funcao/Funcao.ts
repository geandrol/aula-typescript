let resultado: number = 0;

console.log(somar(8,5)); // imprimindo no console o retorno da função, que estamos passando 2 argumentos

resultado = somar(8,5); // atribuindo o retorno da funcao a uma variavel

let juros = resultado * 0.1;

console.log(juros);

//função dividindo 2 numeros
console.log("\nfunção dividindo 2 numeros");

dividir(10,2);

let resultado2 = dividir(10,2);

console.log(resultado2);

function somar(numero1: number, numero2: number) : number{   // função que soma 2 numeros e retorna o resultado
   return numero1  +  numero2;
}

function dividir(numero1: number, numero2: number) : void{   // função que divide 2 numeros e retorna o resultado
   console.log(numero1  /  numero2);
}



