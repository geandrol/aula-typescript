import readlinesync = require("readline-sync");

//const pessoas: string[] = []; //Array de strings iniciado vazio

const alunos: Array<number> = [];

 const notas = new Array<number>(5); // Array de números iniciado com 5 posições

for(let i = 0; i < notas.length ; i++){
    notas[i] = readlinesync.questionFloat("Digite a nota: ");
}

console.table(notas);





