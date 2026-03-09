
export function somar(numero1: number, numero2: number) : number{
    return numero1  +  numero2;
}

export function subtrair(numero1: number, numero2: number) : number{
    return numero1  -  numero2;
}

export function multiplicar(numero1: number, numero2: number) : number{
    return numero1  *  numero2;
}

export function dividir(numero1: number, numero2: number) : number | null{
      let resul = numero1 / numero2;
    return (resul != Infinity ? resul : null);
}

export function turma14() : void{
    console.log("CAlculadora desenvolvida pela turma 14!");
}
