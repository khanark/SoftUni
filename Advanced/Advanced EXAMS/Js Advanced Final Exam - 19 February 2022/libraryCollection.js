class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length === this.capacity) {
            throw new Error('Not enough space in the collection.');
        } else {
            this.books.push({ bookName, bookAuthor, payed: false });
            return `The ${bookName}, with an author ${bookAuthor}, collect.`;
        }
    }

    payBook(bookName) {
        const book = this.books.find(book => book.bookName == bookName);

        if (!book) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (book.payed === true) {
            throw new Error(`${bookName} has already been paid.`);
        }

        book.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        const book = this.books.find(book => book.bookName == bookName);

        if (!book) {
            throw new Error("The book, you're looking for, is not found.");
        }

        if (book.payed === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        const index = this.books.findIndex(current => current.bookName == bookName);
        this.books.splice(index, 1);
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        const output = [];
        if (!bookAuthor) {
            const emptySlots = this.capacity - this.books.length;
            const bookInformation = this.books
                .sort((a, b) => a.bookName.localeCompare(b.bookName))
                .map(
                    book => `${book.bookName} == ${book.bookAuthor} - ${book.payed == true ? 'Has Paid' : 'Not Paid'}.`
                );
            output.push(`The book collection has ${emptySlots} empty spots left.`);
            output.push(bookInformation.join('\n'));
        } else {
            if (!this.books.some(book => book.bookAuthor == bookAuthor)) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            } else {
                const bookInformation = this.books
                    .filter(book => book.bookAuthor === bookAuthor)
                    .map(
                        book =>
                            `${book.bookName} == ${book.bookAuthor} - ${book.payed == true ? 'Has Paid' : 'Not Paid'}.`
                    );
                output.push(bookInformation.join('\n'));
            }
        }
        return output.join('\n');
    }
}
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics("Miguel de Cervantes"));
