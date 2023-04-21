<img src="./src/assets/digistore24logo.png" width="150">

# Digistore Recruiting-Projekt für Frontend Entwickler - Produktliste

## Beschreibung

Thema des Projekts war es eine Produktliste zu erstellen. Die Produktliste soll drei vorgegebene Produkte anzeigen. Die Produkte soll man sich in einer Detailansicht anschauen können
und in einer Bearbeitungsfunktion bearbeiten können. Für die Umsetzung soll Angular benutzt werden.

## Ziele

1. Angular Anwendung erstellen
2. Produktliste erstellen
3. Einzelansicht mit Bearbeitungsfunktion erstellen

## Spezifikation

- Die Produktliste zeigt alle Produkte in der Übersicht an.
- Die Einzelansicht zeigt ein Produkt in Detailansicht.
- Im Bearbeitungsmodus werden die Eigenschaften des Produkts in einem Formular änderbar dargestellt.

## Umsetzung

### Ein Server erstellen um eine realitätsnahe Umgebung zu schaffen

Ich habe einen json-server aufgesetzt um ein Backend zu simulieren.
Unter server/db.json findet man die "Datenbank". Es ist möglich einträge zu bearbeiten, neue zu erstellen und vorhandene abzurufen (GET,POST,PUT).
Der Server kann mit einem npm script gestartet werden. Dafür einfach den folgenden Befehl ausführen:

`npm run server:start`

Anschließend kann die Anwendung, in einem neuen Terminal, mit

`nx serve`

gestartet werden.

### Aufbau

Die App besteht aus drei Komponenten. Der product-list, product-edit und product-view Komponente.
Diese Komponenten importieren die benötigten UI Elemente aus der UI Bibliothek.
Dabei bekommen die UI Komponenten ihre Daten von den App Komponenten überreicht, damit sie "dumm" bleiben und eine gute Trennung besteht.

### Store

Die App hat einen NgRx Store. Im Store sind actions und effects zu finden, die die App Steuern. Über Actions werden zB die Datenabfragen geregelt.
Ich habe auch loading, loaded und success status eingeführt. Auf diese könnten man zB reagieren und einen busy-indicator anzeigen.

### Fehlerhandling

Über das Fehlerhandling habe ich mir Gedanken gemacht und bewusst wegelassen.
Ich hätte es so umgesetzt das, neben den Success Actions auch Fail Actions vorhanden sind.
In den product-list.effects ist es soweit implementiert das die catchError Blöcke vorhanden sind. Hier könnte man den Fehler loggen und dem Benutzer informationen dazu anzeigen.
Zum Beispiel könnte man einen Error Dialog oder eine Snackbar anzeigen.

### Unit Tests

Das Projekt hat keine 100% Testabdeckung aber es sind viele Teile getestet und man kann sehen wie getestet wird.

### Aufwand

Ich habe die Zeit nicht genau getrackt aber ich schätze es waren 7-8 Stunden. Wobei ich ein bisschen Zeit für den json-server gebraucht habe, da ich das zum ersten mal benutzt habe.
