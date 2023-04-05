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

// Prototype getHowOldIsTheBook
Book.prototype.getHowOldIsTheBook = function () {
    const currentDate = new Date().getFullYear();
    let yearsOld = currentDate - this.year;
    return `The book ${this.title} was published ${yearsOld} years ago`;
}

// Prototype reviseYear
Book.prototype.reviseYear = function (yearUpDate) {
    this.year = yearUpDate;
    this.revised = true;
}

// Instantiate an Objects
const onTheRoad = new Book('On The Road', 'Jack Kerouac', '1957')
console.log(onTheRoad)
console.log(onTheRoad.getSummary());

const bookByLuis = new Book('Livro do Luis', 'Luis', '2012');
console.log(bookByLuis);
bookByLuis.reviseYear('2022');
console.log(bookByLuis);