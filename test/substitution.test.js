const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  describe("Error Handling", () => {
    it("should return false if the alphabet parameter is not 26 characters long", () => {
      const actual = substitution("hello", "qert");
      expect(actual).to.be.false;
    });
    it("should return false if there are repeating characters in the parameter", () => {
      const actual = substitution("hello world", "qwertyuiopasdfghjklzxcvbnq");
      expect(actual).to.be.false;
    });
  });
  describe("Encoding", () => {
    it("should maintain spaces throughout", () => {
      const actual = substitution("hello world", "qwertyuiopasdfghjklzxcvbnm");
      const expected = "itssg vgksr";
      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      const actual = substitution("HELLO WORLD", "qwertyuiopasdfghjklzxcvbnm");
      const expected = "itssg vgksr";
      expect(actual).to.equal(expected);
    });
  });
  describe("Decoding", () => {
    it("should maintain spaces throughout", () => {
      const actual = substitution(
        "itssg vgksr",
        "qwertyuiopasdfghjklzxcvbnm",
        false
      );
      const expected = "hello world";
      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      const actual = substitution(
        "ITSSG VGKSR",
        "qwertyuiopasdfghjklzxcvbnm",
        false
      );
      const expected = "hello world";
      expect(actual).to.equal(expected);
    });
  });
});
