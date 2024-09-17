export abstract class Person {
    protected name: string;
    protected lastname: string;
    protected address: string;
    protected phone: string; // al no realizar ninguna operacion matematica puede se un string
    protected age: number;
    protected birthDate: Date;

    constructor(name: string, lastname: string, address: string, phone: string, birthDate: string){
        
        this.name = name;
        this.lastname = lastname;
        this.address = address;
        this.phone = phone;
        this.birthDate = this.checkFormat(birthDate); // suponiendo que previo a crear el objeto se ha verificado la fecha de nacimiento
        this. age = this.calculateAge();
    }


    /**
     * Verificar que el string ingresado cumpla con 
     * @param birthDate fecha en formato string
     * @returns fecha en tipo date en formato YYYY-MM-DD
     */

    private checkFormat(birthDate: string){
        
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        if (!regex.test(birthDate)) {

            return new Date('2000-01-01'); // fecha por defecto
        }
        return new Date(birthDate); // devuelve la fecha formateada en tipo Date
    }

    private calculateAge(){
        const today = new Date();
        let age = today.getFullYear() - this.birthDate.getFullYear();
        const monthDiff = today.getMonth() - this.birthDate.getMonth();
        if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < this.birthDate.getDate())) {
            age--;
        }
        return age;
    }

    checkAgeRange(){
        return this.age > 17 ? true : false;
    }

    abstract showData() : string
}

export class Employee extends Person {
    private salary: number;

    constructor(name: string, lastname: string, address: string, phone: string, birthDate: string, salary: number){
        super(name, lastname, address, phone, birthDate);
        this.salary = 0;
        this.setSalary(salary);
    }

    /**
     * establecer el salario del empleado
     * @param salary 
     */
    setSalary(salary: number){
        this.salary = salary;
    }

    getSalary(){
        return this.salary;
    }

    /**
     * Mostrar la informacion del empleado
     * @returns un texto con la informacion del empleado
     */
    showData(): string {
        return `Empleado: ${this.name} ${this.lastname}. Dirección: ${this.address}. Télefono: ${this.phone}. Edad: ${this.age}. Salario: ${this.salary}`
    }

    /**
     * Obtener un json con la informacion del empleado, para un mejor manejo de informacion
     * @returns JSON con los atos del empleado
     */
    getData(){
        return [this.name, this.lastname, this.address, this.phone, this.birthDate.toLocaleDateString(), this.age, this.salary]
    }
}