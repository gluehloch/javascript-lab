"use strict";

const x = 100;
console.log('x = ' + x);

const items = ['item1', 'item2', 'item3'];
console.log('iteams = ' + items);
console.log(items);
console.log(doStuff());
// Does not worK: console.log(doStuff2());

// console.trace(items);

function doStuff() {
    return x + 1;
}

const doStuff2 = () => x + 1;
console.log(doStuff2());
