const _ = require('ramda');
const { match } = require('./curried/str');

// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function.

const words = _.split(' ', _);

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

const sentences = _.map(words, _);


// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions.

const filterQs = _.filter(match(/q/i));


// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any
// arguments.

// LEAVE BE:
const _keepHighest = function(x, y) {
  return x >= y ? x : y;
};

// REFACTOR THIS ONE:
const max = _.reduce(_keepHighest, -Infinity);


// Bonus 1:
// ============
// Wrap array's slice to be functional and curried.
// //[1, 2, 3].slice(0, 2)
const slice = _.curry((start, end, _) => _.slice(start, end));


// Bonus 2:
// ============
// Use slice to define a function "take" that takes n elements from the beginning of the string. Make it curried.
// // Result for "Something" with n=4 should be "Some"
const take = slice(0);

module.exports = {
  words,
  sentences,
  filterQs,
  max,
  slice,
  take
};
