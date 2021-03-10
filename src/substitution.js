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
    const alphabetArray = alphabet.split("");
    const unique = alphabetArray.filter(
      (item, index, self) => self.indexOf(item) === index
    );
    // substitution alphabet can not have any repeated characters
    if (unique.length !== alphabet.length) return false;

    const realAlphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    const mergedAlphabets = realAlphabet.reduce((acc, letter, index) => {
      acc.push(letter);
      acc.push(alphabet[index]);
      return acc;
    }, []);

    const encodedMessage = () => {
      return `in the future, this will encode ${input}`;
    };

    const decodedMessage = () => {
      return `in the future, this will decode ${input}`;
    };
    console.log("mergedAlphabets");
    console.log(mergedAlphabets);
    // with errors now handled, next decide to encode or decode.
    const result = encode ? encodedMessage() : decodedMessage();
    console.log(result);
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
