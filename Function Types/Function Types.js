// Parameter Types
// function greet (name: string, greeting: string = 'Hello from me'): string {
// return (`This is my ${name} and this is the greeting ${greeting}`);
// }
function sum(a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
}
var result = sum(3, 5);
console.log(result);
var result2 = sum(3, 5, 7);
console.log(result2);
