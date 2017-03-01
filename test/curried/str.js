const { test } = require('ava');
const { match, replace, split, toUpperCase, toLowerCase } = require('../../src/curried/str');

test('match can match a pattern in a string', t => {
  t.deepEqual(match(/world!/, 'hello world!'), ['world!']);
});

test('match mirrors the behavior of native match', t => {
  t.deepEqual(
    match(/world!/, 'hello world!'),
    'hello world!'.match(/world!/)
  );
});

test('match can be curried', t => {
  const matchHello = match(/hello/);

  t.deepEqual(matchHello('hello world!'), ['hello']);
});

test('replace can replace a pattern in a string', t => {
  t.deepEqual(replace(/world!/, 'world', 'hello world!'), 'hello world');
});

test('replace mirrors the behavior of native replace', t => {
  t.deepEqual(
    replace(/world!/, 'world', 'hello world!'),
    'hello world!'.replace(/world!/, 'world')
  );
});

test('replace can be curried', t => {
  const removeExclaimation = replace(/!/, '');

  t.deepEqual(removeExclaimation('hello world!'), 'hello world');
});

test('split can split a string into an array', t => {
  t.deepEqual(split(' ', 'hello world'), ['hello', 'world']);
});

test('split mirrors the behavior of native split', t => {
  t.deepEqual(
    split(' ', 'hello world'),
    'hello world'.split(' ')
  );
});

test('split can be curried', t => {
  const splitWords = split(' ');

  t.deepEqual(splitWords('hello world'), ['hello', 'world']);
});

test('toUpperCase converts the case to uppercase', t => {
  t.is(toUpperCase('hello world'), 'HELLO WORLD');
});

test('toUpperCase mirrors native str.toUpperCase', t => {
  const hw = 'hello world';
  t.is(
    toUpperCase(hw),
    hw.toUpperCase()
  );
});

test('toLowerCase converts the case to lowercase', t => {
  t.is(toLowerCase('HELLO WORLD'), 'hello world');
});

test('toLowerCase mirrors native str.toLowerCase', t => {
  const hw = 'HELLO WORLD'
  t.is(
    toLowerCase(hw),
    hw.toLowerCase()
  );
});

