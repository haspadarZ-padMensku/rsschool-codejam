function add(...args) {
  let inputArr = args.join(' ');

  function f(b) {
    if (b instanceof Function) {
      let a = inputArr.split(' ').map((n) => +n);
      return a.reduce(sum);
    } else {
      inputArr += ' ' + b;
      return f;
    }
  }

  f.toString = function () {
    return inputArr;
  }

  return f;
}
