class List {
    constructor() {
        this.list = [];
        // i had to make this size property internal instead of using getter
        this.size = 0;
    }

    add(value) {
        this.list.push(value);
        const sorted = this.list.sort((a, b) => a - b);
        this.list = sorted;
        this.size++;
    }

    remove(value) {
        if (value >= 0 && value < this.list.length) {
            this.list.splice(value, 1);
            this.size--;
        }
    }

    get(value) {
        if (value >= 0 && value < this.list.length) {
            return this.list[value];
        }
    }

    // eventually to get the size you can use getter
    // get size() {
    //     return this.list.length;
    // }
}

let list = new List();
list.add(5);
list.add(6);
list.add(3);
list.add(9);
list.add(7);
console.log(list.list);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
