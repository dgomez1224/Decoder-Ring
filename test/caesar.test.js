const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  // describe("shift parameter", () => {
  it("should return false if shift value below -25", () => {
    const actual = caesar("test", -27);
    expect(actual).to.be.false;
  });

  it("should return false if shift value above 25", () => {
    const actual = caesar("test", 26);
    expect(actual).to.be.false;
  });

  it("should return false if shift value is 0", () => {
    const actual = caesar("test", 0);
    expect(actual).to.be.false;
  });

  it("should return false if shift value is not present", () => {
    const actual = caesar("test");
    expect(actual).to.be.false;
  });

  it("should return a string if shift value between -25 and 25 and does not equal 0", () => {
    const actual = caesar("test", 22);
    expect(actual).to.be.string;
    
  });
  // describe("string errors", () => {
  it("should ignore capital letters", () => {
    const expected = "wklqnixo";
    const actual = caesar("Thinkful", 3);
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces throughout", () => {
    const expected = "wlsyph qemrxemr wtegiw xlvsyklsyx";
    const actual = caesar("should maintain spaces throughout", 4);
    expect(actual).to.equal(expected);
  });
  it('should wrap around to the front of the alphabet', () => {
    const expected = 'abc';
    const actual = caesar('xyz', 3);
    expect(actual).to.equal(expected)
});

});
