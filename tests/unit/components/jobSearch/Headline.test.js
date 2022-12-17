import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import Headline from "@/components/jobSearch/Headline";

describe("Headline", () => {
  // !!!run logic before each it block of code
  beforeEach(() => {
    jest.useFakeTimers("legacy"); // !!! mock real js functions with jest
  });
  // !!!run logic after each it block of code
  afterEach(() => {
    jest.useRealTimers(); // !!!mock function stop to mack
  });

  it("It displays introductory action verb", () => {
    const wrapper = mount(Headline);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Build for everyone");
  });

  it("changes action verb at a consistent interval", () => {
    mount(Headline);
    expect(setInterval).toHaveBeenCalled();
  });

  it("swaps action verb after first interval", async () => {
    const wrapper = mount(Headline);
    jest.runOnlyPendingTimers(); // !!!simulate the passage of the time
    // console.log(wrapper.vm); //vm - another high level name for vue model
    await nextTick(); // !!!manually update the template
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Create for everyone");
  });

  it("removes interval when component disappears", () => {
    const wrapper = mount(Headline);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
  });
});
