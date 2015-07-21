declare module Cucumber {

  export interface ICallback {
    (): void;
    (failureReason: string): void;
    pending(): void;
    pending(failureReason: string): void;
    fail(): void;
    fail(failureReason: string): void;
  }

  export function Given(title: RegExp, fn: Function): void;

  export function When(title: RegExp, fn: Function): void;

  export function Then(title: RegExp, fn: Function): void;

  export function And(title: RegExp, fn: Function): void;

  export function But(title: RegExp, fn: Function): void;
}
