exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
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