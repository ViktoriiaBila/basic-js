const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  machineValue = true;
  alphabet = {
    "A": 0,
    "B": 1,
    "C": 2,
    "D": 3,
    "E": 4,
    "F": 5,
    "G": 6,
    "H": 7,
    "I": 8,
    "J": 9,
    "K": 10,
    "L": 11,
    "M": 12,
    "N": 13,
    "O": 14,
    "P": 15,
    "Q": 16,
    "R": 17,
    "S": 18,
    "T": 19,
    "U": 20,
    "V": 21,
    "W": 22,
    "X": 23,
    "Y": 24,
    "Z": 25
  };
  constructor(machineValue) {
    if (machineValue !== undefined) this.machineValue = machineValue;
  }
  createKeyStr() {
    let keyStr = '', counterOfLetter = this.message.match(/[A-Z]/g).length;
    while (keyStr.length < counterOfLetter) {
      keyStr += this.key;
    }
    return keyStr;
  }
  getCode(k) {
    let result = '', m = this.message.match(/[A-Z]/g);
    for (let i = 0; i < m.length; i++) {
      result += Object.keys(this.alphabet).find(key => this.alphabet[key] === (this.alphabet[m[i]] + this.alphabet[k[i]]) % 26);
    }
    return result;
  }
  getMessage(k) {
    let result = '', mc = this.message.match(/[A-Z]/g);
    for (let i = 0; i < mc.length; i++) {
      result += Object.keys(this.alphabet).find(key => this.alphabet[key] === (this.alphabet[mc[i]] + 26 - this.alphabet[k[i]]) % 26);
    }
    return result;
  }
  addSymbol(resultWithoutSymbols) {
    let m = this.message, result = resultWithoutSymbols.match(/[A-Z]/g);
    for (let i = 0; i < m.length; i++) {
      if (!Object.keys(this.alphabet).includes(m[i])) {
        result.splice(i, 0, m[i]);
      }
    }
    return result.join('');
  }
  encrypt(message, key) {
    if (!(message) || !(key)) throw new TypeError;
    this.message = message.toUpperCase();
    this.key = key.toUpperCase();
    if (this.message.match(/[A-Z]/g) === null) return this.machineValue ? this.message : this.message.split('').reverse().join('');
    let keyStr = this.createKeyStr();
    let resultWithoutSymbols = this.getCode(keyStr);
    return this.machineValue ? this.addSymbol(resultWithoutSymbols) : this.addSymbol(resultWithoutSymbols).split('').reverse().join('');
  }
  decrypt(message, key) {
    if (!(message) || !(key)) throw new TypeError;
    this.message = message.toUpperCase();
    this.key = key.toUpperCase();
    if (this.message.match(/[A-Z]/g) === null) return this.machineValue ? this.message : this.message.split('').reverse().join('');
    let keyStr = this.createKeyStr();
    let resultWithoutSymbols = this.getMessage(keyStr);
    return this.machineValue ? this.addSymbol(resultWithoutSymbols) : this.addSymbol(resultWithoutSymbols).split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;