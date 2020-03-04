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

Scenario: Toggle location
    When I open the main page
    Then I should see "Meine Position verwenden"
    When I click "Meine Position verwenden"
    Then I should see "Adresse eingeben"
    When I click "Adresse eingeben"
    Then I should see "Meine Position verwenden"
