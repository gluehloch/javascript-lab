"use strict";

import { Person } from './person.js';

const person1 = new Person('Doe', 'John', 25);
const person2 = new Person('Doe', 'Jane', 22);
const person3 = new Person('Doe', 'Joe', 18);
const person4 = new Person('Doe', 'Jack', 15);

console.log(person1.print());
console.log(person2.print());
console.log(person3.print());
console.log(person4.print());
console.log(person4.isUnderEighteen(), person4);
console.log(person3.isUnderEighteen(), { person3 });
console.log(person3.isOlderThanEighteen(), person3);

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
};

console.log(myClass.sayHello());
// console.log(myClass.sayHello2()); // this.name is undefined

const x = 100;
console.log('x = ' + x);

const items = ['item1', 'item2', 'item3'];
console.log('iteams = ' + items);
console.log(items);

// console.trace(items);

