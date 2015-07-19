/// <reference path="../../../.tmp/typings/tsd.d.ts" />

class Calculator {
  private browser = browser;

  firstNumber = element(by.model('first'));
  secondNumber = element(by.model('second'));
  goButton = element(by.id('gobutton'));
  latestResult = element(by.binding('latest'));
  history = element.all(by.repeater('result in memory'));

  title() {
    return this.browser.getTitle();
  }

  add(a, b) {
    this.firstNumber.sendKeys(a);
    this.secondNumber.sendKeys(b);
    return this.goButton.click();
  }

  load() {
    return this.browser.get('http://juliemr.github.io/protractor-demo');
  }
}

export = Calculator;
