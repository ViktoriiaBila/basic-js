const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new TypeError;
  let newArr = arr.slice(), result = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        delete newArr[i];
        delete newArr[i + 1];
        break;
      case '--discard-prev':
        delete newArr[i];
        delete newArr[i - 1];
        break;
      case '--double-next':
        newArr[i] = newArr[i + 1];
        break;
      case '--double-prev':
        newArr[i] = newArr[i - 1];
        break;
    }
  }
  for (let i = 0; i < newArr.length; i++)
    if (newArr[i] !== undefined) result.push(newArr[i]);
  return result;
};