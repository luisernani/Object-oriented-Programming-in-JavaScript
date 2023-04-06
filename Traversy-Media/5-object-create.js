// Objects Protos
const bookProtos = {
    getSummary: function () {
        return `The book ${this.title} was written by ${this.author} and published in ${this.year}.`;
    },
    getHowOldIsTheBook: function () {
        const currentDate = new Date().getFullYear();
        let yearsOld = currentDate - this.year;
        return `The book ${this.title} was published ${yearsOld} years ago`;
    }
}

// Create Objects
const meditacoes = Object.create(bookProtos);
meditacoes.title = "meditacoes";
meditacoes.author = 'Marco Aurelio';
meditacoes.year = '104';

console.log(meditacoes);