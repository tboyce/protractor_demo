function Calculator() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
    var history = element.all(by.repeater('result in memory'));

    function title() {
        return browser.getTitle();
    }

    function add(a, b) {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        return goButton.click();
    }

    function load() {
        return browser.get('http://juliemr.github.io/protractor-demo');
    }

    return {
        firstNumber: firstNumber,
        secondNumber: secondNumber,
        goButton: goButton,
        latestResult: latestResult,
        history: history,
        title: title,
        add: add,
        load: load
    }
}

module.exports = Calculator;