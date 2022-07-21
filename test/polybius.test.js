const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Polybius()", () => {
  describe("Error Handling", () => {
    it("Should output a string", () => {
      const actual = polybius("Hello world");
      expect(actual).to.be.string;
    });
  });
  describe("Encoding", () => {
    it("Should maintain spaces throughout", () => {
        const expected = '3251131343 2543241341';
        const actual = polybius('Hello World');
        expect(actual).to.equal(expected);
    });
    it("Should ignore capital letters", () => {
        const expected = '3251131343 2543241341';
        const actual = polybius('Hello World');
        expect(actual).to.equal(expected);
    });
    it("Should encode I/J to 42", () => {
        const expected = '4242';
        const actual = polybius("ij");
        expect(actual).to.equal(expected)
    });
  });
  describe("Decoding", () => {
    it("Should return false if the number of characters in the input string is odd ", () => {
      const actual = polybius("342", false);
      expect(actual).to.be.false;
    });
    it("Should decode 42 to I/J", () => {
        const expected = 'i/j';
        const actual = polybius("42", false);
        expect(actual).to.equal(expected)
    });
  });
});

