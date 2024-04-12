// interface Person {
//   firstName: string;
//   middleName?: string;
//   lastName: string;
//   readonly email: string

// }

// function getFullName(person: Person) {
//   return `${person.firstName} ${person.middleName} ${person.lastName}
//   Email is ${person.email}
//   `;
// }

// let person: Person = {
//   firstName: "John",
//   middleName: "Cena",
//   lastName : 'Jamal',
//   email: 'Email@gmail.com'
// };

// console.log(getFullName(person));

// interface functionFormat {
//   (str: string, isUpper: boolean): string;
// }

// let format: functionFormat;

// format = function (str: string, isUpper: boolean): string {
//   return isUpper ? str.toLowerCase() : str.toUpperCase();
// };

// console.log(format('23', false));

// Define the base interface
interface Shape {
  color: string;
}

interface Dimension {
  width: number;
  height: number;
}

// Extend the base interface
interface Rectangle extends Shape, Dimension {
  // Rectangle = Rectangle + shape + dimension
  sideLength: number;
}

// Implement
let square: Rectangle = {
  width: 19,
  height: 20,
  color: "Red",
  sideLength: 10,
};
