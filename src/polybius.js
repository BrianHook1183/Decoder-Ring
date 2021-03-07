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
  const helper = require("./helper");

  function polybius(input, encode = true) {
    let square = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z", " "],
    ];
    if (encode) {
      let inputArray = input.split("");
      console.log(`inputArray: ${inputArray}`);
      let fixedArray = inputArray.map((string) => {
        let lowCase = string.toLowerCase();
        if (lowCase === "i" || lowCase === "j") {
          return "(i/j)";
        }
        return lowCase;
      });
      console.log(`fixedArray: ${fixedArray}`);
      let xArr = [];
      let yArr = fixedArray.map((letter) => {
        console.log(`letter is: ${letter}`);
        for (let i = 0; i < square.length; i++) {
          const row = square[i];
          if (row.find((alpha) => alpha === letter)) {
            xArr.push(i + 1);
            console.log(
              `index of letter: ${row.indexOf(letter) + 1} and index of row: ${
                i + 1
              }`
            );
            return row.indexOf(letter) + 1;
          } else {
            console.log(`didn't find ${letter} in ${row}`);
          }
        }
      });
      console.log(`yArr is: ${yArr}`);
      result = xArr.reduce((acc, xValue, index) => {
        let pair = `${yArr[index]}${xValue}`;
        if (pair === "65") {
          pair = " ";
        }
        console.log(`pair is ${pair}`);
        acc.push(pair);
        console.log(`acc at ${index} is: ${acc}`);
        return acc;
      }, []);
    }
    if (!encode) {
      // TODO find alternative
      let spacesAdded = input.replace(" ", 65);
      console.log(`spacesAdded is: ${spacesAdded}`);
      let coordinates = spacesAdded.match(/..?/g);
      console.log(coordinates);
      result = coordinates.map((yx) => {
        let rowIndex = yx.split("")[1] - 1;
        console.log(`row index is: ${rowIndex}`);
        let columnIndex = yx.split("")[0] - 1;
        console.log(`column index is: ${columnIndex}`);
        console.log(
          `square[rowIndex][columnIndex] is: ${square[rowIndex][columnIndex]}`
        );
        return square[rowIndex][columnIndex];
      });
      console.log(result);
    }
    console.log(result);
    return result.join("");
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
