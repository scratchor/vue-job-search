import { mount } from "@vue/test-utils";
import SubNav from "@/components/navigation/SubNav";

describe("SubNav", () => {
  const createConfig = (routeName) => ({
    global: {
      mocks: {
        $route: {
          name: routeName,
        },
      },
      stubs: {
        // replace this component with dummy component
        FontAwesomeIcon: true,
      },
    },
  });

  describe("When user is on the job page", () => {
    it("displays job count", () => {
      const routeName = "JobResults";

      const wrapper = mount(SubNav, createConfig(routeName));
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });

  describe("When user is NOT on the job page", () => {
    it("does NOT displays job count", () => {
      const routeName = "Home";

      const wrapper = mount(SubNav, createConfig(routeName));
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
