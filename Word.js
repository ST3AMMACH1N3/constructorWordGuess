const Letter = require('./Letter');

function Word(word) {
    this.letters = [];
    for(let i = 0; i < word.length; i++) {
        this.letters.push(new Letter(word[i]));
    }

    this.display = function() {
        let string = ""
        this.letters.forEach(elem => {
            string += elem.display() + " ";
        });
        return string;
    }

    this.checkChar = function(char) {
        this.letters.forEach(elem => {
            elem.checkChar(char);
        })
    }

}

module.exports = Word;