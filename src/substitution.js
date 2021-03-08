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
    if (alphabet.length !== 26) return false;
    return true;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
