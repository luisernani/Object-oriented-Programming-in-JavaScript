// Constructor
function Book(title, author, year){
    this.title = title;
    this.author =author;
    this.year = year;
}

// Prototype getSummary
Book.prototype.getSummary = function () {
    return `The book ${this.title} was written by ${this.author} and published in ${this.year}.`;
}

//Magazine Constructor with Inherits from Book Constructor
function Magazine(title, author, year, month){
    Book.call(this, title, author, year);
    this.month = month;
}
Magazine.prototype = Object.create(Book.prototype);

// Instantiate an Objects
const natGeo = new Magazine('NetGeo', 'Editora Abril', '2022', 'Jan')
console.log(natGeo);

console.log(natGeo.getSummary())