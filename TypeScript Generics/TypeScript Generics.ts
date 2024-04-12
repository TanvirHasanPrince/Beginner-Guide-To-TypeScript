// function getRandomElement<T> (item: T[]):T {
//  let randomIndex = Math.floor(Math.random() * item.length)
//  return item[randomIndex]
// }

// let numbers = [1, 5, 7, 4, 2, 9]
// let colors = ['Red', "Green", "Yellow"];
// let randomEle = getRandomElement(numbers);
// console.log( randomEle);
// console.log(typeof randomEle);

function merge<U extends object, V extends object>(obj1: U, Obj2: V) {
  return {
    ...obj1,
    ...Obj2,
  };
}

let result = merge(
  {
    name: "John",
  },
  {
   jobTitle: "Wrestler"
  }
);

console.log(result);
