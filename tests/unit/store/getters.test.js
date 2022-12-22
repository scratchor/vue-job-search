import getters from "@/store/getters";

describe("getters", () => {
  describe("UNIQUE_ORGANIZATIONS", () => {
    it("finds unique organizations", () => {
      const state = {
        jobs: [
          { organization: "Facebook" },
          { organization: "Google" },
          { organization: "Amazon" },
          { organization: "Facebook" },
        ],
      };

      const result = getters.UNIQUE_ORGANIZATIONS(state);
      expect(result).toEqual(new Set(["Facebook", "Google", "Amazon"]));
    });
  });
});
