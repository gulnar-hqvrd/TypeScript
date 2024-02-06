let FirstName: string = "Gulnar";
let age: number = 55;
let isActive: boolean = true;

// let names : Array<string> = ["Gulnar" , 1] // numbere gore xeta verir type string yazmisiq
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

// ANY and Unknow

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

let uncertain: unknown = 4;
notSure = "maybe a string instead";
notSure = false;

if (uncertain === "boolean") {
  console.log("Dogru");
} else if (uncertain === "number") {
  console.log("Number");
} else if (uncertain === "string") {
  console.log("string");
}

//javascript\

// function getName() : any{
//     return 0;
// }

// let result = warmUser();
// console.log(result);

// function error(message: string): never {
//   throw new Error(message);
// }

// function infiniteLoop(): never {
//   while (true) {}
// }

// function f0(): void {}

// function f1(): string {
//   return "Hello";
// }

// function f2(): number {
//   return 9;
// }

// function f3(): boolean {
//   return true;
// }

// mongodb+srv://gulnar-hqvrd:b2ZVWHd3ihoD3zVq@cluster0.kvvvhva.mongodb.net/

// Enum

enum Status {
  None,
  Active,
  Passive,
  Deleted,
  Modified,
  Holiday,
  Hired,
}

// class Employee {
//     status : Status;
//     constructor(){
//         this.status = Status.Active
//     }
// }

// enum Color {
//   Red,
//   Blue,
//   Green,
// }

// let color = Color.Red;
// console.log(color);

// let color2:string = Color[0]
// console.log(color2);

// enum Color {
//   Red = 4,
//   Blue = 7,
//   Green = 9,
// }

// let color = Color.Red;
// console.log(color);

// let color2:string = Color[7]
// console.log(color2);

enum Colors {
  Red = "Qirmizi",
  Blue = "Mavi",
  Green = "Yasil",
  Yellow = "Sari",
  Pink = "Cehrayi",
  Tomoto = "Pamidor",
}

// let c :string = Colors.Red;
// console.log(c);

interface IEmployee {
  firstname: string;
  lastname: string;
  age: number;
  status: Status;
  mail: string;
  address: string;
}

let employee: IEmployee = {
  firstname: "Gulnar",
  lastname: "Hagverdiyeva",
  mail: "gulnarhagverdiyevaa@idda.az",
  age: 22,
  address: "Baku , Azerbaijan",
  status: Status.Active,
};

class Calishan implements IEmployee {
  firstname: string;
  lastname: string;
  mail: string;
  age: number;
  address: string;
  status: Status;

  constructor (
    firstname: string,
    lastname: string,
    mail: string,
    age: number,
    address: string,

  ){
    this.firstname = firstname,
    this.lastname = lastname,
    this.age = age,
    this.mail = mail,
    this.address = address
    this.status = Status.Active

  }
}


class Student implements IEmployee {
  firstname: string;
  lastname: string;
  mail: string;
  age: number;
  address: string;
  status: Status;
  studentnumber : string;

  constructor (
    firstname: string,
    lastname: string,
    mail: string,
    age: number,
    address: string,
studentnumber : string
  ){
    this.firstname = firstname,
    this.lastname = lastname,
    this.age = age,
    this.mail = mail,
    this.address = address
    this.status = Status.Active
    this.studentnumber = studentnumber
  }
}