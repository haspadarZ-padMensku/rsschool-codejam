module.exports = function sumOfOther(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr.reduce((acc, n) => acc + n) - arr[i]);
  }
  return res;
};
