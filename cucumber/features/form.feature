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

  Scenario: Empty form fails
    When I open the main page
    When I click "Senden"
    Then I should see "Bitte prüfe deine Angaben"

  Scenario: Valid form triggers Backend call
    When I open the main page
    And I fill in following:
      | Vorname | Nachname | E-Mailadresse     | Straße          | Hausnummer | Wonach stinkt es? |
      | Hans    | Wurst    | hans.wurst@web.de | Garibaldestraße | 205 b      | Biomüll           |
    When I click "Senden"
    Then I should see "Server nicht erreichbar. Bitte versuch es später noch einmal."

  Scenario: Invalid email input fails
    When I open the main page
    And I fill in following:
      | Vorname | Nachname | E-Mailadresse           | Straße          | Hausnummer | Wonach stinkt es? |
      | Hans    | Wurst    | hanswurstÄtJimeyldotcom | Garibaldestraße | 205 b      | Biomüll           |
    When I click "Senden"
    Then I should see "Bitte prüfe deine Angaben"

  Scenario: Missing address and location fails
    When I open the main page
    And I fill in following:
      | Vorname | Nachname | E-Mailadresse     | Wonach stinkt es? |
      | Hans    | Wurst    | hans.wurst@web.de | Biomüll           |
    When I click "Senden"
    Then I should see "Bitte prüfe deine Angaben"

  Scenario: Missing address is Ok when gps location is used
    When I open the main page
    And I fill in following:
      | Vorname | Nachname | E-Mailadresse     | Wonach stinkt es? |
      | Hans    | Wurst    | hans.wurst@web.de | Biomüll           |
    And I click "Meine Position verwenden"
    When I click "Senden"
    Then I should see "Server nicht erreichbar. Bitte versuch es später noch einmal."

  Scenario: Toggle Diverse Input
    When I open the main page
    And I click "Meine Position verwenden"
    And I fill in following:
      | Vorname | Nachname | E-Mailadresse     | Wonach stinkt es? |
      | Hans    | Wurst    | hans.wurst@web.de | Sonstiges         |
    Then I should see "Bitte Geruch beschreiben"
    When I click "Senden"
    Then I should see "Bitte prüfe deine Angaben"
    And I fill in following:
      | Bitte Geruch beschreiben |
      | Tomatensalat             |
    When I click "Senden"
    Then I should see "Server nicht erreichbar. Bitte versuch es später noch einmal."
