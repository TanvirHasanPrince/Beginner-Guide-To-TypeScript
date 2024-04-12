class Person {
 static numberOfPerson: number = 0;

  readonly ssn: string;
  firstName: string;
  lastName: string ;

  constructor(ssn:string, firstName:string, lastName:string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
    Person.numberOfPerson++
  }
  public getFullName ():string {
 return `${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Person {
 private employeeId: number 

 constructor (ssn:string, firstName: string, lastName: string, employeeId: number) {
  super(ssn, firstName, lastName);
  this.employeeId = employeeId
 }
}

 let person1 = new Person ('171-28-9263', 'Randy', 'Orton');
 let person2 = new Person ('171-28-9263', 'Randy', 'Orton');
 let person3 = new Person ('171-28-9263', 'Randy', 'Orton');



 console.log(Person.numberOfPerson);
 // let employee = new Employee('111-22-333', 'John', 'Cena', 1234)

 
//  person.ssn = "121322345";
// console.log(person.ssn);

