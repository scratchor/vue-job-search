import { shallowMount, flushPromises, RouterLinkStub } from "@vue/test-utils";
// import axios from "axios";
// jest.mock("axios");

import JobListings from "@/components/JobResults/JobListings";

describe("JobListings", () => {
  // beforeEach(() => {
  //   axios.get.mockResolvedValue({ data: Array(15).fill({}) });
  // });

  // afterEach(() => {
  //   axios.get.mockReset();
  // });

  const createRoute = (queryParams = {}) => ({
    query: {
      page: "5",
      ...queryParams,
    },
  });

  const createStore = (config = {}) => ({
    getters: {
      FILTERED_JOBS: [],
    },
    dispatch: jest.fn(),
    ...config,
  });

  const createConfig = ($route, $store) => ({
    global: {
      mocks: {
        $route,
        $store,
      },
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  describe("when components mounts", () => {
    it("makes call to fetch jobs api", () => {
      const $route = createRoute();
      const dispatch = jest.fn();
      const $store = createStore({ dispatch });

      shallowMount(JobListings, createConfig($route, $store));
      expect(dispatch).toHaveBeenCalledWith("FETCH_JOBS");
    });
  });

  it("creates a job listing for a maximum of 10 jobs", async () => {
    const wrapper = shallowMount(
      JobListings,
      createConfig(
        createRoute({ page: "1" }),
        createStore({
          getters: {
            FILTERED_JOBS: Array(15).fill({}),
          },
        })
      )
    );

    await flushPromises(); //resolve all the promises
    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(10);
  });

  describe("when query params exclude page number", () => {
    // fit("it displays page number 1", () => { !!fit means focus on this it, so run only this test
    it("it displays page number 1", () => {
      const queryParams = { page: undefined };
      const $route = createRoute(queryParams);
      const $store = createStore();

      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      expect(wrapper.text()).toMatch("Page 1");
    });
  });

  describe("when query params include page number", () => {
    it("it displays page number", () => {
      const queryParams = { page: 3 };
      const $route = createRoute(queryParams);
      const $store = createStore();

      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      expect(wrapper.text()).toMatch("Page 3");
    });
  });

  describe("when the user is on the first page of job results", () => {
    it("it does not show the link to previous page", () => {
      const queryParams = { page: 1 };
      const $route = createRoute(queryParams);
      const $store = createStore();

      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      const previousPage = wrapper.find("[data-test='previous-page-link']");
      expect(previousPage.exists()).toBe(false);
    });

    it("it shows the link to next page", async () => {
      const queryParams = { page: 1 };
      const $route = createRoute(queryParams);
      const $store = createStore({
        getters: {
          FILTERED_JOBS: Array(15).fill({}),
        },
      });

      const wrapper = shallowMount(JobListings, createConfig($route, $store));

      await flushPromises();
      const nextPage = wrapper.find("[data-test='next-page-link']");
      expect(nextPage.exists()).toBe(true);
    });
  });

  describe("when the user is on the last page of job results", () => {
    it("it does not show the link to next page", async () => {
      const queryParams = { page: 2 };
      const $route = createRoute(queryParams);
      const $store = createStore({
        getters: {
          FILTERED_JOBS: Array(15).fill({}),
        },
      });

      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      await flushPromises();

      const previousPage = wrapper.find("[data-test='next-page-link']");
      expect(previousPage.exists()).toBe(false);
    });

    it("it shows the link to previous page", async () => {
      const queryParams = { page: 2 };
      const $route = createRoute(queryParams);
      const $store = createStore({
        getters: {
          FILTERED_JOBS: Array(15).fill({}),
        },
      });

      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      await flushPromises();

      const nextPage = wrapper.find("[data-test='previous-page-link']");
      expect(nextPage.exists()).toBe(true);
    });
  });
});
