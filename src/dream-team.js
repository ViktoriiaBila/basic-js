const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let result = '';
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      let j = 0;
      if (members[i][0] === ' ') while (members[i][j] === ' ') j++;
      result += members[i][j];
    }
  }
  return result.toUpperCase().split('').sort().join('');
};
