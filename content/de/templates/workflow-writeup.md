# Workflow-Aufzeichnungsvorlage

Verwenden Sie dies, wenn Sie ein fertiges Projekt teilen. Daran mangelt es dieser Community: Fast niemand dokumentiert, *wie* sie dorthin gelangt sind.

Eine Funktionsliste beweist, dass das Ding funktioniert. Eine Workflow-Beschreibung ermöglicht es auch jemand anderem, dies zu tun. Schreiben Sie eines, auch wenn Ihr Projekt klein und unvollkommen ist. Eine grobe, ehrliche Seite ist besser als eine ausgefeilte Marketingseite.

Kopieren Sie es als `WORKFLOW.md` in Ihr Repo oder veröffentlichen Sie es als Thread unter #share-your-projects.

---

## Warum das existiert

Die häufigste Beschwerde über KI-unterstützte Projekte ist, dass die Leute sagen: „Sag der KI einfach, dass sie es tun soll“ und damit aufhören. Das ist der größte Teil der Methode, und der nützliche Teil ist alles drumherum:

- welche Spiele Sie ausgewählt haben und warum
- was Sie *vor* dem Start überprüft haben
- welche Sackgassen Sie am meisten Zeit kosten
- was hat funktioniert

Nichts davon passt in eine README-Datei.

## Vorlage
````markdown
# Wie ich [Projektname] gemacht habe

## TL;DR

[3-6 Kugeln. Was es ist, welcher Stapel, wie lange es ungefähr gedauert hat und welcher
was du jemandem erzählen würdest, der damit anfängt.]

## Das Ergebnis

- **Spiele:** [Spiel A] v[Version] + [Spiel B] v[Version]
- **Stack:** [SKSE C++ Plugin / Fabric Java Mod / Rust + Bevy]
- **Erstellt mit:** [Agent und Modell]
- **Zeit:** [ungefähr Stunden]
- **Kosten:** [Planstufe, ungefähr]
- **Betriebssystem:** [Windows, weil es das war, was es brauchte]

[Screenshot oder GIF]

## Was funktioniert

- [Funktion]
- [Funktion]

## Was nicht funktioniert

- [Ehrliche Liste. Dieser Abschnitt ist der wertvollste Teil des Dokuments.]

## Bevor Sie beginnen: Was Sie überprüfen sollten

Die Recherche, die ich durchgeführt habe, hat mir Zeit gespart. Seien Sie konkret genug, um darauf reagieren zu können.

1. **Verfügt Spiel A über einen Mod-Loader?** [Welches, welche Version, woher.]
   Ohne dies gibt es keinen einfachen Weg; Sie wären Reverse Engineering.
2. **Bestehende Projekte, die ich zuerst lese:** [Links + eine Zeile darüber, was Sie jeweils gelernt haben]
3. **Vorhandene Mods für Spiel A:** [Links]
4. **Dateiformate/Dokumente, die ich gefunden habe:** [Links]
5. **Versionsfallen:** [was ich herunterstufen oder genau anpassen musste]

## Der Plan

[Was Sie zuerst, zweitens, drittens gebaut haben und warum diese Reihenfolge. Zeigen Sie die Meilensteine an
Du hast darauf abgezielt. Das ist der Teil, den die Leute kopieren können.]

1. [Meilenstein 1: z.B. „Plugin lädt und schreibt eine Protokollzeile“]
2. [Meilenstein 2: z.B. „Position kreuzt von B nach A“]
3. [Meilenstein 3: z.B. „Bs Objekte erscheinen in der Welt von A“]
4. ...

## Welches Spiel besitzt der Spieler?

[Sagen Sie, welche Seite für die Spielerposition und die Physik maßgeblich ist und warum. Dies
ist die Entscheidung, die jeder falsch macht, und sie später rückgängig zu machen bedeutet, sie neu zu schreiben
beide Hälften. SkyCraft hat jedoch Minecraft für den Player maßgeblich gemacht
Skycraft ist das Spiel, das Sie sich ansehen.]

## Verkehr und Architektur

