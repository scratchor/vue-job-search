import { mount } from "@vue/test-utils";
import ActionButton from "@/components/shared/ActionButton";

describe("ActionButton", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "I am clickable",
        type: "primary",
      },
    });
    expect(wrapper.text()).toMatch("I am clickable");
  });

  it("applies one of several styles to the button", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "I am clickable",
        type: "primary",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});
