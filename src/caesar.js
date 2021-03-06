// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// *three parameters:
// input refers to the inputted text to be encoded or decoded.
// shift refers to how much each letter is "shifted" by. A positive number means shifting to the right (i.e. "A" becomes "D") whereas a negative number means shifting to the left (i.e. "M" becomes "K").
// encode refers to whether you should encode or decode the message. By default it is set to true.

// *constraints and rules:
// todo If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.
// todo Spaces should be maintained throughout, as should other non-alphabetic symbols.
// todo Capital letters can be ignored.
// todo If a letter is shifted so that it goes "off" the alphabet (e.g. a shift of 3 on the letter "z"), it should wrap around to the front of the alphabet (e.g. "z" becomes "c").

// *Examples
// caesar("thinkful", 3); //> 'wklqnixo'
// caesar("thinkful", -3); //> 'qefkhcri'
// caesar("wklqnixo", 3, false); //> 'thinkful'

// caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
// caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'

// caesar("thinkful"); //> false
// caesar("thinkful", 99); //> false
// caesar("thinkful", -26); //> false

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    let result = true;
    if (shift < -25 || shift > 25 || !shift) {
      return false;
    }

    return result;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
