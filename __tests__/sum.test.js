const { sum, sum_string } = require("../src/sum");

describe("Sum module", () => {
  test("should return 3 for inputs 1,2", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("should return 5 for inputs 1,4", () => {
    expect(sum(1, 4)).toBe(5);
  });
  it("should return 6 for inputs 3,3", () => {
    expect(sum(3, 3)).toBe(6);
  });
});

describe("Sum String module", () => {
  it('should return "5" for inputs 2,3', () => {
    expect(sum_string(2, 3)).toBe("5");
  });
});
