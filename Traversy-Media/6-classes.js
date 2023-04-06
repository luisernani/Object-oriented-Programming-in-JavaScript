class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return `The book ${this.title} was written by ${this.author} and published in ${this.year}.`;
    }
    getHowOldIs(){
        const currentDate = new Date().getFullYear();
        let yearsOld = currentDate - this.year;
        return `The book ${this.title} was published ${yearsOld} years ago`;
    }
    reviseYear(yearUpdate){
        this.year = yearUpdate;
        this.revise = true
    }
}

// Instantiate an Objects
const animalFarm = new Book('Animal Farm', 'George Orwell', '1945');

console.log(animalFarm)