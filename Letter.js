function Letter(char) {
    this.char = char.toLowerCase();
    this.beenGuessed = false;

    this.display = function() {
        if (this.beenGuessed) {
            return this.char;
        }
        return "_";
    }

    this.checkChar = function(character) {
        this.beenGuessed = (this.char === character) ? true : this.beenGuessed;
        return (this.char === character);
    }
}

module.exports = Letter;