function createSortedList() {
    // create collection
	const result = {
        // create the array to store the values
		numbersData: [],

        // adding / pushing the new value
		add(number) {
			this.numbersData.push(number);
			this.sort();
		},

        // retrieving the value on the given index
		get(index) {
			if (index >= 0 && index < this.numbersData.length) {
				return this.numbersData[index];
			}
		},

        // removing the value on the given index
		remove(index) {
			if (index >= 0 && index < this.numbersData.length) {
				this.numbersData.splice(index, 1);
			}
		},

        // getting the length / size of the number's data array
		get size() {
			return this.numbersData.length;
		},

        // sorting after each newly added value
		sort() {
			this.numbersData = this.numbersData.sort((a, b) => a - b);
		},
	};

    // return the newly created collection
	return result;
}

let list = createSortedList();
list.add(7);
list.add(6);
list.add(5);
console.log(list.get(5));
list.remove(1);
console.log(list.get(1));
console.log(list.numbersData);
