	// items' values for user
	const rock = 0;
	const paper = 1;
	const scissor = 2;

	const user0 = document.getElementById('user0');
	const user1 = document.getElementById('user1');
	const user2 = document.getElementById('user2');

	const userWinnings = document.querySelector('.userWinnings');
	const aiWinnings = document.querySelector('.aiWinnings');
	const tieWinnings = document.querySelector('.tieWinnings');

	// items' values for AI when user makes a selection
	const rockArray = [0, 1, -1];
	const paperArray = [0, 1, 2];
	const scissorArray = [3, 1, 2];

	var user_wins = 0;
	var ai_wins = 0;
	var ties = 0;

	var selected_item_val = 4; // initial value (out of range in purpose) 


user0.addEventListener('click', function() {
	selected_item_val = rock; // e.g selected item's val is 0
	select(selected_item_val);
});

user1.addEventListener('click', function() {
	selected_item_val = paper;
	select(selected_item_val);
});

user2.addEventListener('click', function() {
	selected_item_val = scissor;
	select(selected_item_val);
});

// userVal becomes userIndex in this function because the value selected by user is also index for user's choice
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
	
	for (let i = 0; i < 3; i++) {
		document.getElementById('user' + i).classList.remove('winner');
		document.getElementById('user' + i).classList.remove('loser');
		document.getElementById('user' + i).classList.remove('tie');
		if (i === userIndex) {
			document.getElementById('user' + i).classList.add(style);
		}
	}
}

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
	
	for (let i = 0; i < 3; i++) {
		document.getElementById(i).classList.remove('winner');
		document.getElementById(i).classList.remove('loser');
		document.getElementById(i).classList.remove('tie');
		if (i === aiIndex) {
			document.getElementById(i).classList.add(style);
		}
	}
}

function highlight(winning) {
	if (winning === 'user') {
		user_wins += 1;
		userWinnings.textContent = 'You win: ' + user_wins;
		userWinnings.style.backgroundColor = 'lightgreen';
		aiWinnings.style.backgroundColor = 'white';
		tieWinnings.style.backgroundColor = 'white';
	} else if (winning === 'ai') {
		ai_wins += 1;
		aiWinnings.textContent = 'AI wins: ' + ai_wins;
		aiWinnings.style.backgroundColor = 'lightgreen';
		userWinnings.style.backgroundColor = 'white';
		tieWinnings.style.backgroundColor = 'white';
	} else if (winning === 'tie') {
		ties += 1;
		tieWinnings.textContent = 'Tie : ' + ties;
		tieWinnings.style.backgroundColor = 'lightgreen';
		userWinnings.style.backgroundColor = 'white';
		aiWinnings.style.backgroundColor = 'white';
	} else {
		alert('Unknown winner!')
	}
}

function whoIsWinner(userVal, aiVal, aiIndex) {
	if (userVal > aiVal) {
			
			highlight('user');
			showUserSelection(userVal, true);
			showAiSelection(aiIndex, false);
		} else if (userVal < aiVal) {
			highlight('ai');
			showUserSelection(userVal, false);
			showAiSelection(aiIndex, true);
		} else {
			highlight('tie');
			showUserSelection(userVal, false, true);
			showAiSelection(aiIndex, false, true);
		}
}

function select(itemVal) {
	if (itemVal === rock) {
		let rand = Math.floor(Math.random() * 3) - 1;
		let index = rockArray.indexOf(rand);

		whoIsWinner(itemVal, rand, index);
	} else if (itemVal === paper) {
		let rand = Math.floor(Math.random() * 3);
		let index = paperArray.indexOf(rand);

		whoIsWinner(itemVal, rand, index);
	} else if (itemVal === scissor) {
		let rand = Math.floor(Math.random() * 3) + 1;
		let index = scissorArray.indexOf(rand);

		whoIsWinner(itemVal, rand, index);
	} else {
		alert('There is a problem!');
	}
}