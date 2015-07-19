exports.config = {
  seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',
  framework: 'cucumber',
  specs: ['features/*.feature'],
  capabilities: {
    browserName: 'chrome'
  },
  cucumberOpts: {
    require: '.tmp/step_definitions/*_steps.js',
    format: 'pretty'
  },
  plugins: [{
    path: 'node_modules/protractor/plugins/console',
    exclude: ['favicon']
  }]
};
