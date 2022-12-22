import state from "@/store/state";

describe("state", () => {
  it("keeps track of whether user is logged in", () => {
    const startingState = state();
    expect(startingState.isLoggedIn).toBe(false);
  });

  it("store jobs listings", () => {
    const startingState = state();
    expect(startingState.jobs).toEqual([]);
  });
});
