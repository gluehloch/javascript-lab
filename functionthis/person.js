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

    isUnderEighteen = () => {
        return this.age < 18;
    }

    isOlderThanEighteen = function()   {
        return this.age >= 18;
    }

}
