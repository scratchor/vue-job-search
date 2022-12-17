module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  moduleNameMapper: {
    axios: "axios/dist/node/axios.cjs",
  },
};
