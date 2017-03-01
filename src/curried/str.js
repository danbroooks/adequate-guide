const { curry } = require('ramda');

module.exports = {
  match:   curry((expr, _)      => _.match(expr)),
  replace: curry((expr, str, _) => _.replace(expr, str)),
  split:   curry((on, _)        => _.split(on)),
  toUpperCase:                _ => _.toUpperCase(),
  toLowerCase:                _ => _.toLowerCase(),
};
