import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { Calculator } from './CalculatorClass.ts'
import { Employee } from './PersonClass.ts'
import { Account, AccountTypes } from './AccountClass.ts'
import { Aligment, Header } from './HeaderClass.ts'
import { Song } from './SongClass.ts'


// clase header
const header = new Header();
const align = Aligment.start; // se puede modificar segun el align que desee

const details = header.getHeaderDetails();

console.log(details);
header.setAlignment(align); 

// clase calculator

const calculator = new Calculator();

console.log(`1+4 = ${calculator.sumar(1,4)}`); // 5
console.log(`5 - 32 =${calculator.restar(5,32)}`); // -27
console.log(`5x2 = ${calculator.multiplicar(5,2)}`); // 10
console.log(`10 / 2 = ${calculator.dividir(10,2)}`); // 5
console.log(`4^2 =  ${calculator.potencia(4,2)}`); // 16
console.log(`5! ${calculator.factorial(5)}`); // 120

// deben de dar error:
console.log(`5/0 = ${calculator.dividir(5,0)}`); // error por el 0
console.log(`-34! = ${calculator.factorial(-34)}`); // error por el negativo
console.log(`5.4! = ${calculator.factorial(5.4)}`);  // error porque no existe factorial de decimales


//  clase song

const song = new Song("Passionfruit","Pop");
song.setAutor("Drake");

console.log(`Autor: ${song.getAuthor()}`);
console.log(`Detalles: ${song.showSong()}`);

// clase account

let name = "Diego Majano";
let amount = 120;
let type = AccountTypes.Ahorro;
let accountNumber = 12348765;

const account = new Account(name, amount, type, accountNumber);
console.log(`Nombre del titular: ${account.getName()}`);
console.log(`Numero de cuenta: ${account.getAccountNumber()}`);
console.log(`Tipo de cuenta: ${account.getAccountType()}`);
console.log(`Cantidad en cuenta: $${account.getAmount()}`);
console.log(`Puedo depositar 100?: ${account.depositar(100)}`);
console.log(`Puedo retirar 100?: ${account.retirar(100)}`);
console.log(`Puedo retirar 200?: ${account.retirar(200)}`); // debe dar error
console.log(`Mostrar datos de la cuenta: ${account.getAccountData()}`);



// clase empleado

let nameEmployee = "Diego"
let lastnameEmployee = "Rodríguez"
let address = "Calle tal, avenida tal, Ciudad, Pais"
let phone = "76543210"
let birthDate = "2002-12-06"
let salary = 2000; 

const employee = new Employee(nameEmployee, lastnameEmployee, address, phone, birthDate, salary);

console.log(`Detalles: ${employee.showData()}`);
console.log(`Es mayor de edad? ${employee.checkAgeRange()}`);
console.log(`Datos tipo JSON: ${employee.getData()}`);





/*

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`
*/