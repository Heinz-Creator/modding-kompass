# STATUS-Übergabe

Verwenden Sie dies, wenn ein Chat stecken bleibt, verwirrt ist oder sehr lang ist. Bitten Sie den Agenten, es auszufüllen, es unter `STATUS.md` zu speichern, dann einen **neuen Chat** zu öffnen und ihm die Datei zu geben.

Dies ist der Trick mit dem höchsten Wert im gesamten Workflow. Das funktioniert, weil lange Chats ihren gesamten Verlauf bei jeder Runde mit sich führen, was Ihr Nutzungslimit sprengt und dem Modell einen Haufen Kontext übergibt, der jede falsche Runde enthält, die Sie eingeschlagen haben. Ein neuer Chat und diese Datei geben nur das Wesentliche wieder.

## Aufforderung, den Agenten zu veranlassen, es zu schreiben
```
Schreiben Sie einen detaillierten STATUS.md für dieses Projekt. Fügen Sie die folgenden Elemente hinzu. Seien Sie konkret,
und seien Sie ehrlich in Bezug auf das, was wir überprüft haben, im Vergleich zu dem, was wir nur vermuten.
```

## Vorlage
```markdown
# STATUS

## Ziel
[Was das Projekt erreichen will, in ein oder zwei Sätzen]

## Einrichtung
- Spiele und genaue Versionen: [...]
- Agent / Model: [...]
- Sonstige Werkzeuge und Lader: [...]
- Wo Dinge sind: [Pfade]

## Was funktioniert (getestet)
- [...]

## Was noch nicht funktioniert
- [...]

## Welches Spiel besitzt der Spieler?
[Welche Seite ist für die Spielerposition maßgebend, wenn es sich um einen Passthrough-Mod handelt?
Für eine Umschreibung schreiben Sie „nicht anwendbar“.]

## Das aktuelle Problem
[Was genau läuft schief: was wir getan haben, was wir erwartet haben, was passiert ist]

## Beweise
[Relevante Protokollzeilen, Fehler, Zahlen]

## Was wir bereits ausprobiert haben
- [Ansatz 1]: [Ergebnis]
- [Ansatz 2]: [Ergebnis]

## Ideen noch nicht ausprobiert
- [...]

## Dateien, die wichtig sind
- [Datei]: [Warum]
```

## Aufforderung zum neuen Chat
```
Lesen Sie STATUS.md und AGENTS.md des Projekts. Ändern Sie noch keinen Code. Erklären Sie das
Teilen Sie mir das Problem in Ihren eigenen Worten mit und schlagen Sie dann verschiedene Möglichkeiten vor
Beheben Sie das Problem und beginnen Sie mit denen, die wir noch nicht ausprobiert haben.
```

## Warum es funktioniert

Drei Gründe:

1. **Ihre Nutzungsbeschränkung.** Bei langen Chats wird das gesamte Transkript immer wieder neu gelesen. Ein neuer Chat mit einer 2-KB-Datei ist viel günstiger als eine 400-minütige Diskussion.
2. **Keine versunkenen Kosten.** Der alte Chat hat sich bereits auf einen Ansatz festgelegt und wird ihn weiterhin verteidigen. Mit einem frischen Chat ist kein Ego verbunden.
3. **Der Agent kann planen.** Bei einer klaren Beschreibung des Problems kann ein anderer Ansatz angeboten werden. In einem langen Chat neigt man dazu, immer wieder an der fehlerhaften Sache zu feilen.

Dies hilft am meisten bei den weniger leistungsfähigen Modellen, aber jeder nutzt es.

## Andere Zeiten, um eines zu schreiben

- Bevor Sie über Nacht anhalten, damit Sie morgen weitermachen können, ohne den Chat noch einmal lesen zu müssen
- Vor einem Modell- oder Werkzeugwechsel
- Bevor Sie in einem Forum oder Discord-Thread um Hilfe bitten; Die STATUS-Datei *ist* der Fehlerbericht
- Wenn der Agent eindeutig den Überblick verloren hat

## Die Chatgröße wird generell niedrig gehalten

- Starten Sie einen neuen Chat, wenn Sie das Thema wechseln, nicht nur, wenn Sie nicht weiterkommen.
- Bitten Sie den Agenten, `MODLOG.md` zu aktualisieren, sobald es funktioniert. Das Protokoll ist Ihr Langzeitgedächtnis, der Chat muss es also nicht sein.
- Behalten Sie die Regeln in `AGENTS.md` bei, anstatt sie bei jeder Sitzung erneut einzugeben.

Siehe [`MODLOG-template.md`](MODLOG-template.md) für das laufende Protokoll, [`AGENTS-starter.md`](AGENTS-starter.md) für die Regeldatei, [`BRIDGE-CONTRACT.md`](BRIDGE-CONTRACT.md) für wem was gehört und [`PLAYTEST-report.md`](PLAYTEST-report.md) für die Aufzeichnung dessen, was Sie getestet haben.