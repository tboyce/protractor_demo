/// <reference path="../../.tmp/typings/tsd.d.ts" />
var PageObjects;
(function (PageObjects) {
    var Calculator = (function () {
        function Calculator() {
            this.browser = browser;
            this.firstNumber = element(by.model('first'));
            this.secondNumber = element(by.model('second'));
            this.goButton = element(by.id('gobutton'));
            this.latestResult = element(by.binding('latest'));
            this.history = element.all(by.repeater('result in memory'));
        }
        Calculator.prototype.title = function () {
            return this.browser.getTitle();
        };
        Calculator.prototype.add = function (a, b) {
            this.firstNumber.sendKeys(a);
            this.secondNumber.sendKeys(b);
            return this.goButton.click();
        };
        Calculator.prototype.load = function () {
            return this.browser.get('http://juliemr.github.io/protractor-demo');
        };
        return Calculator;
    })();
    PageObjects.Calculator = Calculator;
})(PageObjects || (PageObjects = {}));
//noinspection JSUnusedAssignment
module.exports = new PageObjects.Calculator();
//# sourceMappingURL=calculator_po.js.map