function Letter(char) {
    this.char = char;
    this.beenGuessed = false;

    this.display = function() {
        if (this.beenGuessed) {
            return this.char;
        }
        return "_";
    }

    this.checkChar = function(character) {
        this.beenGuessed = (this.char === character) ? true : this.beenGuessed;
    }
}

module.exports = Letter;