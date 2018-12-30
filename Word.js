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
        let found = false;
        this.letters.forEach(elem => {
            if (elem.checkChar(char)) {
                found = true;
            }
        });
        return found;
    }

}

module.exports = Word;