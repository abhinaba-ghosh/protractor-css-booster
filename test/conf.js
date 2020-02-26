exports.config = {
  directConnect: true,
  // seleniumAddress: "http://localhost:4444/wd/hub",
  // specs: ["./archerSpec.js"],
  specs: ["./spec.js"],
  directConnect: true,
  capabilities: {
    browserName: "chrome",
    ignoreProtectedModeSettings: true,
    platform: "ANY"
  },

  plugins: [
    {
      path: "../dist/index.js"
    }
  ]
};
