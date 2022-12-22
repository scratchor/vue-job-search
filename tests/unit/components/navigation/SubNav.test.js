import { mount } from "@vue/test-utils";
import SubNav from "@/components/navigation/SubNav";
import { FILTERED_JOBS_BY_ORGANIZATIONS } from "@/store";
import { FILTERED_JOBS } from "@/store/constants";

describe("SubNav", () => {
  const createConfig = (routeName, $store = {}) => ({
    global: {
      mocks: {
        $route: {
          name: routeName,
        },
        $store,
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
      const $store = {
        getters: {
          FILTERED_JOBS: [{ id: 1 }, { id: 2 }],
        },
      };

      const wrapper = mount(SubNav, createConfig(routeName, $store));
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.text()).toMatch("2 jobs matched");
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
