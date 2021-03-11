const caesarModule = (function () {
  function toUnicode(array) {
    return array.map((character) => {
      const unicode = character.toLowerCase().charCodeAt();
      return unicode >= 97 && unicode <= 122 ? unicode : character;
    });
  }

  function caesar(input, shift, encode = true) {
    // Checks for given shift constraint
    if (shift < -25 || shift > 25 || !shift) {
      return false;
    }
    // sets decode mode by inverting the shift
    if (encode === false) {
      shift = shift * -1;
    }

    let inputArray = input.split("");
    let inputNumbers = toUnicode(inputArray);

    // applies shift only to valid characters, which excludes spaces
    let shiftedNumbers = inputNumbers.map((number) => {
      return typeof number === "number" ? number + shift : number;
    });

    // loop correction handles case where the shift goes left of "a" or right of "z"
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

    //converts unicode back into a string for the resulting output
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
