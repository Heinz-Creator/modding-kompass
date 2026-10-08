# Namensnennung und Abstammung

Die meisten Projekte hier bauen auf denen anderer auf: [FalloutCraft](https://github.com/zeyvu/FalloutCraft), [OWCraft](https://github.com/Yaekai/OWCraft) und [LibertyCraft](https://github.com/mrborghini/libertycraft) beginnen alle mit SkyCraft, und viele Neufassungen beginnen mit früheren Reverse-Engineering-Arbeiten. Es gehört zum guten Ton, genau zu sagen, was man geerbt und was man hinzugefügt hat, und die Lizenz erfordert es oft.

Kopieren Sie dies nach `CREDITS.md` oder fügen Sie es als Abschnitt Ihrer README-Datei hinzu.

## Vorlage
```markdown
# Credits und Abstammung

## Aufgebaut
| Projekt | Autor(en) | Lizenz | Upstream-Commit oder Version, mit der wir begonnen haben | Was wir verwenden |
|---------|-----------|---------|---------------|------------|
| [SkyCraft](https://github.com/chasmlol/SkyCraft) | chasmlol | [überprüfen] | [Hash festschreiben oder freigeben] | [z.B. Fabric mod, Protokollheader] |

## Was ist neu in diesem Projekt?
- [Der Host-Adapter, die Renderer-Integration, die Combat Bridge...]

## Was wir am geerbten Code geändert haben
- [Datei oder Bereich]: [was und warum]

## Geerbter Text, den wir noch nicht überprüft haben
- [z.B. „docs/DESIGN.md beschreibt stellenweise immer noch das Upstream-Spiel“]

## Tools und KI
- Agent und Model: [z.B. Claude Code, Opus x.y], verwendet für [welche Teile]
- Andere Tools: [Ghidra, ReShade, ...]
- Menschliche Arbeit: [was Sie selbst getan haben]

## Spielinhalt
Es sind keine Spieldateien enthalten. Spieler verwenden ihre eigenen Kopien von [Spielen].
```

## Abschlussprüfung

- Jedes Upstream-Projekt ist mit seiner Lizenz und dem genauen Commit oder Release, mit dem Sie begonnen haben, verknüpft.
- Neue Arbeiten und übernommene Arbeiten werden separat aufgeführt.
- Der KI-Einsatz wird nur für dieses Projekt beschrieben. Behaupten Sie nicht, dass Upstream-Arbeiten von KI oder von Menschen gemacht wurden, es sei denn, der eigene Autor sagt dies.

## Häufige Fehler

- **Kein Start-Commit.** Der Verlauf von LibertyCraft besagt, dass es SkyCraft geforkt hat, aber sein erster Commit hat kein übergeordnetes Element, sodass die genaue Upstream-Version, mit der es gestartet wurde, nicht wiederhergestellt werden kann. Schreiben Sie es am ersten Tag auf.
- **Geerbte Dokumente werden so belassen, als wären sie Ihre eigenen.** Ein gespaltenes Designdokument kann immer noch das Originalspiel beschreiben. Markieren Sie es oder aktualisieren Sie es.
- **Einen neuen Dateinamen als neuen Code behandeln.** Durch das Verschieben von Upstream-Helfern in eine neue Datei werden sie nicht zu Ihren eigenen.
- **Der Lizenzhinweis einer anderen Person wird entfernt, weil darin ein anderes Spiel erwähnt wird.** Behalten Sie ihn.
- **Ausleihen der Credits einer anderen Person.** Der Verlauf eines Forks enthält die Commits des Upstreams. Die Geschichte von FalloutCraft umfasst SkyCraft Commits, die gemeinsam mit einem KI-Modell erstellt wurden; Diese beschreiben die Arbeit von SkyCraft, nicht die späteren Fallout-spezifischen Änderungen. Credit-Tools nur für Ihre eigenen Commits.
- **Eine Lizenz für alles.** Ihr Code, geerbter Code, generierte Tabellen, heruntergeladene Tools und die Spieldateien des Spielers können jeweils unterschiedliche Bedingungen haben. In den Hinweisen von [BullySkate](https://github.com/Faiqie/BullySkate) werden beispielsweise das Skate-Rewrite, das Loader-SDK und ein Audio-Port separat aufgeführt.

## Datenschutz

Benennen Sie Personen mit dem Namen, unter dem sie veröffentlichen. Fügen Sie keine echten Namen, Discord-Handles von privaten Servern oder Screenshots privater Chats hinzu, es sei denn, die Person hat zugestimmt.