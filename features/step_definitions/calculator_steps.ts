/// <reference path="./calculator_po.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />
/// <reference path="../../typings/chai-as-promised/chai-as-promised.d.ts" />

declare var require;
declare var module;

module.exports = function () {
    var chai : Chai.ChaiStatic = require('chai');
    var chaiAsPromised = require('chai-as-promised');
    chai.use(chaiAsPromised);
    var expect = chai.expect;

    var calc : PageObjects.Calculator = require('./calculator_po.js');

    this.Then(/^the app should be titled "([^"]*)"$/, function (expected, next) {
        expect(calc.title()).to.eventually.equal(expected).and.notify(next);
    });

    this.When(/^I load the calculator$/, function (next) {
        calc.load().then(next);
    });

    this.When(/^I add (\d+) and (\d+)$/, function (first, second, next) {
        calc.add(first, second).then(next);
    });

    this.Then(/^the result should be (\d+)$/, function (expected, next) {
        expect(calc.latestResult.getText()).to.eventually.equal(expected).and.notify(next);
    });

    this.Then(/^the (first|last) history entry should be "([^"]*)"$/, function (pos, expected, next) {
        expect(calc.history[pos]().getText()).to.eventually.contain(expected).and.notify(next);
    });
};