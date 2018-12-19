const rock = 0, paper = 1, scissor = 2;
const user0 = document.getElementById('user0'), user1 = document.getElementById('user1'), user2 = document.getElementById('user2');
const userWins = document.querySelector('.userWins'), aiWins = document.querySelector('.aiWins'), tieWins = document.querySelector('.tieWins');
var user_win_count = 0, ai_win_count = 0, tie_count = 0;

user0.addEventListener('click', () => getUserSelection(rock));
user1.addEventListener('click', () => getUserSelection(paper));
user2.addEventListener('click', () => getUserSelection(scissor));

function showUserAndAISelectionsThenHighlightScoreboard(userIndex, userWon, aiIndex, tie = false) {
	[].forEach.call(document.querySelectorAll('.item, .score-item'), function(element) {
		element.classList.contains('score-item') ? element.style.backgroundColor = 'white' : element.classList.remove('winner', 'loser', 'tie');
	});
	if (tie) {
		[].forEach.call(document.querySelectorAll('#user' + userIndex + ', ' + '#ai' + aiIndex), function(element) { element.classList.add('tie') });
		tieWins.textContent = 'Tie : ' + (++tie_count);
		tieWins.style.backgroundColor = 'lightgrey';
		return 'It\'s a Tie!';
	} else if (userWon) {
		document.getElementById('user' + userIndex).classList.add('winner');
		document.getElementById('ai' + aiIndex).classList.add('loser');
		userWins.textContent = 'You win: ' + (++user_win_count);
		userWins.style.backgroundColor = 'lightgreen';
		return 'User beats AI!';
	} else {
		document.getElementById('user' + userIndex).classList.add('loser');
		document.getElementById('ai' + aiIndex).classList.add('winner');
		aiWins.textContent = 'AI wins: ' + (++ai_win_count);
		aiWins.style.backgroundColor = 'lightcoral';
		return 'AI beats User!';
	}
}

function getWinner(userIndex, aiVal, aiIndex) {
	if (userIndex > aiVal) {
			return showUserAndAISelectionsThenHighlightScoreboard(userIndex, true, aiIndex);
		} else if (userIndex < aiVal) {
			return showUserAndAISelectionsThenHighlightScoreboard(userIndex, false, aiIndex);
		} else {
			return showUserAndAISelectionsThenHighlightScoreboard(userIndex, false, aiIndex, true);
		}
}

function getUserSelection(itemVal) {
	var returnArray = [];
	if (itemVal === rock) {
		let rand = Math.floor(Math.random() * 3) - 1;
		returnArray = [0, 1, -1];
		getWinner(itemVal, rand, returnArray.indexOf(rand));
	} else if (itemVal === paper) {
		let rand = Math.floor(Math.random() * 3);
		returnArray = [0, 1, 2];
		getWinner(itemVal, rand, returnArray.indexOf(rand));
	} else if (itemVal === scissor) {
		let rand = Math.floor(Math.random() * 3) + 1;
		returnArray = [3, 1, 2];
		getWinner(itemVal, rand, returnArray.indexOf(rand));
	}
	return returnArray;
}
