export enum AccountTypes {
    Ahorro,
    Corriente
}

export class Account {

    // atributos
    private name: string;
    protected amount: number;
    private accountType: AccountTypes;
    private accountNumber: number;

    /**
     * 
     * @param name nombre del titular de la cuenta
     * @param amount cantidad de efectivo en la cuenta
     * @param accountType tipo de cuenta (enum AccountTypes)
     * @param accountNumber numero de cuenta
     */
    constructor(name: string, amount: number, accountType: AccountTypes, accountNumber: number){
        this.name = name;
        this.amount = amount;
        this.accountType = accountType;
        this.accountNumber = accountNumber;
    }

    /**
     * 
     * @returns devuelve el nombre del titular
     */
    getName(){
        return this.name;
    }
    
    /**
     * 
     * @returns devuelve la cantidad de efectivo en la cuenta
     */
    getAmount(){
        return this.amount;
    }

    /**
     * 
     * @returns devuelve el tipo de cuenta (enum AccountTypes)
     */
    getAccountType(){
        return AccountTypes[this.accountType];
    }

    /**
     * 
     * @returns devuelve el número de cuenta
     */
    getAccountNumber(){
        return this.accountNumber;
    }

    /**
     * 
     * @param amount cantidad a depositar
     * @returns estado de la transacción
     */
    depositar(amount: number){
        if(this.getAmount()>5.00){
            this.amount += amount;
            return `Transacción exitosa. Se depositó $${amount}. Saldo en cuenta: $${this.getAmount()}`
        } else return "Trasacción inválida, depósito mínimo de $5.00"
    }

    /**
     * 
     * @param amount cantidad a retirar
     * @returns estado de la transacción
     */

    retirar(amount: number){

        if(amount< 5.00) return `Transacción inválida. Retiro mínimo de $5.00.`
        if(this.getAmount() < amount) return `Transacción inválida. Saldo insuficiente.`
        else{
            this.amount -= amount;
            return `Transacción exitosa. Se retiró $${amount}. Saldo en cuenta: $${this.getAmount()}`;
        }
    }

    getAccountData(){
        return `Titular: ${this.name}. Tipo de cuenta: ${AccountTypes[this.accountType]}. Número de cuenta: ${this.accountNumber}`
    }


}