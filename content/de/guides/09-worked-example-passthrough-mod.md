# 9. Arbeitsbeispiel: Ein Passthrough-Mod, Anfang bis Ende

Dies führt Sie durch den Aufbau eines Passthrough-Mods aus dem Nichts in einer festen Reihenfolge. Die Namen lauten **Spiel A** (der Host, der die Welt zeichnet) und **Spiel B** (das Gameplay-Spiel, das die Mechanik bereitstellt). Tauschen Sie Ihr eigenes ein.

Die Architekturhinweise stammen aus DESIGN.md von [SkyCraft](https://github.com/chasmlol/SkyCraft/blob/main/docs/DESIGN.md), sodass Sie sie mit der Quelle vergleichen können. SkyCraft ist Skyrim plus Minecraft, das unten auf Spiel A und Spiel B abgebildet ist.

**Diese Beispiele zielen auf Windows ab.** Die wichtigsten Referenzprojekte für Passthrough-Mods tun dies, da es sich bei den Loadern um Windows-Tools handelt. Einige Ersteller melden Linux- und macOS-Setups über Wine, Proton oder CrossOver. Siehe [Leitfaden 8](08-mod-loaders-and-script-extenders.md#windows-is-the-common-denominator).

## Schritt 0: Wählen Sie ein Paar aus, das funktionieren kann

Die meisten Projekte scheitern hier und nicht im Code.

Spiel A (Gastgeber) benötigt:
- ein Loader oder Script-Extender; siehe Referenz in [Leitfaden 8](08-mod-loaders-and-script-extenders.md)
- um Einzelspieler oder offline zu spielen
- eine Welt, durch die sich der Spieler in der ersten oder dritten Person bewegt

Spiel B (Gameplay) benötigt:
- eine Mod-API oder ein SDK oder ein Headless-Servermodus
- Gameplay, das unsichtbar abläuft: Physik, Inventar, Kampf
- idealerweise eine Möglichkeit zu laufen, ohne ein Fenster zu zeigen

### Die Paare, die gut zusammenpassen

| Spiel A (Gastgeber) | Spiel B | Warum es funktioniert |
|---------------|--------|--------------|
| Skyrim (SKSE) | Minecraft (Fabric) | Das ist SkyCraft. Beide verfügen über eine hervorragende Modding-Unterstützung und Minecraft verfügt über einen integrierten Server. |
| Fallout 4 (F4SE) | Minecraft (Fabric) | FalloutCraft hat dies als Portierung von SkyCraft durchgeführt. Der Fabric-Mod stammte von SkyCraft mit FalloutCraft-Änderungen, daher wurden einige Funktionen nie portiert. |
| Outer Wilds (OWML) | Minecraft (Fabric) | OWCraft hat einen Patch hinzugefügt, damit es funktioniert. |
| GTA San Andreas (Plugin-SDK) | Skate 3 (benutzerdefinierte Engine-Ebene) | GTA San AnSkateas lädt einen Rust-Neuaufbau der Engine von Skate 3, anstatt Skate 3 selbst auszuführen. Benötigt Skate 3 für Xbox 360, extrahiert von Ihrer eigenen Disc. |

### Die Paare, die Ihre Zeit verschwenden werden

| Idee | Warum nicht |
|------|---------|
| Jedes Online- oder Multiplayer-Spiel wie Spiel B | Außerhalb des Gültigkeitsbereichs. Siehe [Leitfaden 6](06-rules-legal-and-publishing.md). |
| Ein Spiel ohne Loader und ohne Quelle | Sie würden das Ganze zunächst rückentwickeln. Das ist der „Rewrite“-Pfad, nicht Passthrough. |

## Schritt 1: Installieren und überprüfen

Installiere beide Spiele. Starten Sie jedes einzelne. Bestätigen Sie, dass sie ausgeführt werden, und bestätigen Sie, dass Sie wissen, wo sie installiert sind:
```
Game A: C:\Games\GameA
Game B:  C:\Users\you\AppData\Roaming\.minecraft
```

Installieren Sie außerdem den Loader von Game A und testen Sie ihn mit einem vorhandenen Mod. Wenn der Loader den bekanntermaßen guten Mod einer anderen Person nicht lädt, stoppen Sie zunächst und beheben Sie das Problem. Sie möchten eine langweilige, funktionierende Grundlinie, bevor Sie etwas hinzufügen.

## Schritt 2: Erstellen Sie das Projekt
```bash
mkdir my-passthrough && cd my-passthrough
git init
```

Erstellen Sie drei leere Dateien und bitten Sie den Agenten, sie auf dem neuesten Stand zu halten. Dies sind Ihre sitzungsübergreifenden Erinnerungen:

- `AGENTS.md`: Regeln, die der Agent immer befolgen muss
- `MODLOG.md`: Was hat sich geändert und wie wurde es getestet
- `docs/DESIGN.md`: wie es funktioniert, im Klartext

Kopieren Sie [`templates/AGENTS-starter.md`](../templates/AGENTS-starter.md) und
[`templates/MODLOG-template.md`](../templates/MODLOG-template.md) um loszulegen.

## Schritt 3: Die erste Eingabeaufforderung

Halten Sie es klar. Sie zeigen auf ein funktionierendes Beispiel und geben die Substitution an.
```
Ich möchte einen Passthrough-Mod wie SkyCraft (https://github.com/chasmlol/SkyCraft) erstellen.
aber für Spiel A und Spiel B.

Klonen Sie SkyCraft lokal und lesen Sie die README-Datei und docs/DESIGN.md, damit Sie es verstehen
die Architektur. Ich möchte den gleichen Ansatz wie SkyCraft.

Spiel A ist unter [Pfad] installiert. Spiel B ist unter [Pfad] installiert.

Bevor Sie etwas bauen, sagen Sie mir:
- Verfügt Spiel A über einen Mod-Loader oder Script-Extender, den wir verwenden können?
- Verfügt eines der Spiele über Online-Spiel oder Anti-Cheat? (Wir rühren diese nicht an.)

Ändern Sie noch keinen Code. Melden Sie einfach, was Sie gefunden haben.
```

Die letzte Zeile ist wichtig. Eine schreibgeschützte Aufklärungsantwort kostet zunächst eine Runde und erspart Ihnen einen sicheren Plan, der auf einer falschen Annahme basiert.

**Was Sie zurückerhalten sollten:** eine Liste dessen, was für jedes Spiel vorhanden ist, welchen Loader Sie verwenden würden und welche Blocker es gibt. Wenn es heißt „Spiel A bietet keine Modding-Unterstützung“, erhalten Sie Ihre Antwort kostenlos. Wählen Sie ein anderes Host-Spiel.

## Schritt 4: Erstellen Sie einen Plan und tragen Sie dann eine Zeile in ein Protokoll ein

Fordern Sie vor dem Code einen Plan an:
```
Schreiben Sie den Plan als docs/DESIGN.md. Behalte es bei: den beiden Hälften des Mods,
welche Daten zwischen ihnen ausgetauscht werden und in welcher Reihenfolge wir sie erstellen.
Führen Sie dann nur Schritt 1 durch.
```

Das Designdokument benötigt vier Dinge, und wenn man sie namentlich anfragt, erspart man sich einen Hin- und Rückweg:

- **Die beiden Hälften.** Welcher Prozess hostet welchen Code und in welcher Sprache?
- **Welche Daten kreuzen.** Die Nachrichtenliste. Der Katalog von SkyCraft im Abschnitt 10 von DESIGN.md ist das Modell: Spielerposition pro Frame, gestreamte Kollisionsabschnitte, NPC-Positionen bei 20 Hz und Ereignisse wie Blockwechsel und Treffer.
- **Welches Spiel ist wofür maßgeblich.** Siehe Schritt 5.
- **Die Baureihenfolge.** Jede Phase endet mit etwas Spielbarem.

Schritt 1 ist immer derselbe: **Ihr Code wird in Spiel A geladen und schreibt eine Zeile in eine Protokolldatei.**
```
Führen Sie es aus. Ich möchte eine Zeile im Protokoll sehen, die besagt, dass Ihr Plugin geladen wurde.
Machen Sie noch nichts anderes.
```

Zwei Spiele, eine Protokollzeile. Holen Sie sich das, und der Rest ist Iteration.

Sobald das funktioniert, ist der nächste Schritt ein Handschlag, nicht weitere Funktionen. Beide Seiten öffnen den gemeinsamen Speicher, einigen sich auf eine Protokollversion und protokollieren diese. Dadurch wird der Fehler behoben, den Sie sonst viel später debuggen würden: Die beiden Hälften öffnen nicht übereinstimmende Strukturen und interpretieren die Bytes der jeweils anderen als Unsinn.
```
Als nächstes öffnen beide Seiten den Shared-Memory-Block und überprüfen den Header.
Magische Nummer, Protokollversion, beide Prozess-IDs. Protokollieren Sie, was jede Seite gelesen hat.
Wenn der Header nicht übereinstimmt, halten beide Seiten inne und sagen dies, anstatt fortzufahren.
```

## Schritt 5: Senden Sie einen Wert

**Welches Spiel maßgeblich ist, ist wichtig, und die offensichtliche Antwort ist normalerweise falsch.**

Die Intuition ist, dass das Host-Spiel den Spieler besitzt, weil es derjenige ist, den Sie betrachten. SkyCraft macht das Gegenteil: **Minecraft ist maßgeblich für die Spielerposition und die Physik.** Skyrim zeichnet die Welt und sorgt für Kollision, aber die Spielerpuppe wird dorthin bewegt, wo Minecraft sagt.

Entscheiden Sie dies, bevor Sie den Transport schreiben, denn wenn Sie ihn später umkehren, müssen Sie beide Hälften neu schreiben. Schreiben Sie es in [`templates/BRIDGE-CONTRACT.md`](../templates/BRIDGE-CONTRACT.md), zusammen mit der Art und Weise, wie die Kontrolle über Zwischensequenzen, Fahrzeuge und Menüs an den Host zurückgegeben wird.

Spielerposition zuerst, da sie leicht zu erkennen und zu überprüfen ist. Senden Sie es bei jedem Render-Frame:
```
Weiter: Minecraft ist maßgeblich für die Spielerposition. Jeder Render-Frame,
Senden Sie seine interpolierte Position (die Partial-Tick-Renderposition, nicht die Rohposition).
20 TPS-Tick-Position) zu Skyrim, wodurch die Spielerpuppe entsprechend bewegt wird.

Protokollieren Sie den Wert, den Sie senden, und den Wert, den Skyrim empfängt, damit ich sie vergleichen kann.
```

Führen Sie dann beide Spiele aus und gehen Sie herum. Überprüfen Sie das Protokoll. Die Positionen sollten übereinstimmen.

**Verifizierungstrick:** Protokollieren Sie den Wert auf beiden Seiten mit einem Zeitstempel oder Frame-Zähler. Sie sollten nie darauf achten müssen, ob zwei Zahlen übereinstimmen.

Das ist die bewährte Architektur. Sobald ein Schwimmer die Grenze überschreitet, ist der schwierige Teil erledigt.

Zwei Details, die es wert sind, von SkyCraft kopiert zu werden:

- **Interpoliert, nicht roh.** Minecraft tickt mit 20 TPS, rendert aber mit Ihrer Anzeigerate. Senden Sie die Renderposition, oder die Bewegung sieht aus, als würde sie schrittweise erfolgen.
- **Frame-Lockstep.** Beide Seiten deaktivieren ihre eigenen Frame-Caps und Vsync und synchronisieren dann auf ein explizites „Begin Frame N“-Signal. Ohne dies driften die beiden Spiele und es kommt zum Stottern.

## Schritt 6: Etwas zurückschicken

Schließen Sie nun den Kreis. Skyrim erzählt Minecraft, wie die Welt geformt ist und wo sich die NPCs befinden:
```
Als nächstes: Senden Sie Kollisionsformen von Skyrim in die Nähe des Spielers sowie NPC-Positionen.
Fügen Sie sie in die Kollisionsabfragen von Minecraft ein, also in die eigene Physik von Minecraft
läuft unverändert gegen die Geometrie von Skyrim. Protokollieren Sie beide Richtungen.
```

Zwei Spiele im Gespräch. Alles danach sind Features.

**Bevor Sie etwas davon bauen, beantworten Sie die Absturzfrage.** Wenn Spiel B mitten im Bild stirbt, hat die Spielerpuppe in Spiel A keine Position und kein Gehirn. Heartbeats im Shared-Memory-Header erkennen dies, und jede Seite benötigt einen definierten sicheren Zustand: Spiel A gibt die Kontrolle an den Spieler zurück, Spiel B pausiert, anstatt gegen nichts zu simulieren. Entscheiden Sie es jetzt. Die Nachrüstung eines Ausfallpfads in ein funktionierendes Transportmittel ist ein schlechter Nachmittag.

**Behalten Sie ein Schema an einem Ort.** Definieren Sie die Nachrichten einmal und generieren Sie daraus den Code für beide Seiten, oder schreiben Sie die Strukturen manuell in beiden Sprachen und akzeptieren Sie, dass sie beim ersten Hinzufügen eines Felds abweichen. SkyCraft behält die Definition in `protocol/messages.*` und generiert daraus einen C++-Header und eine Java-Klasse, mit einem Layouttest in CI auf beiden Seiten. Alles hat eine feste Größe und Little-Endian, es gibt also keine Serialisierungsbibliothek im Hot-Pfad. Daten variabler Länge, wie eine Liste von Kollisionsboxen, werden als Anzahl übertragen, gefolgt von Datensätzen fester Größe.

## Schritt 7: Fügen Sie jeweils eine Funktion hinzu

Eine sinnvolle Reihenfolge, ungefähr vom kleinsten zum größten:

1. Positionieren Sie Spiel A → Spiel B
2. Geben Sie Spiel B → Spiel A ein oder geben Sie es an
3. Der Spieler von Spiel A bewegt sich und es erscheint in Spiel B
4. Erzeuge die Objekte von Spiel B (Blöcke, Feinde) in der Welt von Spiel A
5. Kampf
6. Inventar
7. Benutzeroberfläche, falls eines der Spiele sie benötigt

Nach jedem: **Playtest, dann Commit.** Wenn ein Schritt unterbrochen wird, ist `git revert` sofort gültig.

## Schritt 8: Sorgen Sie dafür, dass es nicht stottert

Passthrough-Mods führen zwei Spiele und einen Nachrichtenkanal gleichzeitig aus, sodass die Leistung der wahre Feind ist.

**Das Gameplay-Spiel führt weiterhin seinen Client aus.** Es läuft nicht kopflos. In SkyCraft 0.1.2 erstellt der Client von Minecraft die Blocknetze und Texturen, die Skyrim dann in seinem eigenen Renderer zeichnet (so verbergen die Wände von Skyrim Ihre Blöcke) und rendert die Hand, das HUD und die Menüs außerhalb des Bildschirms als Bild, das über den Rahmen von Skyrim gelegt wird. Projekte, die stattdessen das gesamte Bild von Minecraft einfügen („Frame-Compositing“, siehe [Anleitung 14](14-choosing-a-route.md)), benötigen ihren Renderer noch mehr. „Ohne Rendering ausführen“ macht beide Designs kaputt.

Das macht die *Präsentation* des versteckten Fensters zum ersten Blickpunkt. OWCraft überspringt die Anzeige des versteckten Fensters von Minecraft während der Verknüpfung, was Minecraft von 25 auf 60 fps brachte. Andere Dinge, nach denen es sich zu fragen lohnt:

- Senden Sie Deltas anstelle des vollständigen Status, wenn die Werte groß sind
- Framezeiten beider Prozesse protokollieren und vergleichen. Zahlen sind besser als Raten
```
Spiel A sinkt auf 40 fps. Die Frame-Zeiten sind in [Protokollpfad] angegeben. Finden Sie den Engpass
bevor ich etwas ändere. Sag mir zuerst, was im Profil steht.
```

**Zwei Spiele bedeuten ungefähr doppelt so viel RAM, und der Appetit des Gameplay-Spiels ist die Überraschung.** Der Speicher von Minecraft ist der Teil, den Sie steuern können: SkyCraft hält den JVM-Heap bei etwa 3 GB und rendert fast nichts, weil die Welt, die er zeichnet, eine Leere ohne Terrain ist. Die gesamte Geometrie stammt aus Spiel A. Wenn Ihr Spiel eine eigene vollständige Welt lädt, zahlen Sie für zwei Welten.

Sagen Sie es am Anfang einmal, anstatt am Ende zu optimieren:
```
Spiel B liefert nur Physik und Inventar. Es muss nicht geladen werden
eigenes Gelände. Verschließen Sie den Speicher und sagen Sie mir, was ich einstellen soll.
```

Informationen zu den spezifischen Symptomen (verrutschende Bilder, fehlende Tiefe, feststeckende Zwischensequenzen, NPCs, die durch Blöcke laufen) und welche anderen Projekte sie verursacht haben, finden Sie in [Guide 16](16-ownership-sync-and-rendering.md).

## Schritt 9: Sorgen Sie dafür, dass das Speichern und Laden funktioniert

Überspringen Sie dies und Sie finden den schlechten Weg heraus. Zwei Spiele mit zwei Speichersystemen bedeuten, dass ein Speicherstand von Spiel A geladen wird und ein inkonsistenter Status von Spiel B angezeigt wird: Ihre Blöcke und Ihr Inventar sind weg, oder sie sind in der Welt, aber nicht Ihr Inventar.

Die Antwort von SkyCraft ist eine gemeinsame Speicher-ID. Das Plugin speichert eine ID im Speicher von Spiel A. Beim Speichern löscht Spiel B seine Spiegelwelt und erstellt einen Snapshot seiner eigenen Region und Spielerdaten unter dieser ID. Beim Laden liest es die ID zurück und stellt auch seine Seite wieder her, sodass beide immer zusammen zurückspulen.
```
Beim Speichern von Spiel A muss auch Spiel B gespeichert werden. Geben Sie eine Speicher-ID in die Speicherdatei von Spiel A ein.
Lassen Sie Spiel B leeren, erstellen Sie einen Snapshot seines Status unter dieser ID und stellen Sie ihn dann wieder her
Spiel A wird geladen. Testen Sie es, indem Sie etwas bauen, speichern, beide Spiele beenden,
Neustart und Laden.
```

Testen Sie den letzten Satz konkret. Beim Speichern und Laden bricht diese Mod-Klasse stillschweigend zusammen, da beide Spiele bis zum Neustart einwandfrei laufen.

## Schritt 10: Veröffentlichen

Siehe [Leitfaden 10](10-posting-your-project.md) für die Veröffentlichung und [Leitfaden 6](06-rules-legal-and-publishing.md) für die Regeln, die Sie nicht brechen dürfen. Die Kurzversion: Ihr Repo besteht nur aus Code, niemals aus Spieledateien.

## Was tatsächlich passiert ist, ehrlich gesagt

- Ein Elden Ring + Spider-Man-Mashup brauchte etwa drei bis vier Stunden hin und her, bevor es funktionierte, und das Ergebnis war zwar Quatsch, aber spielbar. Ein Datenpunkt, keine typische Laufzeit.
- Wenn jemand gegen eine Wand stößt, kommt es meist zum ersten Mal, wenn etwas die Grenze überschreitet und im falschen Koordinatenraum landet, oder wenn die Frame-Uhren der beiden Spiele auseinanderdriften. Beides ist normal.
- Wenn Sie eine Taste drücken: Hören Sie auf, Prompts zu wiederholen. Schreiben Sie ein `STATUS.md`, eröffnen Sie einen neuen Chat und übergeben Sie ihn. Siehe [Leitfaden 5](05-testing-and-troubleshooting.md).

## Die vier Dinge, die am meisten Zeit verschlingen

Wissenswertes vorab, denn jedes kostet beim ersten Mal einen Tag:

**Ein Gameplay-Spiel, dessen Mod-Interna sich zwischen den Versionen bewegen.** SkyCraft bindet Minecraft an eine Version und behält alle seine Mixins in einem Paket mit einer Zielliste, sodass ein Spielupdate eine bekannte Stelle und nicht den gesamten Mod beschädigt. Pinnen Sie Ihre Version und schreiben Sie sie in die README-Datei.

**Koordinatenraum.** Spiel A und Spiel B verwenden unterschiedliche Einheiten, unterschiedliche Aufwärtsachsen und unterschiedliche Ursprünge. Schreiben Sie das Mapping auf und testen Sie es, bevor irgendetwas anderes gerendert wird. Ein Einheitenfehler liest sich hier wie ein Agentenfehler, da der Agent selbstbewusst auf einer falschen Zahl aufbaut.

**Zwei Speichersysteme.** Wird in Schritt 9 behandelt. Testen Sie, indem Sie beide Spiele beenden und neu starten, nicht indem Sie innerhalb einer Sitzung speichern und neu laden.

**Zwei Prozesse kämpfen um die GPU und den Frame-Takt.** Wird in Schritt 8 behandelt.

## Die Checkliste

- [ ] Spiel A hat einen Loader und lädt den bekanntermaßen guten Mod eines anderen
- [ ] Beide Spiele sind Einzelspieler- oder Offline-Spiele und Sie besitzen sie
- [ ] Beide sind an die genauen Versionen angeheftet, und in der README-Datei steht welche
- [ ] Sie haben entschieden, welches Spiel für den Spieler maßgeblich ist
- [ ] Das Designdokument benennt die Botschaften, die sich zwischen den Spielen kreuzen
- [ ] Jede Seite hat einen definierten sicheren Zustand, wenn die andere stirbt
- [ ] `git init` fertig, und Sie haben sich verpflichtet
- [ ] `AGENTS.md` und `MODLOG.md` existieren
- [ ] Agent hat Ihnen einen Aufklärungsbericht gegeben, bevor er Code geschrieben hat
- [] Ihr Code lädt und protokolliert eine Zeile
- [ ] Beide Seiten schütteln sich die Hände und einigen sich auf eine Protokollversion
- [ ] Ein Wert kreuzt sich, beidseitig protokolliert
- [ ] Speichern und Laden während eines vollständigen Beendens und Neustarts getestet
- [ ] Funktionen werden einzeln hinzugefügt, jeweils getestet und übernommen
- [ ] README sagt, was funktioniert und was nicht
- [] Keine Spieledateien im Repo

---

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/09-worked-example-passthrough-mod.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/09-worked-example-passthrough-mod.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>