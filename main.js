
const myClass = {
    name: 'MyClass',
    sayHello: () => {
        return 'Hello ' + this.name;
    },
    sayHallo2: () => { 
        return 'Hello ' + name;
    },
    sayHallo3: function() { 
        return 'Hello ' + this.name;
    }
};

console.log(myClass.sayHello());
console.log(myClass.sayHello2());
console.log(myClass.sayHello3());

const x = 100;
console.log('x = ' + x);

const items = ['item1', 'item2', 'item3'];
console.log('iteams = ' + items);
console.log(items);

console.trace(items);

