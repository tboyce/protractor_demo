declare module Cucumber {
  interface ICallback {
    (failureReason?: string): void;
    pending(failureReason?: string): void;
    fail(failureReason?: string): void;
  }

  interface ISteps {
    Given(title: RegExp, fn: Function): void;
    When(title: RegExp, fn: Function): void;
    Then(title: RegExp, fn: Function): void;
    And(title: RegExp, fn: Function): void;
    But(title: RegExp, fn: Function): void;
  }
}
