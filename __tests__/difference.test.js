const sum = require("../src/difference");

describe("Sum module", () => {
  it("should return 3 for inputs 1,2", () => {
    expect(sum(1, 2)).toBe(-1);
  });
  it("should return 5 for inputs 1,4", () => {
    expect(sum(1, 4)).toBe(-3);
  });
});
