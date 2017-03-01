const { curry } = require('ramda');

module.exports = {
  filter:  curry((f, _)     => _.filter(f)),
  map:     curry((f, _)     => _.map(f)),
  reduce:  curry((f, a, _)  => _.reduce(f, a)),
  join:    curry((using, _) => _.join(using)),
};
