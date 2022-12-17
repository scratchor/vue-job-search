import { mount } from "@vue/test-utils";

import TextInput from "@/components/shared/TextInput";

describe("TextInput", () => {
  it("communicates that user has entered character ", () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: "",
      },
    });
    const input = wrapper.find("input");

    input.setValue("I want to set random value");
    input.setValue("Yohhoo!");
    input.setValue("Ready");

    const messages = wrapper.emitted()["update:modelValue"];

    expect(messages).toEqual([
      ["I want to set random value"],
      ["Yohhoo!"],
      ["Ready"],
    ]);
  });
});
