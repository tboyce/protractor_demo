/// <reference path="../../.tmp/typings/tsd.d.ts" />

declare var require: any;
declare var module: any;

import Calculator = require('./PageObjects/Calculator');

var myStepDefinitionsWrapper: Function = function (): void {
  var chai: Chai.ChaiStatic = require('chai');
  var chaiAsPromised: any = require('chai-as-promised');
  chai.use(chaiAsPromised);
  var expect: Chai.ExpectStatic = chai.expect;

  var calc: Calculator = new Calculator();

  this.Then(/^the app should be titled "([^"]*)"$/, function (expected: string, next: Function): void {
    expect(calc.title()).to.eventually.equal(expected).and.notify(next);
  });

  this.When(/^I load the calculator$/, function (next: Function): void {
    expect(calc.load()).to.notify(next);
  });

  this.When(/^I add (\d+) and (\d+)$/, function (first: string, second: string, next: Function): void {
    expect(calc.add(first, second)).to.notify(next);
  });

  this.Then(/^the result should be (\d+)$/, function (expected: string, next: Function): void {
    expect(calc.latestResult.getText()).to.eventually.equal(expected).and.notify(next);
  });

  this.Then(/^the (first|last) history entry should be "([^"]*)"$/, function (pos: string, expected: string, next: Function): void {
    expect(calc.history[pos]().getText()).to.eventually.contain(expected).and.notify(next);
  });
};

// noinspection JSUnusedAssignment
module.exports = myStepDefinitionsWrapper;
