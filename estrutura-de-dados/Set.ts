import readlinesync = require("readline-sync");

const alunos = new Set<string>();
let continuar: boolean = false;
let opcao: number = 0;

do {

    console.log("1 - Adicionar aluno");
    console.log("2 - Listar alunos");  //menu das informações
    console.log("3 - Remover aluno");
    console.log("4 - Limpar lista de alunos");

    opcao = readlinesync.questionInt("Escolha uma opção: "); // escolha da opção do menu

    switch (opcao) { // opcao escolhida
        case 1:
            alunos.add(readlinesync.question("Digite o nome do aluno: ")); // caso opcao for 1, cadastrar aluno
            break;
        case 2:// caso opcao for 2, listar alunos
            console.table(alunos); //lista os alunos em tabela
            break;
        case 3: // caso opcao for 3, remover aluno
            let nomeAluno = readlinesync.question("Digite o nome do aluno: ").toLowerCase();
           for(let nome of alunos){ // percorre o array de alunos
               if(nome == nomeAluno){ // valida se o aluno existe
                   alunos.delete(nome); // remove o aluno pelo nome da lista "o nome tem que ser exatamente igual ao cadastrado"
                console.log("Aluno removido!");
               }else{
                console.log("Aluno nao encontrado!");
               }
           }
           // alunos.delete().toUpperCase());
            break;
        case 4:
            alunos.clear();
            break;
        default:
            console.log("Opção inválida");
            break;
    }

    continuar = readlinesync.keyInYNStrict("Deseja continuar? "); // pergunta se deseja voltar para o menu ou sair

} while (continuar);