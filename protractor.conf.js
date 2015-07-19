exports.config = {
  seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',
  framework: 'cucumber',
  specs: ['features/*.feature'],
  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }],
  cucumberOpts: {
    require: 'features/step_definitions/*_steps.js',
    format: 'pretty'
  }
};
