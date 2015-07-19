Feature: AngularJS Calculator

  Background:
    Given I load the calculator

  Scenario: Should have a title
    Then the app should be titled "Super Calculator"

  Scenario: Should add one and two
    When I add 1 and 2
    Then the result should be 3

  Scenario: Should have a history
    When I add 1 and 2
    And I add 3 and 4
    Then the last history entry should be "1 + 2"
    And the first history entry should be "3 + 4"