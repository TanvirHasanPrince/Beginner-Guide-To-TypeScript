// Number
// let thisNumber: number = 13;
// console.log(thisNumber);

// let big: bigint = 900719925470991n
// console.log(big);

// String
// let thisIsMyString: string = 'This is my TS String';
// console.log(thisIsMyString);

// Boolean
// let myBoolean: boolean = false;
// console.log(myBoolean);


// Object Type
// let employee: {
//  id: number,
//  name: string,
//  age: number,
//  title: string
// } = {
//  id: 23,
//  name: 'john cena',
//  age: 23,
//  title: 'no title'
// }
// console.log(employee);


// Empty {} type
// let vacancy: {
// };
// vacancy.firstName = 'john'


// Array type
// let myArray1: (string |number |boolean )[] = ['string', 1, true ]
// console.log(myArray1);

// Tuple
 // Declare a tuple
 // let person: [string, number, boolean, number]

 // // Initialize the tuple
 // person = ['john', 30, true, 40]

 // console.log(person[3]);

 // You can also use destructing to assign tuple values to variables

 //  let person: [string, number, boolean, number]
 //   person = ['John Cena', 30, true, 40000]
 // let [name2, age, isAdmin, salary] = person;

 // console.log(name2, age, isAdmin, salary);

 //! Enum
 // enum Direction {
 //  Up,
 //  Down,
 //  Left, 
 //  Right
 // }
 // // Using the enum
 // let playerDirection: Direction = Direction.Left

 // console.log(playerDirection);

 // enum Salary {
 //  John = 40000,
 //  Orton = 50000,
 //  Edge = 60000,
 //  Undertaker = 70000
 // }

 // let wrestlerSalary: Salary = Salary.Undertaker

 // console.log(wrestlerSalary);

 // When to use Enums
//  enum ApprovalStatus  {
//   draft,
//   submitted,
//   approved,
//   rejected
//  }

//  const request = {
//   id: 1,
//   status: ApprovalStatus.approved,
//   description: `Please approve this request`
//  }

// if (request.status === ApprovalStatus.approved) {
//  console.log(`Send an email to the applicant`);
// } else {
//  console.log(`Not approved`);
// }

//! Any Types
// let anyValue :any;

// anyValue =5;
// console.log(anyValue);

// anyValue = 'Hello, World'
// console.log(anyValue);

// anyValue = true;
// console.log(anyValue);

// anyValue = {
//  names: 'John',
//  age: 30
// }

// console.log(anyValue);




// ! Union Type
// type Shape = Circle | Square

// interface Circle {
//  kind: "circle";
//  radius: number
// }

// interface Square {
//  kind: 'square',
//  sideLength: number
// }

// function calculateArea (shape: Shape): number {
//  if (shape.kind === 'circle') {
//   return Math.PI * shape.radius **2
//  } else {
//   return shape.sideLength ** 2
//  }
// }

// // Circle Test
// let circle: Circle = {kind: "circle", radius: 10};
// console.log(calculateArea(circle));

// // Circle Square
// let square: Square = {kind: "square", sideLength: 20};
// console.log(calculateArea(square));


// type Point = {
//  x: number,
//  y: number,
// }

// // Type Alias
// let point: Point = {x:10, y: 20};
// console.log(point);

// Type Alias
// type Result = Success | Error;

// interface Success {
//   success: true;
//   data: string;
// }

// interface Error {
//  name: string;
//  message: string;
//  success: false;
//  data: string;
// }

// let successResult: Result = { success: true, data: "Operation successful" };
// let errorResult: Result = {
//   name: "Stupid Name",
//   message: "abcd",
//   success: false,
//   data: "Operation failed",
// };


// console.log(successResult);
// console.log(errorResult);

type Role = 'employee' | 'manager' | 'admin' | 'super-admin'

let role: Role = 'admin';