// Define alphabet letters that computer can pick from
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Set the initial global variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;

// guessesSoFar is an array that will hold all the user's guesses
var guessesSoFar = [];

// userGuess is what the user picks by pressing a key
var userGuess = null;

// Randomly pick letter and store it in letterToBeGuessed
var letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

// start listening for key clicks
document.onkeypress = function(event) {

	// When user presses a key, record and save to userGuess
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// Add user's guess to guessesSoFar array but 
	// only if that key hasn't been pressed already 
	
	if (guessesSoFar.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;
		// if new letter is chosen then decrease remaining guesses by 1
		guessesLeft--;
	}

	// if letterToBeGuessed is same as userGuess then mark as win
	// and reset guessesLeft to 9, and clear guessesSoFar array

	if (letterToBeGuessed == userGuess) {
		wins++;
		console.log("You won!");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
	}

	// if guessesLeft == 0 then record it as a loss
	// and reset guessesLeft to 9, and clear the guessesSoFar array
	if (guessesLeft == 0) {
		losses++;
		console.log("You lost!");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
	}

	var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h4>Guess what letter I\'m thinking of</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";
	// place html into the game ID
	document.querySelector("#game").innerHTML = html;

}