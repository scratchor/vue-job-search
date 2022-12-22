import { mount } from "@vue/test-utils";

import Accordion from "@/components/shared/Accordion";

describe("Accordion", () => {
  const createConfig = (config = {}) => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
    props: {
      header: "Header",
    },
    ...config,
  });

  it("renders child", async () => {
    const slots = {
      default: "<div>My inner data</div>",
    };

    const wrapper = mount(Accordion, createConfig({ slots }));

    expect(wrapper.text()).not.toMatch("My inner data");

    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");

    expect(wrapper.text()).toMatch("My inner data");
  });

  describe("when we not provide content", () => {
    it("render default content", async () => {
      const slots = {};

      const wrapper = mount(Accordion, createConfig({ slots }));

      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");

      expect(wrapper.text()).toMatch("Whoops, it seems to have no content!");
    });
  });
});
