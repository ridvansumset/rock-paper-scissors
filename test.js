if (typeof module !== 'undefined' && module.exports) {
  var QUnit = require('qunitjs');
  var test = QUnit.test;
  require('qunit-tap')(QUnit, console.log);

  var showUserSelection = require('./main.js');
  var showAISelection = require('./main.js');
  var whoIsWinner = require('./main.js');
  var select = require('./main.js');
}

// showUserSelection tests
test('showUserSelection(0, true) should return \"winner: user0\"', function(assert) {
  var result = showUserSelection(0, true);
  var expected = 'winner: user0';
  assert.deepEqual(result, expected);
});

test('showUserSelection(1, false) should return \"loser: user1\"', function(assert) {
  var result = showUserSelection(1, false);
  var expected = 'loser: user1';
  assert.deepEqual(result, expected);
});

test('showUserSelection(1, false, true) should return \"tie: user1\"', function(assert) {
  var result = showUserSelection(1, false, true);
  var expected = 'tie: user1';
  assert.deepEqual(result, expected);
});

// showAISelection tests
test('showAISelection(0, true) should return \"winner: ai0\"', function(assert) {
  var result = showAISelection(0, true);
  var expected = 'winner: ai0';
  assert.deepEqual(result, expected);
});

test('showAISelection(2, false) should return \"loser: ai2\"', function(assert) {
  var result = showAISelection(2, false);
  var expected = 'loser: ai2';
  assert.deepEqual(result, expected);
});

test('showAISelection(1, false, true) should return \"tie: ai1\"', function(assert) {
  var result = showAISelection(1, false, true);
  var expected = 'tie: ai1';
  assert.deepEqual(result, expected);
});

// whoIsWinner tests
test('whoIsWinner(2, 1, 1) should return \"User beats AI!\"', function(assert) {
  var result = whoIsWinner(2, 1, 1);
  var expected = 'User beats AI!';
  assert.deepEqual(result, expected);
});

test('whoIsWinner(0, 1, 1) should return \"AI beats User!\"', function(assert) {
  var result = whoIsWinner(0, 1, 1);
  var expected = 'AI beats User!';
  assert.deepEqual(result, expected);
});

test('whoIsWinner(1, 1, 1) should return \"It\'s a Tie!\"', function(assert) {
  var result = whoIsWinner(1, 1, 1);
  var expected = 'It\'s a Tie!';
  assert.deepEqual(result, expected);
});

// select tests
test('select(0) should return [0, 1, -1]', function(assert) {
  var result = select(0);
  var expected = [0, 1, -1];
  assert.deepEqual(result, expected);
});

test('select(1) should return [0, 1, 2]', function(assert) {
  var result = select(1);
  var expected = [0, 1, 2];
  assert.deepEqual(result, expected);
});

test('select(2) should return [3, 1, 2]', function(assert) {
  var result = select(2);
  var expected = [3, 1, 2];
  assert.deepEqual(result, expected);
});

test('select(23) should return []', function(assert) {
  var result = select(23);
  var expected = [];
  assert.deepEqual(result, expected);
});

if (typeof module !== 'undefined' && module.exports) { QUnit.load(); } // run the tests
