const path = require('path');
const expect = require('chai').expect;

const makePermutations = require(path.join(__dirname, '..', './index.js'));

describe('makePermutations()', function () {
  'use strict';

  it('exists', function () {
    expect(makePermutations).to.be.a('function');
  });

  it('returns an empty array for non-valid numbers', function() {
    expect(makePermutations('abc', 4)).to.deep.equal([]);
    expect(makePermutations('abc', 0)).to.deep.equal([]);
  });

  it('returns the correct base case', function() {
    expect(makePermutations('abc', 1)).to.deep.equal(
      ['a', 'b', 'c']
    );
    expect(makePermutations('a', 1)).to.deep.equal(
      ['a']
    );
  });

  it('works correctly', function () {
    expect(makePermutations('abc', 2)).to.deep.equal(
      [ 'ab', 'ac', 'ba', 'bc', 'ca', 'cb' ]
    );
    expect(makePermutations('abc', 2, true)).to.deep.equal(
      [ 'aa', 'ab', 'ac', 'ba', 'bb', 'bc', 'ca', 'cb', 'cc' ]
    );
    expect(makePermutations('abcd', 2, false)).to.deep.equal(
      [ 'ab', 'ac', 'ad', 'ba', 'bc', 'bd', 'ca', 'cb', 'cd', 'da', 'db', 'dc' ]
    );
    expect(makePermutations('abc', 3, false)).to.deep.equal(
      [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
    );
    expect(makePermutations('abcd', 4, false)).to.deep.equal(
      [ 'abcd', 'abdc', 'acbd', 'acdb', 'adbc', 'adcb', 'bacd', 'badc', 'bcad', 'bcda', 'bdac', 'bdca', 'cabd', 'cadb', 'cbad', 'cbda', 'cdab', 'cdba', 'dabc', 'dacb', 'dbac', 'dbca', 'dcab', 'dcba' ]
    );
  });

});
