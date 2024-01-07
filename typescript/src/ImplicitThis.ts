export interface ToDo {
    title: string;
    description: string;
}

export interface Supplier {
    (): string;
}

export class DefaultToDo implements ToDo {
    title = 'Title';
    description = 'Description';
    supplier: Supplier;

    constructor(_supplier: Supplier) {
        this.title = 'default';
        this.description = 'default';
        this.supplier = _supplier;
    }

    print() {
        console.log(this.supplier() + ' ' + this.title + ' ' + this.description);
    }

    /* Unknown 'this'
    prepare = function() {
        return function() {
            return this.title;
        }
    }

    prepare2 = function() {
        return () => {
            return this.title;
        }
    }
    */

    prepare3() {
        return () => {
            this.title;
        }
    }
}
