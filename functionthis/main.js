"use strict";

import { Person, AndreWinklerPerson as andreWinkler, AnotherPerson } from './person.js';

const person1 = new Person('Doe', 'John', 25);
const person2 = new Person('Doe', 'Jane', 22);
const person3 = new Person('Doe', 'Joe', 18);
const person4 = new Person('Doe', 'Jack', 15);

console.log(person1.print());
console.log(person2.print());
console.log(person3.print());
console.log(person4.print());

console.log(person4.isUnderEighteenArrowFunction(), person4);
console.log(person3.isUnderEighteenArrowFunction(), { person3 });
console.log(person3.isOlderThanEighteenRegularFunction(), person3);

const methodReferenceOfClass = () => person1.isOlderThanEighteenRegularFunction();
console.log(methodReferenceOfClass(), person1);

function methodReference() {
    return person1.isOlderThanEighteenRegularFunction();
}
console.log(methodReference(), person1);

const myClass = {
    name: 'MyClass',
    sayHello: function() {
        return 'Hello ' + this.name;
    },
    /* Im Gegensatz bei der Klassendefinition, funktioniert das hier nicht:
       'this' ist in diesem Fall ungebunden und veweist auf 'window'.
    sayHello2: () => { 
        return 'Hello ' + this.name;
    }
    */
    printThis: function(callbackFunction) {
        // callbackFunction.call(this);
        const newBindedFunction = callbackFunction.bind(this);
        newBindedFunction();
    }
};

console.log(myClass.sayHello());
console.log(myClass.printThis(() => console.log('arrow function this: ', this))); // function binding mit call does not work here!
console.log(myClass.printThis(function() { console.log('regular function this: ', this) }));

// Throws a TypeError: Cannot read property 'name' of undefined
// andreWinkler.printAsArrowFunction();

const anotherPerson = new AnotherPerson();
console.log(anotherPerson.print());
console.log('anotherPeson is older than eighteen?', anotherPerson.isOlderThanEighteenRegularFunction());
console.log('anotherPerson is under than eighteen?', anotherPerson.isUnderEighteenArrowFunction());
