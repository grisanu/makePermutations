var makePermutations = function (stringOrArray, number, repetition) {
  if (!repetition) {
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
      subArr.splice(index, 1);
      var subPerm = makePermutations(subArr, number - 1);

      // concat anchor to front of all sub perm
      subPerm.forEach(function (element) {
        results.push(anchor.concat(element));
      });
    });

    // return array of all possible permutations
    return results;
  }
};

console.log(makePermutations('abc', 2, false));
console.log(makePermutations('abcd', 2, false));
console.log(makePermutations('abcd', 4, false));