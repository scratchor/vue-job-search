import { mount, RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobListing";
import jobListing from "@/components/JobResults/JobListing";

describe("JobListing", () => {
  const createJobProps = (jobProps = {}) => ({
    title: "JS Developer",
    organization: "Amazon",
    locations: ["San Francisco", "New York"],
    minimumQualifications: ["Experienced", "Degree"],
    ...jobProps,
  });

  const createConfig = (jobProps) => ({
    props: {
      job: {
        ...jobProps,
      },
    },
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("renders job title", () => {
    const jobProps = createJobProps({ title: "Vue Developer" });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Vue Developer");
  });

  it("renders job organization", () => {
    const jobProps = createJobProps({ organization: "Apple" });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Apple");
  });

  it("renders job locations", () => {
    const jobProps = createJobProps({ locations: ["San Francisco", "Moscow"] });
    const wrapper = mount(jobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("San Francisco");
    expect(wrapper.text()).toMatch("Moscow");
  });

  it("renders job qualifications", () => {
    const jobProps = createJobProps({
      minimumQualifications: ["Code", "Develop"],
    });
    const wrapper = mount(jobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Code");
    expect(wrapper.text()).toMatch("Develop");
  });

  it("links to individual jobs page", () => {
    const jobsProps = createJobProps({
      id: 15,
    });
    const wrapper = mount(JobListing, createConfig(jobsProps));
    const jobPageLink = wrapper.findComponent(RouterLinkStub);
    const toProp = jobPageLink.props("to");
    expect(toProp).toBe("/jobs/result/15");
  });
});
