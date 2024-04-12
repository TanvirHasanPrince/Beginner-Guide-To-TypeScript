# Introduction to the TypeScript Class
JavaScript does not have a concept of class like other programming languages such as Java and C#. In ES5, you can use a constructor function and prototype inheritance to create a “class”.

## Access modifier

TypeScript provides three access modifiers to class properties and methods: private, protected, and public.
- The private modifier allows access within the same class.
- The protected modifier allows access within the same class and subclasses.
- The public modifier allows access from any location.

## Read Only modifier
TypeScript provides the readonly modifier that allows you to mark the properties of a class immutable. The assignment to a readonly property can only occur in one of two places:

- In the property declaration.
- In the constructor of the same class.

## Static properties 
Static properties in TypeScript belong to the class itself rather than instances of the class. They are accessed using the class name rather than through instances.