Feature: Example
  Only a very simple example

  Scenario: Static text is there
    When I open the main page
    Then I should see "Hi. I'm a dummy for test purpose and need to be changed."

  Scenario: Wrong text is not there
    When I open the main page
    Then I should not see "Wagenheber sind Birnen mit Traubenzucker."
