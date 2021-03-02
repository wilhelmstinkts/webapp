class MailTemplater {
  static to() {
    return "support@frischluft.wilhelm-gibt-keine-ruh.de";
  }
  static subject() {
    return "Fehler/Wunsch Frischluftheld:in";
  }

  static sendMail() {
    window.location.href =
      "mailto:" +
      MailTemplater.to() +
      "?subject=" +
      encodeURI(MailTemplater.subject()) +
      "&body=" +
      encodeURI(MailTemplater.bodyTemplate());
  }

  static bodyTemplate() {
    var deviceInfo = new UAParser();
    return `Danke, dass du dir die Zeit nimmst, mit uns die App besser zu machen. Du findest hier einen Mustertext. Bitte fülle in den mit Sternchen * markierten Bereiche deine Beobachtungen, Wünsche usw ein. Bitte achte darauf, deine Emailadresse im Text anzugeben, da wir dich sonst nicht für Rückfragen kontaktieren können.
    
    ---
    Hallo,

    Mein Device:
        Betriebssystem: ${JSON.stringify(deviceInfo.getOS())}
        Browser: ${JSON.stringify(deviceInfo.getBrowser())}
        Gerät: ${JSON.stringify(deviceInfo.getDevice())}
    Meine Eingaben:
        Vorname: ${document.getElementById("inputGivenName").value}
        Name: ${document.getElementById("inputSurname").value}
        Email: ${document.getElementById("inputEmail").value}
        Addresse: ${document.getElementById("inputStreet").value} ${
      document.getElementById("inputNumber").value
    }
        Koordinaten: ${document.getElementById("inputLatitude").value}, ${
      document.getElementById("inputLongitude").value
    }
        Gestanksart: ${
          document.getElementById("selectFlavor").value === "Sonstiges"
            ? document.getElementById("inputDiverse").value
            : document.getElementById("selectFlavor").value
        }
        Gestanksintensität: ${
          document.getElementById("inputStinkIntensity").value
        }/6 
        Zeitraum: ${
          document.getElementById("radioReportPast").checked
            ? document.getElementById("inputDate").value +
              " " +
              document.getElementById("inputStartTime").value +
              " - " +
              document.getElementById("inputDate").value +
              " " +
              document.getElementById("inputEndTime").value
            : new Date().toISOString()
        }

    Erwartetes Verhalten:

        *Beschreibe hier bitte, was hätte passieren sollen*

    Aufgetretenes Verhalten:

        *Beschreibe hier bitte, was passiert ist*

    *Wünschst du dir eine neue Funktion? Dann beschreibe sie bitte möglichst präzise.*

    Beste Grüße
    ${document.getElementById("inputGivenName").value} ${
      document.getElementById("inputSurname").value
    }
    ${document.getElementById("inputEmail").value}`;
  }
}
