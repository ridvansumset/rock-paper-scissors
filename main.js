// values of items for user
// these are constant values unlike AI's values
// AI's values will change by user's selection
const rock = 0, paper = 1, scissor = 2;

// user's items in HTML
const user0 = document.getElementById('user0');
const user1 = document.getElementById('user1');
const user2 = document.getElementById('user2');

// scoreboard elements
const userWinnings = document.querySelector('.userWinnings');
const aiWinnings = document.querySelector('.aiWinnings');
const tieWinnings = document.querySelector('.tieWinnings');

// values of items for AI
// first elements represent rock
// second elements represent paper
// third elements represent scissor
// only 1 array is used and it is decided by user's choice
const arrayForRock = [0, 1, -1];
const arrayForPaper = [0, 1, 2];
const arrayForScissor = [3, 1, 2];

// scoreboard results
var user_win_count = 0, ai_win_count = 0, tie_count = 0;
var selected_item_val = 4; // initial value for selected item (not 0 because rock = 0)

user0.addEventListener('click', function() {
	selected_item_val = rock; // if chosen, selected item's val is 0
	select(selected_item_val);
});

user1.addEventListener('click', function() {
	selected_item_val = paper; // if chosen, selected item's val is 1
	select(selected_item_val);
});

user2.addEventListener('click', function() {
	selected_item_val = scissor; // if chosen, selected item's val is 2
	select(selected_item_val);
});

// shows user's selection by adding the right class
// userVal becomes userIndex in this function because the value selected by user is also index for user's choice (one of the 0, 1, 2)
function showUserSelection(userIndex, userWon, tie = false) {
	var style = '';
	if (tie) {
		style = 'tie';
	} else {
		style = 'loser';
		if (userWon) {
			style = 'winner';
		}
	}

	// loop 3 times for 3 items, clean classes and add right class to selected item by user
	for (let i = 0; i < 3; i++) {
		document.getElementById('user' + i).classList.remove('winner');
		document.getElementById('user' + i).classList.remove('loser');
		document.getElementById('user' + i).classList.remove('tie');
		if (i === userIndex) {
			document.getElementById('user' + i).classList.add(style);
		}
	}
}

// shows AI's selection by adding the right class
function showAiSelection(aiIndex, aiWon, tie = false) {
	var style = '';
	if (tie) {
		style = 'tie';
	} else {
		style = 'loser';
		if (aiWon) {
			style = 'winner';
		}
	}

	// loop 3 times for 3 items, clean classes and add right class to randomly selected item by AI
	for (let i = 0; i < 3; i++) {
		document.getElementById('ai' + i).classList.remove('winner');
		document.getElementById('ai' + i).classList.remove('loser');
		document.getElementById('ai' + i).classList.remove('tie');
		if (i === aiIndex) {
			document.getElementById('ai' + i).classList.add(style);
		}
	}
}

// increase winner's win count and highlight it
function highlightScoreboard(winner) {
	if (winner === 'user') {
		user_win_count += 1;
		userWinnings.textContent = 'You win: ' + user_win_count;
		userWinnings.style.backgroundColor = 'lightgreen';
		aiWinnings.style.backgroundColor = 'white';
		tieWinnings.style.backgroundColor = 'white';
	} else if (winner === 'ai') {
		ai_win_count += 1;
		aiWinnings.textContent = 'AI wins: ' + ai_win_count;
		aiWinnings.style.backgroundColor = 'lightcoral';
		userWinnings.style.backgroundColor = 'white';
		tieWinnings.style.backgroundColor = 'white';
	} else if (winner === 'tie') {
		tie_count += 1;
		tieWinnings.textContent = 'Tie : ' + tie_count;
		tieWinnings.style.backgroundColor = 'lightgrey';
		userWinnings.style.backgroundColor = 'white';
		aiWinnings.style.backgroundColor = 'white';
	} else {
		alert('Unknown winner!')
	}
}

// decide winner and run funcs above
function whoIsWinner(userVal, aiVal, aiIndex) {
	if (userVal > aiVal) {
			highlightScoreboard('user');
			showUserSelection(userVal, true);
			showAiSelection(aiIndex, false);
		} else if (userVal < aiVal) {
			highlightScoreboard('ai');
			showUserSelection(userVal, false);
			showAiSelection(aiIndex, true);
		} else {
			highlightScoreboard('tie');
			showUserSelection(userVal, false, true);
			showAiSelection(aiIndex, false, true);
		}
}

// check user's selection, create a selection for AI and decide winner
function select(itemVal) {
	if (itemVal === rock) {
		let rand = Math.floor(Math.random() * 3) - 1; // create random number btw -1 and 1 because arrayForRock has values btw that range
		let index = arrayForRock.indexOf(rand); // find index of rand to show it on the page
		whoIsWinner(itemVal, rand, index); // decide winner
	} else if (itemVal === paper) {
		let rand = Math.floor(Math.random() * 3);
		let index = arrayForPaper.indexOf(rand);
		whoIsWinner(itemVal, rand, index);
	} else if (itemVal === scissor) {
		let rand = Math.floor(Math.random() * 3) + 1;
		let index = arrayForScissor.indexOf(rand);
		whoIsWinner(itemVal, rand, index);
	} else {
		alert('Unknown item selected!');
	}
}