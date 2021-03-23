const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof str !== 'string') str+='';
  let duplicate = '', answer = '', separator = '+', addition = undefined, additionSeparator = '|';   
  (options.separator != undefined) ? separator = options.separator: '';
  (options.addition != undefined) ? addition = options.addition + '': '';  
  (options.addition === null) ? addition = 'null': ''; 
  (options.additionSeparator != undefined) ? additionSeparator = options.additionSeparator: '';
  if (addition != undefined) {
    if (options.additionRepeatTimes != undefined) {
      ((options.additionRepeatTimes < 2) && (options.additionRepeatTimes == 1)) ? duplicate += addition: duplicateManipulation ();
      } else duplicate += addition;
    }
  if (options.repeatTimes != undefined) {
    if (options.repeatTimes < 2) {
      ((options.repeatTimes == 1) && (options.additionRepeatTimes == undefined)) ? answer += str: answerManipulation ();       
    } else answerManipulation ();
  } else answer = str + addition;

  function answerManipulation () {
    answer = (str + duplicate + separator).repeat(options.repeatTimes - 1)+(answer + str + duplicate);
  }
  function duplicateManipulation () {
    duplicate = (addition + additionSeparator).repeat(options.additionRepeatTimes - 1)+addition;
  }
  return answer;
};
  