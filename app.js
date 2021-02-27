let userScore = 0;
let botScore = 0;

// These two are DOM variables. Element type is <span>
const userScore_span = document.getElementById('user-score');
const botScore_span = document.getElementById('bot-score');

const scoreboard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

// We just 'cached' the DOM. Caching = storing somethinf for later use.
// We are storing these variables so we can use them later.
// Reason #1, Convenience: It's easier to write the variable name than document.getElementById('')
// Reason #2, Performance: Else, we are running the process everytime to reference the particular element, which is inefficent

// Trying if buttons are working properly

// rock_div.addEventListener('click', function()
// {
//     console.log("You clicked on rock.");
// })

function main() {
	rock_div.addEventListener('click', function() {
		game('r');
	});

	paper_div.addEventListener('click', function() {
		game('p');
	});

	scissors_div.addEventListener('click', function() {
		game('s');
	});
}

function generateBotChoice() {
	const choices = [ 'r', 'p', 'p' ];
	const botChoice = Math.floor(Math.random() * choices.length);
	return choices[botChoice];
}

function convertToWord(letter) {
	switch (letter) {
		case 'r':
			return 'Rock';
			break;
		case 'p':
			return 'Paper';
			break;
		case 's':
			return 'Scissors';
			break;
	}
}

function win(user, bot) {
	// console.log("Win");
	userScore++;
	// console.log(userScore);
	userScore_span.innerHTML = userScore;
	// botScore_span.innerHTML=botScore;
	// console.log(user);
	// console.log(bot);
	result_p.innerHTML = `${convertToWord(user)} beats ${convertToWord(bot)}. <br> You win! 🔥`;

	// document.getElementById('user-label').classList.add('green-glow');
	document.getElementById('scoreb').classList.add('green-glow');

	// setTimeout(function() { document.getElementById('scoreb').classList.remove('green-glow')}, 500);

	// es6 version
	setTimeout(() => document.getElementById('scoreb').classList.remove('green-glow'), 500);
}

function lose(user, bot) {
	// console.log("Lose");
	botScore++;
	botScore_span.innerHTML = botScore;
	// userScore_span.innerHTML=userScore;
	result_p.innerHTML = `${convertToWord(user)} loses to ${convertToWord(bot)}. <br> You lose! 👅`;

	document.getElementById('scoreb').classList.add('red-glow');

	setTimeout(() => document.getElementById('scoreb').classList.remove('red-glow'), 500);
}

function tie(user, bot) {
	console.log('Tie');
	result_p.innerHTML = `${convertToWord(user)} clashes with ${convertToWord(bot)}. <br> It's a tie! ⚔️`;

	document.getElementById('scoreb').classList.add('orange-glow');

	setTimeout(() => document.getElementById('scoreb').classList.remove('orange-glow'), 500);
}

// Trying if buttons are working properly
// function game(userChoice)
// {
//     console.log("💩💩💩 " + userChoice);
// }

function game(userChoice) {
	const botChoice = generateBotChoice();
	// console.log(botChoice);
	console.log('\nUser choice \t : \t' + userChoice);
	console.log('Bot Choice \t\t : \t' + botChoice);

	switch (userChoice + botChoice) {
		// Scenarios when user wins
		case 'rs':
		case 'pr':
		case 'sp':
			// console.log("You win!"); break;
			win(userChoice, botChoice);
			break;

		// Scenarios when bot wins
		case 'rp':
		case 'ps':
		case 'sr':
			// console.log("Computer wins!"); break;
			lose(userChoice, botChoice);
			break;

		// Scenarios when match is a tie
		case 'rr':
		case 'pp':
		case 'ss':
			// console.log("It's a tie!"); break;
			tie(userChoice, botChoice);
			break;
	}
}

main();

// foo(reallyLongArg(), omgSoManyParameters(), IShouldRefactorThis(), isThereSeriouslyAnotherOne(, omgSoManyParameters(), IShouldRefactorThis(), isThereSeriouslyAnotherOne());
