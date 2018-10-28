module.exports = function make(...args) {
  let inputArr = args.join(' ');

  function f(...b) {
    if (b[0] instanceof Function) {
      let a = inputArr.split(' ').map((n) => +n);
      return a.reduce(b[0]);
    } else {
      inputArr += ' ' + b.join(' ');
      return f;
    }
  }

  f.toString = function () {
    return inputArr;
  }

  return f;
}
