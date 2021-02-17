'use strict';

describe("middleLetter", function() {
  it("returns the middle letter of an odd-numbered word", function() {
    expect(middleLetter("testing")).toEqual("t")
  })

  it("returns the middle two letters of an even-numbered word", function() {
    expect(middleLetter("test")).toEqual("es")
  })
});

describe("isOdd", function() {
  it("returns true if a number is odd", function() {
    expect(isOdd(5)).toEqual(true)
  })
})