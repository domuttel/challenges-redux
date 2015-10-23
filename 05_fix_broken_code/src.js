/*
  In these warm-ups, all of the code is provided, as are the failing tests. Locate
  the defect in each function and make all of the tests green. Note: when you change
  some tests from pending -> active, they may pass initially (keep going!).
*/

module.exports = {
  addition: function(a,b) {
    return a + b;
  },

  matches: function(first, second) {
    if (first === second) {
      return true;
    } else {
      return false;
    }
  },

  fizzBuzz: function(number) {
    var divisibleByThree = number % 3;
    var divisibleByFive = number % 5;
    var output = number;

    if (divisibleByThree === 0 && divisibleByFive === 0) {
      return 'FizzBuzz';
    } else if (divisibleByThree === 0) {
      return 'Fizz';
    } else if (divisibleByFive === 0) {
      return 'Buzz';
    }
    return output;
  },

  switcher: function(word) {
    switch (word) {
      case 'foo':
        return 'bar';
        break;
      case 'nope':
        return 'yup';
        break;
      default:
        return 'never output anything. ever!';
        break;
    }
  }
};
