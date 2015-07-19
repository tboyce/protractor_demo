/// <reference path="../../typings/angular-protractor/angular-protractor.d.ts" />
var PageObjects;
(function (PageObjects) {
    var Calculator = (function () {
        function Calculator() {
            this.firstNumber = element(by.model('first'));
            this.secondNumber = element(by.model('second'));
            this.goButton = element(by.id('gobutton'));
            this.latestResult = element(by.binding('latest'));
            this.history = element.all(by.repeater('result in memory'));
        }
        Calculator.prototype.title = function () {
            return browser.getTitle();
        };
        Calculator.prototype.add = function (a, b) {
            this.firstNumber.sendKeys(a);
            this.secondNumber.sendKeys(b);
            return this.goButton.click();
        };
        Calculator.prototype.load = function () {
            return browser.get('http://juliemr.github.io/protractor-demo');
        };
        return Calculator;
    })();
    PageObjects.Calculator = Calculator;
})(PageObjects || (PageObjects = {}));
module.exports = new PageObjects.Calculator();
//# sourceMappingURL=calculator_po.js.map