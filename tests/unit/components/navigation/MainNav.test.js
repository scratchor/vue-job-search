import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import MainNav from "@/components/navigation/MainNav";

describe("MainNav", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("displays company name", async () => {
    const wrapper = shallowMount(MainNav, createConfig());
    // !!!! "Options" available
    // data() {
    //   return {
    //     company: "Super Corporation",
    //   };
    // },
    // global: {
    //   stubs: {
    //     "router-link": RouterLinkStub,
    //   },
    // },
    // });
    // !!!! "setData" method
    // await wrapper.setData({
    //   company: "Super Corp",
    // });
    expect(wrapper.text()).toMatch("Bobo Careers");
  });

  it("displays menu item for navigation", () => {
    const wrapper = shallowMount(MainNav, createConfig());

    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuItemsTexts = navigationMenuItems.map((item) =>
      item.text()
    );
    expect(navigationMenuItemsTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Bobo",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });

  describe("when user is logged out", () => {
    it("prompts user to sign in", () => {
      const wrapper = shallowMount(MainNav, createConfig());

      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
  });

  describe("when user logs in", () => {
    it("displays user profile picture", async () => {
      const wrapper = shallowMount(MainNav, createConfig());

      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });

    it("displays subnav menu with additional info", async () => {
      const wrapper = shallowMount(MainNav, createConfig());
      let subNav = wrapper.find("[data-test='subnuv']");
      expect(subNav.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      subNav = wrapper.find("[data-test='subnuv']");
      expect(subNav.exists()).toBe(true);
    });
  });
});
