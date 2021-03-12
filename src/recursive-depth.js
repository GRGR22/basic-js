const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(/* arr */) {
    let arrDepth = 0;
    let newArr = [];
    let i = false;
    do {
      newArr = arr.flat(1);
      console.log(newArr);
      if (newArr.length > arr.length) {
        arrDepth++;
        arr = arr.flat(1);
      } else {
        i = true
      };
    } while (i);
    return arrDepth;
  }
};