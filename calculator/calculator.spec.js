const { add } = require("./calculator.js");

describe("the add function", () => {
  it("it should add two values", () => {
    //set up tests here
    const result = add(2, 2);
    //assertion here
    expect(result).toBe(4);
    expect(add(-1,4)).toBe(3);
    expect(add(0,6)).toBe(6);
  });
  //likely edge cases
  it('should return 0 when no arguments are provided', () => {
      expect(add()).toBe(0);
      expect(add()).toBe
  })

});
