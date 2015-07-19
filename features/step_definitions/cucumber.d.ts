declare module Cucumber {
  interface Steps {
    Given(title: RegExp, fn: Function);
    When(title: RegExp, fn: Function);
    Then(title: RegExp, fn: Function);
    And(title: RegExp, fn: Function);
    But(title: RegExp, fn: Function);
  }
}
