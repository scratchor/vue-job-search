import nextElementInList from "@/utils/nextElementInList";

describe("nextElementInList", () => {
  it("Locates element in list and returns the next element un list", () => {
    const list = ["A", "B", "C", "D", "E"];
    const value = "B";

    const result = nextElementInList(list, value);
    expect(result).toBe("C");
  });

  describe("when element is at the end of the list", () => {
    it("locates next element at start of the list", () => {
      const list = ["A", "B", "C", "D", "E"];
      const value = "E";

      const result = nextElementInList(list, value);
      expect(result).toBe("A");
    });
  });
});
