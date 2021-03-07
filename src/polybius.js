// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// constraints and rules in mind:

// You are welcome to assume that no additional symbols will be included as part of the input. Only spaces and letters will be included.
// When encoding, your output should still be a string.
// When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.
// Spaces should be maintained throughout.
// Capital letters can be ignored.
// The letters "I" and "J" share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.
// Examples
// polybius("thinkful"); //> "4432423352125413"
// polybius("Hello world"); //> '3251131343 2543241341'

// polybius("3251131343 2543241341", false); //> "hello world"
// polybius("4432423352125413", false); //> "th(i/j)nkful
// polybius("44324233521254134", false); //> false

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    const unicode = input.toLowerCase().charCodeAt();
    return unicode;
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
