// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function toUnicode(array) {
    return array.map((character) => {
      const unicode = character.toLowerCase().charCodeAt();
      return unicode >= 97 && unicode <= 122 ? unicode : character;
    });
  }

  function caesar(input, shift, encode = true) {
    if (shift < -25 || shift > 25 || !shift) {
      return false;
    }
    if (encode === false) {
      shift = shift * -1;
    }

    let inputArray = input.split("");
    let inputNumbers = toUnicode(inputArray);

    let shiftedNumbers = inputNumbers.map((number) => {
      return typeof number === "number" ? number + shift : number;
    });

    let loopCorrectedNumbers = shiftedNumbers.map((number) => {
      if (typeof number === "number") {
        if (number < 97) {
          return number + 26;
        }
        if (number > 122) {
          return number - 26;
        }
      }
      return number;
    });

    let outputArray = loopCorrectedNumbers.map((number) => {
      return typeof number === "number" ? String.fromCharCode(number) : number;
    });
    return outputArray.join("");
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