[Wie die beiden Hälften reden. Shared Memory, Socket, Datei, IPC? Welche Nachrichten gehen
quer und mit welcher Geschwindigkeit? Halten Sie dies konkret; Es ist der Teil, den die Leute kopieren. Wenn die
Das Gameplay-Spiel wird immer noch außerhalb des Bildschirms gerendert. Sagen Sie es hier, anstatt zu behaupten, dass es läuft
kopflos.]

## Was ich ungefähr gesagt habe

[Die tatsächlichen Prompts, die Sie verwendet haben, wobei die erfolgreichen intakt sind und auch die schlechten.
Reinigen Sie diese nicht. Zeigen Sie, dass die erste Eingabeaufforderung nicht funktioniert hat.]

**Dieses hat funktioniert:**
```[prompt]```
**Das war eine Verschwendung:**
```[prompt]```
Warum es eine Verschwendung war: [Erklärung]

## Sackgassen

Der wertvollste Abschnitt. Was nicht funktioniert hat und was es gekostet hat.

- **[Ansatz]:** [warum es fehlgeschlagen ist]. Kosten: [Zeit / Token / ein kaputter Build]
- **[Ansatz]:** [warum es fehlgeschlagen ist]

## Probleme, auf die ich gestoßen bin, und was sie behoben hat

| Symptom | Ursache | Fix |
|---------|-------|-----|
| [Fehler oder Verhalten] | [Grundursache] | [was du geändert hast] |

## Was ich anders machen würde

[Ehrlicher Rückblick. Das macht das Dokument vertrauenswürdig und was
jemand anderes wird es dir danken.]

## Credits

- [Projekt]: [was Sie wiederverwendet haben, Lizenz]
- [Person]: [Hilfe, die du bekommen hast]
- [Modding-Community für Spiel A]: [Loader / docs]

## Legal

Inoffizielles Fanprojekt, das nicht mit dem Herausgeber verbunden ist oder von diesem unterstützt wird.
Keine Spielressourcen enthalten; Spieler liefern ihre eigenen Kopien. Gebaut mit KI
Kodiermittel.
````

## Gute Beispiele für Abschnitte, die Menschen tatsächlich nützlich finden

**Der Sackgassenabschnitt.** Spezifisch, kostspielig und nirgendwo anders zu bekommen. „Zuerst einen dateibasierten Transport versucht, zwei Stunden mit Windows-Dateisperre verbracht, dann auf Shared Memory umgestiegen“ spart die nächste Person zwei Stunden.

**Echte Prompts, unbearbeitet.** Besonders die Fehler. Es zeigt, dass die Methode iterativ ist, was die ehrliche Wahrheit und auch die Sicherheit ist, die ein Anfänger braucht.

**Das „Was würde ich anders machen?“ signalisiert Erfahrung und verwandelt eine Flexion in eine Lektion.

**Versionsfallen.** Ultraspezifisch und universell einsetzbar. Welche Version Sie benötigten und welcher Downloader Sie dorthin gebracht hat.

## Was nicht enthalten sein sollte

- Spielinhalte, Screenshots von urheberrechtlich geschützten Inhalten, die nicht ordnungsgemäß verwendet werden, oder dekompilierter Code
- Lange Transkripte der gesamten Sitzung. Auszüge.
- Werbung. Posten Sie es dort und es wird entfernt.
- Alles aus einem Spiel, das du nicht modifizieren darfst. Siehe [Leitfaden 6](../guides/06-rules-legal-and-publishing.md).
- ISOs oder Dumps, die Sie nicht selbst erstellt haben, auch wenn Sie das Spiel auf CD besitzen

## Ein Hinweis zu unvollendeten Arbeiten

#share-your-projects nimmt sowohl laufende als auch abgeschlossene Beiträge entgegen. Ein halb funktionierendes Projekt mit einem ehrlichen Abschnitt „Was nicht funktioniert“ ist nützlicher als nichts, und so finden Menschen Mitarbeiter. Sagen Sie, was Sie haben und was kaputt ist.

Posten Sie nur, wenn Sie es geschafft haben. Keine Assets, kein durchgesickertes Material und ein Repo-Link statt eines direkten Downloads.