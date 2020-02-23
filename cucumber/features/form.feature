Feature: Form
  A form for reporting stinks

  Scenario: Inputs for the app are present
    When I open the main page
    Then I should see "Vorname"
    Then I should see "Nachname"
    Then I should see "E-Mail"    
    Then I should see "Straße"
    Then I should see "Hausnummer"
    Then I should see "Position ohne Adresse"
    Then I should see "Wonach stinkt es?"
    Then I should see "Intensität"

Scenario: Inputs for the app are present
    When I open the main page
    Then I should see "Position ohne Adresse"
    And I click "Position ohne Adresse"
    Then I should not see "Straße"
    Then I should not see "Hausnummer"