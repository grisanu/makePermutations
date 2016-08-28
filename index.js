var makePermutations = function (stringOrArray, number, repetition) {
  if (stringOrArray.constructor !== String && stringOrArray.constructor !== Array) {
    throw new Error('Collection must either be a String or an Array');
  }
  if (!Number.isInteger(number)) { throw new Error('Selection size must be an integer'); }
  if (number <= 0 || number > stringOrArray.length) { return []; }

  repetition = repetition || false;
  if (repetition.constructor !== Boolean) { throw new Error('Repetition must be a boolean value'); }

  /**
  * Code
  */

  // change str to arr
  var input = stringOrArray.constructor === String ? stringOrArray.split('') : stringOrArray;

  // base case
  if (number === 1) {
    return input;
  }

  // all perm
  var results = [];

  // set anchor
  input.forEach(function (char, index, arr) {
    var anchor = char;
    var subArr = arr.slice();

    if (!repetition) {
      subArr.splice(index, 1);
    }

    var subPerm = makePermutations(subArr, number - 1, repetition);

    // concat anchor to front of all sub perm
    subPerm.forEach(function (element) {
      results.push(anchor.concat(element));
    });
  });

  // return array of all possible permutations
  return results;
};

// console.log(makePermutations('abc', 2)); // [ 'ab', 'ac', 'ba', 'bc', 'ca', 'cb' ]
// console.log(makePermutations('abc', 2, true)); // [ 'aa', 'ab', 'ac', 'ba', 'bb', 'bc', 'ca', 'cb', 'cc' ]
// console.log(makePermutations('abcd', 2, false)); //  [ 'ab', 'ac', 'ad', 'ba', 'bc', 'bd', 'ca', 'cb', 'cd', 'da', 'db', 'dc' ]
// console.log(makePermutations('abc', 3, false)); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
// console.log(makePermutations('abc', 3, true)); //
// console.log(makePermutations('abcd', 4, false)); // [ 'abcd', 'abdc', 'acbd', 'acdb', 'adbc', 'adcb', 'bacd', 'badc', 'bcad', 'bcda', 'bdac', 'bdca', 'cabd', 'cadb', 'cbad', 'cbda', 'cdab', 'cdba', 'dabc', 'dacb', 'dbac', 'dbca', 'dcab', 'dcba' ]