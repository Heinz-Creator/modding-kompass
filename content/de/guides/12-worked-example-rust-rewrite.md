# 12. Arbeitsbeispiel: IW4L, eine KI-gestützte Rust-Umschreibung

In dieser Fallstudie geht es um [IW4L](https://github.com/vladtrc/iw4L), eine eigenständige Rust-Laufzeitumgebung für Call of Duty: Modern Warfare 2 (2009). Etwa 160 Commits zum Zeitpunkt des Schreibens, etwa 800 Sterne, Apache-2.0 und aktiv entwickelt.

Es ist unvollendet und besagt Folgendes: * „Das Gameplay bleibt unvollständig. Erwarten Sie fehlendes Verhalten, Fehler und Desynchronisationen.“* Es werden keine Spielinhalte mitgeliefert. Sie richten es auf eine Kopie von MW2, die Sie bereits besitzen, und es liest die Karten, Modelle, Texturen und Waffen dieser Installation in seine eigene Engine ein.

Was es lesenswert macht, ist nicht der Motor. So geht ein Projekt dieser Größenordnung mit Herkunft, Lizenzierung und der Grenze zwischen dem, was ein Agent geschrieben hat, und dem, was eine Person entschieden hat, um.

## Warum IW4L und nicht etwas anderes

Auf dieser Seite wurde [mw2-rust-rust-rewrite](https://github.com/Dj-Shortcut/mw2-rust-rust-rewrite) behandelt, ein eigenständiges Rust/Bevy-Projekt von Dj-Shortcut, das auf IW4L aufbaut. Das war eine faire Fallstudie und das meiste, was richtig gemacht wurde, trifft auch hier zu, aber IW4L ist aus drei Gründen ein besseres Beispiel für Anfänger.

Es ist fertig genug, um es lesen zu können. Sein eigenes `docs/` umfasst Rendering, Simulation, Kartenladen, die GSC-Laufzeit, Bot-KI und Leistung sowie eine reproduzierbare Testsuite. Sie können verfolgen, was ein reales Projekt tut, anstatt daraus Rückschlüsse zu ziehen.

Es dokumentiert seine eigene Provenienz. Die unten verlinkte Bewegungsnotiz existiert, weil ein Mitwirkender eine Lizenzfrage gestellt hat und der Betreuer sie aufgeschrieben hat. Bei den meisten Projekten dieser Größenordnung ist das nie der Fall.

Es nennt seine Grenzen deutlich. * „Das Gameplay bleibt unvollständig. Erwarten Sie fehlendes Verhalten, Fehler und Desynchronisationen.“* Eine Fallstudie sollte Ihnen zeigen, wie ein echtes Projekt mitten im Flug aussieht, und nicht, wie es in einem Promo-Screenshot aussieht.

Wenn Sie wegen der alten Seite hierher gekommen sind: Die Abschnitte darüber, dass Reverse Engineering Teil der Geschichte ist, wie die Lizenz einer Abhängigkeit überprüft wird, anstatt sie anzunehmen, und dass Spieler ihre eigenen Spieldateien bereitstellen, gelten weiterhin. Daran war nichts falsch.

## Der Stapel und was jedes Teil tut

| Bereich | Umsetzung |
|---|---|
| Sprache | Rust, auf [Bevy](https://bevy.org/) mit WGPU zum Rendern |
| Assets | Native FastFile-Reader konvertieren Spieldaten in eine gemeinsame Zwischendarstellung |
| Shader | Retail Direct3D 9 Shader Model 3-Bytecode wird in WGSL | übersetzt
| Simulation | Serverautorität, Clientvorhersage und Wiedergabe teilen sich einen Simulationsschritt gegenüber dem expliziten Bevy ECS-Status |
| Vernetzung | Benutzerdefinierter UDP-Verkehr mit einem QUIC-Master zum Durchsuchen und Weiterleiten |

Die Shader-Übersetzung und der einzelne gemeinsame Simulationsschritt sind die beiden Teile, die es wert sind, studiert zu werden. Die zweite Möglichkeit bedeutet, dass Wiederholung, Vorhersage und das Live-Spiel nicht miteinander übereinstimmen können, da sie denselben Code ausführen.

Asset-Leser behandeln auch MW3 und Black Ops, obwohl MW2 erwartet wird.

## Was Sie liefern müssen

Ihre eigenen installierten MW2-Multiplayer-Daten. Nichts anderes und es werden keine Assets umverteilt.

**Windows** ist der einfache Weg: Laden Sie `iw4l-windows.zip` aus den Versionen herunter, extrahieren Sie es in einen leeren beschreibbaren Ordner und führen Sie `iw4l.exe` aus. Es findet MW2 in Ihren Steam-Bibliotheken und erstellt eine Verknüpfung. MW2 ist erforderlich; BO1 und MW3 sind optional.

**Linux und macOS** benötigen einen echten Build. Rust über Rustup, plus eine C-Toolchain und die Bevy-Systembibliotheken. `docs/BUILD.md` listet Pakete pro Distribution auf und Linux benötigt X11-, ALSA-, udev-, Wayland- und xkbcommon-Header. macOS benötigt nur die Xcode-Befehlszeilentools. Spieldaten stammen aus dem Windows-Depot einer Steam-Kopie über `steamcmd`, auf das durch die Umgebungsvariable `IW4L_GAMES` verwiesen wird.

Dies ist die Form, die die meisten Neufassungen annehmen: Die Engine ist portabel, die Spieldateien jedoch nicht.

## Wie viel davon ist KI-geschrieben?

Die letzte Zeile der README-Datei vor den Danksagungen lautet *„Dieses gesamte Projekt wurde von einem LLM geschrieben.“*

Die menschliche Arbeit ist immer noch umfangreich und im Commit-Protokoll größtenteils unsichtbar. Jemand hat die Architektur festgelegt, `AGENT.md` geschrieben, die Dokumentation in `docs/` geschrieben, die Lizenzierung festgelegt und `CONTRIBUTING.md` und `SECURITY.md` geschrieben. Das sind Urteilssprüche, die ein Makler nicht für Sie trifft.

IW4L wird ebenfalls umbenannt. Sein `NOTICE` besagt, dass es „ursprünglich von vladtrc“ unter einem früheren Namen entwickelt wurde, was daran erinnert, dass Projekte in diesem Bereich häufig wiederholt werden.

## Das Provenienzproblem und die ehrliche Antwort

Beim Umschreiben einer vorhandenen Engine stößt man auf ein echtes Problem: Einiges von dem, was Sie schreiben, wird dem ähneln, was Sie gelesen haben. Das ist eine Lizenzfrage, keine Stilfrage, und IW4L behandelt sie auf eine Art und Weise, die es wert ist, nachgeahmt zu werden.

`docs/provenance/movement-iw4.md` zeichnet auf, dass der Bewegungslöser in `movement_iw4/src/slide.rs` „unsichere Herkunft aufgrund gemeldeter Ähnlichkeiten mit GPL-Bewegungsimplementierungen“ hatte.* Der Hinweis geht weiter als die meisten Projekte:

– Es benennt den ersten verfolgten Commit des alten Moduls und den genauen Blob-Hash dessen, was ersetzt wurde.
- Darin heißt es eindeutig: „Diese Aufzeichnung beweist nicht, dass kopiert oder angepasst wurde.“*
– Es wird aufgezeichnet, dass der Ersatz von einem isolierten Agenten ohne Konversationsverlauf geschrieben wurde, der auf der Grundlage eines frisch geschriebenen Verhaltensvertrags und nicht auf der Grundlage des alten Codes arbeitete.
– Dann heißt es, dass es sich bei der Isolation um *„prozedurale Isolation auf einem gemeinsam genutzten Host, nicht um eine erzwungene Dateisystem-Sandbox oder eine Garantie für Modelltrainingsdaten“ handelte.*

Der letzte Satz ist das Nützlichste auf dieser Seite. Es beschreibt eine echte Kontrolle, ohne den Anspruch zu erheben, eine Garantie zu sein. Wenn Sie etwas Ähnliches bauen, schreiben Sie diesen Satz.

`AGENT.md` fügt zwei Standregeln mit automatisierter Prüfung hinzu. Retail-Offsets bleiben aus dem Code heraus, da eine eigenständige Laufzeit nichts gegen ein Retail-Image auflöst und Dekompiler-Platzhalternamen (`FUN_...`, `DAT_...`) ein Eigengewicht darstellen. `make publish-check` durchsucht den verfolgten Baum nach beiden Formen. Die Akte achtet sorgfältig darauf, was das beweist: „Es beweist keinen Anspruch auf Herkunft oder Lizenzierung, und die Annahme ist kein Argument für irgendetwas anderes als das Fehlen dieser Formen.“*

## Lizenzierung, ausgeschrieben

Apache-2.0 für den projekteigenen Code, mit einem `NOTICE`, der sein eigenes Material von dem trennt, was es bündelt. Zwei Schriftarten werden mit `include_bytes!` in die Binärdatei kompiliert, sodass sie mit jedem Build ausgeliefert werden:

- **Oxanium**, SIL Open Font License 1.1
- **Fira Mono**, SIL Open Font License 1.1, aus einer unveränderten Mozilla-Revision

`iw4l.exe licenses` druckt die in die ausführbare Datei kompilierten Lizenztexte. Das ist ein kleines Detail, das zeigt, dass das Projekt von den Leuten erwartet, dass es weiterverteilt wird.

In der README-Datei werden auch die Informationen genannt, die die Arbeit beeinflusst haben: [OpenAssetTools](https://github.com/Laupetin/OpenAssetTools) und sein `iw4x-x64`-Zweig für Asset-Layouts, [IW4x](https://github.com/iw4x/iw4x-client) für Asset- und Protokollverhalten, [KisakCOD](https://github.com/SwagSoftware/KisakCOD) für die Engine-Struktur und Ghidra für die Inspektion der ursprünglichen Binärdateien.

Lesen Sie diese Liste als Herkunftsnachweis und nicht als Formalität. Durch die Benennung dessen, was Sie studiert haben, kann ein Leser das Ergebnis beurteilen.

## Was funktioniert und was nicht

Der Anspruch der README-Datei ist bewusst eng gefasst: Karten erkunden, Bots bekämpfen, Demos aufzeichnen und wiedergeben. Das Gameplay ist unvollständig.

`docs/` ist auf diese Ehrlichkeit ausgerichtet. Es gibt separate Dateien für Rendering, Simulation, Kartenladen, die GSC-Laufzeit, Bot-KI und Leistung sowie eine Seite, die dokumentiert, mit welchen Befehlen Sie den Live-Prozess steuern können. `docs/PERF.md` besteht auf nativen `.pftrace`-Traces als „der einzigen Laufzeitwahrheit“* und stellt Ihnen SQL für deren Abfrage zur Verfügung. `docs/BENCH.md` deckt den Zeitpunkt des Kartenladens ab. Es gibt eine Approved-Scenarios-Suite für wiederholbare End-to-End-Prüfungen, einschließlich zweier Clients durch einen Dev-Master.

Zwei Dinge, die Sie überraschen werden, wenn Sie sie nicht lesen:

**Cheats sind standardmäßig aktiviert.** Der Host akzeptiert `move`, `look`, `tp`, `nudge`, `god`, `kill`, `force_spawn` und eine `give`-Lieferliste. `--no-cheats` schaltet sie aus. Dies ist eine Forschungslaufzeit, kein konkurrierender Client.

**APIs, Caches, Konfiguration und das Wire-Protokoll ändern sich zwischen Commits.** Multiplayer-Peers müssen denselben Build ausführen. Wer plant, mit einem Freund zu testen, muss sich zunächst auf einen Commit einigen.

## Die Regeln, die sich das Projekt selbst gesetzt hat

Lesenswert als Vorlagen, unabhängig davon, ob Sie ein Projekt wie dieses in Angriff nehmen oder nicht.

`AGENT.md` ist eine einzelne kurze Datei, kein umfangreiches Dokument. Darin heißt es, was der Agent nicht berühren darf, was aus dem veröffentlichten Baum fernbleiben darf und wie die Dateien in der richtigen Reihenfolge gelesen werden.

`CONTRIBUTING.md` stellt eine Grenze dar, die die meisten Projekte nicht haben:

> Klein und in sich geschlossen: ein Fix, ein Absturz, eine falsche Konstante, eine Dokumentenkorrektur. Öffnen Sie es direkt.
> Architektur: eine neue Kiste, ein neues Subsystem, eine Änderung der Art und Weise, wie Daten fließen. Öffnen Sie zuerst ein Problem. Eine große Filiale, die unangekündigt eintrifft, wird wahrscheinlich abgelehnt.

Außerdem steht darin, was ein nützlicher Fehlerbericht enthält und was nicht: *„Fügen Sie nicht Ihren `.env`, einen Speicherauszug oder ein Archiv des Spiels hinzu.“* Und es priorisiert ehrlich, mit *„Ein Fehler in einem Szenario, von dem das Projekt sagt, dass es funktioniert, überwiegt ein fehlendes Feature, das es nie versprochen hat.“*

`CONTEXT.md` beschreibt den eigenen Arbeitsablauf des Betreuers: Arbeitsspeicher, der außerhalb von Git in einem `context/`-Ordner aufbewahrt wird, ein Artefakt pro Aufgabe mit seinen Beweisen und seinem Urteil und die Regel, dass *"Wissen, das nicht in einem Artefakt ist, nicht existiert"* für den nächsten Agenten. Es handelt sich ausdrücklich nicht um den Beitragspfad.

`SECURITY.md` befasst sich mit den Berichten über Probleme, die über vereinbarte Spieltests zwischen Personen hinausgehen, die sich zum Spielen bereit erklärt haben, und sagt im Voraus, dass es sich eher um einen Kanal als um ein Programm handelt: kein Kopfgeld, kein SLA.

## Was man daraus mitnehmen kann

- **Lesen Sie die Herkunftshinweise, bevor Sie den Code bewundern.** Sie sagen Ihnen, auf welchen Teilen Sie sicher aufbauen können.
- **Ein Agent kann den größten Teil des Codes schreiben und nichts für die Lizenzierung.** Planen Sie Ihre eigene Zeit entsprechend ein.
- **Ein Build-System ist ein echtes Ergebnis.** Die Distributionspaketlisten, die Cross-Build-Notizen, der tragbare Windows-Ordner und die Buchhaltung der lizenzierten Schriftarten erforderten menschliche Entscheidungen.
- **Enge Ansprüche überleben den Kontakt mit Benutzern.** IW4L sagt in zwei Zeilen, was funktioniert, und verknüpft den Rest. Projekte, die alles versprechen, werden anhand der fehlenden Teile beurteilt.

## Credits

- [IW4L](https://github.com/vladtrc/iw4L) von vladtrc: Die Laufzeit, um die es in dieser Fallstudie geht, und die Provenienzarbeit, die es wert ist, kopiert zu werden.
– [mw2-rust-rust-rewrite](https://github.com/Dj-Shortcut/mw2-rust-rust-rewrite) von Dj-Shortcut: der Betreff dieser Seite, bevor er ersetzt wurde. Der ursprüngliche Bericht befindet sich in der Geschichte dieses Repos, und die darin enthaltenen Hinweise zum Reverse Engineering, zur Lizenzierung und zur Bereitstellung von Assetsn gelten immer noch für Projekte wie dieses.
- [OpenAssetTools](https://github.com/Laupetin/OpenAssetTools), [IW4x](https://github.com/iw4x/iw4x-client), [KisakCOD](https://github.com/SwagSoftware/KisakCOD) und Ghidra, von IW4L als die Forschung anerkannt, die es informiert hat.

IW4L ist inoffiziell und nicht mit den Eigentümern von MW2 oder seinen Marken verbunden.

---

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/12-worked-example-rust-rewrite.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/12-worked-example-rust-rewrite.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>