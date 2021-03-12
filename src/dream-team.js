const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false;
  let newStr = [];
  let newArr = [];
  for (i=0; i < arr.length; i++) {    
    if (typeof arr[i] !== 'string') continue;
    newArr = arr[i].replace(/\s+/g, '')
    newArr.split('');
    let newSymb = newArr[0];    
    newSymb = newSymb.toUpperCase();
    newStr.push(newSymb);
  };
  newStr.sort();
  return (newStr.join(''));
};
