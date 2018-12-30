const inquirer = require('inquirer');
const fs = require('fs');
const Word = require('./Word');
let currentWord, words, unusedWords, guessesLeft;

function chooseWord() {
    if (unusedWords.length < 1) {
        unusedWords = words;
    }
    let index = Math.floor(Math.random() * unusedWords.length);
    let string = unusedWords[index];
    unusedWords.splice(index, 1);
    currentWord = new Word(string);
    takeTurn();
}

function getWordList() {
    fs.readFile('words.txt', 'utf8', (err, data) => {
        if (err) throw err;
        words = data.split(/\r?\n/);
        unusedWords = words;
        playRound();
    });
}

function playAgain() {
    inquirer.prompt([
        {
            type: "confirm",
            name: "playAgain",
            message: "Would you like to play again?",
            default: false
        }
    ]).then((response) => {
        if (response.playAgain) {
            playRound();
        }
    });
}

function playRound() {
    guessesLeft = 10;
    chooseWord()
}

function startGame() {
    getWordList();
}

function takeTurn() {
    console.log("\n" + currentWord.display() + "\n");
    inquirer.prompt([
        {
            type: "input",
            name: "guess",
            message: "What letter would you like to guess?",
            validate: function(input) {
                if (input.length === 1 && typeof input === 'string') {
                    return true;
                }
                return "Please guess a single letter.";
            }
        }
    ]).then((response) => {
        if (currentWord.checkChar(response.guess)) {
            console.log("\nCorrect!");
            if (currentWord.display().includes("_")) {
                takeTurn();
            } else {
                console.log("You guessed it!");
                playAgain();
            }
        } else {
            guessesLeft--;
            console.log("\nIncorrect!")
            if (guessesLeft > 0) {
                console.log(`Guesses left: ${guessesLeft}`);
                takeTurn();
            } else {
                console.log("You are out of guesses!");
                playAgain();
            }
        }
    });
}

startGame();