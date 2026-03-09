

console.log(divisao(10,2));

function divisao(numero1: number, numero2: number): number | null{   // função que pode retornar dois tipos de dados, nesse caso number ou null
       let resul = numero1 / numero2;
    return (resul != Infinity ? resul : null);
 }

 