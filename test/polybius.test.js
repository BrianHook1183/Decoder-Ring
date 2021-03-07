const polybius = require("../src/polybius");
const { expect } = require("chai");

describe("polybius()", () => {
  describe("encoding", () => {
    it("should maintain spaces", () => {});
    it("should ignore capital letters", () => {});
    it.only("should translate the letters i and j to 42", () => {
      expect(polybius("ij")).to.equal("4242");
    });
    it.only("should encode 'brian' to 2124421133 ", () => {
      expect(polybius("brian")).to.equal("2124421133");
    });
  });
  describe("decoding", () => {
    it.only("should decode if !encode", () => {
      expect(polybius("2124421133", false)).to.eql("br(i/j)an");
    });
    it("should maintain spaces", () => {});
    it("should ignore capital letters", () => {});
    it.only("should translate 42 to (i/j)", () => {
      expect(polybius("42", false)).to.eql("(i/j)");
    });
  });
});
