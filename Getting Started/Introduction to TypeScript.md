# Introduction to TypeScript

TypeScript is a superset of JavaScript.

TypeScript builds on top of JavaScript. First, you write the TypeScript code. Then, you compile the TypeScript code into plain JavaScript code using a TypeScript compiler.

Once you have the plain JavaScript code, you can deploy it to any environment that JavaScript runs.


TypeScript files use the .ts extension rather than the .js extension of JavaScript files.


TypeScript uses the JavaScript syntaxes and adds additional syntaxes for supporting Types.

## Why TypeScript
 - Introduce optional types to JavaScript.
 - Implement planned features of future JavaScript
 - TypeScript improves your productivity while helping avoid bugs
 - TypeScript brings the future JavaScript to today

### Understanding dynamic type in JavaScript
JavaScript is dynamically typed. Unlike statically typed languages such as Java or C#, values have types instead of variables. For example:
```
let box;
box = "hello";
box = 100;

```
The type of the box variable changes based on the value assigned to it.

To find the type of the box variable at runtime, you use the typeof operator:

```
let box;
console.log(typeof(box)); // undefined

box = "Hello";
console.log(typeof(box)); // string

box = 100;
console.log(typeof(box)); // number

```

In this example, the first statement defines the variable without assigning a value. Its type is undefined.

Then, we assign "Hello" to box variable and show its type. The type of the box variable now changes to string.

Finally, we assign 100 to the box variable. This time, the type of the box variable changes to number.

As you can see, as soon as the value is assigned, the type of the variable changes.

And you don’t need to explicitly tell JavaScript the type. JavaScript will automatically infer the type from the value.

Dynamic types offer flexibility. However, they also lead to problems.

Problems with dynamic types

Suppose you have a function that returns a user object based on an id:

```
function getUser(id){
  return {
    id: id,
    name: `John Cena ${id}`,
    age: 99.5
  }
}

```

The following uses the getUser() function to retrieve the user with id 1 and show its data:

```
const user = getUser(1);
console.log(`The user ${user.Name} and age $${user.age}`);

```

output:
```
The user undefined and age 99.5 

```

The issue is the object does not have any **name** property it has **Name** property. 

However, you can only know it until you run the script.

Referencing a property that doesn’t exist on the object is a common issue when working in JavaScript.


### How Typescript solves the problems of dynamic types
To fix the problem of referencing a property that doesn’t exist on an object, you do the following steps:

First, define the “shape” of the user object using an interface. 

```
interface User{
    id: number,
    name: string,
    age: number
};

```

Second, explicitly use the Product type as the return type of the getProduct() function:

```
function getUser(id) : User{
  return {
    id: id,
    name: `John Cena ${id}`,
    age: 99.5
  }
}
```

When you reference a property that doesn’t exist, the code editor will inform you immediately.

