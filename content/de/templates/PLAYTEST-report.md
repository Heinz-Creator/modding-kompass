# Spieltestbericht

Verwenden Sie eines davon jedes Mal, wenn Sie einen Build spielen, um ihn zu überprüfen. Es ist der Beweis hinter jedem „Werk“ in Ihrer README-Datei. Behalten Sie sie in `playtests/` oder fügen Sie sie in `MODLOG.md` ein.

Der Agent kann das Spiel nicht für Sie ansehen ([Anleitung 5](../guides/05-testing-and-troubleshooting.md)). Ein kurzer Bericht ermöglicht es anderen, Ihre „Werke“ zu überprüfen, anstatt sie auf Vertrauen zu verlassen.

## Vorlage
```markdown
# Playtest [Datum] [Build oder Commit]

## Einrichtung
- Build/Commit: [Hash]
- Host: [Spiel + genaue Version], Loader [Version]
- Gast: [Spiel + genaue Version], Loader [Version]
- Betriebssystem, GPU, Übersetzungsschicht: [...]
- Wichtige Einstellungen: [Auflösung, MSAA, Frame-Cap, Vollbild/Fenster]
- Verwendeter Speicher: [Neues Spiel / benannter Speicher / Testwelt]

## Was ich getestet habe
| # | Szenario | Erwartet | Was ist passiert | Bestanden / nicht bestanden / nicht getestet |
|---|----------|----------|---------------|-----------|
| 1 | | | | |

## Messungen
- Framerate Host/Gast: [Zahlen und wie gemessen]
- Alles Gezeitete: [was gemessen wurde, Start- und Endpunkte]

## Protokolle und Erfassungen
- [Dateinamen oder eingefügte Zeilen; Screenshots nur, wenn sie keine Namen anderer Personen oder private Chats zeigen]

## Diesmal nicht getestet
- [Seien Sie genau: Multiplayer, andere GPUs, andere Spielversionen, Laden von Spielständen ...]

## Urteil
[Ein oder zwei Sätze. „Funktioniert auf meinem Rechner in den Szenarien 1 bis 4“ ist ein gutes Urteil.]
```

## Was gilt als geprüft

| Formulierung | Mittel |
|---------|-------|
| Im Spiel getestet | Du hast genau diesen Build gespielt und gesehen, dass er funktioniert |
| Getestet mit einem gefälschten Host oder Gast | Es wurde nur der Transport oder eine Seite ausgeübt |
| Gebaut | Es kompiliert. Nichts weiter |
| Erstellerberichte | Jemand anderes sagt, dass es funktioniert; du hast nicht überprüft |
| Nicht getestet | Sag es. Es sind nützliche Informationen |

Ein grüner Testlauf ist kein Spieltest. Der Speichertest eines Projekts wurde bestanden, obwohl die Spieldaten, die es laden sollte, nicht vorhanden waren. Der Netzwerktest eines anderen Projekts überprüft nur, ob eine Antwort ein Wort enthält.

## Abschlussprüfung

Ein Spieltestbericht ist vollständig, wenn jemand anderes ihn wiederholen könnte: Der Build, die Versionen, die Einstellungen, das Speichern und die Schritte sind alle vorhanden, und jedes Szenario sagt „bestanden“, „fehlgeschlagen“ oder „nicht getestet“ aus.

## Datenschutz

Beschneiden oder überspringen Sie Screenshots, die die Benutzernamen, DMs oder privaten Server anderer Personen zeigen. Fügen Sie keine Kontonamen oder den Pfad Ihres Home-Ordners in öffentliche Protokolle ein.