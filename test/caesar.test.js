const caesar = require("../src/caesar");
const { expect } = require("chai");

describe("caesar()", () => {
  let input = "Brian Hook";
  let shift = 5;

  it("is a function", () => {
    expect(caesar).to.be.a("function");
  });

  it("returns false for all invalid shift values", () => {
    const shiftValues = [0, -26, 26, null, undefined];
    const actual = shiftValues.every((shift) => {
      return !caesar(input, shift);
    });
    expect(actual).to.be.true;
  });

  it("returns a result for all valid shift numbers", () => {
    const shiftValues = [-25, -1, 1, 25];
    const actual = shiftValues.every((shift) => {
      return caesar(input, shift);
    });
    expect(actual).to.be.true;
  });

  describe("encoding a message", () => {
    it("returns a string", () => {
      const expected = "string";
      const actual = typeof caesar(input, shift);
      expect(actual).to.equal(expected);
    });

    it("returns correct length", () => {
      const expected = input.length;
      const actual = caesar(input, shift).length;
      expect(actual).to.equal(expected);
    });

    it("encodes '*Brian Z. Hook!' shift+1 correctly", () => {
      input = "*Brian Z. Hook!";
      shift = 1;
      const expected = "*csjbo a. ippl!";
      const actual = caesar(input, shift);
      expect(actual).to.deep.equal(expected);
    });

    it("encodes '*Brian Z. Hook!' shift-1 correctly", () => {
      input = "*Brian Z. Hook!";
      shift = -1;
      const expected = "*aqhzm y. gnnj!";
      const actual = caesar(input, shift);
      expect(actual).to.deep.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("decodes '*csjbo a. ippl!' shift-1 correctly", () => {
      input = "*csjbo a. ippl!";
      shift = -1;
      const expected = "*brian z. hook!";
      const actual = caesar(input, shift);
      expect(actual).to.deep.equal(expected);
    });

    it("decodes '*aqhzm y. gnnj!' shift+1 correctly", () => {
      input = "*aqhzm y. gnnj!";
      shift = 1;
      const expected = "*brian z. hook!";
      const actual = caesar(input, shift);
      expect(actual).to.deep.equal(expected);
    });
  });
});
