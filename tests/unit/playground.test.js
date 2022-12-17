import { evenOrOdd, multiply } from "@/playground";

describe("basic math", () => {
  it("adds two numbers", () => {
    expect(1 + 1).toBe(2);
  });

  it("subtracts two numbers", () => {
    expect(5 - 3).toBe(2);
  });

  describe("evenOrOdd", () => {
    describe("when the number is even", () => {
      it("indicates the number is even", () => {
        expect(evenOrOdd(4)).toBe("Even");
      });
    });

    describe("when the number is odd", () => {
      it("indicates the number is odd", () => {
        expect(evenOrOdd(3)).toBe("Odd");
      });
    });
  });

  describe("multiply", () => {
    it("multiply two numbers", () => {
      expect(multiply(2, 3)).toBe(6);
    });
  });
});

describe("jest mock function", () => {
  it("replace any function", () => {
    const mockFunction = jest.fn();

    mockFunction();
    expect(mockFunction).toHaveBeenCalled();
  });
});
