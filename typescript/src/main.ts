import { DefaultToDo, Supplier, ToDo } from "./ImplicitThis";

class Xxx {
    message = 'This is a supplier message.';
    todo: DefaultToDo;

    constructor(private supplier2: Supplier) {
        const supplier = () => {
            return this.message;
        }
        this.todo = new DefaultToDo(supplier);
    }

    print() {
        this.todo.print();
        console.log(this.todo.supplier() + ' ' + this.supplier2());
    }
}

const message = 'This is another supplier message from outer scope.';

const xxx = new Xxx(() => {return message});
xxx.print();


const updateToDo = (todo: ToDo, fieldsToUpdate: Partial<ToDo>) => {
    return { ...todo, ...fieldsToUpdate };
}


const initialToDo: ToDo = {
    title: 'learn TypeScript',
    description: 'study hard'
};

const updatedDto = updateToDo(initialToDo, {title: 'Learn more TypeScript'});
console.log(updatedDto);


type status = 'FINAL' | 'CONSTRUCTION' | 'TEST';

let myStatus: status = 'FINAL';
myStatus = 'CONSTRUCTION';

console.log(myStatus);
const x = 0;

const a = 100;
console.log(a);

function add(a: number, b: number) {
    return a + b;
}

type stringMap = Record<string, string>;
const object: stringMap = {'a': 'b', 'c': 'd'};
