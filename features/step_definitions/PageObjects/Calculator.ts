class Calculator {
  firstNumber: protractor.ElementFinder = element(by.model('first'));
  secondNumber: protractor.ElementFinder = element(by.model('second'));
  goButton: protractor.ElementFinder = element(by.id('gobutton'));
  latestResult: protractor.ElementFinder = element(by.binding('latest'));
  history: protractor.ElementArrayFinder = element.all(by.repeater('result in memory'));

  static load(): webdriver.promise.Promise<void> {
    return browser.get('http://juliemr.github.io/protractor-demo');
  }

  static title(): webdriver.promise.Promise<string> {
    return browser.getTitle();
  }

  add(a: string, b: string): webdriver.promise.Promise<void> {
    this.firstNumber.sendKeys(a);
    this.secondNumber.sendKeys(b);
    return this.goButton.click();
  }

}

export = Calculator
