let myWord: string = 'My First TS Word';
const myConstNumber: number = 23;
console.log(myWord);
console.log(myConstNumber);

// Array
let myArray: number[] = [1, 2, 3, 4,5]
console.log(myArray);


// Object
type Object2 = {
 id: number,
}

const objectify: Object2 = {
 id: 23
}


// Function
let gretting: (name:string)=> string; // Arrow i can assign them like this

gretting = function (name:string):string {
 return `hi ${name}`
}
