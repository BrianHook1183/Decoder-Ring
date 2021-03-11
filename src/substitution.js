const substitutionModule = (function () {
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
      inputArray.forEach((char) => {
        // preserves space or encodes character
        char === " " ? result.push(" ") : encode(char);
      });
      return result.join("");
    };

    const decodeMessage = () => {
      let result = [];
      const decode = (char) => {
        const charIndex = subAlphabetArray.indexOf(char);
        const decodedChar = realAlphabetArray[charIndex];
        result.push(decodedChar);
      };
      inputArray.forEach((char) => {
        // preserves space or encodes character
        char === " " ? result.push(" ") : decode(char);
      });
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
