const { test } = require('ava');
const {
  CARS,
  isLastInStock,
  nameOfFirstCar,
  averageDollarValue,
  sanitizeNames,
  availablePrices,
  fastestCar
} = require('../src/compose');

test('exercise 1 - isLastInStock', t => {
  t.false(isLastInStock(CARS));
});

test('exercise 2 - nameOfFirstCar', t => {
  t.is(nameOfFirstCar(CARS), "Ferrari FF");
});

test('exercise 3 - averageDollarValue', t => {
  t.is(averageDollarValue(CARS), 790700);
});

test('exercise 4 - sanitizeNames', t => {
  t.deepEqual(sanitizeNames(CARS), ['ferrari_ff', 'spyker_c12_zagato', 'jaguar_xkr_s', 'audi_r8', 'aston_martin_one_77', 'pagani_huayra']);
});

test('bonus 1 - availablePrices', t => {
  t.is(availablePrices(CARS), '$700,000.00, $1,850,000.00');
});

test('bonus 2 - fastestCar', t => {
  t.is(fastestCar(CARS), 'Aston Martin One-77 is the fastest');
});
