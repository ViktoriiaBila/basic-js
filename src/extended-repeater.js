const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = '', add = '', separator = '+', repeatTimes = 1;
  if (options.separator !== undefined) separator = options.separator;
  if (options.repeatTimes !== undefined) repeatTimes = options.repeatTimes;

  if (options.addition !== undefined) {
    let additionSeparator = '|', additionRepeatTimes = 1;
    if (options.additionSeparator !== undefined) additionSeparator = options.additionSeparator;
    if (options.additionRepeatTimes !== undefined) additionRepeatTimes = options.additionRepeatTimes;

    for (let i = 0; i < additionRepeatTimes; i++) {
      if (i === additionRepeatTimes - 1) add += options.addition;
      else add += (options.addition + additionSeparator);
    }
  }
  for (let i = 0; i < repeatTimes; i++) {
    if (i === repeatTimes - 1) result += (str + add);
    else result += (str + add + separator);
  }
  return result;
};