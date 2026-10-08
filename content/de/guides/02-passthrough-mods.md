# 2. Passthrough-Mods

Ein Passthrough-Mod verbindet zwei gleichzeitig laufende Spiele. Ein Spiel (der **Gastgeber**) zieht die Welt an. Das andere Spiel liefert das Gameplay, wie Bewegung, Blöcke oder Kampf. Sie tauschen ständig Informationen aus, sodass jeder sieht, was der andere tut.

## Wie es funktioniert

Angenommen, Sie möchten Minecraft in Skyrim:

1. Skyrim läuft normal und zeichnet alles auf dem Bildschirm.
2. Minecraft läuft mit ausgeblendetem Fenster und simuliert den Spieler, die Blöcke und den Kampf.
3. Ein Plugin in Skyrim und ein Mod in Minecraft leiten Informationen über den gemeinsamen Speicher hin und her. Minecraft ist für den Spieler maßgeblich; Skyrim bietet Kollisionen und NPCs.
4. Skyrim zeichnet die Minecraft-Blöcke selbst. In SkyCraft 0.1.2 exportiert Minecraft seine Weltnetze und Texturen und das Skyrim-Plugin zeichnet sie in Skyrims eigenem Renderer, sodass sie die Tiefe, Beleuchtung und Schatten von Skyrim erhalten. Nur die Hand, das HUD und die Menüs von Minecraft werden als Bild erfasst und darüber gelegt. Einige andere Projekte fügen stattdessen das gesamte Bild von Minecraft ein; [guide 14](14-choosing-a-route.md) erklärt den Unterschied.

Da beide Spiele zusammen laufen, benötigt **jeder Spieler eine Kopie von beiden**.

Kurz gesagt: zwei Spiele, die ihren Status austauschen, wobei keines funktioniert, ohne dass das andere läuft. Bei einem normalen Mod würde ein Spiel den Inhalt des anderen enthalten.

## Wie die beiden Spiele miteinander reden

Das ist die Entscheidung, die die Leute zuerst falsch treffen, es lohnt sich also, konkret zu sein. Der Transport von SkyCraft, den jedes andere Beispiel kopiert:

- **Benannter gemeinsamer Speicher.** Ein Speicherblock, den beide Prozesse öffnen, unter Windows `Local\SkyCraft_v1` genannt. Beide Seiten bilden die gleichen physischen Seiten ab, sodass ein Schreibvorgang für die andere Seite sichtbar ist, ohne dass eine Kopie durch den Kernel erfolgen muss. Es funktioniert nur, weil sich beide Prozesse auf derselben Maschine befinden.
- **Eine Kopfzeile oben.** Magische Nummer, Protokollversion, beide Prozess-IDs, Heartbeats. Wenn ein Header falsch aussieht, hören beide Seiten sofort auf, anstatt Müll zu interpretieren.
- **Aktuelle Slots für Daten pro Bild.** Spielerposition, Kamera, Bildsynchronisierung. Mit einem Seqlock geschrieben, damit der Leser einen Lesefehler erkennen und es erneut versuchen kann.
- **Zwei Ringpuffer für Ereignisse.** Einer pro Richtung. Dinge, die einmal passieren: ein Block platziert, ein Treffer gelandet, ein Save angefordert. Ringpuffer verhindern, dass Sie ein Ereignis unter Last löschen, was bei einem gemeinsam genutzten Steckplatz der Fall wäre.
– **Benannte Ereignisse für Weckvorgänge**, sodass ein Warteprozess in den Ruhezustand versetzt wird, anstatt einen Kern zu drehen.

Drei Regeln, die sich aus diesem Layout ergeben und nach denen Sie den Agenten fragen sollten, bevor er etwas schreibt:

**Ein Schema, zwei Sprachen.** SkyCraft definiert die Nachrichten einmal in `protocol/messages.*` und generiert daraus einen C++-Header und eine Java-Klasse. Gegen beide läuft ein Layouttest in CI. Handschriftliche Strukturen in zwei Sprachen weichen auseinander, wenn Sie zum ersten Mal ein Feld hinzufügen.

**Alles mit fester Größe und Little-Endian.** Keine Serialisierungsbibliothek im Hot-Pfad. Daten variabler Länge, wie z. B. eine Liste von Kollisionsboxen, werden als Anzahl im Ringpuffer abgelegt, gefolgt von Datensätzen fester Größe.

