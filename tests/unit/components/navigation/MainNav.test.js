import { RouterLinkStub, shallowMount } from "@vue/test-utils";
import MainNav from "@/components/navigation/MainNav";
import { createStore } from "vuex";

describe("MainNav", () => {
  const createConfig = (store) => ({
    global: {
      plugins: [store],
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("displays company name", async () => {
    const store = createStore();
    const wrapper = shallowMount(MainNav, createConfig(store));
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
    const store = createStore();
    const wrapper = shallowMount(MainNav, createConfig(store));

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
      const store = createStore();
      const wrapper = shallowMount(MainNav, createConfig(store));

      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
  });

  describe("when user is logged in", () => {
    it("displays user profile picture", () => {
      const store = createStore({
        state() {
          return {
            isLoggedIn: true,
          };
        },
      });

      const wrapper = shallowMount(MainNav, createConfig(store));
      const profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });

    it("displays subnav menu with additional info", () => {
      const store = createStore({
        state() {
          return {
            isLoggedIn: true,
          };
        },
      });
      const wrapper = shallowMount(MainNav, createConfig(store));

      const subNav = wrapper.find("[data-test='subnuv']");
      expect(subNav.exists()).toBe(true);
    });
  });

  describe("when user is logged out", () => {
    it("issues call to Vuex to login user", async () => {
      const store = createStore();
      const commit = jest.fn();
      store.commit = commit;

      const wrapper = shallowMount(MainNav, createConfig(store));

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      expect(commit).toHaveBeenCalledWith("LOGIN_USER");
    });
  });
});
