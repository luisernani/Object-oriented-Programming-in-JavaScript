class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return `The book ${this.title} was written by ${this.author} and published in ${this.year}.`;
    }
}

class Magazine extends Book {
    constructor(title, author, year, month){
        super(title, author, year)
        this.month = month;
    }
}

const magOne = new Magazine('Mag One', 'Editora Gama', '2023', 'Ago');
console.log(magOne);