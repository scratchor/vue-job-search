import { mount } from "@vue/test-utils";

import HeaderContainer from "@/components/shared/HeaderContainer";

describe("HeaderContainer", () => {
  it("allows parent to provide title content", () => {
    const wrapper = mount(HeaderContainer, {
      slots: {
        title: "<h1>Title</h1>",
      },
    });

    expect(wrapper.text()).toMatch("Title");
  });

  it("allows parent to provide subtitle content", () => {
    const wrapper = mount(HeaderContainer, {
      slots: {
        subtitle: "<h3>Subtitle</h3>",
      },
    });

    expect(wrapper.text()).toMatch("Subtitle");
  });
});
