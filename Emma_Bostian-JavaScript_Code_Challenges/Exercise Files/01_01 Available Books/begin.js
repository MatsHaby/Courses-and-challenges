/*
  WRITE YOUR SOLUTION HERE
*/

class Book {
    constructor(title, author, isbn, stock) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.stock = stock;
    }

    get availability() {
        if (this.stock === 0) {
            return "Out of stock";
        } else if (this.stock < 10) {
            return "Low stock";
        } else {
            return "In stock";
        }
    }

    sell(value = 1) {
        return (this.stock -= value);
    }

    restock(value = 5) {
        return (this.stock += value);
    }
}

let book = new Book("tarzan", "mats haby", 1234, 10);
console.log(book);

book.availability; //?

book.sell(9); //?
book.availability; //?
