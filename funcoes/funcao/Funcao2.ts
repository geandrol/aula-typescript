
tipoProduto("Teste");

function tipoProduto(tamanho: number | string) : void{  // função com parametro que pode receber dois tipos de dados
      
    if(typeof tamanho === 'number'){ // verificação de tipo com typeof
           console.log("\nO tamanho é um numero");
    }else{
         console.log("\nO tamanho é uma string");
    }

}