const assert = require('assert');
const sumOfOther = require('./src/sumOfOther.js');

describe('Run sumOfOther.js test', () => {
  it('Should return correct array', () => {
    const input = [2, 3, 4, 1];
    const result = sumOfOther(input);
    assert.deepEqual(result, [8, 7, 6, 9]);
  });

  it('Should return correct array', () => {
    const input = [1, 1, 1, 1];
    const result = sumOfOther(input);
    assert.deepEqual(result, [3, 3, 3, 3]);
  });

  it('Should return correct array', () => {
    const input = [0, 0, 0, 0];
    const result = sumOfOther(input);
    assert.deepEqual(result, [0, 0, 0, 0]);
  });
});

const make = require('./src/make.js');

describe('Run make.js test', () => {

  const sum = (a, b) => a + b;

  it('Should return correct result', () => {
    const result = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(result, 777);
  });

  it('Should return correct result if all values zeroes', () => {
    const result = make(0)(0, 0, 0)(0)(sum);
    assert.deepEqual(result, 0);
  });

  it('Should return correct result if one value', () => {
    const result = make(100)(sum);
    assert.deepEqual(result, 100);
  });

});

const recursion = require('./src/recursion.js');

describe('Run recursion.js test', () => {
  it('Should return correct result', () => {
    const input = { "value": 100, "left": { "value": 90, "left": { "value": 70 }, "right": { "value": 99 } }, "right": { "value": 120, "left": { "value": 110 }, "right": { "value": 130 } } };
    const result = recursion(input);
    assert.deepEqual(result, [[100], [90, 120], [70, 99, 110, 130]]);
  });

  it('Should return correct result', () => {
    const input = { "value": 100, "left": { "value": 98 }, "right": { "value": 99 } };
    const result = recursion(input);
    assert.deepEqual(result, [[100], [98, 99]]);
  });

  it('Should return correct result', () => {
    const input = { "value": 100 };
    const result = recursion(input);
    assert.deepEqual(result, [[100]]);
  });
});
