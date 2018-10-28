let tree = { "value": 100, "left": { "value": 90, "left": { "value": 70 }, "right": { "value": 99 } }, "right": { "value": 120, "left": { "value": 110 }, "right": { "value": 130 } } };

// [[100], [90, 120], [70,99,110,130]]

//                    100
//      90                             120
//70         99                   110          130


const recursion = (object) => {
  let res = [];
  function doLeft(object) {
    for (key in object) {
      if (typeof object[key] !== 'object'){
        res.push(object[key]);
      }
      if (typeof object[key] === 'object') {
        doLeft(object[key]);
      }
    }
    return res;
  };
  return doLeft(object);
};


let array = recursion(tree);
console.log(array);