**Beide Seiten müssen überleben, wenn der andere stirbt.** Heartbeats erkennen einen Absturz. Wenn Minecraft stirbt, gibt Skyrim die Kontrolle an den Spieler zurück, anstatt eine Puppe ohne Gehirn zurückzulassen. Wenn Skyrim stirbt, pausiert Minecraft. Entscheiden Sie dies gleich am ersten Tag, denn die Nachrüstung eines Fehlerpfads in ein funktionierendes Transportmittel ist eine Katastrophe.

> Eine vollständige Schritt-für-Schritt-Anleitung zum Erstellen eines davon finden Sie in [Anleitung 9](09-worked-example-passthrough-mod.md).
>
> „Passthrough“ deckt mehrere verschiedene Designs ab: Status tauschen, das Bild des Gastes in den Host einfügen oder den Host die Netze des Gastes zeichnen lassen. [Leitfaden 14](14-choosing-a-route.md) erklärt den Unterschied und [Leitfaden 15](15-case-studies-what-each-project-actually-did.md) zeigt, wie SkyCraft, LibertyCraft, die CrossOver-Brücken und andere es geschafft haben.

## Beispiele zum Lernen

| Projekt | Spiele | Notizen |
|---------|-------|-------|
| [SkyCraft](https://github.com/chasmlol/SkyCraft) | Skyrim + Minecraft | Ein Skript-Extender-Plugin (C++) plus ein Fabric-Mod (Java) |
| [FalloutCraft](https://github.com/zeyvu/FalloutCraft) | Fallout 4 + Minecraft | Ein Port von SkyCraft. Behält seinen Fabric-Mod mit FalloutCraft-Änderungen und ersetzt das spielseitige Plugin. Mehrere SkyCraft-Funktionen sind noch nicht portiert |
| [OWCraft](https://github.com/Yaekai/OWCraft) | Outer Wilds + Minecraft | Basierend auf SkyCraft mit einem Patch. Enthält ein Designdokument und ein Entwicklungsprotokoll |
| [GTA San AnSkateas](https://github.com/ryglizzy/GTA-San-AnSkateas) | GTA San Andreas + Skate 3 | Eine Variante: Ein Plugin lädt einen Rust-Neuaufbau der Engine von Skate 3, anstatt das gesamte zweite Spiel auszuführen |

Die meisten davon basieren auf dem Design von SkyCraft, daher ist SkyCraft die übliche Startreferenz. Lesen Sie dessen `docs/DESIGN.md`, bevor Sie etwas auffordern. Es sagt Ihnen, welches Spiel für was maßgeblich ist, und es ist teuer, dies rückgängig zu machen. Außerdem gibt es in Abschnitt 10 den Nachrichtenkatalog, der die Antwort auf die schwierigste Frage in einem Passthrough-Mod gibt: Welche Daten werden tatsächlich zwischen den Spielen übertragen?

## Das Einzige, was darüber entscheidet, ob es möglich ist

**Verfügt das Host-Spiel über einen Mod Loader oder Script Extender?**

Mit einem ist dies ein realistisches Wochenendprojekt. Ohne einen muss der Agent das Spiel zunächst zurückentwickeln, und das gehört in [Anleitung 3](03-rust-rewrites-and-ports.md).

Überprüfen Sie die Tabelle in [Anleitung 8](08-mod-loaders-and-script-extenders.md), bevor Sie einen Commit durchführen. Skyrim und Fallout 4 haben SKSE und F4SE, Minecraft hat Fabric, die meisten Unity-Spiele haben BepInEx oder MelonLoader und die meisten Unreal-Spiele haben UE4SS. Diese Liste ist der Grund, warum Projekte im SkyCraft-Stil so häufig sind.

## Muss ich etwas dekompilieren?

Normalerweise nicht. Bei einem Mod im SkyCraft-Stil verweisen Sie den Agenten auf das SkyCraft-Projekt und sagen, dass Sie dasselbe für Ihre Spiele wünschen. Den Rest erledigt der Makler.

Was Sie benötigen, ist eine **Möglichkeit, Ihren eigenen Code innerhalb des Host-Spiels auszuführen**: einen Skript-Extender (SKSE für Skyrim, F4SE für Fallout 4), einen Mod-Loader (Outer Wilds Mod Loader) oder ein Plugin-SDK (plugin-sdk für GTA San Andreas). Mit einem davon ist die Arbeit viel einfacher.

Ohne eine solche muss der Agent das Spiel möglicherweise zurückentwickeln. Mitglieder verwenden den Agenten, um bei Bedarf mit einem Tool wie Ghidra zu dekompilieren, und [Leitfaden 3](03-rust-rewrites-and-ports.md#do-i-need-to-decompile) beschreibt, wie das funktioniert. Bitten Sie den Agenten, vor dem Start zu prüfen, was Ihr Spiel unterstützt.

## Schritt für Schritt

1. **Wählen Sie das Host-Spiel und das Gameplay-Spiel aus.** Überprüfen Sie, ob beide Einzelspieler- oder Offline-Spiele sind und dass der Host über einen Loader verfügt.
2. **Suchen Sie nach vorhandener Arbeit.** Suchen Sie nach einem Mod-Loader, einem Skript-Extender oder vorhandenen Mods für das Host-Spiel. Dies zu überspringen ist die häufigste Art, hier einen Abend zu verlieren.
3. **Installieren Sie beide Spiele** und stellen Sie sicher, dass sie normal laufen. Installieren Sie die Mod-Tools des Host-Spiels, sofern vorhanden, und testen Sie den Loader mit einem vorhandenen Mod, bevor Sie etwas schreiben.
4. **Öffnen Sie Ihren Agenten in einem neuen, leeren Projektordner.**
5. **Senden Sie die Starteraufforderung** (unten).
6. **Lassen Sie den Agenten einen Plan erstellen und erstellen.** Bitten Sie ihn, Ihnen zu sagen, was ausgeführt werden soll und was Sie sehen sollten.
7. **Spieltest.** Beschreiben Sie genau, was passiert ist. Fügen Sie Protokolle von beiden Spielen ein, wenn etwas kaputt geht.
8. **Wiederholen**, bis es funktioniert. Machen Sie sich Notizen: Sehen Sie sich die Übergabe- und Protokollvorlagen an.
9. **Teile es** als GitHub-Repo ohne Spieledateien. Siehe [Leitfaden 6](06-rules-legal-and-publishing.md) und [Leitfaden 10](10-posting-your-project.md).

## Start-Prompt

Sie brauchen keine perfekte Eingabeaufforderung. Halten Sie es klar. Etwas wie:
```
Ich möchte einen Passthrough-Mod wie SkyCraft (https://github.com/chasmlol/SkyCraft) erstellen, aber für [Spiel A] und [Spiel B].

Klonen Sie SkyCraft lokal und lesen Sie die README-Datei und docs/DESIGN.md, damit Sie die Architektur verstehen. Ich möchte den gleichen Ansatz wie SkyCraft.

[Spiel A] ist unter [Pfad] installiert. [Spiel B] ist unter [Pfad] installiert.

Bevor Sie etwas bauen, sagen Sie mir:
- Welche Loader, APIs oder SDKs gibt es für diese Spiele?
- Gibt es entweder Online-Play oder Anti-Cheat? (Wir rühren diese nicht an.)
- Was ist das kleinste Ding, das ich zuerst bauen kann, um zu beweisen, dass es funktioniert?

Ändern Sie noch keinen Code. Melden Sie einfach, was Sie gefunden haben.
```

Die letzte Zeile ist diejenige, die zählt. Es kostet Sie eine Runde und bewahrt Sie vor einem sicheren Plan, der auf einer falschen Annahme basiert.

Sie können später weitere hinzufügen, beispielsweise welche Funktionen Sie zuerst benötigen.

## Wenn es hängen bleibt

Keine Regel, aber nützlich: Wenn sich der Agent im Kreis dreht, streben Sie ein kleineres Ziel an. Eine übliche Reihenfolge:

1. Lassen Sie Ihren Code im Host-Spiel laden und schreiben Sie eine Zeile in ein Protokoll.
2. Bringen Sie beide Seiten dazu, den gemeinsamen Speicher zu öffnen und sich auf eine Version zu einigen.
3. Senden Sie ein Datenelement von einem Spiel zum anderen (z. B. die Position des Spielers).
4. Schicken Sie etwas zurück.
5. Lassen Sie den Spieler sich in einem Spiel bewegen und im anderen auftauchen.
6. Fügen Sie Funktionen nacheinander hinzu (Blöcke, Kampf, Fahrzeuge, Benutzeroberfläche).

Die Schritte 1 bis 3 sind der ganze Trick. Sobald sich ein Wert zwischen den Spielen kreuzt, funktioniert die Architektur und der Rest besteht aus Funktionen.

## Was Sie erwartet

- **Es fängt hart an.** Mehrere frühe Projekte beschreiben sich selbst als experimentell. Sichern Sie Ihre Spielstände.
- **Versionen sind wichtig.** Mods sind an Spielversionen gebunden. Notieren Sie, welche Versionen Sie getestet haben. GTA San AnSkateas benötigt GTA San Andreas in Version 1.0 US, nicht die aktuelle Steam-Version oder die Definitive Edition.
- **Die Leistung muss optimiert werden.** Sie führen zwei Spiele und einen Nachrichtenkanal gleichzeitig aus. Den Notizen von OWCraft zufolge dauerte das Überspringen der Präsentation des versteckten Fensters Minecraft von 25 auf 60 fps. Geben Sie dem Agent Frame-Time-Protokolle und er kann solche Dinge finden.
- **Multiplayer ist begrenzt und kommt größtenteils nicht.** SkyCraft bietet Minecraft-seitigen Multiplayer, bei dem Gäste, die auch SkyCraft ausführen, über LAN Ihrer Minecraft-Welt beitreten, während jeder sein eigenes Skyrim behält. FalloutCraft listet Multiplayer als noch nicht portiert auf. Planen Sie nicht darüber hinaus.

## Ideen, die nicht funktionieren, und warum

Diese tauchen ständig auf:

| Idee | Warum nicht |
|------|---------|
| Jedes Online- oder Multiplayer-Spiel als Gameplay-Seite | Völlig außerhalb des Geltungsbereichs. Siehe [Leitfaden 6](06-rules-legal-and-publishing.md) |
| Ein Host-Spiel ohne Mod-Loader und ohne Quelle | Sie würden zuerst die gesamte Engine zurückentwickeln |
| Zwei Spiele in unterschiedlichen Engines mit unterschiedlichen Laufzeiten, als erster Versuch | Jedes Referenzprojekt verbindet einen nativen Host mit einem Java- oder .NET-Gameplay. Ein nicht übereinstimmendes Paar verdoppelt das Problem: Die Host-Seite benötigt einen Loader und die Gameplay-Seite benötigt eine Mod-API, und jetzt müssen Sie beide gleichzeitig finden |
| Das Gameplay-Spiel wirklich kopflos ausführen | Die Optik ist der springende Punkt. SkyCraft verbirgt das Fenster, aber sein Client erstellt weiterhin die Blocknetze, die Skyrim zeichnet, und rendert die Hand und das HUD außerhalb des Bildschirms. Ohne den Client gibt es keinen Mod |
| Ein Mod, der unter Linux oder macOS funktionieren muss | Bei den Loadern handelt es sich um Windows-Tools. Siehe [Anleitung 8](08-mod-loaders-and-script-extenders.md#windows-is-the-common-denominator) |
| Versand der Assets des zweiten Spiels in der Veröffentlichung | Sie versenden Code und ein Setup-Skript. Der Spieler liefert das Spiel. Siehe [Anleitung 10](10-posting-your-project.md) |

## Was entscheidet darüber, wie schwer es für Sie sein wird

Zwei Antworten, beide gefragt, bevor Sie etwas schreiben:

**Ermöglicht der Loader des Host-Spiels, seinen Render- und Player-Code einzubinden?** Ein Plugin, das nur eine Konfigurationsdatei lesen kann, nützt nichts. Sie müssen die Spielerpuppe bewegen und die Pixel eines anderen Spiels in den Rahmen einfügen. Wenn der Loader das nicht kann, wird das Projekt viel schwieriger, als es aussieht.

**Bietet das Gameplay-Spiel eine Möglichkeit, seine Physik einzubauen?** Sie möchten, dass die eigene Physik von Spiel B gegenüber der Geometrie von Spiel A unverändert läuft. Wenn Spiel B nur als normales Spiel mit eigener Welt läuft, kehren Sie zum Pfad „Neuschreiben der Engine“ aus [Anleitung 3](03-rust-rewrites-and-ports.md) zurück.

Minecraft besteht beides, da Fabric Ihnen einen darin enthaltenen Mod bietet und über einen integrierten Server verfügt. Bei einem Spiel, das eine ausführbare Datei mit einer festen Welt ausliefert, ist dies nicht der Fall.

---

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/02-passthrough-mods.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/02-passthrough-mods.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>