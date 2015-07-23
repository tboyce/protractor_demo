/// <reference path="../../.tmp/typings/tsd.d.ts" />
/// <reference path="./Support/cucumber.d.ts" />

import Calculator = require('./PageObjects/Calculator');
import chai = require('chai');
import chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect: Chai.ExpectStatic = chai.expect;

var myStepDefinitionsWrapper: Function = function (): void {

  var calc: Calculator = new Calculator();

  this.Then(/^the app should be titled "([^"]*)"$/, function (expected: string, next: Cucumber.ICallback): void {
    expect(Calculator.title()).to.eventually.equal(expected).and.notify(next);
  });

  this.When(/^I load the calculator$/, function (next: Cucumber.ICallback): void {
    Calculator.load().then(next);
  });

  this.When(/^I add (\d+) and (\d+)$/, function (first: string, second: string, next: Cucumber.ICallback): void {
    calc.add(first, second).then(next);
  });

  this.Then(/^the result should be (\d+)$/, function (expected: string, next: Cucumber.ICallback): void {
    expect(calc.latestResult.getText()).to.eventually.equal(expected).and.notify(next);
  });

  this.Then(/^the (first|last) history entry should be "([^"]*)"$/,
    function (pos: string, expected: string, next: Cucumber.ICallback): void {
      expect(calc.history[pos]().getText()).to.eventually.contain(expected).and.notify(next);
    });
};

module.exports = myStepDefinitionsWrapper;
