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

//javascript

function warmUser(): void {
  console.log("This is my warning message ");
}

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


// Enum

// enum Status {
//     None ,
//     Active,
//     Passive,
//     Deleted,
//     Modified,
//     Holiday,
//     Hired,
// }


// class Employee {
//     status : Status;
//     constructor(){
//         this.status = Status.Active
//     }
// }