export class Person {
    name;
    firstName;
    age;

    constructor(name, firstName, age) {
        this.name = name;
        this.firstName = firstName;
        this.age = age;
    }

    print() {
        return this.fullName + ', ' + this.age;
    }

    get fullName() {
        return this.name + ' ' + this.firstName;
    }

    isUnderEighteenArrowFunction = () => {
        return this.age < 18;
    }

    isOlderThanEighteenRegularFunction = function() {
        return this.age >= 18;
    }
}

export const AndreWinklerPerson = {
    name: 'Winkler',
    firstName: 'Andre',
    age: 53,

    /** This does not work! Because 'this' is not bound to the enclosing object. */
    printAsArrowFunction: () => {
        return this.name + ' ' + this.firstName + ', ' + this.age;
    }
}

// Javascript before ES6
export const AnotherPerson = function() {
    this.name = 'Doe';
    this.firstName = 'John';
    this.age = 25;

    this.print = function() {
        return this.name + ' ' + this.firstName + ', ' + this.age;
    }

    this.isUnderEighteenArrowFunction = () => {
        return this.age < 18;
    }

    this.isOlderThanEighteenRegularFunction = function() {
        return this.age >= 18;
    }
}
