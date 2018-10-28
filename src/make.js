module.exports = function make(...args) {
  let inputArr = args.join(' ');

  function f(...b) {
    if (b[0] instanceof Function) {
      const a = inputArr.split(' ').map(n => +n);
      return a.reduce(b[0]);
    }
    inputArr += ` ${b.join(' ')}`;
    return f;
  }

  f.toString = function funcToString() {
    return inputArr;
  };

  return f;
};
