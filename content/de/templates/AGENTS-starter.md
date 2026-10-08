# AGENTS.md: Projektregeln für Ihren KI-Agenten

Kopieren Sie dies als `AGENTS.md` in das Stammverzeichnis Ihres Projekts und füllen Sie die Teile in Klammern aus. Der Agent liest dies in jeder Sitzung, sodass alles, was Sie hier eingeben, zu einer Regel wird, der er folgt, ohne dass er daran erinnert wird.

IW4L behält einen. Das solltest du auch. Dies ist die günstigste Möglichkeit, ein langfristiges Projekt auf Kurs zu halten.

---

## Die zu kopierende Vorlage

Kopieren Sie den folgenden Block als `AGENTS.md` in Ihr Projektstammverzeichnis, füllen Sie die Teile in Klammern aus und löschen Sie alles, was Sie nicht benötigen.
```markdown
# AGENTS.md

## Projekt
[Ein Satz: Was dieses Projekt macht.]

## Harte Regeln, brechen Sie diese niemals

1. **Schreiben Sie niemals Spielressourcen, dekompilierten Code oder extrahierte Spieldateien hinein
   Repository.** Sie bleiben auf diesem Computer und werden nicht verfolgt. Wenn Sie das Spiel lesen müssen
   Daten, lesen Sie sie zur Laufzeit aus dem Installationspfad oder extrahieren Sie sie in ein Gitignored
   Ordner.
2. **`.gitignore` ist eine Whitelist.** Sie ignoriert alles und schließt nur ein
   Quelldateien. Wechseln Sie nicht zu einer normalen Ignorierliste.
3. **Führen Sie `git commit` nicht aus, es sei denn, ich frage Sie.** Führen Sie nichts weiter aus, als das
   aktuelle Aufgabe erfordert.
4. **Berühren Sie nichts außerhalb dieses Projektordners**, es sei denn, ich nenne es ausdrücklich
   der Weg. Dazu gehören auch meine Spielinstallationen: Lesen Sie sie, schreiben Sie ihnen niemals.
5. **Nur Einzelspieler und offline.** Wenn dies Online-Spiel, Anti-Cheat oder betrifft
   DRM, hör auf und sag es mir. Offline-Spiel mit ausgeschaltetem Anti-Cheat durch
   Die spieleigene Option ist in Ordnung. Anti-Cheat zu umgehen ist niemals in Ordnung.
6. **Legen Sie niemals Anmeldeinformationen in das Repo oder in eine Datei, die Sie lesen können:** Keine API-Schlüssel,
   Keine Token, keine Passwörter.

## Wie man arbeitet

- **Planen Sie vor dem Code.** Für alles, was über eine kleine Korrektur hinausgeht, schreiben Sie den Plan an
  Zuerst `docs/DESIGN.md`, dann Schritt für Schritt implementieren.
- **Eine Sache nach der anderen.** Bündeln Sie keine unabhängigen Änderungen. Ich möchte es können
  einen einzelnen Schritt zurücksetzen.
- **Loggen Sie sich ein, schauen Sie nicht hin.** Sie können das Spiel nicht sehen. Instrument stattdessen: schreiben
  Positionen, Zählungen, Zeitpunkte und Zustandsübergänge in einer Protokolldatei, damit Sie dies tun können
  Überprüfen Sie anhand der Zahlen. Versuchen Sie nicht, das Spiel visuell zu prüfen.
- **Sagen Sie mir, wie ich es testen soll.** Sagen Sie nach jeder Änderung den genauen Befehl, der ausgeführt werden soll, und
  was ich sehen sollte. „Fertig“ ohne Testverfahren ist nicht erledigt.
- **Fragen Sie vor großen Refaktorierungen.** Wenn Sie denken, dass die Architektur falsch ist, sagen Sie es
  und erkläre es, dann warte auf mich.
- **Erklären Sie es im Klartext.** Ich bin hier nicht der Programmierer. Wenn Sie einen Begriff verwenden,
  Erkläre es gleich beim ersten Mal.

## Ehrlichkeit

- Wenn etwas nicht getestet ist, schreiben Sie **"nicht getestet"**. Bedeuten Sie niemals, dass Sie sich verifiziert haben
  etwas, was du nicht getan hast.
- Wenn Sie sich nicht sicher sind, sagen Sie, dass Sie sich nicht sicher sind. Eine selbstbewusste falsche Antwort kostet mich
  Stunden.
- Wenn Sie auf etwas stoßen, das Sie nach zwei echten Versuchen nicht lösen können, halten Sie inne und schreiben Sie
  up `STATUS.md` (siehe `STATUS-handoff.md`), anstatt Variationen nach dem Zufallsprinzip auszuprobieren.
- Misserfolge neben Erfolgen aufzeichnen. Eine Sackgasse, die ich sehe, ist mehr wert als eine
  Sackgasse, ich muss zusehen, wie du es wiederholst.

## Halten Sie diese Dateien auf dem neuesten Stand

- `MODLOG.md`: Nach jeder Änderung einen Eintrag hinzufügen. Vorlage in
  `MODLOG-template.md`.
- `docs/DESIGN.md`: wie das Projekt funktioniert, im Klartext. Aktualisieren Sie, wenn die
  Architekturänderungen, nicht bei jedem Commit.
- `README.md`: die Liste „Was funktioniert/Was nicht funktioniert“. Testen Sie, bevor Sie einen Anspruch geltend machen
  etwas funktioniert.

## Umfeld

- Betriebssystem: [Windows 11 ist die sichere Antwort; Die meisten Loader sind nur für Windows verfügbar]
- Spiel A: [Name] [genaue Version], installiert unter [Pfad]
- Spiel B: [Name] [genaue Version], installiert unter [Pfad]
- Loader: [SKSE / F4SE / Fabric / ...] [Version]
- Welches Spiel ist für den Spieler maßgeblich: [A oder B]
- Sprache und Version: [z.B. Rust stabil mit MSVC, C++ mit MSVC]
- Agent: [Claude Code / Codex / OpenCode]
```

