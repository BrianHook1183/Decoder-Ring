const polybiusModule = (function () {
  function polybius(input, encode = true) {
    //global variables
    let square = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z", " "],
    ];

    // encoding
    if (encode) {
      let inputArray = input.split("");
      /* fixedInputArray:
        - replaces any "i" or "j" in the input string to be "(i/j)" to conform to square
        - forces everything to lowercase.
     */
      let fixedInputArray = inputArray.map((string) => {
        let lowCase = string.toLowerCase();
        if (lowCase === "i" || lowCase === "j") {
          return "(i/j)";
        }
        return lowCase;
      });

      // Finds X and Y coordinates
      let xArr = [];
      let yArr = fixedInputArray.map((letter) => {
        for (let i = 0; i < square.length; i++) {
          const row = square[i];
          if (row.find((alpha) => alpha === letter)) {
            // adds x-coordinate when "row" meets condition. "+1" corrects for x/y axis given in prompt
            xArr.push(i + 1);
            // adds Y-coordinate.  "+1" corrects for x/y axis given in prompt
            return row.indexOf(letter) + 1;
          }
        }
      });

      // adds x-coordinate and y-coordinate arrays together so X/Y pairs are in sequence
      result = xArr.reduce((acc, xValue, index) => {
        let pair = `${yArr[index]}${xValue}`;
        // converts numeric representation of a space back to " ".
        if (pair === "65") {
          pair = " ";
        }
        acc.push(pair);
        return acc;
      }, []);
    }

    // decoding
    if (!encode) {
      let spacesAdded = input.replace(" ", 65);
      // checks that there are an even number of characters so that all coordinate pairs are kept together
      if (spacesAdded.length % 2 !== 0) return false;
      let coordinates = spacesAdded.match(/..?/g);
      result = coordinates.map((yx) => {
        let rowIndex = yx.split("")[1] - 1;
        let columnIndex = yx.split("")[0] - 1;
        return square[rowIndex][columnIndex];
      });
    }
    // output
    return result.join("");
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
