// Constructor
function Book(title, author, year){
    this.title = title;
    this.author =author;
    this.year = year;
    this.getSummary = function () {
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    }
}


const book3 = new Book('Book Three', 'Luis', '1984');
console.log(book3);
console.log(book3.getSummary())