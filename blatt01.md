# Übungsblatt 01

Um diese Übungen umzusetzen braucht ihr das neu aufgesetze [Backend](https://github.com/angular-academy/jedi-chat-backend). Dieses ist in Java Spring Boot umgesetzt, wie ihr es ans Laufen bekommt und __was es aktuell kann__ steht dort beschrieben. Eine Basis auf der ihr die Bearbeitung des Übungsblattes solltet findet ihr [hier](https://github.com/angular-academy/jedi-chat/tree/%C3%BCbungsblatt01/base) (Jedi-Chat Repo, Branch übungsblatt01/base).

__Wichtig:__ Ihr solltet das Frontend über das von uns definierte Script in der `package.json` starten, also `npm start`. Dabei wird dann ein Proxy verwendet, da der Client von einem anderen Server als dem Backend ausgeliefert wird und deshalb bei Rest-Calls Probleme aufkämen, wenn wir sie direkt aufs Backend absetzen würden. Wen interessiert warum: [CORS](https://developer.mozilla.org/de/docs/Web/HTTP/CORS) 

Ihr werdet folgendes Wissen aus den letzten Sessions brauchen:
- Routing
- Rest-Calls (GET/ PUT)
- Data-Bindings

Zusätzlich solltet ihr euch mit [Formularen](https://angular.io/guide/forms) vertraut machen. Wir haben aber auch in der Basis auf der ihr aufsetzen könnt Hilfestellung gegeben. Dort ist das Grundgerüst des Formulars schon gegeben, ihr müsst es nur ergänzen und die Verarbeitung (Submit/ Reset/ evtl. Validierung) selbst gestalten und bei Bedarf weitere Komponenten und weiteres Routing anlegen.

## Ausgangslage

Nach dem Checkout des Branches für diese Aufgabe bietet unser Chat 2 Routen. Zum einen der bereits bekannte Chat, zum anderen jetzt auch eine Route `/profile`.
Dort findet ihr auch ein angefangenes Formular zum Anlegen eines Nutzers. Dieses gilt es zu ergänzen. Außerdem sollt ihr eine weitere Route hinzufügen, unter welcher man sich einen bestehenden Nutzer ansehen kann.
Grundsätzlich gibt es nicht die eine richtige Lösung, deshalb machen wir zur Umsetzung keinerlei Vorgaben.

In user.model.ts seht ihr die Typdefinitionen mit dem das Backend klarkommt. Beim Erstellen eines Nutzers erwartet das Backend ein `CreateUser` mit Passwörtern. Diese kommen aber nicht mehr zurück, weshalb es immer mit einem `User` antwortet wenn man einen Nutzer abruft.

```typescript
export type Species = 'HUMAN' | 'ZABRAK' | 'MIRIALAN' | 'TWILEK' | 'KALEESH';
export type Fraction = 'GALACTIC_EMPIRE' | 'REBEL_ALLIANCE' | 'GALACTIC_REPUBLIC' | 'CONFEDERACY_OF_INDEPENDENT_SYSTEMS';
export type Gender = 'MALE' | 'FEMALE';

export interface User {
  nickName: string;
  avatar: string; //base64 
  bio: string;
  gender: Gender;
  species: Species;
  fraction: Fraction;
}

export interface CreateUser extends User {
  password: string;
  matchingPassword: string;
}

```

## Formular ergänzen
Das oben erwähnte angefangene Formular hat schon beispielhaft einige Felder vorimplementiert an denen ihr euch orientieren könnt.

Die fehlenden Felder sind: 

### password und matchingPassword
Ihr könnt euch sicher denken was hier erwartet wird, nämlich das Passwort des Nutzers sowie eine erneute Eingabe desselbigen.

### Bio
Hier soll der sich registrierende Nutzer kurz beschreiben.

### Species
Hier soll der Nutzer auswählen können, welcher Spezies er angehört. Wir haben uns bei Geschlecht und Spezies an [Star Wars Avatar](https://starwarsavatar.com/) orientiert. (und General Grievous)
Deshalb sind hier folgende Werte erlaubt (rein technisch):
```typescript
export type Species = 'HUMAN' | 'ZABRAK' | 'MIRIALAN' | 'TWILEK' | 'KALEESH';
```

### Fraction
Hier soll der Nutzer seine Fraktion auswählen können. Dabei handelt es sich um die 4 Hauptfraktionen aus den ersten 6 Episoden.
```typescript
export type Fraction = 'GALACTIC_EMPIRE' | 'REBEL_ALLIANCE' | 'GALACTIC_REPUBLIC' | 'CONFEDERACY_OF_INDEPENDENT_SYSTEMS';
```

## Bild aus Base64 anzeigen
Aktuell wird ein hochgeladenes Bild in Base64 ans Backend und vom Backend geschickt. Den Code könnt ihr euch angucken, müsst ihr aber nicht selbst schreiben. Wie man es anzeigt könnt ihr dem Beispiel das erscheint wenn ihr ein Bild auswählt entnehmen:
```typescript
  <img alt="Avatar" [src]="'data:image/png;base64,' + user.avatar" />
```

## Aufgaben 

### Aufgabe 1
Zunächst solltet ihr Nutzer anlegen können. Ergänzt das Formular zum Registrieren soweit, dass ihr die Informationen ausfüllen könnt (eine minimale Besetzung ist Nutzername und die Passwörter) und an den entsprechenden Controller im Backend schicken könnt (Methode PUT an `/register`). Dieser sollte wenn es keine Probleme gab mit dem Statuscode 201 antworten. Damit ist der Nutzer angelegt. Denkt hier auch an mögliche Fehler, das Backend wird zum Beispiel ablehnen wenn der Nickname existiert oder die Passwörter nicht gleich sind.

### Aufgabe 2
Überlegt euch eine sinnvolle weitere Route, unter der man Nutzerprofile abrufen kann. Dort sollen dann zu dem entsprechenden Nutzer die Informationen angezeigt werden. Diese könnt ihr unter `api/user/<nickname>` abrufen.

### Aufgabe 3
Ihr werdet merken, dass die Anzeige der Daten nicht allzu hübsch aussieht. Damit ist zum einen das Styling gemeint, aber auch die Tatsache, dass z.B. in Species Werte wie `HUMAN` oder in Fraction `GALACTIC_EMPIRE` stehen. Überlegt euch, wie ihr diese Anzeige optimieren könnt, sodass stattdessen `Human`oder `Galactic Empire` zu sehen ist.

 
