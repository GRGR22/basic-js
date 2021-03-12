const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let newArr = arr.flat(3);
  let n = 0;
  newArr.forEach(i => {
    if (i == '^^') n++    
  });
  return n;
};
