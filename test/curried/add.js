const { test } = require('ava');
const add = require('../../src/curried/add');

test('add can add numbers', t => {
  t.is(add(1, 3), 4);
  t.is(add(-32, 23), -9);
  t.is(add(32, -23), 9);
});

test('add can concat strings', t => {
  t.is(add('hello', 'world'), 'helloworld');
});

test('add can be curried', t => {
  const add4 = add(4);
  t.is(add4(6), 10);

  const sayHello = add('hello ');
  t.is(sayHello('world'), 'hello world');
});
