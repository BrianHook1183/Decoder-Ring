const polybius = require("../src/polybius");
const { expect } = require("chai");

describe.only("polybius()", () => {
  describe("encoding", () => {
    it("should maintain spaces", () => {});
    it("should ignore capital letters", () => {});
    it.only("should translate the letters i and j to 42", () => {
      expect([polybius("i"), polybius("j")]).to.equal([42, 42]);
    });
  });
  describe("decoding", () => {
    it("should maintain spaces", () => {});
    it("should ignore capital letters", () => {});
    it("should translate 42 to (i/j)", () => {});
  });
});
