interface ToDo {
    title: string;
    description: string;
}

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
