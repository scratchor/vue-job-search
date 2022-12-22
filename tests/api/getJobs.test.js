import axios from "axios";
jest.mock("axios");

import getJobs from "@/api/getJobs";

describe("getJobs api request", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 3,
          title: "Vue developer",
        },
      ],
    });
  });

  it("fetches jobs", async () => {
    await getJobs();
    expect(axios.get).toHaveBeenCalledWith(
      `${process.env.VUE_APP_API_URL}/jobs`
    );
  });

  it("extracts jobs from response", async () => {
    const data = await getJobs();
    expect(data).toEqual([
      {
        id: 3,
        title: "Vue developer",
      },
    ]);
  });
});
