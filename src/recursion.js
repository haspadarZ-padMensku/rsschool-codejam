module.exports = function recursion(tree) {
  const res = [];
  const DEEP = 0;

  function collector(node, deep) {
    if (node) {
      if (res.length < deep + 1) {
        res.push([]);
      }
      const arrOnDeep = res[deep];
      arrOnDeep.push(node.value);
      collector(node.left, deep + 1);
      collector(node.right, deep + 1);
    }
  }

  collector(tree, DEEP);
  return res;
};