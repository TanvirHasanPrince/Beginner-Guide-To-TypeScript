// Parameter Types
// function greet (name: string, greeting: string = 'Hello from me'): string {
// return (`This is my ${name} and this is the greeting ${greeting}`);
// }

// console.log(greet("John cena"));

// Rest Parameter
// function sum(...number:number[]):number {
//  return number.reduce((total, num)=> total + num, 0)
// }

// console.log(sum(1,2, 3, 4));


// Function Overloading
// function addNumber (a: number, b: number):number {
//  return a  +b 
// }

// function addStrings (a: string, b: string): string {
//  return a + b
// }

// function add (a:number | string, b: number | string): number |string {
//  if (typeof a === 'number' && typeof b === 'number') {
//   return a + b
//  }

//   if (typeof a === "string" && typeof b === "string") {
//     return a + b;
//   }


// }

function sum (a: number, b: number): number;
function sum (a: number, b: number, c: number): number;
function sum (a: number, b:number, c?:number): number {
 if (c) return a + b+ c;
 return a +b
}

let result = sum (3,5)
console.log(result);

let result2 = sum (3,5, 7);
console.log(result2);

