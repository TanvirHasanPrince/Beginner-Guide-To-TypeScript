// type Person = {
//  name: string,
//  age: number
// }

// type Employee = {
//  jobTitle : string,
//  salary: number
// }


// type PersonEmployee = Person & Employee


// const randyOrton: PersonEmployee = {
//   jobTitle: "Wrestler",
//   name: "Randy Orton",
//   age: 23,
//   salary: 50000,
// };

// console.log(randyOrton);

let myVar:any = '123';

let myNumber: number = <number>myVar

console.log(typeof myNumber);