var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
        Person.numberOfPerson++;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person.numberOfPerson = 0;
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(ssn, firstName, lastName, employeeId) {
        var _this = _super.call(this, ssn, firstName, lastName) || this;
        _this.employeeId = employeeId;
        return _this;
    }
    return Employee;
}(Person));
var person1 = new Person('171-28-9263', 'Randy', 'Orton');
var person2 = new Person('171-28-9263', 'Randy', 'Orton');
var person3 = new Person('171-28-9263', 'Randy', 'Orton');
console.log(Person.numberOfPerson);
// let employee = new Employee('111-22-333', 'John', 'Cena', 1234)
//  person.ssn = "121322345";
// console.log(person.ssn);