Ersetzen Sie oben `templates/STATUS-handoff.md` und `templates/MODLOG-template.md` durch die Pfade, in denen Sie diese Dateien tatsächlich speichern. Die Vorlage geht davon aus, dass Sie sie in Ihr Projekt kopiert haben.

---

## Warum jede Regel da ist

| Regel | Grund |
|------|--------|
| Keine Spieledateien im Repo | Es ist die einzige Regel, die eine Deaktivierungsbenachrichtigung erhält. OWCraft stellt es direkt fest: Keine Spieledateien, dekompilierter Code oder Minecraft-Assets im Repository, Texturen aus Ihrer eigenen Installation zur Laufzeit. |
| Whitelist `.gitignore` | Eine normale Ignorierliste muss jedes Mal aktualisiert werden, wenn Sie einen neuen Dateityp finden. Eine Whitelist kann nicht versehentlich extrahierte Daten übernehmen. Gang-Beasts-Rust macht das. |
| Legen Sie keine Verpflichtungen fest, es sei denn, Sie werden dazu aufgefordert | Sie möchten den Unterschied überprüfen, bevor er Geschichte wird. |
| Bleiben Sie im Projektordner | Agenten mit umfassendem Zugriff schreiben gerne eine Konfigurationsdatei um, die Ihnen wichtig ist. |
| Nur Einzelspieler und offline | Online-Spielen bedeutet gesperrte Konten. Die Zeile lautet online versus offline, nicht „hat Anti-Cheat installiert“: Ein Spiel mit Anti-Cheat kann immer noch offline mit seiner eigenen offiziellen Option modifiziert werden. |
| Keine Anmeldeinformationen | Agenten lesen alles im Arbeitsverzeichnis. |
| Zuerst planen | Lange Sitzungen gehen schief, wenn das Model auf halbem Weg seine Meinung ändert. |
| Log, schau nicht hin | Der Agent kann das Spiel nicht sehen. Zahlen sind der einzige Feedbackkanal, den es hat. |
| Schreiben Sie „nicht getestet“ | Eine unbestätigte Behauptung in einer README-Datei verschwendet den Nachmittag eines anderen. |
| Stopp nach zwei Versuchen | Looping verbrennt Ihre Nutzungsobergrenze und erzeugt zufällige Variationen statt eines anderen Ansatzes. |

## Anpassen

Fügen Sie Ihre eigenen Regeln hinzu. Nützliche:

- „Refaktorieren Sie niemals Dateien, die ich in dieser Sitzung bearbeitet habe.“
- „Halten Sie die öffentlichen Funktionssignaturen immer stabil.“
- „Jede neue Datei benötigt oben einen Kommentar, der angibt, wofür sie gedacht ist.“
- „Fügen Sie keine Abhängigkeiten hinzu, ohne mir den Grund dafür zu sagen.“
– „Führen Sie den Build aus, bevor Sie mir sagen, dass er fertig ist.“
- „Bevorzugen Sie das Einfachste, was funktioniert. Erstellen Sie noch keine Abstraktionen.“

Führen Sie dann `git commit -am "Add project rules"` aus, damit es vom ersten Tag an Teil des Projekts ist.