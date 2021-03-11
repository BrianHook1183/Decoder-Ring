// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// constraints and rules:

// -The input could include spaces and letters as well as special characters such as #, $, *, etc.
// -Spaces should be maintained throughout.
// -Capital letters can be ignored.
// -The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.
// -All of the characters in the alphabet parameter must be unique. Otherwise, it should return false.

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // substitution alphabet must exist and be exactly 26 characters long.
    if (!alphabet || alphabet.length !== 26) return false;

    //Global Variables
    const realAlphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
    const inputArray = input.toLowerCase().split("");
    const subAlphabetArray = alphabet.toLowerCase().split("");

    // substitution alphabet can not have any repeated characters
    const onlyUniqueChars = subAlphabetArray.filter(
      (item, index, self) => self.indexOf(item) === index
    );
    if (onlyUniqueChars.length !== alphabet.length) return false;

    const encodeMessage = () => {
      let result = [];
      const encode = (char) => {
        const charIndex = realAlphabetArray.indexOf(char);
        const encodedChar = subAlphabetArray[charIndex];
        result.push(encodedChar);
      };
      for (let i = 0; i < inputArray.length; i++) {
        const char = inputArray[i];
        // preserves space or encodes character
        char === " " ? result.push(" ") : encode(char);
      }
      return result.join("");
    };

    const decodeMessage = () => {
      let result = [];
      const decode = (char) => {
        const charIndex = subAlphabetArray.indexOf(char);
        const decodedChar = realAlphabetArray[charIndex];
        result.push(decodedChar);
      };
      for (let i = 0; i < inputArray.length; i++) {
        const char = inputArray[i];
        // preserves space or encodes character
        char === " " ? result.push(" ") : decode(char);
      }
      return result.join("");
    };

    // with errors now handled, next decide to encode or decode.
    return encode ? encodeMessage() : decodeMessage();
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
