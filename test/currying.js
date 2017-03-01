const { test } = require('ava');
const { words, sentences, filterQs, max, slice, take } = require('../src/currying');

test('exercise 1 - words', t => {
  t.deepEqual(
    words('a monad is a monoid in the category of endofunctors'),
    ['a', 'monad', 'is', 'a', 'monoid', 'in', 'the', 'category', 'of', 'endofunctors']
  );
});

test('exercise 1a - sentences', t => {
  t.deepEqual(
    sentences([
      'a monad is a monoid in the category of endofunctors',
      'one man\'s constant is another man\'s variable'
    ]),
    [
      ['a', 'monad', 'is', 'a', 'monoid', 'in', 'the', 'category', 'of', 'endofunctors'],
      ['one', 'man\'s', 'constant', 'is', 'another', 'man\'s', 'variable']
    ]
  );
});

test('exercise 2 - filterQs', t => {
  t.deepEqual(
    filterQs(['quick', 'camels', 'quarry', 'over', 'quails']),
    ['quick', 'quarry', 'quails']
  );
});

test('exercise 3 - max', t => {
  t.is(max([323, 523, 554, 123, 5234]), 5234);
});

test('bonus 1 - slice', t => {
  t.deepEqual(slice(1)(3)(['a', 'b', 'c']), ['b', 'c']);
});

test('bonus 2 - take', t => {
  t.deepEqual(take(2)(['a', 'b', 'c']), ['a', 'b']);
  t.is(take(4)('Something'), 'Some');
});
