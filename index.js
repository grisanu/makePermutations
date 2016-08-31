'use strict';

var makePermutations = function (stringOrArray, number, repetition=false) {
  if (stringOrArray.constructor !== String && stringOrArray.constructor !== Array) {
    throw new Error('Collection must either be a String or an Array');
  }
  if (!Number.isInteger(number)) { throw new Error('Selection size must be an integer'); }
  if (number <= 0 || number > stringOrArray.length) { return []; }
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
  return input.map((char, index, arr) => {
    const copy = [...arr];
    if (!repetition) {
      copy.splice(index, 1);
    }
    return makePermutations(copy, number-1).map(subPerm => char + subPerm);
  }).reduce((a, b) => [...a, ...b]);
};

module.exports = makePermutations;
