# Basic Types

## Number Type
All numbers in TypeScript are either floating-point values or big integers. The floating-point numbers have the type number while the big integers get the type bigint.
 - Big Integers: The big integers represent the whole numbers larger than 253 – 1. A Big integer literal has the n character at the end of an integer.

## String Type
Like JavaScript, TypeScript uses double quotes (") or single quotes (') to surround string literals:

## Boolean Type
The TypeScript boolean type has two values: true and false. The boolean type is one of the primitive types in TypeScript.

## Object Type
The TypeScript object type represents all values that are not in primitive types.

### object vs. Object
TypeScript has another type called Object with the letter O in uppercase. It’s important to understand the differences between them.

The object type represents all non-primitive values while the Object type describes the functionality of all objects.

For example, the Object type has the toString() and valueOf() methods that can be accessible by any object.

### The empty type {}
TypeScript has another type called empty type denoted by {} , which is quite similar to the object type.

The empty type {} describes an object that has no property on its own. If you try to access a property on such object, TypeScript will issue a compile-time error:

## Array Type
A TypeScript array is an ordered list of data. 
```
let arrayName: type[];

```
### Storing values of mixed types
In TypeScript, an array is an ordered list of values. An array can store a mixed type of values.

## Tuple Values
A tuple works like an array with some additional considerations:
 - The number of elements in the tuple is fixed.
 - The types of elements are known, and need not be the same.

In TypeScript, tuples are similar to arrays but have a fixed number of elements, and each element may be of a different type. Once declared, the types of the elements within the tuple cannot be changed.


## Enum Types
An enum is a group of named constant values. Enum stands for enumerated type.


In TypeScript, an enum is a data type that allows you to define a set of named constants. Enums are useful when you have a fixed set of related values that you want to represent with more descriptive names rather than using raw numbers or strings.


## Any Type

In JavaScript, the any type is a special data type that represents values of any data type. Variables declared with the any type can hold values of any type, and TypeScript will not perform type checking on these variables.

Sometimes, you may need to store a value in a variable. But you don’t know its type at the time of writing the program. And the unknown value may come from a third-party API or user input.

## Never Type

In TypeScript, the never type represents the type of values that never occur. This type is typically used to indicate that a function will not return normally (for example, it always throws an error or enters an infinite loop) or that a variable cannot have any value at all (for example, it's never initialized or always reassigned).

The never type is useful for catching logic errors and ensuring type safety in your TypeScript code. It's often used in conjunction with advanced type checking and control flow analysis to make code more robust and maintainable.

## Union Type
A union type in TypeScript allows a variable to have more than one type. You can combine types using the | operator to create a union type. This means that a variable declared with a union type can hold values of any of the specified types.

## Type Aliases
Type aliases in TypeScript allow you to create a new name for a type. This can be useful to simplify complex type definitions or to make types more descriptive.

## String Literal Types
String literal types in TypeScript allow you to specify that a string variable should only have a particular, exact value. This adds precision to your type definitions and helps prevent unintended values from being assigned to variables.
