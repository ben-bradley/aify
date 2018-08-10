'use strict';

const isObject = (object) => (!!object) && (object.constructor === Object);
const isArray = (array) => (!!array) && (array.constructor === Array);

const reduceObject = (o) => Object.keys(o).reduce((obj, k) => {
  obj[k] = aify(o[k]);
  return obj;
}, {});

const aify = (thing) => (isObject(thing)) ? [ reduceObject(thing) ] :
  (isArray(thing)) ? thing.map((t) => (isObject(t)) ? reduceObject(t) : aify(t)) :
    thing;

module.exports = aify;
