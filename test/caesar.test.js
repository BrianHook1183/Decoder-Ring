const caesar = require("../src/caesar");
const { expect } = require("chai");

describe("caesar", () => {
  let input = "Brian Hook";

  it("1) is a function", () => {
    expect(caesar).to.be.a("function");
  });

  it("2) return false for all invalid shift values", () => {
    const shiftValues = [0, -26, 26, null, undefined];
    const actual = shiftValues.every((shift) => {
      console.log(`${shift} - ${caesar(input, shift)}`);
      return !caesar(input, shift);
    });
    expect(actual).to.be.true;
  });

  // !only for dev test. This should turn into "returns valid string" later when there is a function to test
  it("3) returns true for all valid shift numbers", () => {
    const shiftValues = [-25, -1, 1, 25];
    const actual = shiftValues.every((shift) => {
      console.log(`${shift} - ${caesar(input, shift)}`);
      return caesar(input, shift);
    });
    expect(actual).to.be.true;
  });

  // !only for dev test. This should turn into "returns correct string" later when there is a function to test
  it("4) decode mode inverses shift value", () => {
    const shift = 9;
    const actual = caesar(input, shift, false);
    expect(actual).to.be.equal(shift * -1);
  });
});
