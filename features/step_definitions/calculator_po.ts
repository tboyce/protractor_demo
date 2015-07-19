/// <reference path="../../typings/angular-protractor/angular-protractor.d.ts" />

declare var module;

module PageObjects {
    export class Calculator {
        firstNumber = element(by.model('first'));
        secondNumber = element(by.model('second'));
        goButton = element(by.id('gobutton'));
        latestResult = element(by.binding('latest'));
        history = element.all(by.repeater('result in memory'));

        title() {
            return browser.getTitle();
        }

        add(a, b) {
            this.firstNumber.sendKeys(a);
            this.secondNumber.sendKeys(b);
            return this.goButton.click();
        }

        load() {
            return browser.get('http://juliemr.github.io/protractor-demo');
        }
    }
}

module.exports = new PageObjects.Calculator();