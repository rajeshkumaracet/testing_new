exports.config = {
  directConnect: true,
  framework: "jasmine2",

  capabilites: {
    browserName: "chrome"
  },

  specs: ["../test_spec/multiform_spec.js"],
  //   "../test_spec/registration_spec.js",

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
