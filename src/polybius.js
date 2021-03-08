const polybiusModule = (function () {
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
      // console.log(`inputArray: ${inputArray}`);
      let fixedArray = inputArray.map((string) => {
        let lowCase = string.toLowerCase();
        if (lowCase === "i" || lowCase === "j") {
          return "(i/j)";
        }
        return lowCase;
      });
      // console.log(`fixedArray: ${fixedArray}`);
      let xArr = [];
      let yArr = fixedArray.map((letter) => {
        // console.log(`letter is: ${letter}`);
        for (let i = 0; i < square.length; i++) {
          const row = square[i];
          if (row.find((alpha) => alpha === letter)) {
            xArr.push(i + 1);
            // console.log(
            //   `index of letter: ${row.indexOf(letter) + 1} and index of row: ${
            //     i + 1
            //   }`
            // );
            return row.indexOf(letter) + 1;
          } else {
            // console.log(`didn't find ${letter} in ${row}`);
          }
        }
      });
      // console.log(`yArr is: ${yArr}`);
      result = xArr.reduce((acc, xValue, index) => {
        let pair = `${yArr[index]}${xValue}`;
        if (pair === "65") {
          pair = " ";
        }
        // console.log(`pair is ${pair}`);
        acc.push(pair);
        // console.log(`acc at ${index} is: ${acc}`);
        return acc;
      }, []);
    }
    if (!encode) {
      let spacesAdded = input.replace(" ", 65);
      // console.log(`spacesAdded is: ${spacesAdded}`);
      if (spacesAdded.length % 2 !== 0) return false;
      // TODO find alternative for coordinates
      let coordinates = spacesAdded.match(/..?/g);
      // console.log(coordinates);
      result = coordinates.map((yx) => {
        let rowIndex = yx.split("")[1] - 1;
        // console.log(`row index is: ${rowIndex}`);
        let columnIndex = yx.split("")[0] - 1;
        // console.log(`column index is: ${columnIndex}`);
        // console.log(
        //   `square[rowIndex][columnIndex] is: ${square[rowIndex][columnIndex]}`
        // );
        return square[rowIndex][columnIndex];
      });
      // console.log(result);
    }
    // console.log(result);
    return result.join("");
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
