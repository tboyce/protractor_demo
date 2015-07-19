/// <reference path="../../../.tmp/typings/tsd.d.ts" />

class Calculator {
  firstNumber: protractor.ElementFinder = element(by.model('first'));
  secondNumber: protractor.ElementFinder = element(by.model('second'));
  goButton: protractor.ElementFinder = element(by.id('gobutton'));
  latestResult: protractor.ElementFinder = element(by.binding('latest'));
  history: protractor.ElementArrayFinder = element.all(by.repeater('result in memory'));

  private browser: protractor.IBrowser = browser;

  title(): webdriver.promise.Promise<string> {
    return this.browser.getTitle();
  }

  add(a: string, b: string): webdriver.promise.Promise<void> {
    this.firstNumber.sendKeys(a);
    this.secondNumber.sendKeys(b);
    return this.goButton.click();
  }

  load(): webdriver.promise.Promise<void> {
    return this.browser.get('http://juliemr.github.io/protractor-demo');
  }
}

export = Calculator;
