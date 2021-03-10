const { expect } = require("chai");
const substitution = require("../src/substitution");

describe.only("substitution()", () => {
  it("should be a function", () => {
    expect(substitution).to.be.a("function");
  });

  describe("error handling", () => {
    it("should return false if the substitution alphabet is missing", () => {
      let alphabet = undefined;
      let input = "thinkful";
      let actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });
    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      let alphabet = "short";
      let input = "thinkful";
      let actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });
    it("should return false if the substitution alphabet does not contain unique characters", () => {
      let alphabet = "abcabcabcabcabcabcabcabcyz";
      let input = "thinkful";
      let actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("encoding", () => {
    it("should encode a message by using the given substitution alphabet", () => {
      let alphabet = "xoyqmcgrukswaflnthdjpzibev";
      let input = "thinkful";
      let actual = substitution(input, alphabet);
      expect(actual).to.equal("jrufscpw");
    });
    it("should work with any kind of key with unique characters", () => {
      let alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      let input = "message";
      let actual = substitution(input, alphabet);
      expect(actual).to.equal("y&ii$r&");
    });
    it("should preserve spaces", () => {
      let alphabet = "xoyqmcgrukswaflnthdjpzibev";
      let input = "You are an excellent spy";
      let actual = substitution(input, alphabet);
      expect(actual).to.equal("elp xhm xf mbymwwmfj dne");
    });
    it("should ignore capital letters", () => {
      let alphabet = "xoyqmcgrukswaflnthdjpzibev";
      let input = "ThiNkFul";
      let actual = substitution(input, alphabet);
      expect(actual).to.equal("jrufscpw");
    });
  });

  describe("decoding", () => {
    it("should decode a message by using the given substitution alphabet", () => {
      let alphabet = "xoyqmcgrukswaflnthdjpzibev";
      let input = "jrufscpw";
      let actual = substitution(input, alphabet, false);
      expect(actual).to.equal("thinkful");
    });
    it("should work with any kind of key with unique characters", () => {
      let alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      let input = "y&ii$r&";
      let actual = substitution(input, alphabet, false);
      expect(actual).to.equal("message");
    });
    it("should preserve spaces", () => {
      let alphabet = "xoyqmcgrukswaflnthdjpzibev";
      let input = "elp xhm xf mbymwwmfj dne";
      let actual = substitution(input, alphabet, false);
      expect(actual).to.equal("you are an excellent spy");
    });
    it("should ignore capital letters", () => {
      let alphabet = "xoyqmcgrukswaflnthdjpzibev";
      let input = "jRufScPw";
      let actual = substitution(input, alphabet, false);
      expect(actual).to.equal("thinkful");
    });
  });
});
