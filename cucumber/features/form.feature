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
    Then I should see "Wonach riecht es?"
    Then I should see "Intensität"

  Scenario: Toggle location when Location Access is off (default)
    When I open the main page
    Then I should see "Meine Position verwenden"
    When I click "Meine Position verwenden"
    Then I should see "Ortung nicht erfolgreich"

  Scenario: Empty form fails
    When I open the main page
    When I click "Senden"
    Then I should see "Bitte prüfe deine Angaben"

  Scenario: Valid form triggers Backend call
    When I open the main page
    And I fill in following:
      | Vorname | Nachname | E-Mailadresse     | Straße          | Hausnummer | selectFlavor      |
      | Hans    | Wurst    | hans.wurst@web.de | Hielscherstraße | 1          | Abfall            |
    And I agree to terms and conditions
    When I click "Senden"
    Then I should see "Server nicht erreichbar. Bitte versuch es später noch einmal."

  Scenario: Nonexistent address causes error
    When I open the main page
    And I fill in following:
      | Vorname | Nachname | E-Mailadresse     | Straße          | Hausnummer | selectFlavor      |
      | Hans    | Wurst    | hans.wurst@web.de | Garibaldestraße | 205 b      | Abfall            |
    And I agree to terms and conditions
    When I click "Senden"
    Then I should see "Wir konnten diese Adresse nicht in Wilhelmsruh finden. Bitte prüfe deine Eingabe oder nutze die Standortbestimmung."

  Scenario: Not agreeing to terms and conditions fails
    When I open the main page
    And I fill in following:
      | Vorname | Nachname | E-Mailadresse     | Straße          | Hausnummer | selectFlavor      |
      | Hans    | Wurst    | hans.wurst@web.de | Garibaldestraße | 205 b      | Abfall            |
    When I click "Senden"
    Then I should see "Bitte prüfe deine Angaben"

  Scenario: Invalid email input fails
    When I open the main page
    And I fill in following:
      | Vorname | Nachname | E-Mailadresse           | Straße          | Hausnummer | selectFlavor      |
      | Hans    | Wurst    | hanswurstÄtJimeyldotcom | Garibaldestraße | 205 b      | Abfall            |
    And I agree to terms and conditions
    When I click "Senden"
    Then I should see "Bitte prüfe deine Angaben"

  Scenario: Missing address and location fails
    When I open the main page
    And I fill in following:
      | Vorname | Nachname | E-Mailadresse     | selectFlavor      |
      | Hans    | Wurst    | hans.wurst@web.de | Abfall            |
    And I agree to terms and conditions
    When I click "Senden"
    Then I should see "Bitte prüfe deine Angaben"

  # Must be disabled can't figure out how to mock geolocation yet
  # Scenario: Missing address is Ok when gps location is used
  #   When I open the main page
  #   And I fill in following:
  #     | Vorname | Nachname | E-Mailadresse     | selectFlavor      |
  #     | Hans    | Wurst    | hans.wurst@web.de | Abfall           |
  #   And I click "Meine Position verwenden"
  #   And I agree to terms and conditions
  #   When I click "Senden"
  #   Then I should see "Server nicht erreichbar. Bitte versuch es später noch einmal."

  Scenario: Toggle Diverse Input
    When I open the main page
    And I fill in following:
      | Vorname | Nachname | E-Mailadresse     | selectFlavor      | Straße      | Hausnummer |
      | Hans    | Wurst    | hans.wurst@web.de | Sonstiges         | Hertzstraße | 17         |
    Then I should see "Bitte Geruch beschreiben"
    When I agree to terms and conditions
    And I click "Senden"
    Then I should see "Bitte prüfe deine Angaben"
    And I fill in following:
      | Bitte Geruch beschreiben |
      | Tomatensalat             |
    When I click "Senden"
    Then I should see "Server nicht erreichbar. Bitte versuch es später noch einmal."
