export class Calculator {

    constructor(){ }

    /**
     * 
     * @param x primer número a sumar
     * @param y segundo número a sumar
     * @returns devuelve la suma de x e y
     */
    sumar(x: number, y: number){
        return x + y;
    }

    /**
     * 
     * @param x primer número a restar
     * @param y segundo número a restar
     * @returns devuelve la resta de x e y
     */
    restar(x: number, y: number){
        return x - y;
    }

    /**
     * 
     * @param x primer número a multiplicar
     * @param y segundo número a multiplicar
     * @returns devuelve la multiplicacion de x e y
     */
    multiplicar(x: number, y: number){
        return x * y;
    }

    /**
     * 
     * @param x dividendo
     * @param y divisor (debe ser diferente de 0)
     * @returns devuelve la division de x e y si es posible, devuelve error si el divisor es 0
     */
    dividir(x: number, y: number){

        if(y!=0) return x / y;
        else return "No es posible division entre 0"
    }

    /**
     * 
     * @param x número que representa la base
     * @param y número que representa la potencia
     * @returns devuelve el resultado de x potecia de y
     */
    potencia(x: number, y: number){
        return Math.pow(x,y)
    }

    /**
     * 
     * @param x base del factorial debe ser entero positivo, no admite negativos
     * @returns devuelve el factorial de x ó devuelve error si es número negativo
     */
    factorial(x: number){

        let fact = 1;

        if(x >= 0 && (x % 1 === 0)){ // verifica que sea positivo y que no sea decimal
            for (let i = 1; i <= x; i++) {
                fact *= i;
            }
        } else{
            return `Error: No existe factorial de ${x}`
        }
        return fact;
    }

}