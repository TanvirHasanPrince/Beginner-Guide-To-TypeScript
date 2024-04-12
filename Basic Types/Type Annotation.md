# What is Type Annotation in TypeScript
TypeScript uses type annotations to explicitly specify types for identifiers such as variables, functions, objects, etc.

TypeScript uses the syntax ": type" after an identifier as the type annotation, which type can be any valid type.

## Type annotations in variables and constants
```
let variableName: type;
let variableName: type = value;
const constantName: type = value;

```

## Type annotations in Arrays
```
let arrayName: type[];

```

## Type annotations in Objects

```
let object: Object = {

}

type Object = {

}
```

## Function arguments & return types
The following shows a function annotation with parameter type annotation and return type annotation:

```
let greeting : (name: string) => string;

```