if (typeof module !== 'undefined' && module.exports) {
  var QUnit = require('qunitjs')
  var test = QUnit.test
  require('qunit-tap')(QUnit, console.log)

  var getWinner = require('./main.js')
  var getUserSelection = require('./main.js')
}

// getWinner tests
test('getWinner(2, 1, 1) should return \"User beats AI!\"', function(assert) {
  var result = getWinner(2, 1, 1)
  var expected = 'User beats AI!'
  assert.deepEqual(result, expected)
})

test('getWinner(0, 1, 1) should return \"AI beats User!\"', function(assert) {
  var result = getWinner(0, 1, 1)
  var expected = 'AI beats User!'
  assert.deepEqual(result, expected)
})

test('getWinner(1, 1, 1) should return \"It\'s a Tie!\"', function(assert) {
  var result = getWinner(1, 1, 1)
  var expected = 'It\'s a Tie!'
  assert.deepEqual(result, expected)
})

// getUserSelection tests
test('getUserSelection(0) should return [0, 1, -1]', function(assert) {
  var result = getUserSelection(0)
  var expected = [0, 1, -1]
  assert.deepEqual(result, expected)
})

test('getUserSelection(1) should return [0, 1, 2]', function(assert) {
  var result = getUserSelection(1)
  var expected = [0, 1, 2]
  assert.deepEqual(result, expected)
})

test('getUserSelection(2) should return [3, 1, 2]', function(assert) {
  var result = getUserSelection(2)
  var expected = [3, 1, 2]
  assert.deepEqual(result, expected)
})

test('getUserSelection(23) should return []', function(assert) {
  var result = getUserSelection(23)
  var expected = []
  assert.deepEqual(result, expected)
})

if (typeof module !== 'undefined' && module.exports) { QUnit.load() } // run the tests
