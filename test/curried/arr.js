const { test } = require('ava');
const { filter, map, reduce, join } = require('../../src/curried/arr');

test('filter can filter through a collection', t => {
  const cond = _ => _ > 1;

  t.deepEqual(
    filter(cond, [1, 2, 3]),
    [2, 3]
  );
});

test('filter mirrors the behavior of native filter', t => {
  const condition = _ => _ > 1;
  const items = [1, 2, 3];

  t.deepEqual(
    filter(condition, items),
    items.filter(condition)
  );
});

test('filter can be curried', t => {
  const filterTruthy = filter(_ => _);
  const items = [ 0, 1, '', 'hello', undefined ];

  t.deepEqual(filterTruthy(items), [1, 'hello']);
})

test('map can map over a collection', t => {
  const increment = _ => _ + 1;
  const items = [1, 2, 3];

  t.deepEqual(
    map(increment, [1, 2, 3]),
    [2, 3, 4]
  );
});

test('map mirrors the behavior of native map', t => {
  const condition = _ => _ + 1;
  const items = [1, 2, 3];

  t.deepEqual(
    map(condition, items),
    items.map(condition)
  );
});

test('map can be curried', t => {
  const increment = map(_ => _ + 1);
  const items = [1, 2, 3];

  t.deepEqual(increment(items), [2, 3, 4]);
});

test('reduce can reduce a set of items', t => {
  const sum = (a, b) => a + b;
  const fib8 = [0, 1, 1, 2, 3, 5, 8, 13];

  t.is(reduce(sum, 0, fib8), 33);
});

test('reduce mirrors the behavior of native reduce', t => {
  const sum = (a, b) => a + b;
  const fib8 = [0, 1, 1, 2, 3, 5, 8, 13];

  t.is(
    reduce(sum, 0, fib8),
    fib8.reduce(sum, 0)
  );
});

test('reduce can be curried', t => {
  const sumAll = reduce((a, b) => a + b, 0);
  const fib8 = [0, 1, 1, 2, 3, 5, 8, 13];

  t.is(sumAll(fib8), 33);
});

test('join can join a set of items', t => {
  t.is(join(' ', ['hello', 'world']), 'hello world');
});

test('join mirrors the behavior of native join', t => {
  t.is(
    join(' ', ['hello', 'world']),
    ['hello', 'world'].join(' ')
  );
});

test('join can be curried', t => {
  const joinWords = join(' ');
  t.is(joinWords(['hello', 'world']), 'hello world');
});

