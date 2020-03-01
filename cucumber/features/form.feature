Feature: Form
  A form for reporting stinks

  Scenario: Inputs for the app are present
    When I open the main page
    Then I should see "Vorname"
    Then I should see "Nachname"
    Then I should see "E-Mailadresse"    
    Then I should see "Straße"
    Then I should see "Hausnummer"
    Then I should see "Meine Position verwenden"
    Then I should see "Wonach stinkt es?"
    Then I should see "Intensität"

Scenario: Inputs for the app are present
    When I open the main page
    Then I should see "Meine Position verwenden"
    And I click "Meine Position verwenden"
    Then I should not see "Straße"
    Then I should not see "Hausnummer"
