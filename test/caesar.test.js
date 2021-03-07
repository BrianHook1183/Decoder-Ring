const caesar = require("../src/caesar");
const { expect } = require("chai");

describe("caesar", () => {
  let input = "Brian Hook";
  let shift = 5;

  it("1) is a function", () => {
    expect(caesar).to.be.a("function");
  });

  it("2) return false for all invalid shift values", () => {
    const shiftValues = [0, -26, 26, null, undefined];
    const actual = shiftValues.every((shift) => {
      // console.log(`${shift} - ${caesar(input, shift)}`);
      return !caesar(input, shift);
    });
    expect(actual).to.be.true;
  });

  // !only for dev test. This should turn into "returns valid string" later when there is a function to test
  it.skip("3) returns true for all valid shift numbers", () => {
    const shiftValues = [-25, -1, 1, 25];
    const actual = shiftValues.every((shift) => {
      // console.log(`${shift} - ${caesar(input, shift)}`);
      return caesar(input, shift);
    });
    expect(actual).to.be.true;
  });

  it("4) outputs the correct length", () => {
    const expected = input.length;
    const actual = caesar(input, shift).length;
    expect(actual).to.equal(expected);
  });

  it('5) encodes "*Brian Hook!" shift+1 correctly', () => {
    input = "*Brian Hook!";
    shift = 1;
    const expected = "*csjbo ippl!";
    const actual = caesar(input, shift);
    expect(actual).to.deep.equal(expected);
  });

  it('6) encodes "*Brian Hook!" shift-1 correctly', () => {
    input = "*Brian Hook!";
    shift = 1;
    const expected = "*aqhzm gnnj!";
    const actual = caesar(input, shift);
    expect(actual).to.deep.equal(expected);
  });
});
