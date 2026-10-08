const e=`# 0. Hier geht es los

Du hast noch nie eine Mod entwickelt und möchtest wissen, was auf dich zukommt? Diese Seite gibt dir einen Überblick. Die weiteren Anleitungen erklären die einzelnen Themen genauer.

Bei Problemen, die speziell dein Setup betreffen, kannst du im Discord des Originalprojekts nachfragen.

## Deine Aufgabe

Der KI-Agent schreibt den Code. Du beschreibst deine Idee, der Agent programmiert und erstellt einen Build, und du prüfst das Ergebnis beim Spielen. Deine Aufgaben sind:

- entscheiden, was du verändern möchtest;
- Wünsche und Probleme möglichst genau beschreiben;
- selbst spielen und testen, denn eine KI kann das Spielerlebnis nicht wie du wahrnehmen;
- das Projekt so organisieren, dass du nach einem Fehler wieder einen funktionierenden Stand herstellen kannst.

Der Grundablauf ist einfach: Spiele installieren, einen Agenten öffnen, ein Beispielprojekt nennen und die eigene Idee beschreiben. In der Praxis folgen viele Runden aus Entwicklung, Test und Fehlerbehebung. Plane diese Runden von Anfang an ein.

## Wähle deinen Weg

| Ich möchte … | Passende Anleitung | Grundidee |
|---|---|---|
| Das Gameplay eines Spiels in einem anderen verwenden, etwa Minecraft in Skyrim oder Skate 3 in GTA | [Zwei Spiele verbinden](02-passthrough-mods.md) | Beide Spiele laufen gleichzeitig und tauschen Daten aus. |
| Eine Spiel-Engine so nachbauen, dass sie eigenständig läuft | [Engine-Neuentwicklungen in Rust](03-rust-rewrites-and-ports.md) | Ein größeres Vorhaben. Die neue Engine liest zur Laufzeit deine Spieldateien. |
| Projekte anderer ausprobieren | Kanal #share-your-projects im Discord | Halte dich an die Installationsanleitung des jeweiligen Projekts. |

Das Original empfiehlt für einen unentschlossenen Einstieg eine Verbindung zwischen zwei Spielen, weil man dabei oft früher etwas Sichtbares erreicht. Wenn deine Idee noch nicht zu einer dieser Kategorien passt, hilft [Kapitel 14](14-choosing-a-route.md): Dort werden sieben unterschiedliche Ansätze verglichen.

### Drei Anleitungen, die du zuerst lesen solltest

Diese Seiten beantworten besonders häufige Fragen:

1. **[Mod-Loader und Script-Extender](08-mod-loaders-and-script-extenders.md):** Die vorhandenen Werkzeuge entscheiden darüber, ob deine Idee für das gewählte Spiel realistisch ist.
2. **[Ein vollständiges Praxisbeispiel](09-worked-example-passthrough-mod.md):** Der Ablauf einer Verbindung zwischen zwei Spielen, einschließlich der Aufträge an den Agenten.
3. **[Dein Projekt vorstellen](10-posting-your-project.md):** Was ein fertiges Projekt braucht, damit andere es ausprobieren können.

## Die Schritte in der richtigen Reihenfolge

1. **Spiele auswählen.** Prüfe, dass du die Spiele besitzt und dein Vorhaben im Einzelspieler- oder Offline-Modus läuft.
2. **Vorhandene Lösungen recherchieren.** Suche nach Mod-Loadern, bestehenden Mods und Projekten zur Rekonstruktion des Spiels. Ohne diese Recherche lässt sich leicht ein ganzer Abend mit einem bereits gelösten Problem verbringen.
3. **Einen KI-Agenten auf deinem Rechner einrichten.** Das erklärt [Kapitel 1](01-choose-and-set-up-an-ai-agent.md). Hinweise zu Modellwahl und Kosten stehen in [Kapitel 11](11-models-and-cost.md).
4. **Die Spiele installieren und normal starten.** Stelle sicher, dass sie ohne deine Mod funktionieren.
5. **Einen neuen, leeren Projektordner öffnen.** Starte dort den Agenten und verwende einen Beispielauftrag aus Kapitel 2 oder 3.
6. **Spielen, testen und Rückmeldung geben.** Beschreibe das beobachtete Verhalten und füge die relevanten Log-Ausgaben hinzu.
7. **Fortschritt dokumentieren.** Ein neuer Chat soll an der richtigen Stelle weitermachen können. Dafür gibt es Vorlagen und Hinweise in [Kapitel 4](04-prompting-and-workflow.md).
8. **Das eigene Projekt teilen.** Dein GitHub-Repository enthält deinen eigenen Code und keine Spieldateien. Lies dazu [Kapitel 6](06-rules-legal-and-publishing.md) und [Kapitel 10](10-posting-your-project.md).

## Realistische Erwartungen

- **Zeit:** Eine Aufgabe kann wenige Minuten oder viele Stunden dauern. Das hängt von der Schwierigkeit, dem Modell und dessen Arbeitsweise ab. Das Original nennt eine Verbindung aus Elden Ring und Spider-Man, die nach etwa drei bis vier Stunden gemeinsamer Arbeit funktionierte, aber noch deutliche Schwächen hatte. Das ist ein einzelnes Beispiel, keine typische Zeitangabe.
- **Kosten:** Agenten nutzen Abonnements oder API-Guthaben. Abonnements haben Nutzungsgrenzen. [Kapitel 11](11-models-and-cost.md) erklärt, wie du über Modellwahl und Ausgaben nachdenken kannst.
- **Programmierkenntnisse:** Du kannst ohne Erfahrung anfangen. Grundkenntnisse helfen dir jedoch dabei, Ergebnisse und Probleme einzuordnen. Lass dir vom Agenten erklären, was er verändert hat.
- **Unfertige Ergebnisse:** Frühe Versionen sind experimentell. Sichere deine Spielstände.
- **Grenzen:** Manche Ideen funktionieren nicht. Das Original behandelt keine Online-Spiele mit Anti-Cheat. Die Regeln stehen in [Kapitel 6](06-rules-legal-and-publishing.md).

## Wenn du zuerst nur eine Sache machst

Beginne mit einem Spiel, das du bereits besitzt und für das es einen guten Mod-Loader gibt. Bringe zunächst eine kleine Änderung vollständig zum Laufen. So lernst du den Ablauf: untersuchen, eine funktionierende Änderung bauen, selbst testen, den Stand sichern und wiederholen.

Eine kleine fertige Mod vermittelt dir mehr Erfahrung als ein riesiges Vorhaben, das du am zweiten Tag aufgibst.

## Checkliste vor dem Start

- [ ] Ich besitze die Spiele und habe sie installiert.
- [ ] Mein Vorhaben läuft im Einzelspieler- oder Offline-Modus.
- [ ] Für das Host-Spiel gibt es einen [Mod-Loader oder Script-Extender](08-mod-loaders-and-script-extenders.md).
- [ ] Ich habe einen KI-Agenten gewählt, der mit lokalen Dateien arbeiten kann.
- [ ] Ich habe einen eigenen Projektordner angelegt.
- [ ] Ich werde die Ergebnisse selbst im Spiel testen.
- [ ] Ich habe die Regeln in [Kapitel 6](06-rules-legal-and-publishing.md) gelesen.
`,n=`# 1. Einen KI-Agenten auswählen und einrichten

## Agent vs. Chat-Website

Die meisten Leute bleiben dabei hängen.

- **Eine Chat-Website** (claude.ai im Browser, ChatGPT im Browser) sieht nur, was Sie einfügen oder hochladen. Es kann Ihre Spielordner nicht öffnen, sodass Sie auf die Fehlermeldung „Datei zu groß“ stoßen und am Ende Code von Hand kopieren und einfügen müssen.
- **Ein Agent** läuft auf Ihrem PC. Es liest Ihre Spielordner, erstellt und bearbeitet Dateien, führt Builds aus und liest Protokolle. Nichts zum Hochladen.

Sie wollen einen Agenten. Wenn Sie die Desktop-App Claude verwenden, suchen Sie nach dem Codemodus. Es befindet sich oben links und ist leicht zu übersehen. Die genauen Schritte finden Sie in den aktuellen Dokumenten des Anbieters.

## Welcher Agent

Meistens nutzen die Mitglieder diese. Wählen Sie eines aus und bleiben Sie dabei, während Sie lernen.

| Werkzeug | Notizen aus der Community |
|------|------------|
| **Claude Code** | Die am häufigsten genannten. Funktioniert über die Desktop-App, ein Terminal oder eine VS Code-Erweiterung |
| **Codex** | Wird auch häufig verwendet, unter anderem zum Ausführen der Ghidra-basierten Dekompilierung |
| **OpenCode** | Funktioniert mit vielen Modellen, auch kostenlosen. Welches kostenlose Modell das beste ist, ist noch offen |
| **VS-Code + Roo-Code + OpenRouter** | Eine Pay-per-Use-Route, üblicherweise gepaart mit einem DeepSeek-Modell, wenn ein Claude-Plan außer Reichweite ist |

### Eine Anmerkung zu „MCP“

Mehrere Leute haben diese verwechselt. **Claude Code und Codex sind Agenten.** MCP (Model Context Protocol) ist ein Standard zum Einbinden zusätzlicher Tools in einen Agenten.

Zum Starten benötigen Sie **keinen** MCP-Server. In keinem der Beispielprojekte ist dies als Anforderung aufgeführt.

Wenn Sie dann etwas zurückentwickeln, wird es sich lohnen, eines zu haben. Ghidra und IDA liefern beide MCP-Server, was bedeutet, dass der Agent Funktionen selbst dekompilieren und umbenennen kann, anstatt dass Sie die Disassemblierung in einen Chat einfügen müssen. Der offizielle [Hex-Rays IDA MCP](https://github.com/HexRaysSA/ida-mcp) wird mit einem Befehl installiert, und [ghidra-mcp](https://github.com/bethington/ghidra-mcp) macht dasselbe für die kostenlose Option.

### Was der Agent ist

Fast alle davon sind Terminalprogramme oder eine VS-Code-Erweiterung. Der Agent wird auf Ihrem Computer mit dem Dateizugriff Ihres Benutzerkontos ausgeführt. Was Sie also schützt, hängt davon ab, wie Sie ihn konfiguriert haben.

Claude Der Code fragt nach, bevor er reagiert, zeigt Dateiänderungen als Unterschiede zur Genehmigung an und verfügt über eine integrierte Sandbox, die Sie mit \`/sandbox\` einschalten können. Codex verfügt über eigene Berechtigungs- und Sandbox-Einstellungen. Der Schutz sinkt, wenn Benutzer in den Vollzugriffsmodus wechseln, was die Mitglieder hier beschreiben. Aus diesem Grund ist der Sicherheitsabschnitt am Ende dieses Handbuchs wichtig: Die Standardeinstellungen helfen, und der Fehlermodus schaltet sie aus.

Es lohnt sich, die Sandbox zu verstehen, bevor Sie sich darauf verlassen, denn sie hat echte Grenzen. Es deckt nur Shell-Befehle ab, sodass die eigenen Dateitools, Hooks und lokalen MCP-Server von Claude weiterhin mit Ihrem vollen Zugriff ausgeführt werden. Es läuft auf macOS, Linux und WSL2, daher benötigen Sie unter nativem Windows Claude Code in WSL2, um es zu erhalten. Es ist standardmäßig deaktiviert. Und wenn es nicht gestartet werden kann, weil eine Abhängigkeit fehlt oder die Plattform nicht unterstützt wird, warnt Sie der Claude-Code und führt die Befehle ohne Sandbox weiter aus, anstatt anzuhalten. Wenn Sie \`failIfUnavailable\` festlegen, wird es stattdessen beendet. Dies ist die strengere Wahl, wenn Sie möchten, dass die Sandbox ein echtes Tor ist.

Noch etwas Wissenswertes: Wenn ein Befehl unter der Sandbox fehlschlägt, versucht Claude ihn möglicherweise mit \`dangerouslyDisableSandbox\` erneut, und dieser Wiederholungsversuch wird außerhalb der Grenze ausgeführt. In den Standardmodi erhalten Sie eine Eingabeaufforderung, es sei denn, eine entsprechende Zulassungsregel deckt dies ab. Lehnen Sie diese also ab, wenn Sie sie nicht erwartet haben. Im \`bypassPermissions\`-Modus wird der Wiederholungsversuch ohne Eingabeaufforderung ausgeführt, was ein weiterer Grund ist, nicht auf diese Weise auszuführen. \`/sandbox\` verfügt über eine Registerkarte „Überschreibungen“, die den Wiederholungsversuch deaktiviert, den sogenannten strikten Sandbox-Modus.

Sandbox-Befehle können weiterhin standardmäßig den größten Teil der Maschine lesen, einschließlich Anmeldeinformationsdateien wie \`~/.ssh\` und \`~/.aws/credentials\`, es sei denn, Sie verweigern diese Pfade in den Sandbox-Einstellungen.

Nichts davon macht es sicher. Es schränkt ein, was ein Shell-Befehl erreichen kann, was sich lohnt, und der Rest hängt immer noch von den Gewohnheiten am Ende dieses Handbuchs ab.

Keiner der Agenten greift alleine auf DRM oder Anti-Cheat zurück, und reine Online-Spiele sind für alle ein No-Go. Wenn ein Agent etwas ablehnt, lesen Sie den Grund, bevor Sie davon ausgehen, dass es sich um eine Einschränkung seiner Möglichkeiten handelt.

Sie benötigen keine IDE, die Installation von VS Code lohnt sich jedoch, damit Sie die richtigen Dateiansichten und Unterschiede erhalten. Der Agent erstellt Ihre Dateien und führt Ihre Builds in beide Richtungen aus, sodass Sie niemals Code manuell kopieren und in Ordner einfügen müssen.

## Welches Modell

Modelle ändern sich schnell. Überprüfen Sie daher vor der Auswahl, was aktuell ist.

– Die meisten Leute, die dies tun, kombinieren ein erstklassiges Claude-Modell mit Claude-Code. Mehrere erwähnen Claude Opus 5.5.
- Andere nutzen die Modelle von OpenAI über Codex.
- Billigere Modelle eignen sich für kleinere Aufgaben, benötigen aber mehr Betreuung (siehe den Handoff-Trick in [Anleitung 4](04-prompting-and-workflow.md)).
- **Lokale Modelle** (die auf Ihrer eigenen GPU laufen) funktionieren hierfür nicht gut. Eine 12-GB-GPU reicht für ein gutes lokales Codierungsmodell nicht aus, was diese Frage für die meisten Menschen beantwortet. Wenn Sie es trotzdem geschafft haben, fügen Sie bitte einen Bericht hinzu.
- Ihre Hardware (zum Beispiel ein 5090) spielt bei Cloud-Modellen keine Rolle. Die KI läuft auf den Servern des Anbieters.

## Kosten- und Nutzungsbeschränkungen

Pläne ändern sich oft, schauen Sie daher auf der aktuellen Seite des Anbieters nach. **[Leitfaden 11](11-models-and-cost.md) enthält spezifische Empfehlungen**, einschließlich des für jedes Budget zu verwendenden Modells. Die Kurzversion: OpenCode Go für etwa 10 $ ist der beste Wert, Claude Pro für 20 $ ist das beste Einzelabonnement und ein Upgrade kostet 20 $, dann 100 $ und dann 200 $.

Was Sie erwartet:

- Bezahlte Pläne haben ein kurzes Reset-Fenster (ca. 5 Stunden) und ein wöchentliches Limit.
- Etwa 3–4 Stunden Dauerbetrieb des Spitzenmodells Claude pro 5-Stunden-Fenster sind ein typisches Budget.
- Die 20-Dollar-Stufe reichte aus, um ein völlig neues Basketballspiel zu entwickeln.
- **Kostenlose Stufen:** Niemand hat bestätigt, ob Sie damit ein echtes Projekt durchführen können. Erwarten Sie, dass Sie schnell an Ihre Grenzen stoßen. Die andere Option ist ein Pay-per-Use-API-Schlüssel (OpenRouter und ähnliches).
- Lange Sitzungen beanspruchen mehr von Ihrem Limit, da das gesamte Gespräch mitgeführt wird. Starten Sie ab und zu einen neuen Chat mit einer kurzen Übergabenotiz. Siehe [Leitfaden 4](04-prompting-and-workflow.md).

## Sicher aufstellen

Agenten können Dateien lesen und löschen und viele Mitglieder führen sie mit umfassendem Zugriff aus. Das ist bequem und riskant zugleich. Ein paar Gewohnheiten verringern das Risiko:

1. **Erstellen Sie einen Ordner für das Projekt** und führen Sie den Agenten darin aus.
2. **Verwenden Sie Git vom ersten Tag an.** Commit nach jedem Arbeitsschritt, damit Sie Fehler rückgängig machen können.
3. **Sichern Sie Ihre Spielstände** vor dem Testen.
4. **Seien Sie vorsichtig mit den Modi „Vollzugriff“.** Das Ausführen eines Agenten mit vollem PC-Zugriff ist bequemer, aber ein Fehler kann Dateien beeinträchtigen, die Ihnen wichtig sind. Ein separates Windows-Benutzerkonto, eine virtuelle Maschine oder ein Container wie Podman begrenzt den Schaden.
5. **Halten Sie Passwörter und API-Schlüssel von Dateien fern, die der Agent lesen kann**, und von Ihrem Repo.
6. **Wenn der Agent weiterhin keinen Zugriff erhält** (eine häufige Codex-Beschwerde), lesen Sie die Dokumentation dieses Tools zu Berechtigungs- und Sandbox-Einstellungen und gewähren Sie ihm nur Zugriff auf Ihren Projektordner und Ihre Spielordner.
7. **Schreiben Sie die Regeln auf, anstatt sich auf Ihr Gedächtnis zu verlassen.** Eine Regeldatei in Ihrem Projekt bedeutet, dass der Agent sie in jeder Sitzung befolgt, auch in denen, die Sie vergessen. Siehe [\`templates/AGENTS-starter.md\`](../templates/AGENTS-starter.md).

## Hilfreiche Extras (optional)

- **VS-Code** (oder ein anderer Editor) mit der Erweiterung Ihres Agenten, damit Sie die richtige Versionierung und Dateiansichten erhalten. Es ist nicht erforderlich.
- **Git und ein GitHub-Konto.** Sie benötigen diese, um Ihr Projekt zu teilen.
- **[universal-modder](https://github.com/rehan-remade/universal-modder):** ein Open-Source-Satz von elf Agentenfähigkeiten plus einer CLI, der Spielaufklärung, Reverse Engineering, Asset-Generierung, In-Game-Tests, Veröffentlichung und eine gemeinsame Wissensdatenbank mit Feldnotizen abdeckt. Installieren Sie es mit \`npx skills add https://github.com/rehan-remade/universal-modder\` oder klonen Sie das Repo und starten Sie Ihren Agenten darin. Funktioniert mit Claude Code, Codex, Cursor, Gemini CLI, Copilot und OpenCode. Seine Grafiktools benötigen einen separaten FAL-API-Schlüssel und es benötigt Python 3.10+ und ffmpeg. Es beschränkt sich auf Einzelspieler- oder Offline-Spiele, die Sie besitzen, und berührt Anti-Cheat nicht.

---

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/01-choose-and-set-up-an-ai-agent.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/01-choose-and-set-up-an-ai-agent.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>`,i=`# 2. Passthrough-Mods

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

- **Benannter gemeinsamer Speicher.** Ein Speicherblock, den beide Prozesse öffnen, unter Windows \`Local\\SkyCraft_v1\` genannt. Beide Seiten bilden die gleichen physischen Seiten ab, sodass ein Schreibvorgang für die andere Seite sichtbar ist, ohne dass eine Kopie durch den Kernel erfolgen muss. Es funktioniert nur, weil sich beide Prozesse auf derselben Maschine befinden.
- **Eine Kopfzeile oben.** Magische Nummer, Protokollversion, beide Prozess-IDs, Heartbeats. Wenn ein Header falsch aussieht, hören beide Seiten sofort auf, anstatt Müll zu interpretieren.
- **Aktuelle Slots für Daten pro Bild.** Spielerposition, Kamera, Bildsynchronisierung. Mit einem Seqlock geschrieben, damit der Leser einen Lesefehler erkennen und es erneut versuchen kann.
- **Zwei Ringpuffer für Ereignisse.** Einer pro Richtung. Dinge, die einmal passieren: ein Block platziert, ein Treffer gelandet, ein Save angefordert. Ringpuffer verhindern, dass Sie ein Ereignis unter Last löschen, was bei einem gemeinsam genutzten Steckplatz der Fall wäre.
– **Benannte Ereignisse für Weckvorgänge**, sodass ein Warteprozess in den Ruhezustand versetzt wird, anstatt einen Kern zu drehen.

Drei Regeln, die sich aus diesem Layout ergeben und nach denen Sie den Agenten fragen sollten, bevor er etwas schreibt:

**Ein Schema, zwei Sprachen.** SkyCraft definiert die Nachrichten einmal in \`protocol/messages.*\` und generiert daraus einen C++-Header und eine Java-Klasse. Gegen beide läuft ein Layouttest in CI. Handschriftliche Strukturen in zwei Sprachen weichen auseinander, wenn Sie zum ersten Mal ein Feld hinzufügen.

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

Die meisten davon basieren auf dem Design von SkyCraft, daher ist SkyCraft die übliche Startreferenz. Lesen Sie dessen \`docs/DESIGN.md\`, bevor Sie etwas auffordern. Es sagt Ihnen, welches Spiel für was maßgeblich ist, und es ist teuer, dies rückgängig zu machen. Außerdem gibt es in Abschnitt 10 den Nachrichtenkatalog, der die Antwort auf die schwierigste Frage in einem Passthrough-Mod gibt: Welche Daten werden tatsächlich zwischen den Spielen übertragen?

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
\`\`\`
Ich möchte einen Passthrough-Mod wie SkyCraft (https://github.com/chasmlol/SkyCraft) erstellen, aber für [Spiel A] und [Spiel B].

Klonen Sie SkyCraft lokal und lesen Sie die README-Datei und docs/DESIGN.md, damit Sie die Architektur verstehen. Ich möchte den gleichen Ansatz wie SkyCraft.

[Spiel A] ist unter [Pfad] installiert. [Spiel B] ist unter [Pfad] installiert.

Bevor Sie etwas bauen, sagen Sie mir:
- Welche Loader, APIs oder SDKs gibt es für diese Spiele?
- Gibt es entweder Online-Play oder Anti-Cheat? (Wir rühren diese nicht an.)
- Was ist das kleinste Ding, das ich zuerst bauen kann, um zu beweisen, dass es funktioniert?

Ändern Sie noch keinen Code. Melden Sie einfach, was Sie gefunden haben.
\`\`\`

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

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/02-passthrough-mods.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/02-passthrough-mods.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>`,t=`# 3. Rust Rewrites und Ports

Bei einer Umschreibung oder Portierung wird die Engine eines Spiels von Grund auf neu erstellt, sodass sie eigenständig und nicht im Original läuft. Die neue Engine liest zur Laufzeit Modelle, Texturen, Karten und Sounds aus **Ihrer eigenen installierten Kopie** des Spiels. Das Repo enthält nur Ihren Code.

## Beispiele zum Lernen

| Projekt | Was es zeigt |
|---------|---------------|
| [IW4L](https://github.com/vladtrc/iw4L) | A Call of Duty: Modern Warfare 2 (2009) Laufzeit in Rust und Bevy. Experimentell: Das Gameplay ist unvollständig, und das steht auch drin. Liest Ihre eigene Installation vor Ort und versendet keine Assets |
| [gang-beasts-rust](https://github.com/muffinmxn/gang-beasts-rust) | Python-Tools extrahieren die Daten Ihres Spiels in Formate, die von einer Rust/Bevy-Engine geladen werden. Eine Whitelist \`.gitignore\` hält extrahierte Dateien vom Repo fern |
| [benilla](https://github.com/samwhosung/benilla) | Ein WoW 1.12.1-Client in Rust und Bevy. Ein großes Projekt mit Hunderten von Commits, Readern für die Dateiformate des Spiels und einer generierten Karte des Codes |
| [2010 Rust Mashup neu schreiben](https://github.com/chasmlol/2010-rust-rewrite-mashup) | Eine Neufassung kombiniert mit anderen Spielen |

Die Guten haben einige Gewohnheiten gemeinsam: eine klare Liste „Was funktioniert / was fehlt“, keine Spieldateien, Credits und ein \`AGENTS.md\` oder Entwicklungsprotokoll, damit die Arbeit der KI verfolgt werden kann.

## Warum Rust und Bevy?

Sie müssen sie nicht verwenden. C und C++ funktionieren gut. Die Leute wählen Rust und Bevy, weil:

- Rust erkennt Speicherfehler, bevor das Spiel ausgeführt wird, sodass es weniger zufällige Abstürze gibt
- Es ist einfach einzurichten
- Bevy ist eine kostenlose Engine, die nur aus Code besteht und keinen Editor erlernen muss
- KI ist gut darin, Rust zu reparieren, da die Fehlermeldungen des Compilers sagen, was falsch ist

Nicht jedes Projekt verwendet Bevy. Dies ist die häufigste Wahl in diesem Bereich, aber Sie würden sich auch für eine andere entscheiden, wenn Sie möchten. IW4L verwendet außerdem wgpu zum Rendern zusätzlich zu Bevy und übersetzt den Direct3D 9-Shader-Bytecode des Originalspiels in WGSL.

Rust kommt auch in den Loadern selbst häufig vor. **[me3](https://github.com/garyttierney/me3)**, der Nachfolger von Mod Engine 2, ist ein Rust-Framework, das Elden Ring, Dark Souls III, Sekiro, Armored Core VI und Elden Ring Nightreign abdeckt, und sein Arbeitsbereich besteht aus einem lesbaren Satz kleiner Kisten: einem Launcher, einer IPC-Ebene, einem Mod-Host und einem Mod-Protokoll. Es handelt sich nicht um eine Neufassung des Spiels, aber die Art und Weise, wie es zusammengestellt ist, ist ein gutes Modell für die Art von Werkzeugen, auf die dieser Leitfaden immer wieder hinweist. [Leitfaden 8](08-mod-loaders-and-script-extenders.md) behandelt es als Loader, zusammen mit einer Einschränkung, die Sie kennen müssen, bevor Sie planen, es zu umgehen.

## Seien Sie realistisch, was die Größe angeht

Eine Neufassung ist eine große Aufgabe. IW4L hat etwa 160 Commits hinter sich und bezeichnet sich immer noch als experimentell, mit fehlendem Verhalten, Fehlern und Desynchronisationen. Benilla wird als vollständig beschrieben, mit Hunderten von Commits dahinter. Beginnen Sie mit einem Ziel, das in einen Satz passt, wie zum Beispiel „Laden Sie das erste Level, zeigen Sie es und gehen Sie darin herum.“ Wachsen Sie von dort aus.

## Wie diese Projekte normalerweise aufgebaut sind

1. **Extrahieren.** Tools (häufig Python) lesen die eigene Installation des Players und konvertieren Modelle, Texturen und Karten in Formate, die die Engine laden kann. Einige Projekte lesen stattdessen die Originalformate direkt zur Laufzeit.
2. **Engine.** Eine Rust-Engine (üblich ist Bevy) sowie eine Physikbibliothek zeichnen und simulieren die Welt.
3. **Erstelle die Regeln neu.** Zuerst Bewegung, dann Karten, dann Waffen und Interaktionen, dann alles andere.
4. **Vergleichen Sie mit dem echten Spiel.** Spielen Sie das Original neben Ihrem Build und beachten Sie die Unterschiede.
5. **Schreiben Sie auf, was funktioniert und was fehlt.**

Wenn Sie ein funktionierendes Spiel haben und ein zweites damit verknüpfen möchten, benötigen Sie [Guide 2](02-passthrough-mods.md). Viel kleinere Aufgabe.

## Muss ich dekompilieren?

**Normalerweise nicht, und überprüfen Sie dies, bevor Sie davon ausgehen.** In der Reihenfolge Ihrer Präferenz:

1. **Die Dateiformate sind bereits dokumentiert.** Für viele Spiele gibt es Community-Spezifikationen und für einige wurden bereits Open-Source-Reader geschrieben. Wenn einer vorhanden ist, verwenden Sie ihn. Dies ist der freie Weg.
2. **Das Spiel verfügt über eine Quellversion.** Einige Studios haben ihre Engines oder Spiele legal und öffentlich als Quelle veröffentlicht. Überprüfen.
3. **Sie benötigen die Logik der ausführbaren Datei.** Erst dann steht die Dekompilierung auf dem Tisch.

Die Leute überspringen regelmäßig die Schritte 1 und 2 und verlieren dadurch ganze Abende. Die zu befolgende Regel ist einfach: *Suchen Sie nach einem vorhandenen Dekomprimierungs- oder Formatierungsprojekt, bevor Sie beginnen.* Bitten Sie den Agenten, zuerst zu suchen. Es ist gut, Gemeinschaftsprojekte zu finden.

Zwei Orte, an denen es sich lohnt, manuell zu suchen, da der Makler von beiden nichts weiß:

- **[GameDecompLibrary](https://github.com/solarfren69420/GameDecompLibrary)** ist ein Katalog von 304 Dekompilierungsprojekten, Tools und Quellversionen, wobei jeder Eintrag mit seiner Methode und jeder Abbildung mit Quellen versehen ist. Überprüfen Sie es, bevor Sie etwas planen.
- **[Leitfaden 17](17-decompile-system-map.md)** deckt alles ab, was eine Dekompilierung mit sich bringt. Es lohnt sich, ihn zu lesen, bevor Sie den Arbeitsaufwand abschätzen.

Es lohnt sich, Schritt 1 vorzuziehen, auch wenn Schritt 3 funktionieren würde, und zwar aus einem Grund, der nichts mit Aufwand zu tun hat. **Das Studium eines Spiels über seine Benutzeroberfläche erfordert überhaupt kein Kopieren**, daher gibt es keine Frage zum Urheberrecht, die beantwortet werden muss. Sobald Sie einen Dekompilierer ausführen, ist eine Kopie des geschützten Ausdrucks auf Ihrer Festplatte vorhanden, und Sie sind von einer sauberen Position zu einer Position übergegangen, die von einem Fair-Use-Argument abhängt. Bevorzugen Sie die Beobachtung, wo immer die Frage dies zulässt. [Leitfaden 13](13-reverse-engineering-and-the-law.md#black-box-grey-box-white-box) behandelt die Unterscheidung und die Fälle dahinter.

### Wenn Sie es brauchen

Werkzeuge, in der Reihenfolge, in der es sich lohnt auszuprobieren:

| Werkzeug | Kosten | Notizen |
|------|------|-------|
| **Ghidra** | Kostenlos, Open Source | Das, was die Leute benutzen. Benötigt eine Java-Laufzeitumgebung und ein Prozessormodul für einige ältere Konsolen. Verfügt über einen [MCP-Server](https://github.com/bethington/ghidra-mcp) |
| **IDA Pro** | Kommerziell, teuer | Der Industriestandard, mit einem [offiziellen MCP-Server](https://github.com/HexRaysSA/ida-mcp) von Hex-Rays. Das kostenlose Kontingent ist begrenzt |
| **Binärer Ninja** | Kommerziell, günstiger als IDA | Wissenswertes darüber, obwohl es hier kein praktisches Beispiel für die Verwendung gibt |

**Die größere Frage ist, was der Code ist.** Die Wahl des falschen Tools für die Sprache verschwendet Tage, also überprüfen Sie dies, bevor Sie etwas installieren:

| Was das Spiel verwendet | Wonach greifen |
|---|---|
| Verwaltetes .NET (Terraria, Stardew, Celeste, die meisten Unity auf Mono) | [ILSpy](https://github.com/icsharpcode/ilspy). Dekompiliert in lesbares C# und \`ilspycmd\` gibt ein ganzes Projekt aus, das Sie durchsuchen können |
| Unity IL2CPP | [Cpp2IL](https://github.com/SamboyCoding/Cpp2IL) gegen \`GameAssembly.dll\` plus \`global-metadata.dat\`, dann Ghidra für die Methodenkörper, die nativ sind |
| Java | Vineflower, CFR oder Recaf. Verwenden Sie für Minecraft Looms \`genSources\` mit Mojang-Zuordnungen |
| Natives C/C++ | Ghidra oder IDA, gesteuert über einen MCP-Server, sodass der Agent Funktionen selbst dekompilieren und umbenennen kann |
| Einzelhandels-ROMs und Disc-Images | [N64Recomp](https://github.com/N64Recomp/N64Recomp) kompiliert N64-Spiele neu in native ausführbare Dateien, anstatt sie zu emulieren. Andere Konsolen verfügen über ähnliche Tools |
| Live-Erinnerung | Cheat Engine für einen Wertescan, x64dbg für Haltepunkte, Frida zum Hooken von Funktionen |
| Rendern | RenderDoc, um einen Frame zu erfassen und jeden Draw-Aufruf und jedes Renderziel anzuzeigen |
| Daten- und Asset-Dateien | Das Community-Tool zuerst. Unity: UABEA oder AssetRipper. Unreal: FModel oder UAssetGUI. Bethesda: xBearbeiten. GameMaker: UndertaleModTool |

Zwei Einschränkungen von Cpp2IL, die Sie kennen sollten, bevor Sie sich einen Nachmittag Zeit nehmen: Die Analyse funktioniert nicht für Spiele, die auf Unity 2020.2 oder höher abzielen, und es erzeugt Pseudocode- und Textanalysen statt echter IL.

**Lesen Sie das Original, raten Sie nicht.** Die Dekompilerausgabe, die tatsächliche Datendatei, ein Speicherlesevorgang oder eine GPU-Erfassung ist die Spezifikation. Schreiben Sie nach und nach auf, was Sie gelernt haben, mit Namen, IDs, Offsets und Formaten, denn Sie werden es in einer Stunde noch einmal benötigen.

Das Ansteuern eines Dekompilers über einen MCP-Server verändert den Arbeitsablauf. Ohne eine fügen Sie Disassembly in einen Chat ein und fügen es wieder ein. Bei einem liest der Agent den Dekompiler direkt, also bitten Sie ihn, eine Funktion zu finden oder alles umzubenennen, was er versteht.

Den Agenten zu bitten, einen Ordner „mit den richtigen Tools“ zu dekompilieren, ist eine realistische Anforderung: Er identifizierte die Plattform und das Format, installierte Ghidra mit dem richtigen Prozessormodul und führte den Prozess aus. Das ist ungefähr der Workflow, den Sie anstreben.

### Eine realistische Aufforderung
\`\`\`
Ich möchte verstehen, wie [Spiel] seine [Karten/Modelle/Animationsdaten] speichert.

Bevor Sie etwas installieren: Informieren Sie sich, ob eine Community vorhanden ist
Dokumentation, eine Open-Source-Bibliothek oder ein Decomp-Projekt für dieses Spiel
Dateiformate. Sag mir zuerst, was du gefunden hast.

Wenn nichts vorhanden ist und die ausführbare Datei die einzige Option ist, verwenden Sie Ghidra.
Arbeiten Sie im [Gitignored-Ordner]. Schreiben Sie nichts in dieses Repo außer
eine Notizdatei, in der beschrieben wird, was Sie gelernt haben.
\`\`\`

### Regeln für die Ausgabe

- **Alles bleibt auf Ihrem Computer.** Übertragen Sie niemals dekompilierten Code, Ghidra-Datenbanken oder extrahierte Assets. Siehe [Leitfaden 6](06-rules-legal-and-publishing.md).
- **Verwenden Sie vom ersten Tag an eine Whitelist \`.gitignore\`**, damit eine extrahierte Datei nie versehentlich übernommen werden kann.
- **Schreiben Sie das Gelernte als Dokumentation auf**, nicht als Code. Diese Dokumentation ist der gemeinsam nutzbare Teil. Auf diese Weise existieren Open-Source-Engine-Reimplementierungen wie [OpenMW](https://github.com/OpenMW/openmw) und [OpenRCT2](https://github.com/OpenRCT2/OpenRCT2).
- **Einzelspieler-Offline-Spiele, die nur Ihnen gehören.** Lassen Sie DRM in Ruhe. Lassen Sie Anti-Cheat in Ruhe. Zielen Sie nicht auf irgendetwas, um Zugangskontrollen zu umgehen. Siehe [Leitfaden 6](06-rules-legal-and-publishing.md).
- **Verteilen Sie die Ausgabe nicht weiter.** Das persönliche Studium eines Spiels, das Sie besitzen, ist der Umfang. Die Veröffentlichung extrahierter Assets oder dekompilierter Quellen erfolgt nicht.
- **Halten Sie Ihre Forschung lokal.** IW4L nutzte Ghidra, um die ursprünglichen Binärdateien zu inspizieren und aufzuzeichnen, was es in \`docs/provenance/\` gelernt hat, wobei die Dumps und Datenbanken selbst aus dem Repo herausgehalten wurden.

Lesen Sie [Anleitung 6](06-rules-legal-and-publishing.md), bevor Sie diesen Weg beschreiten. Es ist keine Rechtsberatung, aber es listet auf, was die eigenen Tools der Community nicht leisten können.

## Schritt für Schritt

1. Wählen Sie ein Spiel und ein Ein-Satz-Ziel aus.
2. Suchen Sie nach vorhandenen Forschungsergebnissen, Tools und Decomp-Projekten.
3. Öffnen Sie Ihren Agenten in einem neuen Projektordner mit installiertem Rust (rustup.rs). Unter Windows benötigen Sie außerdem die Build-Tools von Visual Studio C++.
4. Senden Sie die Starteraufforderung.
5. Bauen Sie in kleinen Schritten auf und testen Sie jeden einzelnen Schritt.
6. Führen Sie ein Protokoll darüber, was funktioniert und was nicht. Aktualisieren Sie die Liste „Was funktioniert / was fehlt“ in der README-Datei.
7. Teilen Sie es als GitHub-Repo ohne Spieledateien. Siehe [Leitfaden 10](10-posting-your-project.md).

## Start-Prompt
\`\`\`
Ich möchte ein Rust-Rewrite von [Spiel] erstellen, das seine Daten zur Laufzeit aus meiner eigenen installierten Kopie unter [Pfad] liest. Verwenden Sie [IW4L / gang-beasts-rust / benilla] als Referenz für die Struktur: [Links].

Regeln: Kopieren Sie niemals Spielinhalte oder dekompilierten Code in das Repo. Verwenden Sie eine Whitelist .gitignore. Schreiben Sie alles, was Sie lernen, gut und behalten Sie die Lizenzen.

Suchen Sie zunächst nach vorhandener Dokumentation, Dateiformatspezifikationen und Decomp-Projekten für dieses Spiel und sagen Sie mir, was es da draußen gibt, bevor Sie mit der Erstellung beginnen.
\`\`\`

## Passthrough oder Umschreiben?

| | Passthrough | Umschreiben |
|--|-------------|---------|
| Ziel | Mischen Sie das Gameplay zweier Spiele | Eine eigenständige Engine, die Sie steuern |
| Bedürfnisse | Beide Spiele laufen zusammen | Nur Ihre Spieledateien |
| Größe | Oft kleiner | Oft viel größer |
| Gutes erstes Projekt? | Normalerweise | Nur mit einem kleinen Ziel |

---

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/03-rust-rewrites-and-ports.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/03-rust-rewrites-and-ports.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>`,r=`# 4. Aufforderung und Arbeitsablauf

## Es gibt keine magischen Aufforderungen

Sie sagen dem Agenten, was Sie wollen, und er tut es. Personen, die diese Projekte versendet haben, verlinken ein Beispiel-Repo, sagen „Ich möchte das für [meine Spiele]“ und lassen den Agenten arbeiten.

Sie sind sich nicht einig darüber, wie viele Details in die erste Nachricht gehören. Beide Seiten sind unten aufgeführt, sodass Sie jede ausprobieren können.

## Zwei Denkschulen

**Kurz und locker.** Eine große, perfekt geschriebene erste Aufforderung kann eine Falle sein. Sie diktieren per Stimme, schwafeln ein wenig und senden eine unordentliche Nachricht. Die Begründung: Der Agent kennt den effizienten Weg, und eine Überspezifizierung kann dazu führen, dass er den falschen Weg einschlägt. Eine Eingabeaufforderung, die gerade in einer langen Sitzung ausgeführt wird, lautet ungefähr: „Es fehlen derzeit noch einige Dinge, oder? Ok, fügen wir sie hinzu.“

**Detailliert mit Kontext.** Andere argumentieren, dass mehr Kontext zu besseren Ergebnissen führt und dass eine gute Eingabeaufforderung Zeit und Aufwand spart. Sie legen Wert auf Effizienz, insbesondere bei Plänen mit Nutzungsbeschränkungen. Niemand hat dies geklärt, und es wäre eine gute Sache, es zu testen und darüber zu schreiben.

Ein Punkt von dieser Seite ist es wert, ernst genommen zu werden, da er den Instinkt „Schreiben Sie eine bessere erste Eingabeaufforderung“ untergräbt: Eine Eingabeaufforderung ist ein winziger Bruchteil des Kontexts eines Chats. Was man in der ersten Runde sagt, spielt in der fünfzigsten Runde kaum noch eine Rolle. Das spricht dafür, den Chat zu reparieren und nicht die Eingabeaufforderung neu zu schreiben.

### Worüber sich beide Seiten einig sind

- **Machen Sie eine genaue Beschreibung des Problems, nicht der Implementierung.** „Das sieht schlecht aus, beheben Sie es“ bringt dem Agenten nichts. „Die Tür öffnet sich nicht, wenn ich daneben E drücke, und im Protokoll steht X“, tut es.
- **Geben Sie das Ziel und die Beweise an.** Sagen Sie, was Sie wollten, was passiert ist, und fügen Sie die Protokolle ein.
- **Modelliert den Tunnelblick.** Wenn der Agent beim falschen Ansatz stecken bleibt, sagen Sie es und weisen Sie ihn an eine andere Stelle.
- **Ein gutes Beispielprojekt ist besser als eine lange Erklärung.** Das Verknüpfen von SkyCraft oder IW4L bewirkt mehr, als sie zu beschreiben.

## In kleinen Schritten arbeiten

Das ganze Spiel auf einmal zu verlangen, geht meist schief. Diese Gewohnheiten helfen:

- Bitten Sie jeweils um eine Sache und lassen Sie sich vom Agenten erklären, wie diese ausgeführt wird und was Sie sehen sollten.
- Commit nach jedem Arbeitsschritt zu Git. Mit der Versionskontrolle können Sie Fehler rückgängig machen.
- Bitten Sie den Agenten, zuerst einen Plan zu schreiben, wenn die Aufgabe groß ist oder Sie mehr Kontrolle wünschen.

## Halten Sie die Erinnerung an das Projekt auf Papier fest

Agenten vergessen zwischen den Sitzungen. Dateien nicht. Bewahren Sie drei kleine Dokumente in Ihrem Projekt auf:

1. **Eine Regeldatei** (\`AGENTS.md\` oder \`CLAUDE.md\`): was der Agent immer tun oder nie tun muss. IW4L behält einen mit dem Namen \`AGENT.md\`. Siehe [\`templates/AGENTS-starter.md\`](../templates/AGENTS-starter.md).
2. **Ein Entwicklungsprotokoll** (\`MODLOG.md\`): Was hat sich geändert, wie wurde es getestet, was ist immer noch kaputt. OWCraft behält eines und verlinkt es in seiner README-Datei. Siehe [\`templates/MODLOG-template.md\`](../templates/MODLOG-template.md).
3. **Ein Designdokument** (\`docs/DESIGN.md\`): wie das Projekt funktioniert, im Klartext. SkyCraft ist das beste Beispiel dafür im gesamten Bereich.

Bitten Sie den Agenten, sie bei Bedarf zu aktualisieren.

## Der Übergabetrick für festgefahrene Chats

Wenn ein Chat verwirrt oder sehr lang wird:

1. Bitten Sie den Agenten, den Projektstatus und das genaue Problem, an dem es hängt, in eine detaillierte \`.md\`-Datei zu schreiben.
2. Öffnen Sie einen **neuen Chat** und geben Sie ihm diese Datei.
3. Bitten Sie es, die Datei zu lesen und Möglichkeiten zur Fehlerbehebung vorzuschlagen.

Dies hilft am meisten bei weniger leistungsfähigen Modellen. Es funktioniert auch, Chats zu schließen und erneut zu öffnen, um alten Kontext zu löschen. Eine Vorlage befindet sich in [\`templates/STATUS-handoff.md\`](../templates/STATUS-handoff.md).

## Verbrauch sparen

- Lange Chats enthalten ihren gesamten Verlauf, sodass sie mehr von Ihrem Limit beanspruchen. Ein Neuanfang mit einer Übergabedatei hilft.
- Schließen Sie Chats und öffnen Sie sie erneut, wenn Sie das Thema wechseln.
Bitten Sie den Agenten frühzeitig, einen Dokumentationsstandard einzurichten und die Token-Effizienz im Auge zu behalten, ohne dass die Funktionalität verloren geht.
- Behandeln Sie nichts davon als Regel. Pläne und Modelle ändern sich.

## Wie lange es dauert

Es hängt vom Modell ab, davon, wie hart es denkt und wie groß die Aufgabe ist. Für eine einzelne Arbeit sind etwa 5 Minuten bis viele Stunden normal.

## Wenn Sie an einen neuen Chat übergeben

Der obige Handoff-Trick löst einen hängengebliebenen Chat. Es gibt zwei weitere Momente, in denen es sich lohnt, sauber anzufangen:

- **Starten eines neuen Projekts.** Nichts Nützliches wird zwischen unabhängigen Projekten übertragen, und ein langer Chat voller Details zu einem Spiel bringt den Agenten dazu, im nächsten nach ihnen zu greifen. \`STATUS.md\` pro Projekt übertrifft ein kontinuierliches Gespräch.
- **Agenten oder Modelle wechseln.** Verschiedene Tools lesen dieselben Dateien unterschiedlich. Eine Übergabedatei gibt der neuen den gleichen Ausgangspunkt.

## Eine funktionierende Start-Prompt

Jedes Beispielprojekt hier verwendet dieselbe Form. Zeigen Sie auf eine Referenz, benennen Sie die Substitution und fordern Sie zunächst einen schreibgeschützten Bericht an:
\`\`\`
Ich möchte [Projekttyp] wie [Referenzprojekt] ([Link]) erstellen, aber für [Ihre Spiele].

Klonen Sie es lokal und lesen Sie die README-Datei und alle Dokumente/Dateien, damit Sie es verstehen
Architektur. Ich möchte den gleichen Ansatz.

[Spiel A] ist unter [Pfad] installiert. [Spiel B] ist unter [Pfad] installiert.

Bevor Sie etwas bauen, sagen Sie mir:
- Welche Loader, APIs oder SDKs gibt es für diese Spiele?
- Gibt es entweder Online-Play oder Anti-Cheat? (Wir rühren diese nicht an.)
- Was ist das kleinste Ding, das ich zuerst bauen kann, um zu beweisen, dass es funktioniert?

Ändern Sie noch keinen Code. Melden Sie einfach, was Sie gefunden haben.
\`\`\`

Die letzte Zeile ist diejenige, die zählt. Es kostet Sie eine Runde und bewahrt Sie vor einem sicheren Plan, der auf einer falschen Annahme basiert.

## Lassen Sie den Agenten testen, was er kann, und Sie testen den Rest

Siehe [Anleitung 5](05-testing-and-troubleshooting.md). Die Kurzfassung: Der Agent ist schlecht darin, visuelle Elemente und „Gefühle“ zu beurteilen. Lassen Sie Zahlen und Ereignisse protokollieren und führen Sie die Spieltests durch.

---

## Die anregende Debatte

**Dieser Abschnitt ist geöffnet. Es ist zum Streiten gedacht.**

Das ist wirklich ungeklärt, und es ist nützlicher, das zu benennen, als sich für eine Seite zu entscheiden. Hier finden Sie die vollständigen Argumente. Lesen Sie beide, probieren Sie beide aus und veröffentlichen Sie Ihre Ergebnisse auf Discord.

> **Ein Mitglied:** „Leute, es gibt keine Tricks oder spezielle Aufforderungen, man sagt der KI buchstäblich einfach, dass sie etwas tun soll, und sie wird es tun. Das ist alles, was ich tue.“
>
> „Wenn Sie eine große, detaillierte Eingabeaufforderung genau so schreiben, wie Sie es wollen, dann ist das schlimmer, als die KI beflügeln zu lassen. Die KI kennt den besten und effizientesten Weg zum gewünschten Ergebnis.“
>
> „Je konkreter, desto schlimmer, mein Mann“
>
> „Ich verstehe nicht, was du meinst, Mann, bessere Aufforderungsmethode? Wie würde das funktionieren? Dir ist klar, dass die Aufforderung etwa 0,1 % des Kontexts eines Chats ausmacht.“

> **Dasselbe Mitglied**, später unter Berufung auf Andrej Karpathy: *„Ein Muster, das ich für die Arbeit mit LLMs nützlich finde, ist eine schöne lange Ramble-Sitzung. Manchmal braucht das LLM mehr Bits, um zu verstehen, was Sie erreichen wollen, aber Sie sind zu faul, sie einzugeben.“* ([Quelle](https://x.com/karpathy/status/2079610838143623371))

> **Ein anderes Mitglied:** „Das sind im wahrsten Sinne des Wortes Inferenzmaschinen, sie benötigen Kontext. Je mehr Kontext Sie bereitstellen, desto besser.“
>
> „Je spezifischer und genauer Ihre Eingabeaufforderung ist, desto besser werden die Gewichte eingestellt. Je schneller und effizienter das Modell die gestellte Aufgabe erledigt.“

> **Sonstiges:** „KI-Tunnelvisionen bei Implementierungen gibt es viele.“
>
> „In diesem Zusammenhang stimme ich zu, im beruflichen Kontext ist das Gegenteil der Fall.“

> **Sonstiges:** „Ich habe festgestellt, dass spezifischere Prompts in manchen Fällen einen Tunnelblick auf die falschen Dinge verursachen können.“
>
> „Meine aktuelle Eingabeaufforderung, die gerade ausgeführt wird, lautet: ‚Im Moment fehlen noch einige Dinge, oder? Ok, fügen wir sie hinzu‘“

> **Anderes:** „Ich würde in Ihrer Idee anfangen, einen Dokumentationsstandard zu erstellen. Sagen Sie ihm, dass Ihnen die Token-Effizienz am Herzen liegt, Sie aber nicht auf Funktionalität verzichten möchten.“

### Eine Anmerkung zu diesen Zitaten

Namen werden absichtlich entfernt. Dabei handelt es sich um Discord-Nachrichten echter Menschen, und es lohnt sich nicht, sie ohne Nachfrage öffentlich zu zitieren.

Sie sind auch nicht wörtlich: Die Groß- und Kleinschreibung von Discord wurde an einigen Stellen aufgeräumt. Der Wortlaut bleibt ansonsten unverändert, aber behandeln Sie sie nicht als Transkripte.

Das Karpathy-Zitat ist aus zweiter Hand. Er wurde in den Chat eingefügt und der Link stimmt mit dem eingefügten Text überein, aber niemand hat den ursprünglichen Beitrag gelesen.

### Worum es eigentlich bei der Meinungsverschiedenheit geht

Wenn man sie nebeneinander liest, enthalten diese Zitate zwei separate Argumente:

**1. Wählt eine Überspezifizierung den falschen Ansatz?** Die Short-and-Loose-Seite sagt ja. Geben Sie die Umsetzung vor, und der Agent verpflichtet sich dazu, da die Modelle einen Tunnelblick auf die erste Idee haben, die sie entwickeln. Auf der Kontextseite heißt es, das *Ziel* genau zu beschreiben und dem Agenten die Wahl der Route zu überlassen. Präzision hinsichtlich des Ergebnisses ist nicht dasselbe wie das Vorschreiben der Methode.

**2. Spart es Zeit?** Das stärkste Argument der Kontextseite sind Nutzungsbeschränkungen. Wenn eine vage Aufforderung den Agenten in die Irre führt und Sie Ihr 5-Stunden-Fenster in Sackgassen verbrennen, gewinnt „effizient“, auch wenn die vage Aufforderung irgendwann dort angekommen wäre. Der 0,1-Prozent-Punkt steht im Widerspruch zur gesamten Debatte: Die Länge der Eingabeaufforderung ist wahrscheinlich nicht das, was es wert ist, optimiert zu werden.

### Wo das landet

Kein Urteil. Etwas, das Sie so oder so ausprobieren können:

- **Seien Sie präzise über das Ziel und die Beweise.** Darin sind sich beide Seiten einig, und darauf kommt es tatsächlich an.
- **Seien Sie bei der Implementierung locker.** Der häufigste dokumentierte Fehlermodus ist Tunnelblick, daher birgt der Hinweis auf eine Methode statt auf ein Ergebnis ein echtes Risiko.
- **Wenn Sie nicht weiterkommen, ändern Sie den Kontext, anstatt die Eingabeaufforderung neu zu schreiben.** Starten Sie einen neuen Chat mit einer [\`STATUS-handoff.md\`](../templates/STATUS-handoff.md)-Datei. Das funktioniert unabhängig davon, in welcher Schule Sie sind.
- **Langfristige Projekte benötigen beides.** Der lockere Ansatz eignet sich für ein zweistündiges Projekt. Sobald Sie 200 Commits durchgeführt haben, sind die Regeldatei und das Protokoll wichtiger als jede einzelne Eingabeaufforderung.

### Probieren Sie es aus und sagen Sie es uns

Hier wäre ein kontrollierter Vergleich wünschenswert. Protokollieren Sie dieselbe Aufgabe zweimal mit einer losen und einer detaillierten Eingabeaufforderung und notieren Sie Folgendes:

- wie viele Umdrehungen es dauerte
- ob ein funktionierendes Ergebnis erzielt wurde
- Wie viel von Ihrem Nutzungslimit wurde verbraucht?
- was es falsch gemacht hat

Veröffentlichen Sie es auf Discord und die besten werden auf dieser Seite zusammengefasst. Ein GitHub-Problem funktioniert auch, wenn Sie es lieber an einem dauerhaften Ort aufschreiben möchten.

### Ein paar Dinge, die im Thread angesprochen wurden

- **Sprachdiktat.** Mehrere Personen diktieren statt zu tippen, wodurch Sie kostenlos eine lange, ausschweifende Eingabeaufforderung erhalten und der Versuchung entgehen, diese zu überarbeiten.
- **Tinte und Papier sind billiger als Sie denken.** Eine Eingabeaufforderung macht einen kleinen Teil der Kosten für einen Chat aus, ein Chat mit 200 Runden jedoch nicht. Ein Neuanfang und die Übergabe einer Akte ist die eigentliche Ersparnis.
- **Lassen Sie es testen, aber verhindern Sie, dass es hinschaut.** Es wird versucht, das Spiel visuell zu überprüfen, was nicht möglich ist. Siehe [Anleitung 5](05-testing-and-troubleshooting.md).
- **Erklären Sie Ihre Einschränkungen, nicht Ihre Implementierung.** „Es muss auf einem 2015-Laptop funktionieren“ ist Kontext. „Verwenden Sie einen Thread-Pool“ ist eine Anweisung.

---

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/04-prompting-and-workflow.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/04-prompting-and-workflow.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>`,s=`# 5. Tests und Fehlerbehebung

## Du machst den Spieltest

Der Agent kann ein Spiel nicht in Echtzeit verfolgen und kann daher schlecht beurteilen, wie die Dinge aussehen und sich anfühlen. Möglicherweise wird ein fehlender Partikeleffekt, ein falsch gedrehtes Modell oder eine ruckartige Bewegung nicht bemerkt. Erfahrene Mitglieder handhaben dies auf zwei Arten:

- **Fragen Sie nach Telemetrie.** Lassen Sie den Agenten so viel wie möglich protokollieren (Positionen, Schadenszahlen, Ereignisse, Bildzeiten), damit er seine eigene Arbeit überprüfen kann, ohne auf den Bildschirm zu schauen. Ein nützliches Muster besteht darin, Schadenszahlen aus den Protokollen abzulesen, während Sie eine Trainingspuppe treffen.
- **Testen Sie sich selbst.** Wenn der Agent versucht, visuell zu testen, stoppen Sie ihn und sagen Sie, dass Sie den Test durchführen werden. So oder so verifizieren Sie schneller, als es möglich wäre.

Es hilft auch, die Benutzeroberfläche und die Menüs frühzeitig zu sortieren, da es spätere Tests einfacher macht.

## So melden Sie ein Problem

„Es funktioniert nicht“ kann nicht behoben werden. Dies kann:
\`\`\`
Ich habe Folgendes getan: [Was Sie getan haben, Schritt für Schritt]
Ich habe erwartet: [was du wolltest]
Was ist passiert: [was tatsächlich passiert ist]
Protokolle: [Fügen Sie die relevanten Protokollzeilen aus beiden Spielen ein, wenn es sich um einen Passthrough-Mod handelt]

Finden Sie die Ursache, bevor Sie einen Code ändern.
\`\`\`

## Wenn der Agent in einer Schleife steckt

1. Stoppen. Das Wiederholen derselben Aufforderung hilft selten.
2. Bitten Sie es, eine Statusdatei zu schreiben: den Projektstatus und das genaue Problem. Siehe [\`templates/STATUS-handoff.md\`](../templates/STATUS-handoff.md).
3. Starten Sie einen neuen Chat und geben Sie ihm die Datei.
4. Fragen Sie nach verschiedenen Ansätzen und erklären Sie, welche bereits gescheitert sind.
5. Wenn dies immer noch nicht möglich ist, kann ein kleineres Ziel oder ein anderes Modell helfen.

## Häufige Probleme

**„Die Datei ist zu groß“ oder Sie kopieren den Code von Hand.**
Sie befinden sich wahrscheinlich auf einer Chat-Website oder im Nicht-Agent-Modus. Wechseln Sie zu einem Agenten. Siehe [Anleitung 1](01-choose-and-set-up-an-ai-agent.md).

**Der Agent kann nicht auf meine Dateien zugreifen / Codex erhält weiterhin keinen Zugriff.**
Überprüfen Sie die Dokumentation des Tools auf Berechtigungs- oder Sandbox-Einstellungen. Gewähren Sie ihm nur Zugriff auf Ihre Projekt- und Spielordner.

**Mir ist die Nutzung ausgegangen.**
Die Pläne haben ein Reset-Fenster von etwa 5 Stunden und ein wöchentliches Limit. Starten Sie neue Chats mit Übergabedateien und überprüfen Sie die aktuellen Pläne Ihres Anbieters.

**Die KI weigert sich.**
Lesen Sie den Grund. Wenn es um Anti-Cheat- oder Online-Spiele geht, lautet die Antwort „Nein“, und diese werden nicht unterstützt. Wenn es sich um eine Einzelspieler-Mod mit Ihrer eigenen Kopie des Spiels handelt, sagen Sie das deutlich und beschreiben Sie Ihr Ziel ehrlich. Versuchen Sie nicht zu verschleiern, was Sie tun, und versuchen Sie nicht, DRM oder Anti-Cheat zu umgehen.

**Das Spiel stürzt ab oder mein Speicher ist kaputt.**
Sichern Sie Ihre Spielstände vor dem Testen. Mehrere Projekte warnen davor, dass sie früh und experimentell seien. Rollback mit Git durchführen. Überprüfen Sie die bekannten Einschränkungen des Projekts.

**Die Version stimmt nicht überein.**
Mods und Extraktoren sind an bestimmte Spielversionen gebunden. Bei einigen Spielen ist ein Downgrade-Tool erforderlich, um auf die unterstützte Version zu gelangen. GTA San Andreas benötigt beispielsweise Version 1.0 für GTA San AnSkateas. Sehen Sie sich die README-Datei des Projekts an, dem Sie folgen.

**Antivirus hat einen Download gemeldet.**
Nicht signierte Tools und gebündelte Starter werden manchmal gekennzeichnet. In einem SkyCraft-Problem meldete ein Benutzer eine Malwarebytes-Flagge in einer Veröffentlichungs-ZIP-Datei, die bei einem erneuten Scan nicht angezeigt wurde, und ein Online-Scanner zeigte keine Erkennungen. Es lohnt sich dennoch zu prüfen, woher eine Datei stammt, und ein Issue für das Projekt zu eröffnen.

**Die Gastwelt gleitet, flackert, scheint durch Wände hindurch oder der Spieler fällt durch den Boden.**
Dies hat bekannte, übliche Ursachen: eine Kameraposition aus dem falschen Bild, eine nicht lesbare oder bereits gelöschte Tiefe, eine Kollision, die nur in eine Richtung verläuft, oder ein veraltetes Bild auf dem Bildschirm. [Leitfaden 16](16-ownership-sync-and-rendering.md) listet sie mit den Leistungen jedes Projekts auf.

**Es funktioniert, ist aber langsam oder ruckelt.**
Erwartet und normalerweise reparierbar. Fordern Sie Frame-Time-Protokolle von beiden Prozessen an und weisen Sie ihn an, ein Profil zu erstellen, bevor Sie etwas ändern. Den Notizen von OWCraft zufolge dauerte das Überspringen der Präsentation des versteckten Fensters Minecraft von 25 auf 60 fps.

Das Gameplay-Spiel muss seinen Client noch ausführen. Es ist versteckt und nicht kopflos: Je nach Design erstellt es die Netze, die der Host zeichnet, oder rendert das Bild, das der Host einfügt, sowie die Hand und das HUD.

Weitere Vorteile sind das Senden von Deltas anstelle des vollständigen Status und die Festlegung Ihrer Aktualisierungsrate. Siehe [Leitfaden 9](09-worked-example-passthrough-mod.md#step-8-make-it-not-stutter).

**Der Mod funktioniert bei mir, aber nicht bei einem Freund.**
Überprüfen Sie, ob beide Spiele, die richtigen Versionen und die gleichen Loader installiert sind. Bitten Sie sie um Protokolle.

**Ein für ein Spiel erstellter Mod läuft auf dem Setup meines Computers nicht.**
Notieren Sie Ihr Betriebssystem, Ihre Spielversionen und Toolversionen, wenn Sie um Hilfe bitten, und fügen Sie Protokolle bei. Einige Projekte werden nur auf einem Setup getestet (OWCraft sagt, dass es auf einem Windows-PC getestet wurde).

## Bitte um Hilfe

Posten Sie auf Discord oder öffnen Sie ein GitHub-Problem. Enthalten:

- die Spiele und ihre genauen Versionen
- die Lader und ihre Versionen
- den von Ihnen verwendeten Agenten und das Modell
- was du versucht hast
- die Fehlermeldung oder Protokolle

Ein \`STATUS.md\`, das durch den Handoff-Trick in [\`templates/STATUS-handoff.md\`](../templates/STATUS-handoff.md) geschrieben wurde, enthält bereits das meiste davon. Antworten kommen schneller zurück und es funktioniert in einem Discord-Thread oder einer GitHub-Ausgabe genauso gut wie in einem neuen Chat.

Für alles, was Sie getestet haben, gibt ein [\`PLAYTEST-report.md\`](../templates/PLAYTEST-report.md) an, welche Versionen und Einstellungen Sie verwendet haben und welche nicht.

---

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/05-testing-and-troubleshooting.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/05-testing-and-troubleshooting.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>`,a=`# 6. Regeln, Recht und Veröffentlichung

Dies ist keine Rechtsberatung. Es ist das, was der Discord erfordert und was die Beispielprojekte tun. Die vollständige Anleitung zum Posten finden Sie in [Leitfaden 10](10-posting-your-project.md).

## Die goldene Regel: Keine Spieledateien in Ihrem Repo

Ihr Repository enthält **nur Ihren Code**. Begehen Sie niemals Folgendes:

- Spielressourcen (Modelle, Texturen, Sounds, Schriftarten, Karten, Shader)
- Spieldateien oder Ordner
- dekompilierter Code oder Ghidra-Datenbanken
- Aus dem Spiel extrahierte Dateien
- Minecraft Assets (sie stammen zur Laufzeit aus der eigenen Kopie des Players)

Die Spieler liefern ihre eigenen Kopien. Die Beispielprojekte handhaben dies auf verschiedene Arten:

- **Setup, das aus den Kopien des Spielers erstellt wird.** GTA San AnSkateas liefert ein Setup-Skript aus, das aus den eigenen Installationen des Spielers erstellt, was der Mod benötigt.
- **Extraktor-Tools.** gang-beasts-rust verfügt über Python-Tools, die die Installation des Players lesen und extrahierte Daten in einen Ordner schreiben, den Git ignoriert. Bitten Sie Ihren Agenten, eines davon für Sie zu schreiben.
- **Lesen zur Laufzeit.** IW4L und Benilla lesen die Dateien des Spiels an Ort und Stelle und kopieren sie niemals.

### Verwenden Sie eine Whitelist \`.gitignore\`

Ein normaler \`.gitignore\` listet auf, was weggelassen werden soll. Eine **Whitelist** \`.gitignore\` ignoriert alles und listet nur auf, was aufgenommen werden soll. Auf diese Weise kann eine extrahierte Datei niemals versehentlich übernommen werden. Gang-Beasts-Rust macht das. Bitten Sie Ihren Agenten, es am ersten Tag einzurichten.

Die Vorlage in [\`AGENTS-starter.md\`](../templates/AGENTS-starter.md) enthält dies als feste Regel.

## Nur Einzelspieler und offline

- **Fügen Sie keinen Code in einen Online-Client ein.** Kernel- und Benutzermodus-Anti-Cheat sind ein Stoppschild: Easy Anti-Cheat, BattlEye, Vanguard, EA Javelin, Ricochet, ACE, nProtect, XIGNCODE und mhyprot. Du kannst gesperrt werden. Mitglieder berichten, dass Claude nicht dabei hilft, Anti-Cheat zu umgehen, und das Universal-Modder-Toolkit beschränkt sich auch auf Einzelspieler- oder Offline-Spiele und hält sich von Anti-Cheat fern.
- Wenn Ihr Spiel über einen Online-Modus verfügt, arbeiten Sie nur im Einzelspieler- oder Offline-Modus.
- Tools, die neben einem geschützten Spiel ausgeführt werden, können dessen Anti-Cheat auslösen, selbst wenn Sie es nie berühren. Schließen Sie das Spiel vor einer Reverse Engineering-Sitzung.

## Automatisieren Sie nicht die Tastatur der Person

Dies gerät in Vergessenheit, weil es nicht um die Spielregeln geht, sondern darum, wer an der Maschine sitzt.

Eine Automatisierung, die Maus und Tastatur steuert, übernimmt deren Eingaben. Fragen Sie nach, bevor Sie eine lange automatisierte Sitzung starten, während Sie am PC sitzen, und prüfen Sie zunächst, ob das Fenster inaktiv ist.

Fragen Sie auch vor diesen Dingen: Installieren eines Loaders in einem Spielordner, Ändern der Registrierungs- oder Grafikeinstellungen, Löschen von Inhalten oder Veröffentlichen in ihrem Namen.

Und beenden Sie keine Prozesse mit einem Wildcard-Matcher. \`pkill -f\` entspricht Ihrer eigenen Shell. Töten Sie anhand der genauen Prozess-ID.

Dies ist die Regel, gegen die Menschen am häufigsten verstoßen, meist aus Versehen. Wenn Sie jemand bittet, den Inhalt eines Online-Spiels zu einem Projekt hinzuzufügen, ist das die richtige Antwort. Siehe die Tabelle „Ideen, die nicht funktionieren“ in [Leitfaden 2](02-passthrough-mods.md).

## Reverse Engineering: Was ist in Ordnung und was nicht

Reverse Engineering ist ein normaler Teil dieser Arbeit und [Leitfaden 3](03-rust-rewrites-and-ports.md) deckt die Werkzeuge ab. Das Gesetz hinter diesen Zeilen finden Sie in [Leitfaden 13](13-reverse-engineering-and-the-law.md), und was zu tun ist, wenn ein Verlag Sie kontaktiert, finden Sie in [LEGAL.md](../LEGAL.md). Die Zeilen sind:

**Gut:**
- Studieren Sie ein Spiel, das Sie besitzen, auf Ihrem eigenen Computer und für den eigenen Gebrauch
- Verwendung von Dekompilierern und Formatdokumentation zum Verständnis von Dateiformaten
- Veröffentlichen Sie Ihre *Ergebnisse* als Dokumentation, so existieren OpenMW und OpenRCT2
- Extraktoren bauen, damit andere Spieler ihre eigenen Kopien lesen können
- Extrahieren eines Spiels von Ihrer eigenen Disc oder Ihrem eigenen Dump, damit ein Versionsanpassungstool den benötigten Build erreichen kann

**Nicht in Ordnung:**
- DRM, Aktivierung oder Kopierschutz umgehen
- Umgehung von Anti-Cheat
- Weiterverbreitung extrahierter Assets, dekompilierter Quellen oder Spieldaten
- Herunterladen einer ISO oder eines Dumps von einer Filesharing-Site
- Entwicklung eines Tools, dessen Zweck es ist, Zugriffskontrollen zu umgehen

Ein Versions-Downgrader sitzt auf der guten Seite. Es existiert, damit eine Kopie, die Sie besitzen, den Build erreicht, für den ein Mod geschrieben wurde, und es hat keinen Einfluss auf den Schutz auf der Disc.

Das allgemeine Prinzip: Wenn ein Lader überprüft, ob Sie das Spiel besitzen, erfüllen Sie die Prüfung auf die vorgesehene Weise. tModLoader weigert sich zu starten, es sei denn, die kostenlose Begleit-App befindet sich in Ihrer Steam-Bibliothek, und die Antwort besteht darin, diese App hinzuzufügen und nicht, die Prüfung zu patchen. Wenn ein Tool nur funktioniert, indem es DRM deaktiviert oder eine Eigentumsprüfung umgeht, ist das der Fall.

Es gibt einen rechtlichen Grund, warum diese Regel an dieser Stelle übernommen wird, und es lohnt sich, sie zu kennen, da sie mehr Fälle abdeckt als das tModLoader-Beispiel. Die Umgehung einer technischen Schutzmaßnahme ist ein vom Kopieren getrennter Verstoß und steht für sich allein. Die Installation eines Mods kann völlig legal und dennoch illegal sein, wenn die Installation bedeutet, dass der Schutz überschritten wird. Die Verwendung eines Loaders, der vom Herausgeber bereitgestellt wird oder den die Community offen pflegt, ist ein anderer Vorgang als das Patchen eines Checkouts einer ausführbaren Datei.

**Eine weitere Regel, die die Leute überrascht**, und dabei geht es überhaupt nicht um DRM. Gerichte betrachten **identische Fehler und identischen toten Code** als den stärksten verfügbaren Beweis dafür, dass Sie kopiert und nicht unabhängig geschrieben haben. Zwei Personen, die die gleiche Spezifikation umsetzen, kommen nicht unabhängig voneinander zum gleichen Bruchkantenfall. Wenn Ihr Code und das Original eine sinnlose Eigenart aufweisen, haben Sie ihn kopiert. Schreiben Sie diese absichtlich um und hinterlassen Sie einen Kommentar mit der Begründung.

Das ist bei einem Agenten wichtiger als bei einer Person, denn ein Agent, der mit dekompilierten Ausgaben arbeitet, reproduziert die Struktur originalgetreu, einschließlich sinnloser Teile. [Leitfaden 13](13-reverse-engineering-and-the-law.md#doing-this-with-an-agent) beschreibt, wie man dies umgeht.

Auch ohne den Versand von Assetsn kommt es zu Takedowns. Take-Two veranlasste GitHub, re3 und reVC, den rückentwickelten GTA III- und Vice City-Code, zu entfernen, und verklagte später die Autoren. Activision hat dem H2M-Mod am Tag vor seiner Veröffentlichung eine Unterlassungserklärung geschickt. Garry's Mod hat nach einem Deaktivierungsantrag zwanzig Jahre Nintendo-bezogene Workshop-Inhalte entfernt. Es ist notwendig, Spieledateien aus Ihrem Repo fernzuhalten, aber nicht ausreichend.

Wenn Ihnen das passiert, gibt es einen formellen Weg statt nur zu löschen und zu hoffen, und er enthält Fristen und Meineidbescheinigungen. Lesen Sie es in [LEGAL.md](../LEGAL.md#if-your-repository-gets-a-takedown), bevor Sie jemandem antworten, und beauftragen Sie einen Anwalt, bevor Sie etwas einreichen.

Wenn Sie nicht sicher sind, wo sich eine Leitung befindet, fragen Sie nach. Niemand gerät in Schwierigkeiten, weil er zuerst fragt.

## Online-Spiel und Anti-Cheat

Einzelspieler und offline, immer. Zwei Dinge sollten präzisiert werden, denn beide kommen zur Sprache:

- **Anti-Cheat ist kein generelles Verbot.** Einige Spiele mit Anti-Cheat ermöglichen das Offline-Modifizieren über die spieleigene Option. Rocket League ist das gängige Beispiel: Für das Online-Spielen ist Easy Anti-Cheat erforderlich und Mods laufen nicht, wenn es eingeschaltet ist, aber wenn es ausgeschaltet ist, funktionieren Offline-Spiele, Training, LAN und Wiederholungen mit Mods. Alles, was online ist, ist immer noch draußen.
- **Veröffentlichen Sie niemals etwas, das jemandem hilft, Anti-Cheat zu umgehen.** Kein Tool, keine Konfiguration, keine Anweisungen.

## Kredit und Lizenzen

- **Schreiben Sie jedes Projekt, auf dem Sie aufbauen oder aus dem Sie lernen, gut.** FalloutCraft und OWCraft nennen SkyCraft beide namentlich und behalten ihre Lizenz.
- **Behalten Sie ihre Lizenzen.** Fügen Sie eine \`THIRD-PARTY-NOTICES.md\` hinzu, in der aufgeführt ist, was Sie wiederverwendet haben und unter welcher Lizenz (OWCraft erledigt dies).
- **Wählen Sie eine Lizenz für Ihren eigenen Code.** MIT ist bei diesen Projekten weit verbreitet. Ohne eine Lizenz können andere Ihren Code nicht legal wiederverwenden.
- **Angenommen, es handelt sich um ein inoffizielles Fanprojekt** und steht in keiner Verbindung zum Entwickler oder Herausgeber des Spiels.
- **Angenommen, Sie haben KI verwendet.** Mehrere Beispielprojekte haben eine ehrliche Anmerkung dazu. Es hilft den Leuten, das Projekt zu beurteilen und ihm zu vertrauen. Auf nicht veröffentlichte, von der KI generierte Veröffentlichungen wird schlecht reagiert, und einige Communities verbieten sie gänzlich.
- **Sagen Sie, was fertig ist und was noch nicht.** Testen Sie, bevor Sie behaupten, dass etwas funktioniert.
- **Keine Decompiler-Ausgabe versenden.** Namen wie \`FUN_\` oder \`sub_\` in einem veröffentlichten Mod sagen einem Prüfer, dass der Code dekompiliert und nicht geschrieben wurde. Benennen Sie sie um.
- **Retail-Offsets fernhalten.** Eine fest codierte Adresse aus der ursprünglichen ausführbaren Datei hat keine Auswirkung auf Ihren eigenen Build und gibt an, woher der Code stammt.

Wenn ein Rechteinhaber Sie auffordert, etwas zu ändern oder zu entfernen, tun Sie es. Gang-Beasts-Rust sagt dies in seiner README-Datei und es ist die richtige Standardeinstellung, unabhängig davon, ob sich ein anderes Projekt darum kümmert oder nicht.

## Veröffentlichung auf dem Discord

#share-your-projects hat Regeln:

- **Ein GitHub-Repo-Link wird empfohlen**, wenn Sie möchten, dass andere Ihre Arbeit nutzen, aber dies ist nicht erforderlich. Laden Sie keine Dateien hoch und verlinken Sie keine direkten Downloads oder Dateihosts.
- Keine gestohlenen Assets, durchgesickerten Code oder Links zu Raubkopien oder durchgesickertem Material.
- Verwenden Sie die Tags und die Vorlage aus dem angepinnten Richtlinienbeitrag.
- Sagen Sie, welche Spiele und Versionen Ihr Projekt benötigt.
- Erwähnen Sie, worauf Sie aufgebaut haben.

[Leitfaden 10](10-posting-your-project.md) enthält den vollständigen Beitragsleitfaden und eine Checkliste vor dem Flug.

## Andere Orte zur Veröffentlichung

- **Steam Workshop und Ähnliches:** Stellen Sie sicher, dass in Ihrem Upload keine urheberrechtlich geschützten Spielinhalte enthalten sind. Bitten Sie Ihren Agenten, einen einfachen Asset-Extraktor zu schreiben, mit dem Spieler schneller Assets versenden können. Überprüfen Sie die eigenen Regeln jeder Plattform.
- **Releases auf GitHub:** Viele Projekte liefern eine Zip-Datei auf ihrer Release-Seite aus. Stellen Sie sicher, dass es keine Spieledateien enthält, bevor Sie es veröffentlichen.

## Checkliste vor der Veröffentlichung

- [ ] Mein Repo enthält keine Spieledateien, dekompilierten Code oder extrahierte Assets
- [ ] Ich verwende eine Whitelist \`.gitignore\`
- [ ] Ich habe jedes Projekt, auf dem ich aufgebaut habe, gutgeschrieben und ihre Lizenzen behalten
- [ ] In meiner README-Datei steht, welche Spiele und Versionen benötigt werden
- [] In meiner README-Datei steht, was funktioniert und was nicht
- [ ] In meiner README-Datei steht, dass es sich um ein inoffizielles Fanprojekt handelt und die Verwendung von KI erwähnt wird
- [ ] Meine Veröffentlichungs-ZIP-Datei (falls vorhanden) enthält keine Dateien des Spiels
- [ ] Ich habe es mit einem sauberen Setup getestet

## Wenn Sie bereits etwas vorangetrieben haben, sollten Sie es nicht getan haben

Der Git-Verlauf ist in dem Moment öffentlich, in dem Sie pushen. Die Schritte zur vollständigen Wiederherstellung finden Sie in [Anleitung 10](10-posting-your-project.md#if-you-already-committed-game-files). Gehen Sie davon aus, dass alles, was gepusht wurde, kopiert wurde. Eine Neufassung des Verlaufs allein entfernt ihn nicht von jemandem, der bereits geklont hat.

---

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/06-rules-legal-and-publishing.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/06-rules-legal-and-publishing.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>`,d=`# 7. FAQ

Schnelle Antworten auf die Fragen, die die Leute am häufigsten stellen. Wo noch niemand eine bestätigte Antwort hat, steht da so.

## Erste Schritte

**Wie fange ich an?**
Lesen Sie [Hier beginnen](00-start-here.md). Die Kurzversion: Richten Sie einen KI-Agenten ein, installieren Sie Ihre Spiele, öffnen Sie den Agenten in einem leeren Ordner, geben Sie ihm ein Beispielprojekt und sagen Sie, was Sie wollen.

**Ist es wirklich nur „der KI zu sagen, dass sie es tun soll“?**
Für die Kernidee, ja. Mitglieder, die diese Projekte erstellt haben, sagen, dass sie ein Beispiel-Repo verlinken und dasselbe für ihre Spiele verlangen. Rechnen Sie ohnehin damit, auf Probleme zu stoßen, und verbringen Sie die meiste Zeit damit, sie gemeinsam mit dem Agenten zu beheben. Siehe [Anleitung 4](04-prompting-and-workflow.md).

**Muss ich wissen, wie man programmiert?**
Nein, aber es hilft. Sie müssen sich darüber im Klaren sein, was Sie wollen und was falsch ist, und Sie können den Agenten bitten, alles zu erklären. Mitglieder ohne Programmierkenntnisse haben Projekte zum Laufen gebracht. Ein wenig Wissen hilft Ihnen zu überprüfen, was die KI tut.

**Ich habe noch nie Code geschrieben. Werde ich stecken bleiben?**
Weniger als Sie denken, wenn Sie die Aufteilung akzeptieren: Der Agent schreibt es, Sie testen es und beschreiben, was passiert ist. Das ist der ganze Job. Das ist auch der Grund, warum es in [Anleitung 4](04-prompting-and-workflow.md) und [Anleitung 5](05-testing-and-troubleshooting.md) hauptsächlich um die *Kommunikation von Problemen* und nicht um Programmierung geht.

## Wählen Sie Ihre Spiele aus

**Was gebe ich in den Agenten ein? Soll ich ihm meinen gesamten Spieleordner geben?**
Sie sagen dem Agenten, wo die Spiele installiert sind, und er findet, was er braucht. Mitglieder verwiesen ihre Agenten auf ihre Spielinstallationen, einschließlich einer Minecraft-Installation mit Fabric. Sie laden nichts hoch.

**Woher weiß ich, ob meine Idee möglich ist?**
Überprüfen Sie, ob das Host-Spiel über einen Mod Loader oder Script Extender verfügt. Das ist die Hauptsache. Siehe [Anleitung 8](08-mod-loaders-and-script-extenders.md).

**Kann ich Spiel X mit Spiel Y zusammenführen?**
Vielleicht. Es hängt hauptsächlich davon ab, ob das Host-Spiel Ihren Code ausführen kann (Skript-Extender, Mod-Loader, Plugin-System) und ob es sich um ein Einzelspieler-Spiel handelt. Es gibt Projekte in Form von Elden Ring plus Spider-Man-Mechanik und einem Auto im Octane-Stil in Minecraft, aber nichts ist garantiert. Suchen Sie zunächst nach vorhandenen Projekten und Tools für Ihre Spiele.

**Mit welchen Spielen kann man am einfachsten beginnen?**
Terraria, Stardew Valley, Skyrim, Fallout 4 und Minecraft, mit großem Abstand. Sie verfügen über die am besten dokumentierten Loader im Gaming-Bereich: tModLoader und SMAPI für die XNA-Spiele, SKSE und F4SE für die Bethesda-Spiele, Fabric für Minecraft. Das ist auch die Richtung, in die die meisten bestehenden Projekte gegangen sind, also gibt es Code zum Lesen. Terraria und Stardew sind wissenswert, wenn Sie davon ausgehen, dass Sie Bethesda oder Unity benötigen, da ihre Spiele auf .NET basieren und in einfaches C# dekompiliert werden.

**Was sind die schwierigsten?**
Spiele ohne Mod-Loader und ohne Quelle. Wenn das Host-Spiel nichts hat, müssen Sie eine Engine zurückentwickeln, bevor Sie starten können. Siehe [Anleitung 8](08-mod-loaders-and-script-extenders.md).

**Kann ich das unter Linux oder macOS machen?**
Hängt von der Art des Projekts ab. Für einen Passthrough-Mod muss das Host-Spiel ausgeführt werden, und jedes Beispiel in diesen Anleitungen ist nur für Windows gedacht, da es sich bei den Mod-Loadern um Windows-Tools handelt. Sie würden das Spiel unter Wine oder Proton ausführen und es selbst debuggen. Eine Rust-Umschreibung ist anders: Die Engine ist Ihr eigener Code, der also für Ihr Betriebssystem erstellt wird, und IW4L dokumentiert Linux- und macOS-Schritte. Ihre eigene Kopie des Spiels muss jedoch weiterhin von diesem Betriebssystem aus lesbar sein. Siehe [Leitfaden 8](08-mod-loaders-and-script-extenders.md#windows-is-the-common-denominator).

**SkyCraft oder Universal-Modder, welchen verwende ich?**
Sie erledigen unterschiedliche Aufgaben. SkyCraft ist ein funktionierender Passthrough-Mod, den Sie lesen und anpassen; [universal-modder](https://github.com/rehan-remade/universal-modder) besteht aus elf Agentenfähigkeiten plus einer CLI, die einen Agenten durch das Modifizieren eines beliebigen Spiels führt, einschließlich Aufklärung und Reverse Engineering. Wenn Sie Minecraft in Skyrim möchten, verwenden Sie SkyCraft. Wenn Sie mit einem Spiel beginnen, das niemand berührt hat, ist Universal-Modder der bessere Ausgangspunkt.

**Was passiert, wenn mein Spiel keinen Loader hat?**
Sie haben mehr Möglichkeiten als „aufzugeben“ oder „das Ganze zurückzuentwickeln“. Arbeiten Sie diese Liste durch und nehmen Sie die erste, die Ihrer Idee entspricht: Bearbeiten Sie die Datendateien des Spiels direkt, patchen Sie verwalteten Code mit Harmony oder Mixin, verwenden Sie native Hooks auf einer C/C++-Engine oder führen Sie erst dann eine Neuimplementierung durch. Die meisten Ideen, die so aussehen, als bräuchten sie einen nativen Hook, erweisen sich als Datenbearbeitung. [Anleitung 8](08-mod-loaders-and-script-extenders.md#which-route-is-cheapest) hat die Tabelle.

**Wie verschiebe ich einen Charakter oder ein Asset von einem Spiel in das andere?**
Die übliche Antwort ist ein Extraktor plus Konverter, und Sie schreiben Ihren eigenen Code dafür. Lassen Sie den Agenten einen Asset-Extraktor schreiben, damit die Spieler das, was sie benötigen, aus ihren eigenen Kopien ziehen können. Extrahieren Sie keine Assets in Ihr Repo. Siehe [Leitfaden 6](06-rules-legal-and-publishing.md).

**Was ist mit Spielen, die ich nicht über Steam installieren kann, oder Konsolentiteln?**
Bei einigen Projekten müssen Sie selbst eine Disc-basierte Kopie extrahieren, z. B. Skate 3 für Xbox 360. Das funktioniert für ein Spiel, das Sie besitzen. Was nicht funktioniert, ist das Herunterladen einer ISO von einer Download-Site. Siehe [Leitfaden 8](08-mod-loaders-and-script-extenders.md#disc-based-and-console-games).

**Gibt es Spiele, bei denen das unmöglich ist?**
Manchmal aus anderen Gründen als den Ladern. Einige Spiele unterliegen Veröffentlichungsbeschränkungen, die die Nutzungsmöglichkeiten eines Ports einschränken: Microsofts Halo MCC verfügt über Positions- und Kollisionsbeschränkungen, während Xbox-Decomp-Projekte ihren eigenen Bedingungen unterliegen. Bitten Sie Ihren Agenten, die Bedingungen des jeweiligen Titels zu prüfen, bevor Sie planen, ihn zu berücksichtigen.

## Werkzeuge und Kosten

**Welche KI soll ich verwenden?**
Die häufigste Paarung ist Claude-Code mit einem Top-Modell Claude, und Codex liegt knapp dahinter. Siehe [Leitfaden 1](01-choose-and-set-up-an-ai-agent.md).

**Sind ChatGPT- oder OpenAI-Modelle gut?**
Sie sind sehr gut und haben ein ordentliches Taschengeld. Derzeit nicht empfohlen, da sie pro Abonnement weniger Funktionen und weniger nutzbare Nutzung bieten als Claude. Wenn Sie bereits für eines bezahlt haben, gibt es keinen Grund zur Stornierung.

**Warum sagt die KI, dass meine Spieledateien zu groß sind?**
Sie verwenden wahrscheinlich eine Chat-Website. Sie benötigen einen Agenten, der auf Ihrem PC läuft und Ihre Dateien direkt liest. Sie laden nichts hoch.

**Muss das Spiel laufen, während die KI funktioniert?**
Der Agent benötigt kein laufendes Spiel, um Ihre Dateien zu lesen oder Code zu schreiben. Zum Testen müssen die Spiele ausgeführt werden. Bei Passthrough-Mods laufen beim Testen beide Spiele zusammen.

**Welche MCP-Server benötige ich?**
Keiner zum Starten. Claude Code und Codex sind Agenten, und MCP (Model Context Protocol) ist ein Standard zum Einbinden zusätzlicher Tools in eines. In keinem der Beispielprojekte ist ein Server als Voraussetzung aufgeführt.

Eine Ergänzung lohnt sich, wenn Sie mit dem Reverse Engineering fortfahren: Sowohl [Ghidra](https://github.com/bethington/ghidra-mcp) als auch [IDA](https://github.com/HexRaysSA/ida-mcp) liefern MCP-Server, sodass der Agent Funktionen selbst dekompilieren und umbenennen kann, anstatt dass Sie die Disassemblierung in einen Chat einfügen müssen. Der IDA One ist offiziell von Hex-Rays und lässt sich mit einem Befehl installieren.

**Kann ich einen kostenlosen Plan nutzen?**
Für ein echtes Projekt nicht bestätigt. Mitglieder gehen davon aus, dass sie schnell an ihre Grenzen stoßen. Kostenlose Modelle in OpenCode dienen zum Erlernen des Arbeitsablaufs, werden jedoch abgeschnitten und sind ratenbeschränkt. Pay-per-Use-API-Schlüssel sind eine weitere Möglichkeit. Siehe [Leitfaden 11](11-models-and-cost.md).

**Was ist der beste Wert?**
[OpenCode Go](https://opencode.ai/go) für 10 $, bezogen auf DeepSeek V4.1 Flash. OpenCode schätzt bei diesem Modell etwa 26.000 Anfragen pro Fünf-Stunden-Fenster, was eher deren Zahl als etwas ist, das hier irgendjemand gemessen hat. Wenn Sie ein Abonnement kaufen, anstatt pro Token zu zahlen, ist Claude Pro für 20 US-Dollar besser als alles, was billiger ist.

**Wird der 20-Dollar-Plan ausreichen?**
Ja, für ein Projekt dieser Größe. Rechnen Sie mit etwa 3 bis 4 Stunden intensiver Nutzung in jedem 5-Stunden-Fenster beim Topmodell, sodass ein Wochenendaufbau problemlos möglich ist. Es hängt davon ab, wie viel Sie tun.

**Soll ich direkt zum 200-Dollar-Plan wechseln?**
Nein. Upgrade in der Reihenfolge: 20 $, Maximum, dann 100 $, dann 200 $. Bevor Sie dies tun, sollten Sie zwei Dinge wissen: Die 5-fachen und 20-fachen Vielfachen gelten für das fünfstündige Sitzungsfenster und nicht für Ihr wöchentliches Taschengeld, und in beiden Fällen gibt es eine wöchentliche Obergrenze. Siehe [Leitfaden 11](11-models-and-cost.md).

**Verbrennen lange Chats meine Nutzung schneller?**
Ja. Das gesamte Gespräch wird in jeder Runde weitergeführt, sodass ein Chat mit 300 Runden pro Runde mehr kostet als ein neuer. Starten Sie einen neuen Chat mit einer [\`STATUS-handoff.md\`](../templates/STATUS-handoff.md)-Datei, wenn die Dinge länger werden. Siehe [Leitfaden 4](04-prompting-and-workflow.md).

**Kann ich ein lokales Modell auf meiner eigenen GPU ausführen?**
Dafür eignen sie sich nicht gut und 12 GB VRAM reichen für ein gutes lokales Codierungsmodell nicht aus. Es lohnt sich, es auszuprobieren, wenn Sie neugierig sind, aber Sie müssen damit rechnen, dass Sie dagegen ankämpfen werden. [Leitfaden 11](11-models-and-cost.md) hat die aktuelle Denkweise.

**Dann spielt meine GPU keine Rolle, oder?**
Richtig, für Cloud-Modelle. Ein 5090 ändert nichts, wenn Sie Claude oder GPT verwenden, da die Arbeit auf den Servern des Anbieters stattfindet. Es spielt nur eine Rolle, wenn Sie ein lokales Modell ausführen, was oben der Fall ist.

**Wie gebe ich Codex Vollzugriff? Es schlägt immer wieder fehl.**
Überprüfen Sie die Dokumentation von Codex auf die Berechtigungs- und Sandbox-Einstellungen. Gewähren Sie ihm nur Zugriff auf Ihre Projekt- und Spielordner. Der vollständige Zugriff auf Ihren gesamten PC ist riskant.

**Ist es sicher, einem Agenten vollständigen PC-Zugriff zu gewähren?**
Viele Mitglieder tun es, aber es ist ein echtes Risiko. Verwenden Sie einen separaten Ordner, Git und Backups. Betrachten Sie ein separates Benutzerkonto, eine VM oder einen Container. Siehe [Anleitung 1](01-choose-and-set-up-an-ai-agent.md).

**Benötige ich überhaupt eine IDE?**
Nein, aber die Installation von VS Code lohnt sich, damit Sie die richtige Versionierung und Dateiansichten erhalten. Der Agent erstellt Ihre Dateien und führt Ihre Builds in beide Richtungen aus. Sie kopieren Code nicht manuell in Ordner.

## Technisch

**Muss ich die Spiele dekompilieren?**
Normalerweise nicht. Für einen Passthrough-Mod im SkyCraft-Stil benötigen Sie eine Möglichkeit, Code innerhalb des Host-Spiels auszuführen, keine Dekompilierung. Überprüfen Sie bei Umschreibungen zunächst die vorhandene Formatdokumentation und Open-Source-Reader. Dekompilieren ist der letzte Ausweg. [Guide 3](03-rust-rewrites-and-ports.md) beschreibt, wann und wie, einschließlich des zu verwendenden Tools, und [GameDecompLibrary](https://github.com/solarfren69420/GameDecompLibrary) enthält 304 vorhandene Projekte, die Sie überprüfen sollten, bevor Sie eines starten. [Leitfaden 17](17-decompile-system-map.md) ist eine Referenz für alles, was eine Dekompilierung mit sich bringt.

**Welches Tool eignet sich am besten zum Dekompilieren: IDA Pro, Ghidra oder Binary Ninja?**
Hängt vom Code ab, der wichtiger ist als der von Ihnen gewählte Dekompiler:

- **Verwaltetes .NET** (Terraria, Stardew, Celeste, die meisten Unity-Spiele, die auf Mono basieren): [ILSpy](https://github.com/icsharpcode/ilspy) dekompiliert in lesbares C#. \`ilspycmd\` bietet Ihnen ein ganzes Projekt, das Sie durchsuchen können.
- **Unity IL2CPP**: [Cpp2IL](https://github.com/SamboyCoding/Cpp2IL) auf \`GameAssembly.dll\` plus \`global-metadata.dat\`. Es stellt Typen, Signaturen und Dummy-DLLs für ILSpy wieder her. Zwei wissenswerte Einschränkungen: Die Analyse funktioniert nicht für Unity 2020.2 oder höher und es wird Pseudocode anstelle von echter IL generiert.
- **Natives C/C++**: Ghidra ist kostenlos und die übliche Wahl. IDA Pro ist der kommerzielle Standard. Binary Ninja sitzt dazwischen.

Sie können Ihren Agenten auch fragen, welches Tool zum Format Ihres Spiels passt, und es von ihm einrichten lassen.

**Können Unreal Engine-Spiele dekompiliert werden?**
Normalerweise ja, und UE4SS existiert als Modding- und Selbstbeobachtungstool, mit dem Sie ohne Dekompilierung weit kommen. Bitten Sie Ihren Agenten, nach vorhandenen Community-Tools für Ihren spezifischen Titel zu suchen, da der Support je nach Titel unterschiedlich ist.

**Warum Rust und Bevy? Warum nicht C oder C++?**
Sie müssen sie nicht verwenden. Die Leute greifen nach ihnen, weil Rust Speicherfehler erkennt, bevor das Spiel läuft, die Einrichtung einfach ist, Bevy eine kostenlose All-Code-Engine ist und KI gut darin ist, Rust zu beheben. C und C++ funktionieren auch gut. Die Plugins, die in Skyrim, Fallout 4 und GTA enthalten sind, sind immer noch C++.

**Soll ich einfach Rust herunterladen und meine eigenen Sachen schreiben?**
Für ein Umschreiben würden Sie Rust installieren, aber der Agent schreibt den Code. Außerdem muss das Spiel installiert und ein Agent eingerichtet sein. IW4L ist diejenige, die gelesen werden kann: eine Rust- und Bevy-Laufzeitumgebung für Modern Warfare 2, die Ihre eigene Installation liest. [Leitfaden 12](12-worked-example-rust-rewrite.md) erklärt, wie es gebaut wurde, und [Leitfaden 3](03-rust-rewrites-and-ports.md) deckt den Rest ab.

**Kann ich ein komplett neues Spiel erstellen, anstatt eines zu modifizieren?**
Ja, und es ist eine kleinere Aufgabe als ein Umschreiben. Das Erstellen eines Basketballspiels von Grund auf mit Open-Source-Assets und Animationen ist der gleiche Agenten-Workflow, abgesehen von dem Teil, in dem etwas zurückentwickelt werden muss.

**Wie verhindere ich, dass die KI visuell testet?**
Sagen Sie ihm, dass Sie es testen werden, und lassen Sie es stattdessen Zahlen und Ereignisse protokollieren. Siehe [Anleitung 5](05-testing-and-troubleshooting.md).

**Wie sorge ich dafür, dass es reibungsloser läuft?**
Geben Sie dem Agenten Frame-Time-Protokolle von beiden Prozessen und bitten Sie ihn, ein Profil zu erstellen, bevor Sie etwas ändern. Den Notizen von OWCraft zufolge dauerte das Überspringen der Präsentation des versteckten Fensters Minecraft von 25 auf 60 fps.

Das Gameplay-Spiel muss jedoch noch seinen Client ausführen. Es ist versteckt und nicht kopflos: Es erstellt die Netze, die der Host zeichnet, oder das Bild, das der Host einfügt, sowie die Hand und das HUD (siehe [Anleitung 9](09-worked-example-passthrough-mod.md#step-8-make-it-not-stutter)). Es würde nichts rendern, würde die visuelle Prämisse zerstören. Weitere Ursachen für Stottern finden Sie im [Leitfaden 16](16-ownership-sync-and-rendering.md).

Weitere Vorteile sind das Senden von Deltas anstelle des vollständigen Status und die Festlegung Ihrer Aktualisierungsrate. Siehe [Leitfaden 9](09-worked-example-passthrough-mod.md#step-8-make-it-not-stutter).

**Der Mod funktioniert, ist aber ruckelig. Ist das normal?**
Ja, zunächst. Mitglieder beschreiben ihre Projekte als „verdammt scheiße, aber funktionierend“. Leistung und Glanz kommen nach der Funktion.

**Wie lange dauert ein Passthrough-Mod?**
Die einzige Zahl, die sich lohnt, ist etwa 3-4 Stunden hin und her für ein Elden Ring + Spider-Man-Mashup, das als Idiot beschrieben wird, aber funktioniert. Behandeln Sie das als einen Datenpunkt, nicht als typische Laufzeit. Ein Umschreiben ist eine ganz andere Größenordnung.

## Regeln und Teilen

**Kann ich Spiele mit Anti-Cheat modifizieren?**
Die Zeile ist online versus offline, nicht ob Anti-Cheat installiert ist. Rocket League ist der klarste Fall: Für das Online-Spielen ist Easy Anti-Cheat erforderlich und Mods laufen nicht, während es eingeschaltet ist, aber schalten Sie es über die eigene Option des Spiels aus und Offline-Matches, Training, LAN und Wiederholungen funktionieren alle mit Mods.

Alles, was online ist, ist immer noch verboten, Sie können gesperrt werden und Agenten werden Ihnen nicht dabei helfen, es zu umgehen. Sie lassen Anti-Cheat sowieso standardmäßig in Ruhe. Siehe [Leitfaden 6](06-rules-legal-and-publishing.md#online-play-and-anti-cheat).

**Kann ich Spieledateien in mein Repo einfügen?**
Nein. Siehe [Leitfaden 6](06-rules-legal-and-publishing.md).

**Wie veröffentliche ich auf Steam Workshop?**
Stellen Sie sicher, dass Ihr Upload keine urheberrechtlich geschützten Spielinhalte enthält. Lassen Sie den Agenten einen Extraktor schreiben, den die Spieler selbst ausführen. Überprüfen Sie die Regeln der Plattform.

**Wo kann ich fertige Projekte sehen?**
In #share-your-projects auf dem Discord. Eine Website zum Sammeln dieser Daten ist ebenfalls in Arbeit.

**Wie veröffentliche ich mein Projekt?**
Siehe [Leitfaden 10](10-posting-your-project.md), der die Checkliste vor dem Flug und eine Beitragsvorlage enthält.

**Was schreibe ich, damit sich die Leute die Mühe machen, es anzusehen?**
Ein Screenshot oder GIF, ein echter Commit-Verlauf, ein ehrlicher Abschnitt „Was funktioniert nicht“ und ein MODLOG. Siehe [Leitfaden 10](10-posting-your-project.md#the-readme-is-the-post).

## Noch unbeantwortet

Diese sind offen, es gibt noch keine bestätigte Antwort. Wenn Sie es wissen, posten Sie es auf Discord oder öffnen Sie eine Pull-Anfrage und fügen Sie es hier hinzu.

- Welches kostenlose Modell funktioniert am besten mit OpenCode und ob eines davon ein echtes Projekt abschließen kann
- Ob kostenlose Pläne der großen Anbieter ein echtes Projekt abschließen können (siehe [Leitfaden 11](11-models-and-cost.md))
- So dekompilieren Sie Unreal Engine-Spiele. Mit UE4SS kommen Sie weit ohne Dekompilierung, aber das ist nicht die gleiche Antwort
- Ob detaillierte Prompts oder kurze, lose Prompts effizienter sind. Die Leute sind anderer Meinung; siehe Abschnitt zur Debatte in [Leitfaden 4](04-prompting-and-workflow.md)
- Bessere Ausführung von Spielen auf Originalhardware (z. B. PS3) und ob Emulatorforschung anwendbar ist
- Ob lokale Modelle ein echtes Projekt mit 12 GB VRAM bewältigen können. Wahrscheinlich nicht, aber niemand hat einen richtigen Versuch geschrieben
- Ob ein Passthrough-Mod überhaupt unter Linux oder macOS zum Laufen gebracht werden kann
– Welche Spiele haben Veröffentlichungsbedingungen, die einen Port über die Halo MCC-Einschränkungen hinaus vollständig blockieren?
– Ob ein Passthrough-Mod funktioniert, wenn das Gameplay-Spiel nur als Konsolenversion oder nur als Disc geliefert wird

---

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/07-faq.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/07-faq.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>`,l=`# 8. Mod Loader und Script Extender (Referenz)

Dies ist die Frage, die die Leute am häufigsten stellen: * „Was muss ich überhaupt installieren, um meinen Code in dieses Spiel zu integrieren?“*

Lesen Sie diese Seite einmal und Sie können die Jagd überspringen. Es listet auf, was jede Motorenfamilie Ihnen bietet und wie schwierig die Aufgabe ist.

Ein Passthrough-Mod benötigt eines: **eine Möglichkeit, Ihren eigenen Code innerhalb des Host-Spiels auszuführen.** Alles andere hier ist ein nettes Extra.

## Der eine Tisch, der zählt

| Host-Spiel | Motor | Loader / Extender | Sprache | Schwierigkeit |
|-----------|--------|-----|----------|-----------|
| Terrarien | XNA / Mono | [tModLoader](https://github.com/tModLoader/tModLoader) | C# | Einfach |
| Stardew Valley | XNA / Mono | [SMAPI](https://github.com/Pathoschild/SMAPI) | C# | Einfach |
| Skyrim / Skyrim SE / AE | Erstellungs-Engine | SKSE ([skse.silverlock.org](https://skse.silverlock.org/)) | C++ + Papyrus | Einfach |
| Fallout 4 | Erstellungs-Engine | F4SE ([f4se.silverlock.org](https://f4se.silverlock.org/)) | C++ + Papyrus | Einfach |
| Sternenfeld | Creation Engine 2 | Gleicher Ansatz wie F4SE | C++ | Mittel |
| Minecraft: Java | n/a | Fabric, Forge oder [NeoForge](https://neoforged.net) | Java / Kotlin | Einfach |
| Outer Wilds | Unity | [Outer Wilds Mod Loader](https://outerwildsmods.com/) | C# | Mittel |
| GTA San Andreas / Vice City / GTA III | RenderWare | [plugin-sdk](https://github.com/DK22Pac/plugin-sdk) (ASI / CLEO-Plugins) | C++ / C | Mittel |
| Die meisten Unity Spiele | Unity | [BepInEx](https://github.com/BepInEx/BepInEx) oder [MelonLoader](https://github.com/LavaGang/MelonLoader) | C# | Einfach oder mittel |
| Die meisten Unreal Spiele | Unreal | [UE4SS](https://github.com/UE4SS-RE/RE-UE4SS) | Lua | Mittel |
| GTA V, Red Dead Redemption 2 | WUT | [Ultimate ASI Loader](https://github.com/thirteenAG/Ultimate-ASI-Loader), plus [scripthookvdotnet](https://github.com/scripthookvdotnet/scripthookvdotnet) für .NET-Skripte | C++ / C# | Mittel |
| Die meisten Capcom-Spiele: Resident Evil, Monster Hunter, Dragon's Dogma, Devil May Cry | RE-Motor | [REFramework](https://github.com/praydog/REFramework) | Lua oder C# | Mittel |
| Cyberpunk 2077 | REDengine | [WolvenKit](https://github.com/WolvenKit/WolvenKit), plus der offizielle REDmod | C# oder REDscript | Mittel |
| Elden Ring, Dark Souls III, Sekiro, Armored Core VI, Elden Ring Nightreign | FromSoftware proprietär | [me3](https://github.com/garyttierney/me3) | Rust für das Framework, deine Sprache für Mods | Hart |
| GameMaker Studio 1.4 und 2 | GameMaker | [UndertaleModTool](https://github.com/UnderminersTeam/UndertaleModTool) | GML + Tool | Mittel nur unter Windows |
| Ren'Py-Bildromane | Ren'Py | [Ren'Py SDK](https://www.renpy.org/doc/html/developer_tools.html) | Python | Einfach |

Die Bethesda-Skript-Extender stammen von \`afkmods.com\`, und die Silverlock.org-Links oben sind das, worauf SkyCraft und FalloutCraft die Leute hinweisen.

**Lesen Sie dies, bevor Sie me3 verwenden.** Das Projekt verfügt über eine schriftliche Richtlinie, die jegliche LLM-Nutzung im Code, im Issue-Tracker, in den Diskussionen und im Discord des Projekts untersagt. Sie können das Tool verwenden, aber Sie können keinen vom Agenten geschriebenen Fehlerbericht einreichen, in seinen Kanälen um Hilfe bitten oder vom Agenten geschriebenen Code beisteuern. Das ist die Forderung der Betreuer und von außen nicht verhandelbar. Planen Sie, das Debuggen selbst durchzuführen, und holen Sie sich Ihr Verständnis anhand der Dokumentation und nicht anhand des Issue-Trackers.

Wenn das Sie ausschließt, ist der Fallback gering. [EldenRingModLoader](https://github.com/techiew/EldenRingModLoader) ist immer noch da und lädt DLL-Mods, aber sein letzter Push war August 2024. [elden-proton](https://github.com/Cloudef/elden-proton) läuft Elden Ring unter Linux und verstummte im Mai 2025. Für Dark Souls III, Sekiro und Armored Core VI gibt es keine gepflegte Alternative, die es wert wäre, hier genannt zu werden, daher ist bei diesen Titeln die Asset-Bearbeitung der realistische Weg oder ein Umschreiben statt eines Loaders.

me3 ist der Nachfolger der Mod Engine 2, die eingestellt wird. Es ist in Rust geschrieben und deckt alle fünf oben genannten FromSoftware-Titel mit einer Installation ab. Daher lohnt es sich, es als Projekt zu lesen, auch wenn Sie es nie ausführen.

Der Schwierigkeitsgrad wird aus einem bestimmten Grund als Schwer eingestuft. Ein Mod ist eine native DLL plus optional Ersatz-Asset-Dateien, und eine \`.me3\`-Profildatei gibt an, wo sie zu finden sind. Es gibt keine Skriptebene, also gibt es nichts, wogegen man ein paar Zeilen schreiben könnte: Sie erstellen eine kompilierte Binärdatei, die an ein Spiel ohne öffentliche API angehängt wird. Das Framework selbst ist gut dokumentiert und das Profilformat ist einfaches TOML, das Sie generieren können, aber die Mod-Seite ist native Arbeit an einem Closed-Source-Spiel.

Vier dieser Lader sind groß genug, um als eigenständige Projekte lesenswert zu sein, was wichtig ist, wenn Sie sehen möchten, wie ein ausgereifter Lader zusammengestellt wird:

| Lader | Sterne | Lizenz | Warum sich ein Blick lohnt |
|---|---:|---|---|
| [BepInEx](https://github.com/BepInEx/BepInEx) | 8.790 | LGPL-2.1 | Die Standardeinstellung für Unity- und XNA-Spiele. Die meisten Unity-Mod-Tutorials gehen davon aus |
| [tModLoader](https://github.com/tModLoader/tModLoader) | 5.705 | MIT | Terrarias offizielle Modding-API und ein gutes Modell für die Versionierung einer Mod-API |
| [REFramework](https://github.com/praydog/REFramework) | 5.582 | MIT | Umfasst Capcoms RE Engine-Familie von einer Installation an, was kein anderer Loader tut |
| [MelonLoader](https://github.com/LavaGang/MelonLoader) | 4.239 | Apache-2.0 | Die Hauptalternative zu BepInEx für Unity und deckt weitere Titelvarianten ab |

Star zählt ab Oktober 2026. Bei diesen vier handelt es sich um etablierte Projekte mit jahrelanger Geschichte, im Gegensatz zu den meisten KI-gestützten Beispielen in diesem Repo, die Wochen alt sind.

Auf GameMaker: Es gibt keinen GameMaker 3. UndertaleModTool deckt GameMaker Studio 1.4 und GameMaker Studio 2, Bytecode-Versionen 13 bis 17, ab. Es kann keine mit YYC kompilierten Spiele berühren und es gibt keine offizielle Möglichkeit, seine GUI unter macOS oder Linux auszuführen, daher benötigen Sie auf diesen Plattformen Wine.

## Was die Wörter bedeuten

- **Skript-Extender**: eine DLL eines Drittanbieters, die zusammen mit dem Spiel geladen wird und Mods eine Skriptsprache und eine API bereitstellt. SKSE und F4SE sind die klassischen Beispiele. Sie schreiben ein Plugin, es wird im Prozess ausgeführt.
- **Mod Loader / Mod API**: ein unterstütztes Framework, das die Modding-Community für ein Spiel erstellt hat. Fabric und NeoForge für Minecraft. Gleiche Idee, formeller.
- **ASI-Loader**: das Kleinstmögliche, das \`.asi\` DLLs aus einem Ordner lädt und nichts anderes tut. Mit dem Plugin-sdk erhalten Sie darüber hinaus ein echtes SDK.
- **Mod-Manager**: ein Tool zum Installieren und Versionieren der Mods anderer Leute (MO2, Vortex, r2modman). Nützlich, nicht erforderlich.

**Hauptidee:** Mit einem Loader schreibt der Agent Ihren Mod anhand seiner API und Sie berühren nie die ursprünglichen Binärdateien. Das ist der gute Weg. Ohne eine solche Lösung haben Sie mehr Möglichkeiten als „alles zurückzuentwickeln“. Die meisten Spiele liefern ihre Gameplay-Logik in einer Datendatei aus, die Sie direkt bearbeiten können, auch wenn es keine Mod-API dafür gibt.

## Welche Route ist am günstigsten?

Ein Lader ist der bequeme Weg, nicht der einzige. Arbeiten Sie diese Liste ab und nehmen Sie die erste, die Ihrer Idee entspricht.

| Route | Wenn es passt | Beispiele |
|---|---|---|
| **Nur Daten oder Assets** | Die Idee passt zu den spieleigenen Datendateien, kein Code erforderlich | Bethesda ESP- und ESL-Dateien, Paradox-Skripte, JSON-Inhaltspakete |
| **Loader-API** | Ein Loader ist vorhanden und macht Hooks verfügbar | tModLoader, SMAPI, BepInEx, UE4SS, REFramework, SKSE, Fabric |
| **Managed-Code-Patching** | .NET, Mono, IL2CPP oder Java, aber keine API für Ihre Idee | Harmony, MonoMod, Mixin |
| **Native Hooks** | C/C++-Engine ohne Loader | Proxy-DLLs plus MinHook oder SafetyHook, Signaturscans |
| **Neuimplementierung oder Dekompilierung** | Sie wollen die totale Kontrolle, oder es ist eine Retro-Konsole | N64- und Xbox-Decomp-Projekte oder eine Rust-Umschreibung wie IW4L |
| **Mashup oder Passthrough** | Du steckst ein Spiel in ein anderes | Siehe [Anleitung 2](02-passthrough-mods.md) |

Die Reihenfolge ist wichtig. Viele Ideen, die so aussehen, als ob sie einen nativen Hook benötigen, sind in Wirklichkeit eine Datendateibearbeitung, und Datenbearbeitungen erfordern überhaupt keinen Loader.

Bevor Sie sich zu etwas davon verpflichten, prüfen Sie, ob es bereits jemand getan hat. Genau dafür gibt es eine Wissensdatenbank mit Feldnotizen: [universal-modder](https://github.com/rehan-remade/universal-modder) liefert eine mit Notizen pro Spiel zu den Versionen, die funktioniert haben, der gewählten Route und den Fallstricken, durchsuchbar mit \`um kb search "<game>"\`.

## Warum dies darüber entscheidet, ob Ihre Idee realistisch ist

Bevor Sie sich auf ein Spielpaar festlegen, sehen Sie sich diese Tabelle an:

1. **Verfügt das Host-Spiel über einen Loader?** Mit einem ist ein Passthrough-Mod dieses Wochenende realistisch. Erwarten Sie ohne ein Forschungsprojekt ein Forschungsprojekt.
2. **Verfügt das Gameplay-Spiel über eine Mod-API oder ein SDK?** Dieselbe Frage. Minecraft (Fabric) ist einfach. Ein Closed-Source-Spiel mit nichts ist schwer.
3. **Gibt es einen existierenden Mod, der bereits etwas Ähnliches macht?** Wenn ja, lesen Sie seine Quelle. Sie fangen nicht bei Null an.
4. **Ist es Einzelspieler und offline?** Wenn nicht, hören Sie auf. Siehe [Leitfaden 6](06-rules-legal-and-publishing.md).

Die Kombination „Host verfügt über einen Loader + Gameplay-Spiel verfügt über eine API“ sorgt dafür, dass Projekte im SkyCraft-Stil in Stunden statt in Monaten funktionieren. SkyCraft ist Skyrim (SKSE) + Minecraft (Fabric): zwei der am besten dokumentierten Modding-Ziele, die es gibt.

## Motorenfamilien im Detail

Die obige Tabelle listet die Loader nach Host-Spiel auf. In diesen Abschnitten wird erläutert, was Ihnen jede Motorenfamilie bietet.

### Erstellungs-Engine (Skyrim, Fallout 4)

Die am besten dokumentierte Modding-Familie für die Arbeit mit nativem Code und worauf SkyCraft und FalloutCraft basieren.

- **SKSE / F4SE** lädt eine Plugin-DLL und stellt daneben eine Skriptebene (Papyrus) bereit. Die Adressbibliothek ermöglicht Plugins den Zugriff auf Spielfunktionen.
- Mods teilen sich normalerweise in zwei Hälften: ein natives Plugin (C++) und ein Papyrus-Skript. Ein Passthrough-Mod benötigt die native Seite, da er jeden Frame ausführen muss.
- Fallout 4 und Skyrim haben genügend gemeinsame Architektur, sodass das Design von SkyCraft mit geringfügigen Änderungen übertragen werden kann. FalloutCraft hat es geschafft, indem es den Fabric-Mod von SkyCraft mit seinen eigenen Änderungen beibehalten und ein neues F4SE-Plugin geschrieben hat, weshalb einige SkyCraft-Funktionen nie portiert wurden: Graben, Beleuchtung, Wasser, NPC-Wege um Blöcke herum, Fertigkeitstraining und Mehrspielermodus.

Outer Wilds ist Unity, nicht Creation Engine. OWCraft, das dritte Projekt in dieser Familie, ist Unity mit dem Outer Wilds Mod Loader.

### Windows ist der gemeinsame Nenner

Die wichtigsten Passthrough-Projekte in diesen Anleitungen zielen auf Windows-Builds ihrer Spiele ab: SkyCraft, FalloutCraft, OWCraft und GTA San AnSkateas.

Das teilt zwei Arten:

- Für **Passthrough-Mods** muss das Host-Spiel laufen, daher sind sie an die Plattform gebunden, auf der das Spiel läuft. Mod-Loader sind Windows-Tools. Einige Projekte führen das Windows-Spiel über eine Übersetzungsebene aus, und ihre Ersteller berichten, dass es funktioniert:
  - **[LibertyCraft](https://github.com/mrborghini/libertycraft)** führt GTA IV unter Wine unter Linux mit einer POSIX-Version der Shared-Memory-Bridge von SkyCraft aus.
  - **[NewVegasCraft](https://github.com/Davozh/new-vegascraft)** läuft Fallout: New Vegas unter Proton unter Linux. Für das Setup war ein nativer 32-Bit-\`d3dcompiler_47\` zum Kompilieren der Shader erforderlich.
  - **Die [CrossOver-Brücken](https://github.com/justbustin/minecraft-crossover-bridge)** führen Elden Ring und Monster Hunter: World in CrossOver auf macOS aus, während Minecraft nativ läuft und einen dateigestützten Speicherbereich über die Wine-Grenze hinweg gemeinsam nutzt.

Erwarten Sie plattformspezifische Korrekturen wie diese und sagen Sie genau, welche Übersetzungsebene und -version Sie verwendet haben.
- **Rust-Umschreibungen** sind plattformübergreifend, da die Engine Ihr eigener Code ist. IW4L dokumentiert die Build-Schritte für Linux und macOS und baut daher auf beiden auf. Beachten Sie, dass als einfacher Weg eine vorgefertigte Windows-Version mitgeliefert wird und dass eine *abgeschlossene* Neufassung Sie immer noch nicht retten wird, wenn das Spiel nur unter Windows läuft: Ihre eigene Installation muss von jedem Betriebssystem aus lesbar sein.

Wenn Sie einen Passthrough-Mod unter Linux oder macOS laufen lassen, ist das wirklich nützlich und die Seite sollte dies auch verraten. [Leitfaden 15](15-case-studies-what-each-project-actually-did.md) enthält weitere Einzelheiten zu den oben genannten Projekten.

### Unity

Die häufigste Engine in modernen Indie-Spielen und der einfachste Einstieg.

- **BepInEx** patcht das Spiel beim Laden und lädt Ihre C#-Assemblys. Funktioniert sowohl mit Mono- als auch mit IL2CPP-Builds.
- **MelonLoader** erledigt die gleiche Aufgabe mit einer anderen API und besserer Unterstützung für mehr Titelvarianten. Wählen Sie eine aus; Installieren Sie nicht beides.
- **Mono oder IL2CPP ist wichtiger als der von Ihnen ausgewählte Loader.** Bei Mono-Builds ist der Code des Spiels echtes C#, daher dekompiliert [ILSpy](https://github.com/icsharpcode/ilspy) ihn direkt und Sie können die eigene Logik des Spiels lesen. Bei IL2CPP-Builds sind die Methodenkörper nativ, Sie stellen also Typen und Signaturen mit [Cpp2IL](https://github.com/SamboyCoding/Cpp2IL) wieder her und lesen die Körper dann in Ghidra. Wenn Sie nicht wissen, welche Sie haben, sollten Sie dies zunächst überprüfen.

### GameMaker

- **UndertaleModTool** liest die Datendateien und den Code des Spiels als Text, bearbeitet sie und schreibt sie zurück. Es ist das am leichtesten zugängliche Modding-Ziel auf dieser Liste und ein gutes Ziel zum Lernen, wenn Sie sehen möchten, wie ein Spiel intern funktioniert.
- Wissenswerte Einschränkungen: Nur GameMaker Studio 1.4 und GameMaker Studio 2 (Bytecode 13 bis 17), keine YYC-kompilierten Spiele und kein offizieller GUI-Build für macOS oder Linux.

### XNA und Mono (.NET-Spiele)

Terraria, Stardew Valley, Celeste und viele 2D-Indie-Spiele laufen auf XNA, dem .NET zugrunde liegt. Dies ist die benutzerfreundlichste Familie nach den Bethesda-Skript-Extendern, da der spieleigene Code C# ist und sauber dekompiliert werden kann.

- **[tModLoader](https://github.com/tModLoader/tModLoader)** ist Terrarias Modding-API und das erste, was man dort erreichen kann. Es erfordert die kostenlose tModLoader-App in Ihrer Steam-Bibliothek. Das ist eine Eigentumsprüfung, keine DRM-Umgehung: **Fügen Sie die App hinzu, patchen Sie die Prüfung nicht.**
- **[SMAPI](https://github.com/Pathoschild/SMAPI)** ist das Äquivalent für Stardew Valley und erledigt die gleiche Aufgabe für Stardew, plus Inhaltspakete.

Beide sind gut dokumentiert, beide haben große Mod-Communitys zum Lesen und beide bedeuten, dass der Agent gegen eine echte API schreibt, anstatt über Interna zu raten.

### RE Engine, RAGE und REDengine

Drei unabhängige Motoren von drei verschiedenen Unternehmen. Finden Sie das, auf dem Ihr Spiel läuft.

**RE Engine ist von Capcom.** Sie unterstützt Resident Evil, Monster Hunter, Dragon's Dogma, Devil May Cry und Street Fighter 6.

- **[REFramework](https://github.com/praydog/REFramework)** ist ein Mod-Loader, eine Skripting-Plattform und eine VR-Ebene, die die gesamte Familie mit einer Installation abdeckt. Die unterstützte Liste umfasst 19 Titel, alle Capcom. Skripte in Lua oder C#.

**RAGE (Rockstar Advanced Game Engine) ist separat und älter.** GTA V und Red Dead Redemption 2 verwenden es, und es ist nicht die RE Engine von Capcom.

- **[Ultimate ASI Loader](https://github.com/thirteenAG/Ultimate-ASI-Loader)** ist der Live-ASI-Loader. Es wird als DLL im Spielverzeichnis installiert und ASI-Dateien werden im Stammverzeichnis des Spiels oder in einem \`scripts\`-, \`plugins\`- oder \`update\`-Ordner abgelegt.
- **[scripthookvdotnet](https://github.com/scripthookvdotnet/scripthookvdotnet)** sitzt darüber und ermöglicht es Ihnen, GTA V-Mods in C# zu schreiben, anstatt in der nativen ABI, die der einfache Loader erwartet.
- **[CodeWalker](https://github.com/dexyfex/CodeWalker)** liest RAGE-Assets und -Formate. Es wurde seit April 2025 nicht mehr aktualisiert, also prüfen Sie, ob es immer noch das tut, was Sie brauchen.

**REDengine gehört CD Projekt und hat nichts damit zu tun.** Cyberpunk 2077 läuft darauf.

- **[WolvenKit](https://github.com/WolvenKit/WolvenKit)** ist das Community-Tool, das die Dateiformate von REDengine liest und schreibt. REDscript-Mods sind Klartext; WolvenKit kümmert sich um die Asset-Seite.
- **[REDmod](https://www.cyberpunk.net/en/modding-support)** ist das offizielle Modding-Tool von CD Projekt, das mit dem Spiel installiert wird. Greifen Sie vor den Community-Tools danach, da der Herausgeber es unterstützt.

Bei all diesen Dingen kommt es auf die Größe an. Eine Installation, die neunzehn Spiele mit völlig unterschiedlichen Inhalten abdeckt, ist ein anderes technisches Problem als ein Loader für einen Titel, und es lohnt sich, so etwas zu lesen, um zu sehen, wie es gemacht wurde.

### Unreal Engine

- **UE4SS** fügt eine Lua-Skriptebene ein, generiert einen Live-SDK-Dump und stellt Ihnen einen Eigenschafteneditor zur Verfügung, mit dem Sie in einem laufenden Spiel herumstochern können. Allein der Eigenschaftseditor eignet sich gut für die Erkundung: Sie können den Wert von allem lesen und herausfinden, was eine Variable bewirkt.
- Spiele werden in Unreal 4 und Unreal 5 mit sehr unterschiedlichen internen Komponenten ausgeliefert. Die UE4SS-Unterstützung variiert je nach Titel, also prüfen Sie dies, bevor Sie sich verpflichten.

### Neuimplementierungen der Open-Source-Engine

Keine Lader, aber die gleiche Arbeitsfamilie wie ein Umschreiben. Lesenswert, weil sie fertig, lizenziert und dokumentiert sind:

| Projekt | Original | Was es zeigt |
|---------|----------|----------------|
| [OpenRCT2](https://github.com/OpenRCT2/OpenRCT2) | RollerCoaster Tycoon 2 | Eine ausgefeilte Neuimplementierung, die das Original verbessert |
| [OpenTTD](https://github.com/OpenTTD/OpenTTD) | Transport Tycoon Deluxe | Langjährig, ausgereift, gut dokumentiert |
| [OpenMW](https://github.com/OpenMW/openmw) | Morrowind | Eine vollständige Neuimplementierung der Engine mit einer langen öffentlichen Geschichte |
| [N64Recomp](https://github.com/N64Recomp/N64Recomp) | Nintendo 64-Spiele | Kompiliert Einzelhandels-N64-ROMs neu in native ausführbare Dateien, anstatt sie zu emulieren |
| [shadPS4](https://github.com/shadps4-emu/shadPS4) | PS4-Spiele | Ein PS4-Emulator, der gleichzeitig als Kompatibilitätsreferenz dient |

Dies dauerte Jahre und erforderte viele Mitwirkende. Lesen Sie sie zur Strukturierung, nicht als Vorlage für ein Wochenendprojekt.

N64Recomp ist für Anfänger interessant, da es eine andere Antwort auf dieselbe Frage zeigt. Anstatt die Logik eines Spiels in einer neuen Sprache neu zu implementieren, übersetzt es den vorhandenen Maschinencode in etwas, das Ihre CPU nativ ausführt. Viel weniger Aufwand als ein Neuschreiben, und es funktioniert nur mit Closed-Source-Code, den Sie bereits besitzen.

## So installieren Sie einen Loader

Der Prozess besteht fast immer aus den gleichen vier Schritten. Bitten Sie Ihren Agenten, Sie durch die Angelegenheit zu führen, aber es sieht so aus:

1. Suchen Sie die offizielle Website des Loaders und laden Sie die Version herunter, die **genau zu Ihrer Spielversion** passt.
2. Extrahieren Sie es in den Installationsordner des Spiels. Normalerweise gibt es kein Installationsprogramm.
3. Starten Sie das Spiel einmal. Der Loader schreibt ein Protokoll und erstellt einen Plugins- oder Mods-Ordner.
4. Legen Sie Ihre Datei in diesem Ordner ab und starten Sie das Spiel erneut.

Die Protokolldatei ist dein Freund. Wenn etwas nicht lädt, sagt der Lader fast immer den Grund dafür.

### Versionskonflikte sind das größte Problem

Loader und Mod-APIs sind an bestimmte Spielversionen gebunden. Ein für Skyrim 1.5.97 erstellter Loader wird in 1.6.1170 nicht korrekt geladen. Mitglieder haben dadurch ganze Abende verloren.

- Schreiben Sie Ihre genaue Spielversion in Ihre README-Datei und in jede von Ihnen eingereichte Ausgabe.
- Halten Sie ein Downgrade-Tool bereit, wenn das Spiel alt ist. GTA San AnSkateas benötigt GTA San Andreas in **Version 1.0 US**, was weder die aktuelle Steam-Version noch die Definitive Edition ist, daher verwendet es einen Open-Source-Downgrader ([gtasa-open-downgrader](https://github.com/xxanqw/gtasa-open-downgrader)).

Ein Downgrader ist ein Tool zum Versionsabgleich, kein DRM-Tool. Es existiert, damit eine Kopie, die Sie bereits besitzen, den Build erreicht, für den ein Mod geschrieben wurde. Sehen Sie sich [Guide 6](06-rules-legal-and-publishing.md) an, wo sich diese Zeile befindet.

## Disc-basierte und Konsolenspiele

Einige Projekte benötigen ein Spiel, das Sie nicht über Steam installieren können. GTA San AnSkateas benötigt Skate 3 für Xbox 360, extrahiert aus der ISO Ihrer eigenen Disc mit einem Tool wie [extract-xiso](https://github.com/XboxDev/extract-xiso) oder aus einer Games on Demand-Kopie mit Velocity.

Was das in der Praxis bedeutet:

- **Extrahieren Sie von Ihrer eigenen Disc oder Ihrem eigenen Dump.** Die ISO ist Ihre Kopie eines von Ihnen gekauften Spiels, es handelt sich also um ein faires Spiel für den persönlichen Gebrauch.
- **Nehmen Sie niemals eine ISO von einer Download-Site oder einem Torrent.** Das ist das Einzige, was Sie auf die falsche Seite der Regeln in [Leitfaden 6](06-rules-legal-and-publishing.md) bringt und das gesamte Projekt beeinträchtigt.
- **Bewahren Sie die extrahierten Dateien außerhalb Ihres Repos auf.** Es handelt sich um Spieldaten, daher gehören sie wie alles andere in Ihren Gitignored-Ordner.

## Checkliste, bevor Sie ein Host-Spiel auswählen

- [ ] Ich kenne die Engine (Creation Engine, Unity, Unreal, GameMaker, benutzerdefiniert)
- [ ] Es gibt einen Loader oder eine Mod-API dafür und sie ist aktuell
- [ ] Es ist Einzelspieler oder offline
- [ ] Ich besitze es und der Loader ist ein legitimes öffentliches Tool
- [ ] Ich kenne die genaue Spielversion und weiß, ob ich ein Downgrade durchführen muss
- [ ] Ich habe mindestens einen vorhandenen Mod für dieses Spiel gefunden, sodass ich echten Code lesen kann

Sie können nicht alle sechs ankreuzen? Schauen Sie sich ein anderes Spiel an. Das heißt nicht aufgeben, und es kommt früher etwas auf die Leinwand.

---

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/08-mod-loaders-and-script-extenders.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/08-mod-loaders-and-script-extenders.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>`,u=`# 9. Arbeitsbeispiel: Ein Passthrough-Mod, Anfang bis Ende

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
\`\`\`
Game A: C:\\Games\\GameA
Game B:  C:\\Users\\you\\AppData\\Roaming\\.minecraft
\`\`\`

Installieren Sie außerdem den Loader von Game A und testen Sie ihn mit einem vorhandenen Mod. Wenn der Loader den bekanntermaßen guten Mod einer anderen Person nicht lädt, stoppen Sie zunächst und beheben Sie das Problem. Sie möchten eine langweilige, funktionierende Grundlinie, bevor Sie etwas hinzufügen.

## Schritt 2: Erstellen Sie das Projekt
\`\`\`bash
mkdir my-passthrough && cd my-passthrough
git init
\`\`\`

Erstellen Sie drei leere Dateien und bitten Sie den Agenten, sie auf dem neuesten Stand zu halten. Dies sind Ihre sitzungsübergreifenden Erinnerungen:

- \`AGENTS.md\`: Regeln, die der Agent immer befolgen muss
- \`MODLOG.md\`: Was hat sich geändert und wie wurde es getestet
- \`docs/DESIGN.md\`: wie es funktioniert, im Klartext

Kopieren Sie [\`templates/AGENTS-starter.md\`](../templates/AGENTS-starter.md) und
[\`templates/MODLOG-template.md\`](../templates/MODLOG-template.md) um loszulegen.

## Schritt 3: Die erste Eingabeaufforderung

Halten Sie es klar. Sie zeigen auf ein funktionierendes Beispiel und geben die Substitution an.
\`\`\`
Ich möchte einen Passthrough-Mod wie SkyCraft (https://github.com/chasmlol/SkyCraft) erstellen.
aber für Spiel A und Spiel B.

Klonen Sie SkyCraft lokal und lesen Sie die README-Datei und docs/DESIGN.md, damit Sie es verstehen
die Architektur. Ich möchte den gleichen Ansatz wie SkyCraft.

Spiel A ist unter [Pfad] installiert. Spiel B ist unter [Pfad] installiert.

Bevor Sie etwas bauen, sagen Sie mir:
- Verfügt Spiel A über einen Mod-Loader oder Script-Extender, den wir verwenden können?
- Verfügt eines der Spiele über Online-Spiel oder Anti-Cheat? (Wir rühren diese nicht an.)

Ändern Sie noch keinen Code. Melden Sie einfach, was Sie gefunden haben.
\`\`\`

Die letzte Zeile ist wichtig. Eine schreibgeschützte Aufklärungsantwort kostet zunächst eine Runde und erspart Ihnen einen sicheren Plan, der auf einer falschen Annahme basiert.

**Was Sie zurückerhalten sollten:** eine Liste dessen, was für jedes Spiel vorhanden ist, welchen Loader Sie verwenden würden und welche Blocker es gibt. Wenn es heißt „Spiel A bietet keine Modding-Unterstützung“, erhalten Sie Ihre Antwort kostenlos. Wählen Sie ein anderes Host-Spiel.

## Schritt 4: Erstellen Sie einen Plan und tragen Sie dann eine Zeile in ein Protokoll ein

Fordern Sie vor dem Code einen Plan an:
\`\`\`
Schreiben Sie den Plan als docs/DESIGN.md. Behalte es bei: den beiden Hälften des Mods,
welche Daten zwischen ihnen ausgetauscht werden und in welcher Reihenfolge wir sie erstellen.
Führen Sie dann nur Schritt 1 durch.
\`\`\`

Das Designdokument benötigt vier Dinge, und wenn man sie namentlich anfragt, erspart man sich einen Hin- und Rückweg:

- **Die beiden Hälften.** Welcher Prozess hostet welchen Code und in welcher Sprache?
- **Welche Daten kreuzen.** Die Nachrichtenliste. Der Katalog von SkyCraft im Abschnitt 10 von DESIGN.md ist das Modell: Spielerposition pro Frame, gestreamte Kollisionsabschnitte, NPC-Positionen bei 20 Hz und Ereignisse wie Blockwechsel und Treffer.
- **Welches Spiel ist wofür maßgeblich.** Siehe Schritt 5.
- **Die Baureihenfolge.** Jede Phase endet mit etwas Spielbarem.

Schritt 1 ist immer derselbe: **Ihr Code wird in Spiel A geladen und schreibt eine Zeile in eine Protokolldatei.**
\`\`\`
Führen Sie es aus. Ich möchte eine Zeile im Protokoll sehen, die besagt, dass Ihr Plugin geladen wurde.
Machen Sie noch nichts anderes.
\`\`\`

Zwei Spiele, eine Protokollzeile. Holen Sie sich das, und der Rest ist Iteration.

Sobald das funktioniert, ist der nächste Schritt ein Handschlag, nicht weitere Funktionen. Beide Seiten öffnen den gemeinsamen Speicher, einigen sich auf eine Protokollversion und protokollieren diese. Dadurch wird der Fehler behoben, den Sie sonst viel später debuggen würden: Die beiden Hälften öffnen nicht übereinstimmende Strukturen und interpretieren die Bytes der jeweils anderen als Unsinn.
\`\`\`
Als nächstes öffnen beide Seiten den Shared-Memory-Block und überprüfen den Header.
Magische Nummer, Protokollversion, beide Prozess-IDs. Protokollieren Sie, was jede Seite gelesen hat.
Wenn der Header nicht übereinstimmt, halten beide Seiten inne und sagen dies, anstatt fortzufahren.
\`\`\`

## Schritt 5: Senden Sie einen Wert

**Welches Spiel maßgeblich ist, ist wichtig, und die offensichtliche Antwort ist normalerweise falsch.**

Die Intuition ist, dass das Host-Spiel den Spieler besitzt, weil es derjenige ist, den Sie betrachten. SkyCraft macht das Gegenteil: **Minecraft ist maßgeblich für die Spielerposition und die Physik.** Skyrim zeichnet die Welt und sorgt für Kollision, aber die Spielerpuppe wird dorthin bewegt, wo Minecraft sagt.

Entscheiden Sie dies, bevor Sie den Transport schreiben, denn wenn Sie ihn später umkehren, müssen Sie beide Hälften neu schreiben. Schreiben Sie es in [\`templates/BRIDGE-CONTRACT.md\`](../templates/BRIDGE-CONTRACT.md), zusammen mit der Art und Weise, wie die Kontrolle über Zwischensequenzen, Fahrzeuge und Menüs an den Host zurückgegeben wird.

Spielerposition zuerst, da sie leicht zu erkennen und zu überprüfen ist. Senden Sie es bei jedem Render-Frame:
\`\`\`
Weiter: Minecraft ist maßgeblich für die Spielerposition. Jeder Render-Frame,
Senden Sie seine interpolierte Position (die Partial-Tick-Renderposition, nicht die Rohposition).
20 TPS-Tick-Position) zu Skyrim, wodurch die Spielerpuppe entsprechend bewegt wird.

Protokollieren Sie den Wert, den Sie senden, und den Wert, den Skyrim empfängt, damit ich sie vergleichen kann.
\`\`\`

Führen Sie dann beide Spiele aus und gehen Sie herum. Überprüfen Sie das Protokoll. Die Positionen sollten übereinstimmen.

**Verifizierungstrick:** Protokollieren Sie den Wert auf beiden Seiten mit einem Zeitstempel oder Frame-Zähler. Sie sollten nie darauf achten müssen, ob zwei Zahlen übereinstimmen.

Das ist die bewährte Architektur. Sobald ein Schwimmer die Grenze überschreitet, ist der schwierige Teil erledigt.

Zwei Details, die es wert sind, von SkyCraft kopiert zu werden:

- **Interpoliert, nicht roh.** Minecraft tickt mit 20 TPS, rendert aber mit Ihrer Anzeigerate. Senden Sie die Renderposition, oder die Bewegung sieht aus, als würde sie schrittweise erfolgen.
- **Frame-Lockstep.** Beide Seiten deaktivieren ihre eigenen Frame-Caps und Vsync und synchronisieren dann auf ein explizites „Begin Frame N“-Signal. Ohne dies driften die beiden Spiele und es kommt zum Stottern.

## Schritt 6: Etwas zurückschicken

Schließen Sie nun den Kreis. Skyrim erzählt Minecraft, wie die Welt geformt ist und wo sich die NPCs befinden:
\`\`\`
Als nächstes: Senden Sie Kollisionsformen von Skyrim in die Nähe des Spielers sowie NPC-Positionen.
Fügen Sie sie in die Kollisionsabfragen von Minecraft ein, also in die eigene Physik von Minecraft
läuft unverändert gegen die Geometrie von Skyrim. Protokollieren Sie beide Richtungen.
\`\`\`

Zwei Spiele im Gespräch. Alles danach sind Features.

**Bevor Sie etwas davon bauen, beantworten Sie die Absturzfrage.** Wenn Spiel B mitten im Bild stirbt, hat die Spielerpuppe in Spiel A keine Position und kein Gehirn. Heartbeats im Shared-Memory-Header erkennen dies, und jede Seite benötigt einen definierten sicheren Zustand: Spiel A gibt die Kontrolle an den Spieler zurück, Spiel B pausiert, anstatt gegen nichts zu simulieren. Entscheiden Sie es jetzt. Die Nachrüstung eines Ausfallpfads in ein funktionierendes Transportmittel ist ein schlechter Nachmittag.

**Behalten Sie ein Schema an einem Ort.** Definieren Sie die Nachrichten einmal und generieren Sie daraus den Code für beide Seiten, oder schreiben Sie die Strukturen manuell in beiden Sprachen und akzeptieren Sie, dass sie beim ersten Hinzufügen eines Felds abweichen. SkyCraft behält die Definition in \`protocol/messages.*\` und generiert daraus einen C++-Header und eine Java-Klasse, mit einem Layouttest in CI auf beiden Seiten. Alles hat eine feste Größe und Little-Endian, es gibt also keine Serialisierungsbibliothek im Hot-Pfad. Daten variabler Länge, wie eine Liste von Kollisionsboxen, werden als Anzahl übertragen, gefolgt von Datensätzen fester Größe.

## Schritt 7: Fügen Sie jeweils eine Funktion hinzu

Eine sinnvolle Reihenfolge, ungefähr vom kleinsten zum größten:

1. Positionieren Sie Spiel A → Spiel B
2. Geben Sie Spiel B → Spiel A ein oder geben Sie es an
3. Der Spieler von Spiel A bewegt sich und es erscheint in Spiel B
4. Erzeuge die Objekte von Spiel B (Blöcke, Feinde) in der Welt von Spiel A
5. Kampf
6. Inventar
7. Benutzeroberfläche, falls eines der Spiele sie benötigt

Nach jedem: **Playtest, dann Commit.** Wenn ein Schritt unterbrochen wird, ist \`git revert\` sofort gültig.

## Schritt 8: Sorgen Sie dafür, dass es nicht stottert

Passthrough-Mods führen zwei Spiele und einen Nachrichtenkanal gleichzeitig aus, sodass die Leistung der wahre Feind ist.

**Das Gameplay-Spiel führt weiterhin seinen Client aus.** Es läuft nicht kopflos. In SkyCraft 0.1.2 erstellt der Client von Minecraft die Blocknetze und Texturen, die Skyrim dann in seinem eigenen Renderer zeichnet (so verbergen die Wände von Skyrim Ihre Blöcke) und rendert die Hand, das HUD und die Menüs außerhalb des Bildschirms als Bild, das über den Rahmen von Skyrim gelegt wird. Projekte, die stattdessen das gesamte Bild von Minecraft einfügen („Frame-Compositing“, siehe [Anleitung 14](14-choosing-a-route.md)), benötigen ihren Renderer noch mehr. „Ohne Rendering ausführen“ macht beide Designs kaputt.

Das macht die *Präsentation* des versteckten Fensters zum ersten Blickpunkt. OWCraft überspringt die Anzeige des versteckten Fensters von Minecraft während der Verknüpfung, was Minecraft von 25 auf 60 fps brachte. Andere Dinge, nach denen es sich zu fragen lohnt:

- Senden Sie Deltas anstelle des vollständigen Status, wenn die Werte groß sind
- Framezeiten beider Prozesse protokollieren und vergleichen. Zahlen sind besser als Raten
\`\`\`
Spiel A sinkt auf 40 fps. Die Frame-Zeiten sind in [Protokollpfad] angegeben. Finden Sie den Engpass
bevor ich etwas ändere. Sag mir zuerst, was im Profil steht.
\`\`\`

**Zwei Spiele bedeuten ungefähr doppelt so viel RAM, und der Appetit des Gameplay-Spiels ist die Überraschung.** Der Speicher von Minecraft ist der Teil, den Sie steuern können: SkyCraft hält den JVM-Heap bei etwa 3 GB und rendert fast nichts, weil die Welt, die er zeichnet, eine Leere ohne Terrain ist. Die gesamte Geometrie stammt aus Spiel A. Wenn Ihr Spiel eine eigene vollständige Welt lädt, zahlen Sie für zwei Welten.

Sagen Sie es am Anfang einmal, anstatt am Ende zu optimieren:
\`\`\`
Spiel B liefert nur Physik und Inventar. Es muss nicht geladen werden
eigenes Gelände. Verschließen Sie den Speicher und sagen Sie mir, was ich einstellen soll.
\`\`\`

Informationen zu den spezifischen Symptomen (verrutschende Bilder, fehlende Tiefe, feststeckende Zwischensequenzen, NPCs, die durch Blöcke laufen) und welche anderen Projekte sie verursacht haben, finden Sie in [Guide 16](16-ownership-sync-and-rendering.md).

## Schritt 9: Sorgen Sie dafür, dass das Speichern und Laden funktioniert

Überspringen Sie dies und Sie finden den schlechten Weg heraus. Zwei Spiele mit zwei Speichersystemen bedeuten, dass ein Speicherstand von Spiel A geladen wird und ein inkonsistenter Status von Spiel B angezeigt wird: Ihre Blöcke und Ihr Inventar sind weg, oder sie sind in der Welt, aber nicht Ihr Inventar.

Die Antwort von SkyCraft ist eine gemeinsame Speicher-ID. Das Plugin speichert eine ID im Speicher von Spiel A. Beim Speichern löscht Spiel B seine Spiegelwelt und erstellt einen Snapshot seiner eigenen Region und Spielerdaten unter dieser ID. Beim Laden liest es die ID zurück und stellt auch seine Seite wieder her, sodass beide immer zusammen zurückspulen.
\`\`\`
Beim Speichern von Spiel A muss auch Spiel B gespeichert werden. Geben Sie eine Speicher-ID in die Speicherdatei von Spiel A ein.
Lassen Sie Spiel B leeren, erstellen Sie einen Snapshot seines Status unter dieser ID und stellen Sie ihn dann wieder her
Spiel A wird geladen. Testen Sie es, indem Sie etwas bauen, speichern, beide Spiele beenden,
Neustart und Laden.
\`\`\`

Testen Sie den letzten Satz konkret. Beim Speichern und Laden bricht diese Mod-Klasse stillschweigend zusammen, da beide Spiele bis zum Neustart einwandfrei laufen.

## Schritt 10: Veröffentlichen

Siehe [Leitfaden 10](10-posting-your-project.md) für die Veröffentlichung und [Leitfaden 6](06-rules-legal-and-publishing.md) für die Regeln, die Sie nicht brechen dürfen. Die Kurzversion: Ihr Repo besteht nur aus Code, niemals aus Spieledateien.

## Was tatsächlich passiert ist, ehrlich gesagt

- Ein Elden Ring + Spider-Man-Mashup brauchte etwa drei bis vier Stunden hin und her, bevor es funktionierte, und das Ergebnis war zwar Quatsch, aber spielbar. Ein Datenpunkt, keine typische Laufzeit.
- Wenn jemand gegen eine Wand stößt, kommt es meist zum ersten Mal, wenn etwas die Grenze überschreitet und im falschen Koordinatenraum landet, oder wenn die Frame-Uhren der beiden Spiele auseinanderdriften. Beides ist normal.
- Wenn Sie eine Taste drücken: Hören Sie auf, Prompts zu wiederholen. Schreiben Sie ein \`STATUS.md\`, eröffnen Sie einen neuen Chat und übergeben Sie ihn. Siehe [Leitfaden 5](05-testing-and-troubleshooting.md).

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
- [ ] \`git init\` fertig, und Sie haben sich verpflichtet
- [ ] \`AGENTS.md\` und \`MODLOG.md\` existieren
- [ ] Agent hat Ihnen einen Aufklärungsbericht gegeben, bevor er Code geschrieben hat
- [] Ihr Code lädt und protokolliert eine Zeile
- [ ] Beide Seiten schütteln sich die Hände und einigen sich auf eine Protokollversion
- [ ] Ein Wert kreuzt sich, beidseitig protokolliert
- [ ] Speichern und Laden während eines vollständigen Beendens und Neustarts getestet
- [ ] Funktionen werden einzeln hinzugefügt, jeweils getestet und übernommen
- [ ] README sagt, was funktioniert und was nicht
- [] Keine Spieledateien im Repo

---

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/09-worked-example-passthrough-mod.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/09-worked-example-passthrough-mod.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>`,o=`# 10. Veröffentlichen Sie Ihr Projekt

Du hast etwas, das läuft. Jetzt möchten Sie, dass die Leute es finden, und Sie möchten nicht, dass Ihr Projekt aufgrund einer Regel, von der Sie nichts wussten, zum Erliegen kommt.

## Was und wo gepostet werden soll

Posten Sie auf dem Discord unter **#share-your-projects**, damit die richtigen Leute es sehen. Dort sind nicht nur fertige, sondern auch halbfertige Projekte willkommen.

Stellen Sie Ihr Projekt auf **GitHub** und verlinken Sie das Repo, wenn Sie möchten, dass andere es nutzen können. Ein Repo wird dringend empfohlen. Einen direkten Download-Link gibt es nicht.

### Posten Sie diese niemals

- Gerippte Assets, Texturen, Modelle, Sounds oder Karten
- Durchgesickerter oder dekompilierter Spielcode
- Spieldateien jeglicher Art
- Links zu Raubkopien oder durchgesickertem Material
- Direkte Dateihosts oder Download-Links anstelle eines Repos

Wenn Ihr Projekt Spielinhalte benötigt, liest es diese aus der eigenen Installation des Spielers. Das ist die Regel und deshalb verfügt jedes Beispielprojekt über einen Extraktor oder ein Setup-Skript anstelle eines Datenordners.

## Bevor Sie posten: der Vorflug

Gehen Sie diese Liste durch. Es dauert fünf Minuten und verhindert die am häufigsten auftretenden Probleme.

- [ ] \`git status\` ist sauber und es gibt keine nicht festgeschriebenen Spieldaten
- [ ] Repo wird nach großen Dateien durchsucht: \`git ls-files | xargs du -h | sort -rh | head -20\`
- [ ] \`.gitignore\` ist eine **Whitelist**, die alles ignoriert und nur die Quelle einschließt
– [ ] \`git log --all --stat\` zeigt an, dass nie Assets übertragen wurden
- [ ] Sie haben jedem Projekt, auf dem Sie aufgebaut haben, einen Link angegeben
- [ ] \`THIRD-PARTY-NOTICES.md\` existiert, wenn Sie Code wiederverwendet haben
- [ ] README gibt die Spiele und **genaue Versionen** an, die benötigt werden
- [ ] README gibt an, was funktioniert und was nicht
- In der README-Datei steht, dass es sich um ein inoffizielles Fanprojekt handelt
- [ ] README erwähnt, dass Sie KI verwendet haben
- [ ] Alle Veröffentlichungs-ZIP-Dateien wurden auf Spieldateien überprüft
- [ ] Es wurde auf einer sauberen Maschine getestet, nicht nur auf Ihrer eigenen

Zwei davon decken die häufigsten Probleme ab. \`git log --all --stat\` ist das, was die Leute überspringen, und es ist die einzige Möglichkeit, ein Asset zu finden, das vor drei Wochen festgeschrieben und dann gelöscht wurde. \`git ls-files | xargs du -h | sort -rh | head -20\` fängt eine 400 MB große Textur ab, die jemand hinzugefügt hat, bevor die Whitelist eingerichtet wurde.

### Wenn Sie bereits Spieledateien übertragen haben

Der Git-Verlauf ist in dem Moment öffentlich, in dem Sie pushen. Gehen Sie folgendermaßen vor:

1. Drehen Sie zuerst alles, was empfindlich ist.
2. \`git filter-repo --path path/to/bad --invert-paths\`
3. Force-Push: \`git push --force\`
4. Bitten Sie den GitHub-Support, die alten Objekte in den Müll zu sammeln. Bis dahin sind sie nur unerreichbar, nicht verschwunden.
5. Löschen Sie alle Release-ZIP-Dateien, in denen sie enthalten waren, und laden Sie sie erneut hoch.

Gehen Sie davon aus, dass alles, was jemals gepusht wurde, kopiert wurde. Verlassen Sie sich nicht allein auf eine Neufassung der Geschichte.

## Die README-Datei ist der Beitrag

Die meisten Leute lesen die README-Datei und sonst nichts. Strukturieren Sie Ihre wie folgt:
\`\`\`markdown
# [Projektname]

Ein Satz: Was es tut und was es anders macht.

![Screenshot oder kurzes GIF](docs/screenshot.png)

## Was funktioniert
- Funktion
- Funktion
- Funktion

## Was noch nicht funktioniert
- Feature, das zur Hälfte fertig ist
- Alles ungetestet
- Bekannte Fehler

## Anforderungen
- Spiel A: Version X.Y.Z (Steam / GOG / andere)
- Spiel B: Version X.Y.Z
- [Loader](link) für Spiel A
- Nur Einzelspieler/Offline

## Anleitung zur Installation
1. Installieren Sie beide Spiele und den Loader.
2. Build: \`setup.ps1\` oder \`./gradlew build\`
3. Kopieren Sie die Ausgabe in [Ordner].
4. Führen Sie Spiel A durch.

## Spielanleitung
Kurze, konkrete Schritte.

## Wie es funktioniert
Ein paar Absätze oder Link docs/DESIGN.md.

## Credits
- [SkyCraft](link): das Design, auf dem es basiert
- [Alle anderen, die geholfen haben]

## Legal
Inoffizielles Fanprojekt. Nicht mit dem Herausgeber verbunden oder von ihm unterstützt.
Es sind keine Spielinhalte enthalten. Die Spieler liefern ihre eigenen Kopien.

Gebaut mit KI-Codierungsagenten.
\`\`\`

## Sorgen Sie dafür, dass das Repo vertrauenswürdig aussieht

Neue Projekte ohne Sterne und ohne Commits werden ignoriert. Diese Dinge helfen:

- **Ein Screenshot oder ein GIF.** Normalerweise der Unterschied zwischen einem Klick und einem Scrollen. Notieren Sie sich etwas, wenn es sein muss.
- **Eine Commit-Historie.** Zwanzig kleine Commits lesen sich wie „jemand, der sorgfältig arbeitet.“ Ein riesiger Commit liest sich als „Einfügen“.
- **A MODLOG.md.** Zeigt, was Sie testen, was Sie behaupten. OWCraft behält eines und verlinkt es über seine README-Datei, das günstigste mögliche Signal, das Sie tatsächlich testen.
- **Ein ehrlicher Abschnitt „Was funktioniert nicht?“** Dies schafft mehr Vertrauen als eine Liste von Funktionen und erspart Ihnen die Support-Fragen.
- **Sagen Sie den Leuten, sie sollen ihre Spielstände sichern.** Die frühen Projekte in diesem Bereich sagen es alle, und sie haben Recht.

## Der Forumsbeitrag

Halten Sie es kurz. Die README-Datei erledigt die Details.
\`\`\`
**Titel:** [Spiel A] + [Spiel B] Passthrough-Mod

**Spiele:** [Spiel A] v[Version] + [Spiel B] v[Version]
**Repo:** [Link]
**Benötigt:** beide Spiele installiert, plus [Loader] für [Spiel A]

**Was funktioniert:** [2-3 Aufzählungspunkte]

**Was ist kaputt:** [sei ehrlich]

**Getestet auf:** Windows [Version], GPU [Modell]
**Getestet wie:** [auf einer sauberen Maschine installiert / nur auf meinem eigenen PC]
\`\`\`

Die letzte Zeile ist wichtiger als sie aussieht. Wenn Sie sagen, dass Sie den Beitrag nur auf Ihrem eigenen Computer getestet haben, erfahren Sie genau, wie sehr er dem Beitrag vertrauen kann, und Sie ersparen sich einen Support-Thread, in dem jemand ein Problem entdeckt, vor dem Sie ihn hätten warnen können.

### Tags und Format

Benutze die Tags und die Beitragsvorlage aus den angepinnten Richtlinien im Discord. Wenn Sie die Vorlage überspringen, ist Ihr Beitrag schwerer zu lesen und erhält weniger Hilfe.

### Nach dem Posten

- Bleiben Sie im Thread. Bei den meisten „Es funktioniert nicht“-Meldungen handelt es sich um eine Versionsinkongruenz oder einen fehlenden Loader, und Sie können in einer Zeile antworten.
- Bitten Sie um Protokolle, nicht um Beschreibungen: „Ich brauche Ihr Protokoll von beiden Spielen, nicht wie es aussah.“
- Wenn jemand meldet, dass es bei ihm funktioniert, bei Ihnen aber nicht, ist das ein Fehlerbericht, dem Sie nachgehen sollten.

## Wo sonst noch veröffentlicht werden kann

- **GitHub-Releases:** versenden einen Build als Zip. Überprüfen Sie zunächst den Zip-Inhalt auf Spieldateien. Viele dieser Projekte tun dies.
- **Nexus Mods / ModDB:** externe Mod-Sites mit eigenen Regeln. Die meisten verlangen, dass Benutzer ihre eigenen Spieldateien bereitstellen.
- **Steam Workshop:** wenn Ihr Spiel dies unterstützt. Gleiche Regel: Ihr Upload enthält keine urheberrechtlich geschützten Spielinhalte. Bitten Sie Ihren Agenten, einen Extraktor zu schreiben, den die Spieler selbst ausführen, anstatt Assets zu versenden.
- **Ein Thread im Discord.** Verlinke das Repo. Veröffentlichen Sie nicht das Ganze erneut.

## Anti-Cheat- und Online-Spiele

Nicht verhandelbar und keine rechtliche Grauzone: **Nur Einzelspieler- und Offline-Spiele.** Mods für Spiele mit Anti-Cheat führen dazu, dass Leute gesperrt werden, und KI-Agenten werden Ihnen nicht dabei helfen, dies zu umgehen. Die eigenen Tools der Community verweigern dies ebenfalls.

Wenn Ihr Spiel sowohl einen Online- als auch einen Offline-Modus hat, wählen Sie den Offline-Modus.

## Wenn ein Rechteinhaber Sie kontaktiert

Entfernen Sie es. Das ist die richtige Entscheidung, unabhängig davon, ob sich ein anderes Projekt die Mühe macht, dies in seiner README-Datei zu erwähnen, und Gang-Beasts-Rust tut dies auch. Quellenangabe und Links zum Originalwerk sind zwar hilfreich, aber sie berechtigen nicht dazu, weiterhin die Assets anderer zu versenden.

## Die Post-Checkliste

- [ ] Die Vorflugliste bestanden
- [ ] Repo-Link, kein Download-Link
- [ ] Spiele und genaue Versionen angegeben
- [ ] Screenshot oder GIF
- [ ] Der Abschnitt „Was nicht funktioniert“ ist ehrlich
- [ ] Credits in der README
- [ ] Credits für den Beitrag selbst
- [ ] Vorlage und Tags verwendet
- [ ] Sagte, es sei ein Fanprojekt
- [ ] Erwähnte KI-Nutzung
- [ ] Hat den Leuten gesagt, sie sollen Backups sichern
- [ ] Bereit, Fragen im Thread zu beantworten

---

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/10-posting-your-project.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/10-posting-your-project.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>`,h=`# 11. Modelle und was man ausgeben sollte

Was zu bezahlen ist und worauf man hinweisen soll. Alles hier wurde im Oktober 2026 mit den Preisseiten der Anbieter verglichen. Pläne ändern sich, also überprüfen Sie dies, bevor Sie sich verpflichten.

## Die Kurzversion

| Budget | Was gibt es zu kaufen | Was Sie bekommen |
|--------|--------------|--------------|
| Kostenlos | [OpenCode](https://opencode.ai) mit einem kostenlosen Modell | Genug, um Dinge auszuprobieren und den Anleitungen zu folgen |
| Ungefähr 10 $ | [OpenCode Los](https://opencode.ai/go) | Der beste Wert. DeepSeek V4.1 Flash und Freunde bei hoher Lautstärke |
| 20 $ | [Claude Pro](https://claude.com/pricing) | Das beste Einzelabonnement und die Wahl, wenn Sie einen Plan kaufen |
| 40 $ | OpenCode Go Plus | Weitere gleiche Modelle. Selten der beste Anruf über Claude Pro |
| 100 $ | Claude Max 5x | Für den Fall, dass 20 $ mitten im Projekt aufgebraucht sind |
| 200 $ | Claude Max. 20x | Erst wenn Sie bewiesen haben, dass Sie es brauchen |
| Bezahlung pro Token | Die API eines beliebigen Anbieters, normalerweise über OpenRouter | Wenn Nutzungsobergrenzen das Problem sind und nicht das Budget |

Greifen Sie zu einem anderen Modell und der Preis schwankt stark. DeepSeek V4.1 Flash kostet außerhalb der Spitzenzeiten über OpenCode Go 0,15 US-Dollar bzw. 0,60 US-Dollar pro Million Token, und eine direkte API kommt dem nahe. Das aktuelle Flaggschiff von Claude, Opus 5.5, kostet 4 und 20 US-Dollar. Pro Token bedeutet, dass Sie nie an Schwierigkeiten stoßen und auch nie eine monatliche Pauschalrate erhalten, was für Leute geeignet ist, die in großen Mengen arbeiten.

## Etwa 10 $: OpenCode Los

Go ist ein 10-Dollar-Abonnement, das Zugriff auf die stärksten offenen Codierungsmodelle bietet. DeepSeek V4.1 Flash ist das Richtige für den Anfang: günstig, schnell und gut genug für die meisten dieser Arbeiten.

DeepSeek V4.1 Flash kostet über Go 0,15 US-Dollar pro Million Input-Tokens und 0,60 US-Dollar Output außerhalb der Spitzenzeiten, was sich auf 0,30 US-Dollar und 1,20 US-Dollar in der Spitzenzeit verdoppelt. Der Spitzenwert liegt wochentags zwischen 01:00 und 04:00 Uhr und zwischen 06:00 und 10:00 Uhr UTC. Führen Sie Ihre Builds über Nacht aus und Sie zahlen den Nebentarif.

Das monatliche Kontingent von 60 US-Dollar entspricht etwa 26.000 Anfragen pro Fünf-Stunden-Fenster oder 130.000 pro Monat. Das ist eine Menge Arbeit.

Die Limits von Go haben die gleiche Form wie die von Claude: 20 % der monatlichen Vergütung pro fünf Stunden, 50 % wöchentlich, 100 % monatlich.

Go Plus kostet 40 $ mit höheren Limits. Es lohnt sich nur, wenn Sie viele Agenten parallel betreiben oder immer wieder an die Obergrenze von Go stoßen und nicht zu Claude wechseln möchten.

## $20: Claude Pro

Die Standardempfehlung, wenn Sie ein Abonnement kaufen. Die meisten Leute, die diese Arbeit machen, sind dabei.

20 $ monatlich oder 17 $ monatlich bei jährlicher Abrechnung (200 $ im Voraus). Claude Code ist enthalten.

Bei den Limits handelt es sich um ein rollierendes fünfstündiges Sitzungsfenster sowie eine wöchentliche Obergrenze, die zu einem festen, Ihrem Konto zugewiesenen Zeitpunkt zurückgesetzt wird. Erwarten Sie bei einem Topmodell etwa 3 bis 4 Stunden Dauerbetrieb pro Fünf-Stunden-Fenster. Ein Basketballspiel von Grund auf landete bequem auf der 20-Dollar-Marke.

Behandeln Sie das Sitzungsfenster als die eigentliche Einschränkung. Das wöchentliche Limit greift selten, wenn Sie Chats mit einer [\`STATUS.md\`](../templates/STATUS-handoff.md)-Datei übergeben, anstatt sie eine Woche lang wachsen zu lassen.

## Wenn Sie ein Upgrade durchführen möchten, gehen Sie der Reihe nach vor

**20 $, maximal. Dann 100 $, maximal. Dann 200 $.**

Der Grund dafür ist, dass sich jede Stufe nur dann lohnt, wenn Sie die darunter liegende Stufe ausgeschöpft haben.

| Stufe | Preis | Pro-Äquivalent |
|------|-------|----------------|
| Pro | 20 $ | 1x |
| Maximal 5x | 100 $ | 5x |
| Maximal 20x | 200 $ | 20x |

Zwei Dinge machen die Leute hier falsch:

- **Die 5-fachen und 20-fachen Vielfachen gelten für das fünfstündige Sitzungsfenster**, nicht für Ihr wöchentliches Taschengeld. Der wöchentliche Zuschuss des 200-Dollar-Plans ist ungefähr doppelt so hoch wie der des 100-Dollar-Plans, nicht das Zwanzigfache.
- **Über dem Sitzungsfenster liegt ein wöchentliches Limit.** Ein Upgrade vervielfacht Ihre Sitzungskapazität; Die wöchentliche Obergrenze wird dadurch nicht entfernt.

Max ist nur monatlich verfügbar. Upgrade-Gebühren in der Mitte des Zyklus werden anteilig berechnet.

Wenn Sie stattdessen pro Token bezahlen, ist ein Weg, der funktioniert: OpenRouter mit einem starken offenen Modell. VS-Code plus Roo-Code mit OpenRouter und einem DeepSeek-Modell ist eine häufige Kombination, wenn ein Claude-Plan außer Reichweite ist.

### Zwei Dinge, die die Rechnung mehr verändern als das Modell

Beides ist hier wichtiger als in den meisten Projekten, da diese Arbeit kontextlastig ist. Sie speisen die dekompilierte Ausgabe des Agenten, ganze Repositorys und Designdokumente ein.

**Das Kontextfenster umfasst 1 Mio. Token für beide Hauptoptionen zum Standardpreis.** DeepSeek V4.1 Flash verfügt über einen 1 Mio. Kontext. Opus 5.5 umfasst das vollständige 1-Millionen-Fenster zum normalen Pro-Token-Tarif, sodass eine 900.000-Anfrage den gleichen Preis kostet wie eine 9.000-Anfrage. Sie müssen sich keine Sorgen um einen Langzeitkontextzuschlag machen. DeepSeek begrenzt die Ausgabe auf 384 KB.

**Promptes Caching senkt die Kosten für die Wiederholung von Kontext um 90 %.** Ein Cache-Lesevorgang wird mit dem 0,1-fachen des Basiseingabepreises abgerechnet. Das Schreiben in den 5-Minuten-Cache kostet das 1,25-fache der Basiseingabe, sodass sich das Caching nach einem Lesevorgang amortisiert. Der 1-Stunden-Cache kostet das Doppelte, daher sind zwei Lesevorgänge erforderlich, um die Gewinnschwelle zu erreichen. Sowohl DeepSeek als auch Claude unterstützen es.

Das ist wichtig, denn das Teuerste an einer langen Modding-Sitzung ist, dass bei jeder Runde dasselbe Repository und dieselben dekompilierten Dateien zurückkommen. Cachen Sie das stabile Präfix und zahlen Sie nicht mehr den vollen Preis dafür.

Bitten Sie den Agenten, es zu aktivieren, anstatt davon auszugehen, dass es eingeschaltet ist:
\`\`\`
Dieses Projekt hat einen großen stabilen Kontext: docs/DESIGN.md, das Spielformat
spec und die Dateien, die wir bereits analysiert haben. Aktivieren Sie dafür das Prompt-Caching
Präfix, sodass wir nicht mehr in jeder Runde den vollen Eingabepreis dafür zahlen müssen. Zeig mir das
Cache-Trefferrate in der Nutzungsausgabe.
\`\`\`

**Die Batch-API kostet sowohl für die Eingabe als auch für die Ausgabe den halben Preis**, für Arbeiten, die im Hintergrund ausgeführt werden können. Dies gilt beispielsweise für die Neukompilierung eines Stapels von Assets oder die Durchführung derselben Analyse über hundert Datendateien. Für interaktives Arbeiten nützt es nichts, da die Ergebnisse erst später wiederkommen.

Eine Einschränkung speziell bei Claude: Opus 5.5 verwendet einen neueren Tokenizer, der etwa 30 % mehr Token für denselben Text erzeugt als frühere Modelle. Wenn man zwei Modelle hinsichtlich der Kosten vergleicht, ohne zu prüfen, welchen Tokenizer sie verwenden, vergleicht man verschiedene Einheiten.

## OpenAI- und ChatGPT-Modelle

Derzeit nicht empfohlen, und zwar aus zwei Gründen: Sie schneiden bei dieser Art von Arbeit schlechter ab als Claude auf vergleichbaren Ebenen und bieten weniger nutzbare Nutzung pro Abonnement.

**Wenn Sie bereits ein ChatGPT-Abonnement haben, behalten Sie es.** Die Modelle sind sehr gut und die Vergütung ist angemessen. Es gibt keinen Grund zur Stornierung. Wechseln Sie nicht wegen dieser Empfehlung.

Dies ist eine Community-Lesung, kein Benchmark-Ergebnis, und es wird veraltet sein. Wenn Sie anderer Meinung sind und bei einem echten Projekt bessere Ergebnisse erzielen, zählt das, und die Seite sollte sich ändern.

## Kostenlose Optionen, die nicht nichts sind

Bevor Sie etwas ausgeben:

- **Kostenlose Modelle innerhalb von OpenCode.** Einige sind für begrenzte Zeit kostenlos, darunter DeepSeek-angrenzende Optionen und einige Stealth-Modelle. Kostenlose Modelle werden abgeschnitten und in der Rate begrenzt. Behandeln Sie sie also als gut zum Erlernen des Arbeitsablaufs und als schlecht für ein ernsthaftes Projekt.
- **Lokale Modelle auf Ihrer eigenen Hardware.** Sie funktionieren hierfür nicht gut. Eine 12-GB-GPU reicht für ein gutes lokales Codierungsmodell nicht aus. Da Ihre GPU eine 5090 ist, macht das für ein Cloud-Modell keinen Unterschied, da diese Arbeit auf den Servern des Anbieters ausgeführt wird.
- **Pay-per-Token-APIs.** Günstig genug, um etwas auszuprobieren, und Sie hören auf, wenn Sie aufhören. Gut für ein Wochenendprojekt, schlecht für alles, was länger dauert.
- **Günstigere Claude-Stufen.** Das Ausführen von Sonnet anstelle eines Topmodells kostet weniger pro Token und ist normalerweise gut genug für den Großteil eines Projekts. Heben Sie sich das teure Modell für den Teil auf, bei dem Sie nicht weiterkommen.

## Was für ein Plan, den Token nicht bringen

Bei Abonnementplänen geht es nicht nur um den Preis. Drei Dinge sind bei einem Plan einfacher und pro Token umständlicher:

- **Keine Nutzungsobergrenze.** Die Abrechnung pro Token bedeutet, dass eine außer Kontrolle geratene Schleife echtes Geld kostet, anstatt an eine Wand zu stoßen.
- **Prioritätszugriff.** Max-Pläne werden zu Stoßzeiten vor kostenlosen Benutzern bereitgestellt, was wichtig ist, wenn Sie sich mitten im Projekt befinden.
- **Credits enthalten.** Bezahlte Pläne enthalten Nutzungsguthaben für die Bild- und Asset-Generierung, die Sie ansonsten separat erwerben.

Der Grund, warum Leute bei einem Abonnement bleiben, ist die Obergrenze, nicht der Preis. Vorhersehbare Kurzarbeit ist pro Token günstiger.

## Offene Fragen

- Welches kostenlose Modell ist in OpenCode wirklich das Beste? Niemand hat den Vergleich durchgeführt.
- Ob kostenlose Pläne ein echtes Projekt abschließen können. Die meisten Menschen stoßen schnell an ihre Grenzen.
- Ob lokale Modelle ein echtes Projekt mit 12 GB VRAM bewältigen können.
- Ob dies auf Windows vs. Linux zutrifft. Jedes Projekt in diesen Handbüchern ist ohnehin nur für Windows gedacht.

Wenn Sie es herausfinden, posten Sie es auf Discord oder öffnen Sie eine Pull-Anfrage.

## Wo Sie die aktuellen Preise überprüfen können

- [Claude Preise](https://claude.com/pricing) und [Max. Plandetails](https://support.claude.com/en/articles/11049741-what-is-the-max-plan)
- [OpenCode Go](https://opencode.ai/go) und [Zen-Preise](https://opencode.ai/docs/zen/)
- [DeepSeek API-Preise](https://api-docs.deepseek.com/quick_start/pricing)
– [Claude API-Preise](https://platform.claude.com/docs/en/about-claude/pricing), die vollständigere Seite mit der Modelltabelle, die auf der Marketingseite ausgeblendet wird

Abonnieren Sie einen Monatsplan statt eines Jahresplans, bis Sie wissen, wie viel Sie verbrauchen. Der jährliche Rabatt beträgt 15 % auf Claude Pro, was sich nicht lohnt, für einen Plan zu zahlen, für den Sie möglicherweise in einem Monat nicht mehr wachsen.

---

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/11-models-and-cost.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/11-models-and-cost.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>`,g=`# 12. Arbeitsbeispiel: IW4L, eine KI-gestützte Rust-Umschreibung

In dieser Fallstudie geht es um [IW4L](https://github.com/vladtrc/iw4L), eine eigenständige Rust-Laufzeitumgebung für Call of Duty: Modern Warfare 2 (2009). Etwa 160 Commits zum Zeitpunkt des Schreibens, etwa 800 Sterne, Apache-2.0 und aktiv entwickelt.

Es ist unvollendet und besagt Folgendes: * „Das Gameplay bleibt unvollständig. Erwarten Sie fehlendes Verhalten, Fehler und Desynchronisationen.“* Es werden keine Spielinhalte mitgeliefert. Sie richten es auf eine Kopie von MW2, die Sie bereits besitzen, und es liest die Karten, Modelle, Texturen und Waffen dieser Installation in seine eigene Engine ein.

Was es lesenswert macht, ist nicht der Motor. So geht ein Projekt dieser Größenordnung mit Herkunft, Lizenzierung und der Grenze zwischen dem, was ein Agent geschrieben hat, und dem, was eine Person entschieden hat, um.

## Warum IW4L und nicht etwas anderes

Auf dieser Seite wurde [mw2-rust-rust-rewrite](https://github.com/Dj-Shortcut/mw2-rust-rust-rewrite) behandelt, ein eigenständiges Rust/Bevy-Projekt von Dj-Shortcut, das auf IW4L aufbaut. Das war eine faire Fallstudie und das meiste, was richtig gemacht wurde, trifft auch hier zu, aber IW4L ist aus drei Gründen ein besseres Beispiel für Anfänger.

Es ist fertig genug, um es lesen zu können. Sein eigenes \`docs/\` umfasst Rendering, Simulation, Kartenladen, die GSC-Laufzeit, Bot-KI und Leistung sowie eine reproduzierbare Testsuite. Sie können verfolgen, was ein reales Projekt tut, anstatt daraus Rückschlüsse zu ziehen.

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

**Windows** ist der einfache Weg: Laden Sie \`iw4l-windows.zip\` aus den Versionen herunter, extrahieren Sie es in einen leeren beschreibbaren Ordner und führen Sie \`iw4l.exe\` aus. Es findet MW2 in Ihren Steam-Bibliotheken und erstellt eine Verknüpfung. MW2 ist erforderlich; BO1 und MW3 sind optional.

**Linux und macOS** benötigen einen echten Build. Rust über Rustup, plus eine C-Toolchain und die Bevy-Systembibliotheken. \`docs/BUILD.md\` listet Pakete pro Distribution auf und Linux benötigt X11-, ALSA-, udev-, Wayland- und xkbcommon-Header. macOS benötigt nur die Xcode-Befehlszeilentools. Spieldaten stammen aus dem Windows-Depot einer Steam-Kopie über \`steamcmd\`, auf das durch die Umgebungsvariable \`IW4L_GAMES\` verwiesen wird.

Dies ist die Form, die die meisten Neufassungen annehmen: Die Engine ist portabel, die Spieldateien jedoch nicht.

## Wie viel davon ist KI-geschrieben?

Die letzte Zeile der README-Datei vor den Danksagungen lautet *„Dieses gesamte Projekt wurde von einem LLM geschrieben.“*

Die menschliche Arbeit ist immer noch umfangreich und im Commit-Protokoll größtenteils unsichtbar. Jemand hat die Architektur festgelegt, \`AGENT.md\` geschrieben, die Dokumentation in \`docs/\` geschrieben, die Lizenzierung festgelegt und \`CONTRIBUTING.md\` und \`SECURITY.md\` geschrieben. Das sind Urteilssprüche, die ein Makler nicht für Sie trifft.

IW4L wird ebenfalls umbenannt. Sein \`NOTICE\` besagt, dass es „ursprünglich von vladtrc“ unter einem früheren Namen entwickelt wurde, was daran erinnert, dass Projekte in diesem Bereich häufig wiederholt werden.

## Das Provenienzproblem und die ehrliche Antwort

Beim Umschreiben einer vorhandenen Engine stößt man auf ein echtes Problem: Einiges von dem, was Sie schreiben, wird dem ähneln, was Sie gelesen haben. Das ist eine Lizenzfrage, keine Stilfrage, und IW4L behandelt sie auf eine Art und Weise, die es wert ist, nachgeahmt zu werden.

\`docs/provenance/movement-iw4.md\` zeichnet auf, dass der Bewegungslöser in \`movement_iw4/src/slide.rs\` „unsichere Herkunft aufgrund gemeldeter Ähnlichkeiten mit GPL-Bewegungsimplementierungen“ hatte.* Der Hinweis geht weiter als die meisten Projekte:

– Es benennt den ersten verfolgten Commit des alten Moduls und den genauen Blob-Hash dessen, was ersetzt wurde.
- Darin heißt es eindeutig: „Diese Aufzeichnung beweist nicht, dass kopiert oder angepasst wurde.“*
– Es wird aufgezeichnet, dass der Ersatz von einem isolierten Agenten ohne Konversationsverlauf geschrieben wurde, der auf der Grundlage eines frisch geschriebenen Verhaltensvertrags und nicht auf der Grundlage des alten Codes arbeitete.
– Dann heißt es, dass es sich bei der Isolation um *„prozedurale Isolation auf einem gemeinsam genutzten Host, nicht um eine erzwungene Dateisystem-Sandbox oder eine Garantie für Modelltrainingsdaten“ handelte.*

Der letzte Satz ist das Nützlichste auf dieser Seite. Es beschreibt eine echte Kontrolle, ohne den Anspruch zu erheben, eine Garantie zu sein. Wenn Sie etwas Ähnliches bauen, schreiben Sie diesen Satz.

\`AGENT.md\` fügt zwei Standregeln mit automatisierter Prüfung hinzu. Retail-Offsets bleiben aus dem Code heraus, da eine eigenständige Laufzeit nichts gegen ein Retail-Image auflöst und Dekompiler-Platzhalternamen (\`FUN_...\`, \`DAT_...\`) ein Eigengewicht darstellen. \`make publish-check\` durchsucht den verfolgten Baum nach beiden Formen. Die Akte achtet sorgfältig darauf, was das beweist: „Es beweist keinen Anspruch auf Herkunft oder Lizenzierung, und die Annahme ist kein Argument für irgendetwas anderes als das Fehlen dieser Formen.“*

## Lizenzierung, ausgeschrieben

Apache-2.0 für den projekteigenen Code, mit einem \`NOTICE\`, der sein eigenes Material von dem trennt, was es bündelt. Zwei Schriftarten werden mit \`include_bytes!\` in die Binärdatei kompiliert, sodass sie mit jedem Build ausgeliefert werden:

- **Oxanium**, SIL Open Font License 1.1
- **Fira Mono**, SIL Open Font License 1.1, aus einer unveränderten Mozilla-Revision

\`iw4l.exe licenses\` druckt die in die ausführbare Datei kompilierten Lizenztexte. Das ist ein kleines Detail, das zeigt, dass das Projekt von den Leuten erwartet, dass es weiterverteilt wird.

In der README-Datei werden auch die Informationen genannt, die die Arbeit beeinflusst haben: [OpenAssetTools](https://github.com/Laupetin/OpenAssetTools) und sein \`iw4x-x64\`-Zweig für Asset-Layouts, [IW4x](https://github.com/iw4x/iw4x-client) für Asset- und Protokollverhalten, [KisakCOD](https://github.com/SwagSoftware/KisakCOD) für die Engine-Struktur und Ghidra für die Inspektion der ursprünglichen Binärdateien.

Lesen Sie diese Liste als Herkunftsnachweis und nicht als Formalität. Durch die Benennung dessen, was Sie studiert haben, kann ein Leser das Ergebnis beurteilen.

## Was funktioniert und was nicht

Der Anspruch der README-Datei ist bewusst eng gefasst: Karten erkunden, Bots bekämpfen, Demos aufzeichnen und wiedergeben. Das Gameplay ist unvollständig.

\`docs/\` ist auf diese Ehrlichkeit ausgerichtet. Es gibt separate Dateien für Rendering, Simulation, Kartenladen, die GSC-Laufzeit, Bot-KI und Leistung sowie eine Seite, die dokumentiert, mit welchen Befehlen Sie den Live-Prozess steuern können. \`docs/PERF.md\` besteht auf nativen \`.pftrace\`-Traces als „der einzigen Laufzeitwahrheit“* und stellt Ihnen SQL für deren Abfrage zur Verfügung. \`docs/BENCH.md\` deckt den Zeitpunkt des Kartenladens ab. Es gibt eine Approved-Scenarios-Suite für wiederholbare End-to-End-Prüfungen, einschließlich zweier Clients durch einen Dev-Master.

Zwei Dinge, die Sie überraschen werden, wenn Sie sie nicht lesen:

**Cheats sind standardmäßig aktiviert.** Der Host akzeptiert \`move\`, \`look\`, \`tp\`, \`nudge\`, \`god\`, \`kill\`, \`force_spawn\` und eine \`give\`-Lieferliste. \`--no-cheats\` schaltet sie aus. Dies ist eine Forschungslaufzeit, kein konkurrierender Client.

**APIs, Caches, Konfiguration und das Wire-Protokoll ändern sich zwischen Commits.** Multiplayer-Peers müssen denselben Build ausführen. Wer plant, mit einem Freund zu testen, muss sich zunächst auf einen Commit einigen.

## Die Regeln, die sich das Projekt selbst gesetzt hat

Lesenswert als Vorlagen, unabhängig davon, ob Sie ein Projekt wie dieses in Angriff nehmen oder nicht.

\`AGENT.md\` ist eine einzelne kurze Datei, kein umfangreiches Dokument. Darin heißt es, was der Agent nicht berühren darf, was aus dem veröffentlichten Baum fernbleiben darf und wie die Dateien in der richtigen Reihenfolge gelesen werden.

\`CONTRIBUTING.md\` stellt eine Grenze dar, die die meisten Projekte nicht haben:

> Klein und in sich geschlossen: ein Fix, ein Absturz, eine falsche Konstante, eine Dokumentenkorrektur. Öffnen Sie es direkt.
> Architektur: eine neue Kiste, ein neues Subsystem, eine Änderung der Art und Weise, wie Daten fließen. Öffnen Sie zuerst ein Problem. Eine große Filiale, die unangekündigt eintrifft, wird wahrscheinlich abgelehnt.

Außerdem steht darin, was ein nützlicher Fehlerbericht enthält und was nicht: *„Fügen Sie nicht Ihren \`.env\`, einen Speicherauszug oder ein Archiv des Spiels hinzu.“* Und es priorisiert ehrlich, mit *„Ein Fehler in einem Szenario, von dem das Projekt sagt, dass es funktioniert, überwiegt ein fehlendes Feature, das es nie versprochen hat.“*

\`CONTEXT.md\` beschreibt den eigenen Arbeitsablauf des Betreuers: Arbeitsspeicher, der außerhalb von Git in einem \`context/\`-Ordner aufbewahrt wird, ein Artefakt pro Aufgabe mit seinen Beweisen und seinem Urteil und die Regel, dass *"Wissen, das nicht in einem Artefakt ist, nicht existiert"* für den nächsten Agenten. Es handelt sich ausdrücklich nicht um den Beitragspfad.

\`SECURITY.md\` befasst sich mit den Berichten über Probleme, die über vereinbarte Spieltests zwischen Personen hinausgehen, die sich zum Spielen bereit erklärt haben, und sagt im Voraus, dass es sich eher um einen Kanal als um ein Programm handelt: kein Kopfgeld, kein SLA.

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

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/12-worked-example-rust-rewrite.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/12-worked-example-rust-rewrite.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>`,c=`# 13. Reverse Engineering und das Gesetz

**Hier handelt es sich nicht um eine Rechtsberatung, und die ehrliche Antwort auf die meisten Fragen in diesem Bereich lautet „Es kommt darauf an.“** Diese Seite existiert, weil die Regeln so wichtig sind, dass Folklore ein schlechter Ersatz ist. Lesen Sie es und entscheiden Sie dann, ob Sie einen echten Anwalt brauchen. Wenn ein Unternehmen Sie kontaktiert, weiß [LEGAL.md](../LEGAL.md), was in der ersten Woche zu tun ist.

Sofern nicht anders angegeben, unterliegt alles hier US-amerikanischem Recht. Die EU ist in einer wichtigen Hinsicht anders, worauf am Ende eingegangen wird.

## Die eine Idee, auf der die ganze Gegend basiert

Das US-Urheberrecht schützt keine Ideen, Verfahren, Prozesse, Systeme, Betriebsmethoden, Konzepte, Prinzipien oder Entdeckungen. 17 U.S.C. § 102(b). Es schützt den spezifischen Ausdruck, den ein Ersteller geschrieben hat.

Die Mechanik eines Spiels, seine Dateiformate, sein Netzwerkprotokoll, die Reihenfolge, in der seine physikalischen Schritte ablaufen: das sind Funktionen. Das Urheberrecht erreicht sie nicht. Geschützt ist der jeweilige Code, die Grafik, der Text, die Musik und das Leveldesign.

Diese Lücke ist der einzige Grund, warum Reverse Engineering normalerweise rechtmäßig ist. Man darf lernen, wie etwas funktioniert. Es ist Ihnen nicht gestattet, den geschriebenen Text zu kopieren.

Die Konsequenz daraus ist, dass die Leute etwas falsch machen. **Lesen ist kein Kopieren, wohl aber Disassemblieren.** Wenn ein Dekompilierer eine Binärdatei in lesbaren Text umwandelt, wird eine Kopie erstellt. Diese Kopie ist eine Kopie des geschützten Ausdrucks. Es kann immer noch eine faire Verwendung sein, aber nur aufgrund der unten aufgeführten Fälle.

## Blackbox, graue Box, weiße Box

Die Terminologie ist wichtig, da die drei Rechtspositionen sehr unterschiedlich sind.

**Black Box** testet über die Schnittstelle. Der Input geht rein, der Output kommt raus und das Innere wird nie betrachtet. Es gibt nirgendwo eine Kopie des Codes, daher gibt es überhaupt keine Urheberrechtsfrage.

**Graues Kästchen** ist teilweise sichtbar. Das Beobachten des Netzwerkverkehrs oder das Auslesen eines Werts aus dem Speicher während der Programmausführung sind graue Kästchen. Untersucht werden Daten, die das Programm zur Laufzeit erzeugt, und nicht seine Quelle.

**White Box** ist voller Zugriff auf die Interna. Der Code ist verfügbar und kann durchgehend gelesen werden.

Für diese Community ist die praktische Rangfolge klar und nicht knapp:

> **Bevorzugen Sie Blackbox, wo immer die Frage dies zulässt.** Dies ist der einzige Ansatz, der keine Urheberrechtsprobleme aufwirft, da nichts kopiert wird.

Um das Problem über die Benutzeroberfläche zu lösen, müssen Sie Dateien in einem Hex-Editor öffnen und beobachten, wie das Spiel auf Änderungen reagiert, anstatt nach einem Dekompiler zu greifen. Viele Modding-Arbeiten sind Black Box und niemand ist sich dessen bewusst. Dekompiler kommen dann ins Spiel, wenn die Beobachtung die Frage, welche Bedingung die Fälle ohnehin erfordern, wirklich nicht beantworten kann.

## Was die Gerichte tatsächlich entschieden haben

Vier Fälle sind wichtig. Bis auf einen kommen alle aus dem Ninth Circuit, der Kalifornien und Washington umfasst, wo die meiste amerikanische Software-Arbeit stattfindet.

### Sega gegen Accolade (9. Cir. 1992)

Accolade wollte Spiele für Genesis veröffentlichen und lehnte Segas Lizenzbedingungen ab, die Exklusivität verlangten und die Schnittstellenspezifikationen geheim hielten. Also kaufte Accolade eine Konsole und drei Module, ließ einen Dekompiler laufen, untersuchte die Ausgabe und ermittelte die Schnittstellenanforderungen. Anschließend wurden eigene Spiele geschrieben.

Der Bestand, den jeder spätere Fall zitiert:

> „Wenn die Demontage die einzige Möglichkeit ist, Zugang zu den Ideen und Funktionselementen zu erhalten, die in einem urheberrechtlich geschützten Computerprogramm enthalten sind, und wenn es einen legitimen Grund für die Suche nach einem solchen Zugang gibt, ist die Demontage aus rechtlicher Sicht eine faire Nutzung des urheberrechtlich geschützten Werks.“

Zwei Bedingungen, beide erforderlich. Es muss die einzige Möglichkeit sein, an die Funktionsteile zu gelangen, und Sie müssen einen berechtigten Grund dafür haben.

Das Gericht lehnte auch Segas Markenanspruch ab. Die Spiele von Accolade lösten Segas Meldung „HERGESTELLT UNTER LIZENZ VON SEGA“ aus, da diese in den Sperrcode der Konsole integriert war. Das Gericht entschied, dass dies Segas eigenes Verschulden sei und Accolade nicht zur Last gelegt werden könne.

Eine wissenswerte Grenze. Das erstinstanzliche Gericht hatte vorgeschlagen, dass Accolade einen Reinraum hätte nutzen sollen. Das Berufungsgericht bezeichnete dies als eindeutig fehlerhaft, da ein Reinraum nicht verrät, welche Schnittstellenspezifikationen *sind*. Man muss sie zerlegen, um sie zu erlernen, und erst dann wird ein Reinraum möglich.

### Atari Games gegen Nintendo (Fed. Cir. 1992)

Atari hat die Lockout-Chips von Nintendo deprozessiert, was bedeutet, dass Schichten chemisch vom Silizium abgelöst werden, um den Objektcode darunter zu lesen. Der Federal Circuit entschied, dass Reverse Engineering, das „nicht durch“ eine Raubkopie des Programms beeinträchtigt wird und zum Verständnis des Programms erforderlich ist, eine faire Verwendung darstellt.

Dann wird die Grenze festgelegt, die wichtiger ist als die Erlaubnis:

> „Diese faire Nutzung gab Atari nicht mehr als das Recht, das 10NES-Programm zu verstehen und die geschützten von den ungeschützten Elementen des 10NES-Programms zu unterscheiden. Jegliches Kopieren, das über das hinausgeht, was zum Verständnis des 10NES-Programms erforderlich ist, stellte einen Verstoß dar. Atari konnte Reverse Engineering nicht als Vorwand verwenden, um geschützte Ausdrucksformen kommerziell oder anderweitig missbräuchlich auszunutzen.“

Atari hat verloren. Es hatte den Quellcode ohne Genehmigung vom Copyright Office erhalten, was einen separaten Verstoß darstellt, und sein Ersatzchip reproduzierte Anweisungen, die Nintendo Jahre zuvor aus dem Original *gelöscht* hatte.

### Sony gegen Connectix (9. Cir. 1999)

Connectix hat einen Emulator für die PlayStation entwickelt und dafür das BIOS der Konsole rückentwickelt. Das Gericht listete vier Möglichkeiten zum Reverse Engineering von Software auf, was an sich schon ein nützliches Menü darstellt:

1. Lesen Sie mehr über das Programm
2. Beobachten Sie, wie es am Computer funktioniert
3. Statische Prüfung einzelner Maschinenanweisungen
4. Dynamische Prüfung während des Betriebs

Die Methoden 2 bis 4 erfordern alle das Kopieren des Programms in den RAM. Das Gericht entschied, dass dieses Zwischenkopieren eine faire Verwendung darstellte, da keine Kopien des Sony-Materials im Produkt von Connectix landeten. Es lehnte es auch ab, eine Grenze zwischen dem „Studium“ des Codes und seiner „Verwendung“ zu ziehen, und bezeichnete diese Unterscheidung als künstlich.

### NEC gegen Intel (N.D. Cal. 1989)

Der erste Fall, in dem ein Reinraum erfolgreich als Verteidigung eingesetzt wurde, und die Ursache der Mechanik unten.

## Die Regel, die Sie tatsächlich überraschen wird

Vergessen Sie die Fair-Use-Analyse. Das ist das Praktische.

**Gerichte betrachten identische Fehler und identische unnötige Anweisungen als den stärksten möglichen Beweis für das Kopieren.**

Von *Atari*: „Das Vorhandensein identischer unnötiger Anweisungen in beiden Codes ist ein starker Beweis für erhebliche Ähnlichkeit.“ Von *E.F. Johnson Co. gegen Uniden Corp.*, wo Uniden genau in diesem Punkt verlor und „so weit ging, die Fehler und unnötigen Informationen in das Programm zu kopieren“.

Warum? Unabhängige Entwickler, die mit derselben Spezifikation arbeiten, treffen unterschiedliche Entscheidungen. Unterschiedliche Variablennamen, unterschiedliche Reihenfolge, unterschiedlich strukturierte Funktionen. Zwei unabhängige Implementierungen sind sich nicht darüber einig, welcher tote Zweig beibehalten werden soll.

Wenn Ihr Code und das Original eine Eigenart aufweisen, die keinen Zweck erfüllt, sind Sie nicht beide unabhängig voneinander darauf gekommen. Du hast kopiert.

Also: Reproduzieren Sie nicht die Fehler des Originals, seinen toten Code, seine Restfelder, seine Off-by-One-Fehler oder seine seltsame Befehlsreihenfolge. Das sind die Fingerabdrücke. Schreiben Sie sie absichtlich um und schreiben Sie auf, dass Sie es getan haben.

Dies ist bei einem Agenten wichtiger als bei einer Person, da ein Agent, der mit dekompilierten Ausgaben arbeitet, die Struktur originalgetreu reproduziert, einschließlich der Teile, die keinen Zweck erfüllen. Siehe unten.

## Reinraum und schmutziger Raum

Ein **schmutziger Raum** ist die Standardeinstellung: Eine Person schaut sich das Original an und schreibt den Ersatz. Nachdem sie den Ausdruck gesehen haben, können sie ihn nicht mehr übersehen. Das meiste Hobby-Modding ist Dirty-Room, darunter fast alles in diesem Repo.

Ein **Reinraum** teilt die Arbeit auf zwei Gruppen mit einer Wand dazwischen auf. Gemäß der *NEC vs. Intel*-Analyse gelten für einen vertretbaren Reinraum drei Anforderungen:

1. **Die Leute, die den Code schreiben, haben keine Kenntnis vom Originalcode.** Nicht „sie versprechen, nicht hinzusehen.“ Überhaupt kein Zugriff.
2. **Der Ingenieur, der die Funktionsspezifikation erstellt, ist eine andere Person als der Programmierer, der den Code schreibt.**
3. **Die gesamte Kommunikation zwischen den beiden Gruppen läuft über einen unabhängigen Dritten**, der als Gatekeeper fungiert und prüft, ob kein geschützter Ausdruck durchgesickert ist.

Die Dokumentation macht es zu einem Beweis und nicht zu einer Behauptung. Bewahren Sie jede Kommunikation auf, führen Sie tägliche Protokolle, bewahren Sie Entwürfe und Arbeitspapiere auf. Der Fall *NEC gegen Intel* umfasste Tausende von Seiten. Der Wert der Dokumentation besteht darin, dass sie die *Verweigerung* des Zugriffs beweist, was das Element ist, das ein Urheberrechtsinhaber nachweisen muss.

### Warum ein verspäteter Reinraum scheitert

Die Einrichtung eines Reinraums, nachdem Sie bereits verklagt wurden, funktioniert normalerweise nicht.

*Cadence Design Systems v. Avant!* (9th Cir. 1998) ist der Fall. Avant! kopierte den Code von Cadence, wurde verklagt und versuchte dann, ihn zu beheben: Ein unabhängiger Experte überprüfte die verletzenden Teile, schrieb Spezifikationen und Ingenieure, die angeblich keinen Zugriff darauf hatten, schrieben den Code neu. Das Bezirksgericht befand den Reinraum für unzureichend, da Avant! „konnte von seinem Wissen über die Funktionen und die Grundstruktur des Cadence-Codes profitieren“, und die Verwendung des Cadence-Codes zur Erstellung der Spezifikationen „warf ernsthafte Fragen auf.“

Wenn Sie bereits wissen, wie das Original funktioniert, können Sie es nicht verlernen, und keine noch so umfangreiche Dokumentation überzeugt ein Gericht vom Gegenteil. Die Trennung muss von Anfang an bestehen.

### Und es ist kein magischer Schild

Reinraum macht einen *Urheberrechtsanspruch* bezüglich des Kopierens zunichte. Es berührt nicht:

- **Patent.** Ein Patent auf ein System kann durch ein Reinraumprodukt verletzt werden, das nichts über das Patent weiß. Sega verlor teilweise, weil es kein Patent auf die Genesis-Konsole besaß.
- **Vertrag.** Ihre EULA ist ein separates Versprechen. Ein Verstoß dagegen kann einen Vertragsbruch darstellen, selbst wenn nichts urheberrechtlich geschützt ist.
- **DMCA-Antiumgehung.** Unten.
- **Geschäftsgeheimnis**, wenn das Material von jemandem erhalten wurde, der zur Geheimhaltung verpflichtet ist, und nicht von einer von Ihnen gekauften Kopie.

## Tun Sie dies mit einem Agenten

Dieser Teil ist in keinem der Fälle enthalten, da die Agenten neu sind. Das ergibt sich aus den Aussagen der Fälle.

**Ein Agent, der eine Dekompilierung durchführt, ist strukturell ein schmutziger Raum.** Wenn eine Sitzung die dekompilierte Ausgabe liest und dann die Ersetzung schreibt, enthält ein einzelner Kontext beide Hälften. Es gibt keine Dokumentation, die das behebt, da die Anforderung in *NEC vs. Intel* fehlendes Wissen ist und schnelle Disziplin ein schwacher Ersatz für ein anderes Menschenpaar ist.

Was Sie tatsächlich tun können:

**Teilen Sie es auf zwei Sitzungen auf.** Erste Sitzung: Reverse Engineering, dann schreiben Sie eine funktionale Spezifikation in Ihren eigenen Worten und beschreiben dabei Verhalten und Schnittstellen statt Code. Schließen Sie es. Zweite Sitzung, neuer Kontext ohne Zugriff auf die dekompilierte Ausgabe: Implementierung allein aus dieser Spezifikation. Das ist der Reinraum eines armen Menschen. Es kommt der Doktrin wirklich näher, als alles in einer Sitzung zu erledigen, und es ist kein rechtlich sicherer Hafen.

**Fragen Sie niemals nach einer Transkription.** Sobald die Ausgabe Zeile für Zeile dem Original entspricht, ist der Reinraum verschwunden und Sie haben eine Kopie. Bitten Sie stattdessen um Verhalten. Eine Spezifikation, die besagt: „Die Welt ist eine Höhenkarte von 4096 x 4096, ein Byte pro Zelle, Meeresspiegel 64“, ist eine Funktion. Eine Spezifikation, die das Strukturlayout und die Feldreihenfolge des Originals reproduziert, ist Ausdruck.

**Informieren Sie den Agenten explizit über die Fehlerregel.** Es wird keine Schlussfolgerung daraus gezogen. Bitten Sie es, toten Code und ungenutzte Felder im Original zu identifizieren und sie dann *absichtlich nicht zu reproduzieren*, und geben Sie in einem Kommentar den Grund dafür an, damit die Absicht offensichtlich ist.

**Halten Sie die Decompiler-Ausgabe aus Ihrem Repository fern.** Gleiche Argumentation wie Spiel-Assets, eine Ebene höher: Es handelt sich um eine Kopie des geschützten Ausdrucks. Ihre Spezifikation und Ihr Code sind die Ergebnisse. Siehe [Leitfaden 6](06-rules-legal-and-publishing.md#the-golden-rule-no-game-files-in-your-repo).

## DMCA Anti-Umgehung ist eine separate Mauer

Dies ist der am meisten missverstandene Teil und der Teil, der ein Hobbyprojekt am ehesten zum Scheitern bringt.

17 U.S.C. § 1201 macht die Umgehung einer technischen Schutzmaßnahme zu einem eigenständigen Verstoß. Es stellt sich heraus, dass es keine Rolle spielt, ob Ihr Mod fair verwendet wird. **Ein vollkommen rechtmäßiger Mod kann mit einer rechtswidrigen Methode installiert werden.** Das Umgehen der Sicherheit stellt eine eigene Straftat dar, unabhängig vom Kopieren.

Praktische Konsequenzen:

- Die Verwendung eines Loaders, der vom Herausgeber bereitgestellt wird oder den die Community offen pflegt, ist ein anderer Vorgang als das Patchen und Auschecken einer ausführbaren Datei.
– Aus diesem Grund ist die tModLoader-Regel in [Leitfaden 6](06-rules-legal-and-publishing.md) so formuliert, wie sie ist. Fügen Sie die Begleit-App zu Ihrer Bibliothek hinzu. Entfernen Sie nicht die Eigentumsüberprüfung.
- Anti-Cheat ist die gleiche Kategorie von Dingen. Siehe [Leitfaden 6](06-rules-legal-and-publishing.md#online-play-and-anti-cheat).

Abschnitt 1201 ist auch der Grund dafür, dass die Takedown-Fälle so einseitig sind. Im Jahr 2026 verhängte ein Gericht in Washington 4,5 Millionen US-Dollar gegen einen Angeklagten in einem Nintendo Switch-Fall, berechnet als gesetzlicher Höchstbetrag von 150.000 US-Dollar für jedes der 30 Spiele. In einem separaten Urteil aus dem Jahr 2026 wurden 2 Millionen US-Dollar gegen den Verkäufer des MIG Switch und des MIG Dumpers mit einer dauerhaften einstweiligen Verfügung verhängt. Zu den früheren Fällen zählen Yuzu mit 2,4 Millionen US-Dollar und Gary Bowser mit 14,5 Millionen US-Dollar plus Gefängnisstrafe. Umgehung wird weitaus schwerwiegender behandelt als gewöhnliches Kopieren.

## Die EU ist enger

Die USA erlauben eine Fair-Use-Entschuldigung für Zwischenkopien. So weit geht die EU nicht. Die Softwarerichtlinie (2009/24/EG) erlaubt die Dekompilierung nur, um Informationen zu erhalten, die zur Erreichung der Interoperabilität erforderlich sind, und nur dann, wenn diese Informationen nicht anderweitig verfügbar sind. Die Herstellung eines Konkurrenzprodukts gehört nicht dazu.

Das Vereinigte Königreich folgte diesem Beispiel im Fall *Mars UK Ltd gegen Teknowledge Ltd* [2002], wo das Reverse Engineering der Software eines Mitbewerbers zur Entwicklung eines Konkurrenzprodukts eine Verletzung darstellte, da das Ziel eher direkter Wettbewerb als Interoperabilität war.

Ein wissenswerter EU-Vorteil: Durch die Richtlinie werden EULA-Bedingungen ungültig, die eine Dekompilierung verbieten, sodass ein europäischer Benutzer nicht vertraglich blockiert werden kann, wie dies bei einer Shrinkwrap-Lizenz in den USA der Fall ist. Die Position der USA ist, dass eine EULA nicht die gesetzliche Fair Use außer Kraft setzt, aber das wurde eher gerichtlich angefochten als geklärt.

Praktisch: Wenn Sie sich in der EU oder im Vereinigten Königreich befinden und Ihr Ziel eine direkte Konkurrenz zum Original ist, betrachten Sie die Reinraumanalyse als notwendig und nicht als hilfreich.

## Marke ist vom Urheberrecht getrennt

Das Urheberrecht erstreckt sich auf den Code. Die Marke umfasst den Namen und alle Logos oder Unterscheidungsmerkmale. Unterschiedliche Ansprüche, unterschiedliche Rechtsbehelfe, und der Verlust des einen sagt nichts über den anderen aus. *Sega v. Accolade* ist das Beispiel: Der Urheberrechtsanspruch scheiterte und damit auch der Markenanspruch, weil Segas eigener Sperrcode die beleidigende Anzeige verursachte.

Halten Sie es einfach: Benennen Sie Ihr Projekt nach Ihren Wünschen, fügen Sie das Logo des Herausgebers nicht in Ihr Repo oder Ihre README-Datei ein und beschreiben Sie es nicht auf eine Weise, die eine offizielle Unterstützung suggeriert. Ein prominenter Haftungsausschluss, der besagt, dass es sich um ein inoffizielles Fanprojekt handelt, kostet nichts und ist die übliche Grundlage.

## Wenn Sie noch unsicher sind

Fragen Sie vor dem Bau, nicht danach. Fragen Sie auf Discord nach oder fragen Sie einen Anwalt, der sich mit geistigem Eigentum befasst. In den oben genannten Fällen geht es um Fakten, die Sie besser nachweisen können als jemand, der eine Zusammenfassung liest, und einige davon gingen für die Partei, die sie für sicher hielt, in die falsche Richtung.

## Quellen

Das Gesetz aus dem U.S. Code:

- [17 U.S.C. § 102](https://www.law.cornell.edu/uscode/text/17/102), Umfang des Urheberrechtsschutzes, einschließlich § 102(b) zu Ideen und Funktionsweisen
- [17 U.S.C. § 117](https://www.law.cornell.edu/uscode/text/17/117), Eigentum und die Anfertigung von Kopien
- [17 U.S.C. § 1201](https://www.law.cornell.edu/uscode/text/17/1201), Umgehung
- [17 U.S.C. § 512](https://www.law.cornell.edu/uscode/text/17/512), einschließlich der Gegendarstellungselemente in § 512(g)(3)

Die Stellungnahmen im Volltext:

- [*Sega Enterprises Ltd. gegen Accolade, Inc.*, 977 F.2d 1510 (9th Cir. 1992)](https://law.resource.org/pub/us/case/reporter/F2/977/977.F2d.1510.92-15655.html)
- [*Atari Games Corp. gegen Nintendo of America Inc.*, 975 F.2d 832 (Fed. Cir. 1992)](https://law.resource.org/pub/us/case/reporter/F2/975/975.F2d.832.91-1293.html)
- [*Sony Computer Entertainment, Inc. gegen Connectix Corp.*, 203 F.3d 596 (9th Cir. 1999)](https://law.resource.org/pub/us/case/reporter/F3/203/203.F3d.596.99-15852.html)

Sekundär:

- U.S. Copyright Office, *Report on Software-Enabled Consumer Products, Part II: Interoperability and Competition*, in dem die Gehäuseserie von Sega, Atari und Connectix sowie der BIOS-Reinraum von Phoenix Technologies erörtert werden
- „NEC Corp. v. Intel: A Guide to Using Clean Room Procedures as Evidence“, 10 Computer L.J. 453 (1990), die Quelle der drei oben genannten Anforderungen
- *E.F. Johnson Co. gegen Uniden Corp.*, 623 F. Supp. 1485 (D. Minn. 1985), über identische Fehler als Beweis für das Kopieren
- *Cadence Design Systems, Inc. gegen Avant! Corp.* (9th Cir. 1998), darüber, warum ein verspäteter Reinraum versagt
- Richtlinie 2009/24/EG des Europäischen Parlaments und des Rates über den rechtlichen Schutz von Computerprogrammen, Artikel 6

Die Durchsetzungszahlen im DMCA-Abschnitt stammen aus Gerichtsdokumenten und rechtlichen Berichten und nicht aus dem Gesetz selbst. Wenn Sie eines für irgendetwas Wichtiges benötigen, lesen Sie die Meinung.

---

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/13-reverse-engineering-and-the-law.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/13-reverse-engineering-and-the-law.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>`,m=`# 14. Eine Route wählen: Was ist das für ein „Spiel im Spiel“?

„Minecraft in Skyrim“ oder „Skate 3 in GTA“ kann mindestens sieben verschiedene Bedeutungen haben. Sie sehen im Video gleich aus und sind völlig unterschiedlich aufgebaut. Die Wahl der falschen Option ist der teuerste Fehler, den Sie machen können, denn sie entscheidet darüber, was beide Spiele unterstützen müssen, was jeder Spieler besitzen muss und was niemals funktionieren kann.

Dieser Leitfaden sortiert die Routen nach der Frage, die Sie stellen, und gibt dann jeweils ein reales Beispiel, mit dem, was überprüft wurde und was nicht.

> **Lesen Sie die Beispiele.** Wenn auf einer Seite steht, dass etwas „funktioniert“, ist das der Bericht des Erstellers. Versionen ändern sich schnell, schauen Sie sich daher die aktuelle README-Datei jedes Projekts an.

## Die sieben Routen im Überblick

| Route | Was läuft eigentlich | Was zwischen ihnen kreuzt | Jeder Spieler braucht | Beispiel |
|-------|-----|------------|--------------------|---------|
| 1. Live-Passthrough | Beide echten Spiele gleichzeitig | Zustand: Positionen, Kollision, Treffer, Ereignisse | Beide Spiele | [SkyCraft](https://github.com/chasmlol/SkyCraft) |
| 2. Frame-Compositing | Beides echte Spiele; Das *Bild* des Gastes wird in das | des Gastgebers eingefügt Farb-, Tiefen- und HUD-Bilder sowie eine Kamerapose | Beide Spiele | Minecraft × GTA V in [universal-modder](https://github.com/rehan-remade/universal-modder/tree/main/examples/minecraft-gta5-passthrough) |
| 3. Native Geometrieübertragung | Beides echte Spiele; Der Host zeichnet die Meshes des Gastes selbst | Netze, Texturen, Kollisionsformen | Beide Spiele | SkyCrafts Renderer, [LibertyCraft](https://github.com/mrborghini/libertycraft), [GalaxyCraft](https://github.com/M0uidev/GalaxyCraft) |
| 4. Gemeinsame neutrale Simulation | Ein separater Server; Jedes Spiel ist nur ein Zuschauer | Neutrale Positionen, Eingaben und Ereignisse | Welchen Viewer sie auch verwenden | [Signet](https://github.com/kian-cx/signetprotocol) |
| 5. Motorerholung | Eine umgebaute Engine, die Ihre eigenen Spieldaten liest | Nichts kreuzt; es ist ein Programm | Die Dateien des Originalspiels | [IW4L](https://github.com/vladtrc/iw4L), [benilla](https://github.com/samwhosung/benilla), [HL2-RS](https://github.com/kvalls/hl2-rs), [CS:Craft](https://github.com/FrosttysBots/CS-Craft) |
| 6. Asset- oder Kartenkonvertierung | Nur das Host-Spiel | Konvertierte Dateien, einmal erstellt, offline | Das Host-Spiel (und ihre eigene Kopie des Quellspiels) | Doom-Karten als Hytale-Blöcke umgebaut, eine in IW4L importierte Halo CE-Karte |
| 7. Umgebauter Gastmotor oder Mechaniker in einem echten Host | Das echte Host-Spiel, plus eine umgebaute Engine oder eine umgebaute Mechanik vom Gast | Der Status des wiederhergestellten Teils über eine DLL oder einen Arbeitsprozess | Das Host-Spiel sowie eine eigene Kopie der Gastdaten | Skate 3 in Bully und Garrys Mod; [Faith Runner](https://github.com/tnrjns/faith-runner); Diablo II-Bewegung in DevilutionX |

Die Routen 1 bis 3 werden als „Passthrough“ bezeichnet. Einige seltenere Ideen werden auch als Mashups bezeichnet, sind aber wiederum anders: den Fortschritt zwischen separaten Spielen zu verknüpfen (Multiworld-Randomizer), das Netzwerkprotokoll eines Spiels in den Server eines anderen zu übersetzen, Programme in Minecraft-Befehle zu kompilieren und einen Emulator innerhalb eines Spiels auszuführen. Sie liegen hier außerhalb des Geltungsbereichs. Die Leitfäden [2](02-passthrough-mods.md) und [9](09-worked-example-passthrough-mod.md) decken den allgemeinen SkyCraft-Stil ab. Route 5 is [guide 3](03-rust-rewrites-and-ports.md).

## Beginnen Sie mit diesen vier Fragen

### 1. Möchten Sie das tatsächliche Verhalten des Gastspiels oder nur dessen Aussehen?

- **Echtes Verhalten** (Minecrafts eigene Physik, Inventar, Handwerk): Sie müssen das echte Gastspiel ausführen. Das sind die Routen 1 bis 3.
- **Nur das Aussehen oder ein paar Regeln**: Assets umwandeln (Route 6) oder einen Mechaniker umbauen (Route 7). Das sind weitaus kleinere Aufgaben.

Original aussehende Assets bedeuten nicht unbedingt originale Physik. Signets Doom-Viewer zeigt Doom-ähnliche Wände, aber die Bewegungsregeln sind ein vereinfachter gemeinsamer Modus und nicht Dooms Engine.

### 2. Wem gehört der Spieler?

Schreiben Sie dies vor jedem Code auf. Es entscheidet über den gesamten Transport.

| Projekt | Spielerbewegung im Besitz von | Host besitzt immer noch |
|---------|-------------------------|---|
| SkyCraft | Minecraft | Die Welt, NPCs, Rendering. Möbel, Reittiere und Kill-Moves-Handsteuerung vorübergehend zurück zu Skyrim |
| Minecraft × GTA V (on foot) | GTA V. Die Pose von GTA platziert den Minecraft-Spieler in jedem Frame | Alles außer der Weltschicht Minecraft |
| Minecraft × GTA V (elytra flight) | Minecraft | Blickrichtung und Verfolgungskamera |
| [CrossOver-Brücken](https://github.com/justbustin/minecraft-crossover-bridge) (Elden Ring, Monster Hunter: World) | Minecraft steuert Bewegung und Kamera, während es aktiv ist | Feinde, Gesundheit und Anzeige |
| [Minecraft × Half-Life](https://github.com/SawyerTheNerd/Minecraft-X-HalfLife) (GoldSrc) | Minecraft | Leitern, \`use\`, Noclip und Todeshandbewegung zurück zu Half-Life |
| [Garry's Redemption](https://github.com/codeByAlexff/garrys-redemption) (Designdokument) | Hidden Garry's Mod (Sandbox und Spielerphysik) | RDR2-Rendering, KI, Recht, Quests und Spielstände |

Es gibt keine einzige richtige Antwort. Wählen Sie eine aus und schreiben Sie auf, wie die Kontrolle **zurückkommt** (Zwischensequenzen, Fahrzeuge, Möbel, Tod).

### 3. Kann der Gastgeber die Welt des Gastes selbst zeichnen?

- **Ja, über den Renderer des Hosts** (Route 3): Bestes Aussehen, da der Gast die Beleuchtung und Schatten des Hosts erhält. Am schwierigsten, weil Sie innerhalb der Render-Pipeline des Hosts arbeiten.
- **Nein, Bilder oben einfügen** (Route 2): schneller funktionsfähig und zwischen Hosts portierbar, aber Beleuchtung und Schatten werden vom Bild des Hosts angenähert, und veraltete Bilder sind ein echtes Problem (siehe [Anleitung 16](16-ownership-sync-and-rendering.md)).

### 4. Was muss jeder Spieler besitzen und installieren?

Wenn beide Spiele laufen, benötigt jeder Spieler beide Spiele, beide Loader und passende Versionen. Einige Projekte benötigen einen bestimmten alten Build, z. B. eine heruntergestufte ausführbare Datei der Version 1.0 US. [NewVegasCraft](https://github.com/Davozh/new-vegascraft) zielt auf Steam New Vegas 1.4.0.525. Das Minecraft × GTA V-Beispiel wurde von seinem Autor auf GTA V Legacy Steam Build 3889 getestet. Schreiben Sie die Versionen vom ersten Tag an in Ihre README-Datei.

## Route für Route

### Route 1. Live-Passthrough (Statusaustausch)

Beide Spiele laufen. Ein Plugin im Host und ein Mod im Gast tauschen den Status über Shared Memory oder einen lokalen Socket aus.

- **Wozu es gut ist:** das echte Gameplay des Gastes beizubehalten (SkyCraft behält das Inventar, die Kampfverarbeitung und die Blockinteraktionen von Minecraft).
- **Was es kostet:** Sie benötigen einen Lader auf beiden Seiten und müssen jedes gewünschte System überbrücken: Kollision, Kampf, Wasser, Menüs, Tod.
- **Echtes Detail, das es wert ist, kopiert zu werden:** SkyCraft verwendet separate Shared-Memory-Bereiche für verschiedene Aufgaben: Snapshots für Zustände, die ständig ersetzt werden, begrenzte Warteschlangen für einmalige Ereignisse und ein dreifach gepuffertes Overlay für das HUD. LibertyCraft, das SkyCraft gespalten hat, hat dieses Design beibehalten. Ein verworfenes Ereignis und ein verspäteter Snapshot haben unterschiedliche Konsequenzen und erhalten daher unterschiedliche Kanäle.

### Route 2. Frame-Compositing (Bildtransport)

Der Gast stellt seine eigene Welt dar. Seine Farb-, Tiefen- und HUD-Bilder werden in den gemeinsamen Speicher kopiert und ein hostseitiger Hook (oft ein ReShade-Add-on) fügt sie mithilfe der Tiefe in den Frame des Hosts ein.

- **Beispiele:** Minecraft × GTA V (Universal-Modder-Beispiel), die CrossOver-Brücken für Elden Ring und Monster Hunter: World, NewVegasCraft, [Wither Storm](https://github.com/VortexisTV/wither-storm-gta5-passthrough) × GTA V.
- **Wozu es gut ist:** etwas schnell auf den Bildschirm zu bringen und einen Gast auf mehreren Hosts wiederzuverwenden.
- **Was es kostet:** Pixel gehen bei jedem Frame zur GPU → CPU → Shared Memory → GPU. Dieser Roundtrip durch die CPU kostet Upload-Zeit. Der Ersteller von NewVegasCraft berichtet, dass der Gast-Upload pro Frame durch den Wechsel zu dynamischen Texturen von 18,7 ms auf etwa 5 ms gesenkt werden konnte.
- **Was es alleine nicht kann:** dafür sorgen, dass Gastblöcke echte Host-Schatten erhalten, oder die NPCs des Hosts daran hindern, durch Gastblöcke zu laufen. Diese benötigen ebenfalls einen staatlichen Austausch (Route 1). Die meisten echten Projekte sind eine Mischung.

### Route 3. Native Geometrie und Kollisionsübertragung

Der Gast exportiert Netze, Texturen und Kollisionen; Der Host zieht sie an und kollidiert mit ihnen.

- **Beispiele:** SkyCraft fügt Minecraft-Geometrie in Skyrims D3D11-Weltrendering ein, vor Skyrims Nachbearbeitung. LibertyCraft macht dasselbe für den D3D9-Renderer von GTA IV. GalaxyCraft sendet Minecraft-Geometrie als GameCube-Anzeigelisten und KCL-Kollision, damit Super Mario Galaxy 2, das in Dolphin läuft, sie zeichnet.
- **Wozu es gut ist:** Der Gast sieht so aus, als ob er dazugehört: natürliche Beleuchtung, Schatten, Nebel, Schärfentiefe.
- **Was es kostet:** Sie arbeiten mit dem Timing und dem Status des Host-Renderers. Das Übersetzen von API-Aufrufen reicht nicht aus. LibertyCraft muss einen Snapshot des GTA-Status im Spiel-Thread erstellen, im Render-Thread zeichnen und eine Kopie mit undurchsichtiger Tiefe speichern, bevor Glass gezeichnet wird.

### Route 4. Gemeinsame neutrale Simulation

Keines der Originalspiele führt das gemeinsame Spiel aus. Auf einem separaten Server wird eine vereinfachte Simulation ausgeführt, und für jedes Spiel (oder eine Nachbildung davon) gibt es einen Viewer, der es in sein eigenes Erscheinungsbild übersetzt.

- **Beispiel:** Signet (ein Rust SDK und ein dedizierter Server). Das SDK sagt Bewegungen mit einer festen Frequenz von 20 Hz voraus und seine Doom- und OpenArena-Viewer sind Neuimplementierungen. Seine Minecraft-Unterstützung ist ein Gateway zu einem offiziellen Server.
- **Wofür es gut ist:** Spieler in verschiedenen Spielen, die ein Spiel mit einheitlichen Regeln teilen.
- **Was es kostet:** Jeder spielt nach den gemeinsamen Regeln, nicht nach der Physik seines eigenen Spiels. Im Code beträgt die Bewegung 2,5D (ein Stockwerk pro Säule, Überführungen stürzen also ein) und das Schießen erfolgt horizontal. Das geplante KI-Übersetzungstool „Forge“ ist ausdrücklich nicht implementiert.

### Route 5. Motorerholung

Erstellen Sie die Engine neu und laden Sie die Daten des Originalspiels aus Ihrer eigenen Installation. Behandelt in [Leitfaden 3](03-rust-rewrites-and-ports.md) und [Leitfaden 12](12-worked-example-rust-rewrite.md). Sobald Sie ein Spiel haben, ist es normale Programmierung, es mit einem anderen zu kombinieren: Das [2010 Rust Rewrite Mashup](https://github.com/chasmlol/2010-rust-rewrite-mashup) ordnet COD-Kugeln zum Blockieren von Schaden und Explosionen einer TNT-ähnlichen Zerstörung innerhalb einer neu erstellten Laufzeit zu.

- **Andere Beispiele:** HL2-RS erstellt Teile von Half-Life 2 in Rust aus Quellressourcen neu. CS:Craft erstellt CS:GO in Rust/Bevy neu und fügt einen Minecraft-Modus hinzu, und sein „Stitching“-Plan mit IW4L (gemeinsame Inhalts-IDs, Waffenverhalten pro Spiel, eine gemeinsame Trace-Schnittstelle) ist immer noch ein Entwurf. [World of Skatecraft](https://github.com/Kimmo3223/world-of-skatecraft) fügt benilla, einem neu erstellten WoW 1.12.1-Client, über einen Erweiterungseinstiegspunkt eine neu erstellte Skate-Engine hinzu.
- **Achten Sie auf:** Wenn zwei Engines in derselben Sprache geschrieben sind, sind sie nicht zusammensetzbar. Koordinaten, Entitäts-IDs, Physik, Eingabe, Animation und Spielstände müssen noch abgeglichen werden.

### Route 6. Asset- oder Kartenkonvertierung

Konvertieren Sie die Karten oder Modelle des Gastes einmalig offline in die Formate des Gastgebers. Doom-Karten, die als Hytale-Blöcke neu erstellt wurden, die Welt eines Open-World-RPGs, die in die eines anderen umgewandelt wurde, und die Konvertierung von vom Besitzer extrahierten Modellen in RenderWare durch [PipeLink](https://github.com/Sm1jjj/PipeLinkLauncher) sind alles Beispiele.

- **In eine neu erstellte Engine:** Eine Halo CE-Karte kann in IW4L zu Levelgeometrie, Texturen, BSP-Kollision und Spawns werden, während IW4L die Bewegung und Waffen von MW2 behält. In diesem Projekt ist die Landschaft nur visuell und es fehlen Teleporter, Pickups und Fahrzeuge.
- **Nur-Kollisions-Konvertierungen:** PipeLink wandelt die GTA San Andreas-Kollisionsdateien des Besitzers in eine Nur-Kollisions-Karte für die Skate-Engine um, während GTA weiterhin die Welt zeichnet. Alle Oberflächen werden zu einem Material, sodass Geräusche pro Oberfläche verloren gehen.
- **Achtung:** Eine konvertierte Karte ist nicht das Originalspiel. Eine Doom-in-Hytale-Umwandlung hinterließ eine versteckte Tür, die den Abschluss des ersten Levels verhindert.

### Route 7. Umgebauter Gastmotor oder Mechaniker in einem echten Host

Führen Sie das echte Host-Spiel aus und schließen Sie eine neu erstellte Version der Gast-Engine oder nur eine ihrer Mechaniken an. Von der ursprünglichen ausführbaren Gastdatei wird nichts ausgeführt.

- **Eine komplett umgebaute Engine, dreifach (die Skate 3-Familie):**
  - **In Bearbeitung:** Einige Projekte laden eine 32-Bit-Engine-DLL Rust Skate über eine C-Schnittstelle in einen älteren 32-Bit-Host.
  - **[BullySkate](https://github.com/Faiqie/BullySkate)** behält Bully in seinem eigenen Prozess und führt die neu erstellte Skate-Physik und den Sound in separaten 64-Bit-Worker-Prozessen aus, wobei die Kommunikation über kleine feste Shared-Memory-Blöcke erfolgt. Sie verlassen das Spielbrett, um zu Türen, Geschäften und Missionen zu gelangen, und steigen dann wieder ein.
  - **[SkateGM](https://github.com/the-schwilliam/SkateGM)** führt die gleiche Engine-Abstammung in Garrys Mod aus und konvertiert jeden Controller in die Xbox-ähnliche Eingabe, die die Engine bereits versteht.

Alle laden die vom Spieler selbst extrahierten Skate 3-Daten. Wo die Prozessgrenze liegt, entscheidet darüber, was passiert, wenn der Gast abstürzt oder ins Stocken gerät: Der Host von BullySkate überwacht die Gesundheit seiner Mitarbeiter, aber Fehler dort müssen im Allgemeinen noch Bully erneut geöffnet werden; Die In-Process-DLL muss sich selbst wiederherstellen (die letzte gute Pose wiederherstellen und anhalten, wenn sich Fehler wiederholen).
- **Eine Mechanik:** Faith Runner baut ausgewählte Mirror's Edge-Bewegungen in Rust neu auf und fügt sie über eine C-Schnittstelle in Skyrim und Minecraft ein. [AC1-Bewegung neu geschrieben](https://github.com/Banned445/AC1-Movement-Rewritten) baut die Bewegung im Altaïr-Stil auf einer Bevy-Greybox neu auf, mit einem Kapsel-Fallback, wenn keine Spieldaten vorhanden sind. Der Diablo II-Bewegungsmod von DevilutionX behält die Kachelbelegung und den Kampf von Diablo I bei.
- **Wozu es gut ist:** das kleinste Projekt, das sich immer noch wie „Spiel B in Spiel A“ anfühlt. Der Bewegungs-Mod von Diablo II hält einen Weg zurück: Wenn die kontinuierliche Bewegung ins Stocken gerät, zentriert er den Helden neu und kehrt zum Gehen auf den Standardfeldern zurück.
- **Achten Sie auf:** Das Abgleichen extrahierter Zahlen ist kein Beweis für das Übereinstimmungsgefühl. Die doppelte Schwerkraft von Faith Runner geht aus einem Entwicklerkommentar hervor; Die tatsächliche Ursache der Verdoppelung ist ungeklärt.

## Auswahl für Ihre Idee

| Du willst | Beginnen Sie mit | Vermeiden |
|----------|-----------|-------|
| „Spiele Minecraft in [Weltspiel]“ mit Bauen und Minecraft Kampf | Route 1 + 3, Abzweigung von SkyCraft | Von Null anfangen |
| Dieses Wochenende ist etwas auf dem Bildschirm | Route 2, aus dem Universal-Modder GTA V-Beispiel | Vielversprechende native Beleuchtung |
| Ein Freund in einem anderen Spiel nimmt an Ihrem Spiel teil | Route 4 | Angenommen, der eigene Netcode eines der Spiele hilft |
| Die Bewegung eines anderen Spiels in Ihrem Lieblingsspiel | Route 7 | Das gesamte zweite Spiel für einen Mechaniker ausführen |
| Skateboarden (oder ein anderes vollständiges Mechanik-Set) in einem Open-World-Host | Route 7 mit umgebauter Lokomotive, im Worker-Prozess | Einbinden der ursprünglichen ausführbaren Gastdatei |
| Ein Level aus einem Spiel, das in einem anderen spielbar ist | Route 6 | Das Ergebnis als „Ausführen“ des ursprünglichen | bezeichnen
| Ihre eigene Engine für ein altes Spiel, dann Mashups | Route 5 | Spieldaten an das Repo übergeben |

## Bevor Sie sich auf eine Route festlegen

- [ ] Sie wissen, welche Route (oder Routenmischung) Sie erstellen.
- [ ] Sie haben aufgeschrieben, wem der Spieler gehört und wie die Kontrolle zurückgegeben wird.
- [ ] Die genauen Versionen und Loader beider Spiele werden aufgelistet.
- [ ] Sie wissen, was jeder Spieler besitzen und installieren muss.
- [ ] Sie haben das nächstgelegene bestehende Projekt gefunden und dessen Designdokument und seine bekannten Einschränkungen gelesen.
- [ ] Sie haben [\`templates/BRIDGE-CONTRACT.md\`](../templates/BRIDGE-CONTRACT.md) in Ihr Projekt kopiert.

Als nächstes: [Leitfaden 15](15-case-studies-what-each-project-actually-did.md) für bearbeitete Fallstudien und [Leitfaden 16](16-ownership-sync-and-rendering.md) für die Symptome, auf die Sie stoßen, und was sie normalerweise verursacht.

---

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/14-choosing-a-route.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/14-choosing-a-route.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>`,b=`# 15. Fallstudien: Was jedes Projekt tatsächlich getan hat

Videos lassen jedes Projekt gleich aussehen. Der Code nicht. Dieser Leitfaden geht durch reale Projekte, geordnet nach dem Problem, das sie gelöst haben, mit den Versionen, den Schnittstellen, wem was gehört, den Einheitenumrechnungen, den Plattformbeschränkungen und den Dingen, die schief gelaufen sind.

Lesen Sie zuerst [Anleitung 14](14-choosing-a-route.md), wenn Sie noch keine Route ausgewählt haben.

> **Wie man diese liest.** „Berichte“ bedeutet, dass der Ersteller dies sagt. „Der Code tut“ bedeutet, dass der Code des Projekts dies tut; Das bedeutet nicht, dass es getestet wurde. Überprüfen Sie die aktuelle README-Datei jedes Projekts, bevor Sie ein Detail kopieren.

## Fall 1. Forken einer funktionierenden Bridge für einen neuen Host: SkyCraft → LibertyCraft

**Frage beantwortet:** Wie viel von SkyCraft können Sie für ein anderes Host-Spiel wiederverwenden?

| | [SkyCraft](https://github.com/chasmlol/SkyCraft) | [LibertyCraft](https://github.com/mrborghini/libertycraft) |
|---|---|---|
| Gastgeber | Skyrim (SKSE, D3D11) | GTA IV (ein Community-Scripting-SDK, D3D9) |
| Gast | Minecraft, Fabric | Der gleiche Fabric-Mod, gegabelt |
| Plattform | Windows | Linux, with GTA IV running under Wine; Der Transport wurde in Windows- und POSIX-Versionen aufgeteilt |
| Wie die Kollision des Hosts zustande kommt | Liest Skyrims Havok-Kollisionsformen direkt | Abtastt GTA-Geometrie mit nativen Liniensonden und nahegelegenen Objekten |
| Was der Gast erhält | Dreiecke plus Achtelblock-Voxel | Die gleiche Darstellung |

**Was geerbt wurde.** Im ersten Commit von LibertyCraft heißt es deutlich, dass es den Fabric-Mod von SkyCraft und seinen MIT-Protokoll-Header forkt und das Protokolllayout v11 beibehält. Der Gast-Mod, das Shared-Memory-Design und etwas Hilfscode sind aufgetaucht.

**Was neu war.** Alles über GTA: Fahren, Fahrzeuge und Sitze, Telefone, Fußgänger, Waffen, Verbrechen, Wetter und der Host-Renderer. Der Commit-Verlauf zeigt es in der Reihenfolge: Gerüst, Gastport mit einer Linux-Brücke, GTA IV-Downgrade und Launcher-Tooling, der native Plugin-Kern (zu diesem Zeitpunkt als „im Spiel nicht getestet“ markiert), Fahrzeuge, Rendering, Kollision und Kampf, dann Spieltest-Korrekturen.

**Lektionen, die es wert sind, kopiert zu werden:**

- **Verwenden Sie die Darstellung wieder, nicht die Methode.** Beide Projekte senden Dreiecke und Voxel an Minecraft. Lediglich die Art und Weise, wie sie diese Geometrie vom Host erhalten, unterscheidet sich. Deshalb konnte die Gästeseite beibehalten werden.
- **Behalten Sie das feste Protokolllayout bei, aber gehen Sie nicht davon aus, dass die Bedeutung gleich geblieben ist.** LibertyCraft hat die magische Zahl geändert und GTA-spezifische Ereignisse und Flags hinzugefügt. Matching layout isn't compatibility with an old SkyCraft build.
- **Halten Sie den Verlauf ehrlich.** Durch einen frühen Commit wurde eine Games for Windows Live-Verbindungsschleife „behoben“. Ein späterer Commit besagt, dass die eigentliche Ursache ein anderes Add-on war, und entfernt es. Schreiben Sie die Korrektur neben der ursprünglichen Theorie auf, anstatt sie zu überschreiben. Bei einem Zurücksetzen bleibt der erste Commit im Verlauf erhalten und die Korrektur wird oben hinzugefügt, was der richtigen Form entspricht: Beide bleiben lesbar.
- **Kreditlinie.** LibertyCraft behält die Namensnennung von SkyCraft. Von welchem ​​genauen SkyCraft-Commit es abgezweigt wurde, wird nicht aufgezeichnet, da der erste Commit kein übergeordnetes Element hat. Wenn Sie einen Fork durchführen, notieren Sie sich den Upstream-Commit, von dem aus Sie begonnen haben.

## Fall 2. Eine Frame-Compositing-Brücke, die Sie Ende-zu-Ende lesen können: Minecraft × GTA V

**Frage beantwortet:** Was braucht eine Bildtransportbrücke eigentlich?

Dies ist der Ordner \`examples/minecraft-gta5-passthrough\` in [universal-modder](https://github.com/rehan-remade/universal-modder). In der README-Datei wird der Code Claude genannt und der Autor habe ihn im September 2026 auf Steam Build 3889 von GTA V Legacy (ScriptHookV Build 3889.0, ReShade Version 6.8.0) getestet.

- **Zwei Kanäle.** Gameplay-Nachrichten verwenden einen Localhost-WebSocket. Drei Minecraft-Bilder (Weltfarbe, Tiefe und Hand plus HUD) werden durch den benannten gemeinsamen Windows-Speicher übertragen. Ein ReShade-Add-on lädt sie hoch und fügt sie in den fertigen GTA-Rahmen ein.
- **Der Besitzer ändert sich mit dem Modus.** Zu Fuß platziert die GTA-Pose den Minecraft-Spieler. Im Elytra-Flug besitzt Minecraft Bewegung und GTA liefert den Look und die Verfolgungskamera.
- **Kollision wird neu erstellt, nicht kopiert.** GTA sondiert den Boden um den Spieler herum (160 Spalten pro Frame in einem Radius von 40) und Minecraft erhält Barriereblöcke. Das ist eine begehbare Oberfläche, keine Wände, Überhänge oder Innenräume. In Minecraft platzierte Blöcke werden zu eingefrorenen GTA-Boxen (höchstens 400). Bodenplatten und Treppen sind einfach „massiv“.
- **Kampfkreuze als Ereignisse.** GTA-Menschen werden in Minecraft zu unsichtbaren Dorfbewohnern; Minecraft Kämpfer werden zu unsichtbaren, eingefrorenen GTA-Doppelgängern. Schäden werden als Ereignisse gesendet.
- **Bekannte Grenze, vom Autor angegeben:** Die Demo schneidet um ein veraltetes Minecraft-Bild herum, das über dem Pausenmenü von GTA übrig bleibt; Der Fix wurde nicht erstellt.

**Was der enthaltene Test beweist.** \`ws_test.cpp\` besteht den Test, wenn eine Nachricht das Wort \`explosion\` enthält. Die Genauigkeit der Kamera, die Tiefenausrichtung oder die erneute Verbindung werden nicht überprüft. Eine bestandene Prüfung bedeutet hier „die Steckdose spricht“, nichts weiter.

## Fall 3. Gleiche Idee, zwei verschiedene Hosts: die CrossOver-Brücken

**Frage beantwortet:** Wenn Sie einen Host durchgeführt haben, wie viel wird auf den nächsten übertragen?

Ein einzelner Ersteller hat Minecraft 1.21.1 (Fabric) Brücken für Monster Hunter: World und Elden Ring erstellt. Minecraft läuft nativ auf macOS; der Host läuft in CrossOver; Ein dateigestützter gemeinsamer Speicherbereich ist für beide sichtbar.

| | Monster Hunter: Welt | Elden Ring |
|---|---|---|
| Host-Version | 15.23.00 (Build 421810) | App 1.17.1 (ausführbare Datei 2.7.1.0) |
| Grafikpfad | eine Direct3D-on-Metal-Ebene, D3D11 | D3DMetall, D3D12 |
| Bildebenen gesendet | Welt, Tiefe, kombinierte Hand+HUD | Welt, Tiefe, HUD, separate Hand |
| Den Gast anzünden | Vervielfacht die Welt durch unscharfe Helligkeit des Wirtsbildes | Zwei Downsampling-Durchgänge für Ambient und Haze sowie eine Farbtönung für die Welt und die Hand |
| Was bedeutet „Schadenshöhe“ | Natives HP | Minecraft damage, converted by the target's maximum HP |

**Lektionen, die es wert sind, kopiert zu werden:**

- **Gleiche magische Zahl, unterschiedliche Bedeutung.** Die beiden Protokolle haben eine gemeinsame Magie und Version, unterscheiden sich jedoch in der Header-Größe, den Regionen, den Einheiten und der Schadensbedeutung. Aus diesem Grund befinden sie sich in separaten Ordnern. Versionieren Sie Ihr Protokoll pro Host.
- **Der passende Rahmen kommt nicht immer an.** Der Host behält acht aktuelle Kamerapositionen und bevorzugt den genau passenden Rahmen, dann einen älteren und dann das zuletzt hochgeladene Bild. Es wird protokolliert, wie oft die einzelnen Ereignisse aufgetreten sind. Protokollieren Sie auch Ihre Fallbacks.
- **Auflösungsobergrenze.** Frames über 1920×1200 fallen auf ein transparentes Overlay-Fenster ohne Tiefenverdeckung zurück.
- **Ein Synchronisierungsfehler auf einem Host und nicht auf dem anderen.** Der Sequenzzähler des Monster Hunter-Frame-Writers geht zu Beginn eines Schreibvorgangs nicht ungerade, wie im Kommentar angegeben, sodass ein Leser einen halb geschriebenen Frame akzeptieren könnte. Der Elden Ring-Autor macht es richtig. Es ist nicht bekannt, dass es einen sichtbaren Fehler verursacht. Lassen Sie den Agenten Ihren Synchronisierungscode noch einmal anhand seiner eigenen Kommentare lesen.

## Fall 4. Ausrichtung debuggen, ohne sich selbst etwas vorzumachen: NewVegasCraft

**Frage beantwortet:** Das Bild des Gastes rutscht oder wackelt gegen den Gastgeber. Was machst du?

[NewVegasCraft](https://github.com/Davozh/new-vegascraft) führt Minecraft neben Fallout aus: New Vegas (Steam 1.4.0.525) mit einem xNVSE-Plugin und einem ReShade-Compositor. Auf seinen Commit-Seiten wird Claude Opus 5.5 gutgeschrieben und eine lange Diagnosesequenz, einschließlich der falschen Abzweigungen, dokumentiert.

| Problem | Was wurde versucht | Wo es gelandet ist |
|---|---|---|
| Absturz beim ersten nativen Kollisionsstrahl | Stapelausrichtung | Ein 4-Byte-ausgerichteter Stapel erfüllte 16-Byte-SSE-Lasten; ausgerichtete Lagerung behoben |
| Hosttiefe war leer | Vor dem Löschen kopieren; eine INTZ-Texturtheorie | Die tatsächliche Szenentiefe betrug 4× MSAA. Der INTZ-Pflaster wurde als Fehlleitung entfernt; MSAA musste für dieses Setup ausgeschaltet sein |
| Shader konnten unter Proton | nicht kompiliert werden | Eine native 32-Bit-Version \`d3dcompiler_47\` ersetzte die in diesem Setup integrierte Version |
| Das Bild bebte | Verschoben, wohin die Host-Pose gelesen wird | Die Host-Pose wird jetzt gelesen, wenn der Frame präsentiert wird, nicht in der Hauptschleife, sodass die Pose mit dem tatsächlich angezeigten Bild übereinstimmt |
| Uploads ins Stocken geraten | Dynamische Texturen | Der Ersteller meldet 18,7 ms → etwa 5 ms pro Gast-Upload |
| Die Welt schien zu driften | FOV-Skalierung, Projektions-Dumps, Bewegungstools, Verzögerungstests | Die FOV-Steuerung wurde entfernt. Die verbleibende „Drift“ war ein echter Minecraft-Block, der ein Zeichen | schnitt

**Lektionen, die es wert sind, kopiert zu werden:**

- **Erstellen Sie zuerst Messwerkzeuge.** NewVegasCraft wechselt auf einem Schlüssel zusammengesetzte, Host-Tiefe-, Gast-Tiefe- und Differenzansichten, setzt auf einem anderen eine Markierungssäule dort ab, wo das Host-Fadenkreuz zeigt, und legt auf einem dritten die native Projektionsmatrix ab.
- **Fehlgeschlagene Korrekturen entfernen.** Mehrere plausible Korrekturen waren falsch. Das Projekt hat sie entfernt, anstatt jede Theorie als Anforderung zu stapeln.
- **Testen Sie den Transport mit einem gefälschten Host vor dem echten Spiel.** Sein gefälschter Linux-Host verglich jedes exportierte Bild mit der dafür aufgezeichneten Kameraposition, sodass sich hinter dem Vergleich verschiedener Bilder keine Fehlausrichtung verbergen konnte. Das ist ein synthetischer Test, kein Beweis für das echte Spiel.

## Fall 5. Zeichnen des Gastes mit dem Renderer des Hosts: Minecraft × Half-Life

**Frage beantwortet:** Wie sieht Route 3 auf einer alten Lokomotive aus?

SawyerTheNerds [Minecraft × Half-Life](https://github.com/SawyerTheNerd/Minecraft-X-HalfLife) (GoldSrc, nicht Half-Life 2) Credits Claude Opus 5.5. Ein verstecktes echtes Minecraft sorgt für Bewegung, Physik und Netze. Geänderte Half-Life-Client- und Server-DLLs zeichnen die Minecraft-Geometrie über die eigene OpenGL-Pipeline von Half-Life. Nur das HUD ist ein eingefügtes Bild.

- **Einheiten:** 40 Half-Life Einheiten pro Block; 72 Einheiten entsprechen etwa 1,8 m.
- **Kollision:** BSP-Gesichter und der Player-Clip-Rumpf werden zur Kollision Minecraft, wobei zuerst die Erweiterung des Rumpfes entfernt wird. Bewegliche Pinsel senden Aktualisierungen.
- **Übergabe der Kontrolle:** Leitern, \`use\`, Noclip und Death Return-Bewegung zu Half-Life. Die Hockhöhen stimmen nicht genau überein.
- **Gesundheit:** Die 20-Punkte-Gesundheit von Minecraft entspricht der 100 von Half-Life mit einem Faktor von 5.
- **Offene Elemente:** In der Aufgabenliste des Projekts werden Waffen, Gefahren, Beleuchtung, Mob-Pfade und gemeinsamer Tod als noch nicht im Spiel akzeptiert aufgeführt.

## Fall 6. Geometrie in ein emuliertes Spiel exportieren: GalaxyCraft

**Frage beantwortet:** Kann man das mit einem Konsolenspiel in einem Emulator machen?

[GalaxyCraft](https://github.com/M0uidev/GalaxyCraft) teilt die Arbeit auf drei Programme auf: Minecraft/Fabric für Blöcke, Inventar und generierte Netze; Dolphin mit dem Original-Super Mario Galaxy 2; und ein natives Modul im Spiel für Rendering, Schwerkraft, Kollision und Marios Anpassung.

- **Die Geometrie des Gastes wird von Marios Spiel gezeichnet.** Minecraft-Daten werden als GameCube-Anzeigelisten, Texturen und KCL-Kollision gesendet.
- **Zwei-Byte-Reihenfolgen.** Das Host-Protokoll ist Little-Endian (Version 10); Das emulierte Postfach ist Big-Endian (Version 5). Ein Großteil der Modelldaten ist bereits Big-Endian und darf nicht zweimal ausgetauscht werden. Eine C-Assertionsdatei im Repository fixiert die Offsets.
- **Zwei Besitzmodi.** Native Mario-Bewegung oder Minecraft-Bewegung mit verstecktem Mario und gezogenem Steve.
- **Caps:** Die README-Datei beschreibt eine breite Block- und Entity-Abdeckung. Das Protokoll hat endliche Obergrenzen.

## Fall 7. Ein gemeinsames Match statt einer Brücke: Signet

**Frage beantwortet:** Können Spieler in verschiedenen Spielen ein Spiel teilen?

[Signet](https://github.com/kian-cx/signetprotocol) führt eine neutrale Simulation auf einem Server aus und lässt jedes Spiel als Zuschauer fungieren. Sein SDK sagt Bewegungen mit einer festen Frequenz von 20 Hz voraus, gibt unbestätigte Befehle wieder, wenn der Server sie korrigiert, und protokolliert Korrekturen über 5 cm.

- **Die gemeinsamen Regeln sind absichtlich einfach.** Die Bewegung erfolgt in 2,5D, sodass gestapelte Etagen zu einer Spalte zusammenfallen. Das Schießen erfolgt horizontal. Originell aussehende Doom-Wände bedeuten nicht gleich Doom-Physik.
- **Der geplante KI-Übersetzer ist ein Plan.** Auf den „Forge“-Seiten heißt es, dass er nicht implementiert ist und kein Modell validiert wurde.
- **Der Code ist weniger streng als die Dokumente.** Die Dokumente besagen, dass der Client niemals blockiert; Der Code schreibt in TCP, während er eine Sperre hält. Die Dokumente besagen, dass Autorität Betrug unmöglich macht; In der Roadmap sind noch immer Befehlsratenprüfungen als ausstehend aufgeführt. Glauben Sie der Roadmap.

## Fall 8. Ein Mechaniker, viele Hosts: Faith Runner und AC1-Bewegung

**Frage beantwortet:** Müssen Sie das gesamte zweite Spiel ausführen?

- **[Faith Runner](https://github.com/tnrjns/faith-runner)** baut die ausgewählte Mirror's Edge-Bewegung in Rust neu auf. Es benötigt nur Box-Sweeps und Überlappungsabfragen von seinem Host, sodass Skyrims Havok, Minecraft-Blöcke oder eine Bevy-Greybox alle für Kollision sorgen können. Skyrim verwendet in diesem Hafen 70 Einheiten pro Meter. Der Skyrim-Port errät Leitern und andere Vorrichtungen anhand von Kollisionsformen, und sich bewegende Objekte bleiben bis zum erneuten Lesen veraltet.
- **[AC1-Bewegung neu geschrieben](https://github.com/Banned445/AC1-Movement-Rewritten)** baut Bewegungen im Altaïr-Stil auf einer Bevy-Greybox nach und importiert Modelle und Animationen aus Ihrer eigenen PC-Installation. Wenn keine Spieldaten vorhanden sind, wird auf eine einfache Kapsel zurückgegriffen, wodurch der Bewegungscode auch ohne das Spiel testbar bleibt. Behandeln Sie dies als Beschreibung des Erstellers.

## Fall 9. Ein Plan im Vergleich zu dem, was geliefert wurde: Garry's Redemption

**Frage beantwortet:** Wie erkennt man, was gebaut wird, und was geplant ist?

Der erste Commit des Projekts enthält ein 219 Zeilen umfassendes Planungsdokument für einen Agenten. Es plant In-Frame-Vulkan/DX12-Compositing und tiefenbewusste Requisiten. In den späteren Versionshinweisen wird ein separates Overlay-Fenster über RDR2 beschrieben, das keinen exklusiven Vollbildmodus ausführen kann und echte In-Frame-Zeichnung als nicht erstellt bezeichnet. Die native Akzeptanz wird auf einem Windows 11-/NVIDIA-/Vulkan-PC gemeldet.

**Lektion:** Ein Designdokument ist ein Plan. Bevor Sie eine Funktion in Ihrer README-Datei auflisten, überprüfen Sie die Versionshinweise und den Code.

## Fall 10. Eine umgebaute Engine, mehrere Hosts: Skate 3 in Bully, Garry's Mod und WoW

**Frage beantwortet:** Wo sollte eine neu erstellte Gast-Engine leben, im Prozess des Hosts oder daneben?

Diese Projekte verwenden die eigenen extrahierten Skate 3-Daten des Spielers und eine neu erstellte Skate-Engine aus derselben Community-Abstammung. Keiner führt die ursprüngliche ausführbare Datei Skate 3 aus.

| | [BullySkate](https://github.com/Faiqie/BullySkate) | [SkateGM](https://github.com/the-schwilliam/SkateGM) | [World of Skatecraft](https://github.com/Kimmo3223/world-of-skatecraft) |
|---|---|---|---|
| Gastgeber | Bully (nativer Adapter + Skripting) | Garrys Mod | [benilla](https://github.com/samwhosung/benilla), ein neu erstellter WoW 1.12.1-Client |
| Wo der Motor läuft | separate 64-Bit-Physik- und Sound-Worker-Prozesse | in Garrys Mod | innerhalb des neu erstellten Clients über seinen Erweiterungseinstiegspunkt |
| Host-Kollision | konvertierte Bully-Kollision; Nur physische Kollision, keine Navigationsvolumina | Garrys Mod-Welt, mit einer zusätzlichen Kollisionsebene für bewegliche Requisiten | nicht beschrieben |

**Details, die es wert sind, von BullySkate kopiert zu werden:**

- **Kleine, feste Verträge.** Bully und der Physiker teilen sich einen 6.184-Byte-Block ohne Zeiger (bis zu 24 Akteure, 8 Fahrzeuge, 8 Eingabebeispiele). Sound erhält einen eigenen 296-Byte-Block, geschützt durch einen ungeraden/geraden Sequenzzähler.
- **Achsen einmal angegeben.** Bully ist Z-oben und die Skate-Engine ist Y-oben, sodass die Positionen als (x, z, −y) übergehen.
- **Seine eigene Uhr.** Der Physiker schreitet in einem festen Zeitraum voran, der aus der Dauer der Eingaben in der Warteschlange erstellt wird, nicht ein Schritt pro gerendertem Frame. Wenn sich die Eingaben häufen, werden sie zusammengeführt und der Aufholprozess begrenzt, sodass bei einem langen Stall ein Tastendruck verloren gehen kann.
- **Der Ton schlägt stumm aus.** Wenn 250 ms lang kein neuer Tonstatus eintrifft, schaltet der Sound-Worker den letzten Ton stumm, anstatt ihn in einer Schleife ablaufen zu lassen.
- **Geben Sie es für den Inhalt des Gastgebers zurück.** Sie verlassen das Spielfeld, um Türen, Geschäfte und Missionen zu erreichen, und steigen dann wieder auf.

**Von den anderen:** SkateGM ordnet jeden Controller (PlayStation, Switch, generisch) der Xbox-ähnlichen Eingabe zu, die die Engine bereits erwartet, und wählt dann die Tastenbeschriftungen separat aus, sodass sich der Eingabecode der Engine nie ändert. World of Skatecraft fügt über einen gepatchten Server einen Skateboard-Beruf hinzu; Das Windows-Setup verwendet einen Standardserver und verfügt daher nicht über diese Funktion.

Andere Projekte laden über eine C-Schnittstelle dieselbe Engine als 32-Bit-DLL in einen älteren 32-Bit-Host. Das ist die Wahl mit der geringsten Latenz, aber ein Gastfehler ist ein Hostfehler, daher muss sich die Engine selbst erholen: Stellen Sie die letzte gute Pose wieder her, wenn sie ungültige Zahlen erzeugt, und stoppen Sie, wenn sich Fehler innerhalb weniger Sekunden wiederholen.

**Beweisniveau:** Die Verträge von BullySkate sind im Code enthalten. Die anderen Details sind Erstellerberichte aus READMEs und Commit-Seiten.

## Fall 11. Verwendung des Originalspiels als Referenz: Diablo II-Bewegung in DevilutionX

**Frage beantwortet:** Wie vergleicht man einen umgebauten Mechaniker mit dem Original?

Dieser Mod bringt kontinuierliche Bewegung im Diablo II-Stil in DevilutionX, die umgebaute Diablo I-Engine. Die Kachelbelegung, der Kampf und die Spielstände von Diablo I bleiben darunter.

- **Ein Referenzorakel.** Es vergleicht seine Bewegungstabellen mit einem vom Benutzer bereitgestellten Diablo II 1.12 \`D2Common.dll\` und einer MIT-lizenzierten Neuimplementierung. Die Richtungstabelle wird berechnet und nicht aus Spieldaten kopiert.
- **Ein Weg zurück.** Wenn die kontinuierliche Bewegung ins Stocken gerät, wird der Held neu zentriert und er kehrt zum Gehen auf dem Feld zurück.
- **Wissen Sie, welche Version in einem Bericht beschrieben wird.** v0.1 nutzte überall Diablo II-Geschwindigkeiten. v0.2 sorgt dafür, dass Diablo I in Dungeons Schritt hält. Ein älterer Bericht im Repo beschreibt immer noch die Geschwindigkeiten von Version 0.1.
- **Lesen Sie die Testergebnisse sorgfältig durch.** Der Bericht behauptet 65/65-Prüfungen, aber diese Prüfungen messen unterschiedliche Dinge (Tabellenübereinstimmung, Reisezeit, unveränderte Level-Hashes, Bildrate). Bei der Bildratenprüfung wird das Beste aus mehreren Durchläufen herangezogen, nicht der Durchschnitt. Prüfungen, die die eigenen Diablo II-Dateien erfordern, werden übersprungen, wenn die Dateien fehlen.

## Fall 12. Ein Motor, drei verschiedene Dinge: Halo CE im IW4L

**Frage beantwortet:** Warum verhalten sich zwei Videos des „gleichen“ Mashups so unterschiedlich?

Das [Halo / MW2 Director](https://github.com/0xburn/halo-mw2-director)-Projekt patcht die [IW4L](https://github.com/vladtrc/iw4L) Rust-Engine (eine Laufzeit von Modern Warfare 2) auf macOS mit Metal und verfügt über drei separate Modi:

1. **Ein verfasster Film.** Halo CE-Charaktere werden auf MW2-Rigs neu ausgerichtet und spielen ein zeitgesteuertes Drehbuch nach. Das Warzenschwein folgt einer festen Route. Es sieht nach Gameplay aus, aber es reagiert nichts.
2. **Eine importierte Karte.** Eine lokale Halo CE-Karte wird zu Levelgeometrie, Texturen, Kollisionen und Spawns, aber die Bewegung, Waffen und Regeln von MW2 laufen weiterhin. In der Landschaft gibt es keine Kollisionen und es fehlen Teleporter, Pickups und Fahrzeuge.
3. **Ein Bot-Match.** MW2-Soldaten kämpfen gegen „Spartaner“ im Halo-Stil mit geänderten Bewegungs- und Genauigkeitsregeln. Es gibt keine Halo-Schilde und das geänderte Bewegungsprofil erfordert eine neue Netzwerkprotokollversion, sodass ältere Builds und Demos nicht übereinstimmen.

**Lektion:** Sagen Sie, welchen Modus ein Clip zeigt. Ein Cinematic, ein Kartenimport und ein Reactive Match sind unterschiedliche Ansprüche.

## Fall 13. Lehren aus einem eigenständigen Umbau: HL2-RS

**Frage beantwortet:** Was geht schief, wenn zwei Renderer oder Eingabepfade aufeinandertreffen?

[HL2-RS](https://github.com/kvalls/hl2-rs) erstellt Teile von Half-Life 2 in Rust neu und lädt Quellressourcen. Es ist kein Mashup, aber seine Korrekturen gelten für jedes Projekt, das einen Renderer gemeinsam nutzt oder Eingaben automatisiert:

- **Tiefentest und Tiefenschreiben sind separate Schalter.** Transparente Oberflächen müssen oft ohne Schreiben getestet werden.
- **GPU-Statuslecks zwischen Durchgängen.** Eine vorherige Pipeline kann dazu führen, dass eine Tiefenreinigung nicht mehr funktioniert. Stellen Sie ein, was Sie benötigen, und stellen Sie es dann wieder her.
- **Die automatisierte Eingabe geht einen anderen Weg.** Bei der synthetischen Windows-Eingabe fehlt die reine Mausbewegung, sodass das Projekt auf normale Mausdeltas zurückgreift, wenn die rohe Eingabe fehlt.
- **Ein geladenes Level entspricht nicht der Kampagnenparität.** Die Szenen- und NPC-Tests sind eng und die Waffenverteilung und der Schaden sind Näherungswerte.

## Was die Fälle gemeinsam haben

1. Jedes Arbeitsprojekt wählte einen Besitzer für den Player und schrieb auf, wie die Kontrolle zurückkommt.
2. Jeder wandelt Einheiten explizit um: 70 Host-Einheiten pro Block (New Vegas), 40 pro Block (Half-Life), 1 GTA-Meter pro Block ([Wither Storm](https://github.com/VortexisTV/wither-storm-gta5-passthrough) × GTA V und LibertyCraft in GTA IV), 2 Einheiten pro Block (ULTRAKILL in [Killcraft](https://github.com/goonsn/Killcraft)), 0,01905 Meter pro Quelleinheit ([Garrys Erlösung](https://github.com/codeByAlexff/garrys-redemption)).
3. Kollision wird in eine Darstellung umgebaut, die das andere Spiel versteht, und sie ist nie vollständig. Schreiben Sie auf, was fehlt.
4. Die am besten dokumentierten Projekte zeichnen ihre Fehlentwicklungen auf.
5. „Getestet“ bedeutet normalerweise eine Maschine, eine Version. Sag was.
6. Der Ort, an dem der Gast ausgeführt wird (derselbe Prozess, ein Worker oder eine andere Maschine), entscheidet darüber, was ein Absturz oder Stillstand mit dem Host bewirkt. Entscheide es mit Absicht.

---

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/15-case-studies-what-each-project-actually-did.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/15-case-studies-what-each-project-actually-did.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>`,f=`# 16. Besitz, Synchronisierung und Rendering: Symptome und ihre üblichen Ursachen

Wenn zwei Spiele einen Bildschirm teilen, fallen die meisten Fehler in mehrere Familien: Wem gehört etwas, von wessen Uhr stammt ein Wert, in welchen Einheiten befindet er sich und was hat der Renderer bereits getan, bevor Sie gezeichnet haben. In diesem Leitfaden werden die Symptome aufgeführt, auf die Menschen tatsächlich gestoßen sind, die Ursache, die jedes Projekt gefunden hat, und was sie getan haben.

Verwenden Sie es mit [Anleitung 5](05-testing-and-troubleshooting.md). Fügen Sie den entsprechenden Abschnitt in Ihren Agenten ein, wenn Sie einen Fehler melden. Es gibt dem Agenten einen Anlass zur Überprüfung statt einer Vermutung.

> **Beweisniveau.** Jedes „gefunden in“ verweist auf den Code, Commits oder Notizen eines echten Projekts. Wenn etwas eher eine wahrscheinliche als eine bestätigte Ursache ist, heißt es **Hypothese**.

## Vor allem: Vertrag schreiben

Die meisten der unten aufgeführten Fehler sind auf etwas zurückzuführen, das niemand aufgeschrieben hat. Geben Sie zu Beginn [\`templates/BRIDGE-CONTRACT.md\`](../templates/BRIDGE-CONTRACT.md) ein: Wem gehört was, Einheiten und Achsen, Tickraten, Nachrichtenlayout, Version und was bei Pause, Laden, Tod und Neustart passiert. Bitten Sie dann den Agenten, jede Änderung anhand dieser zu überprüfen.

## Rendering und Tiefe

**Die Gastwelt rutscht oder bleibt hinter dem Gastgeber zurück, wenn Sie sich umdrehen.**
- *Übliche Ursache:* Die Pose der Host-Kamera wurde zu einem anderen Zeitpunkt als dem angezeigten Bild gelesen.
- *Gefunden in:* [NewVegasCraft](https://github.com/Davozh/new-vegascraft) hat seine gelesene Pose auf den Zeitpunkt verschoben, an dem der Rahmen präsentiert wird. Die [CrossOver-Brücken](https://github.com/justbustin/minecraft-crossover-bridge) behalten acht aktuelle Posen und ordnen jedes Gastbild der Pose zu, mit der es gerendert wurde.
- *Überprüfen:* Protokollieren Sie einen Bildzähler oder Zeitstempel für jede Pose auf beiden Seiten und vergleichen Sie sie. Beobachten Sie es nicht.

**Es sieht immer noch nach Drift aus, nachdem das Timing festgelegt wurde.**
- *Mögliche Ursache:* Es handelt sich nicht um Drift. Der letzte „Drift“ von NewVegasCraft war ein echter Minecraft-Block, der ein Schild kreuzte.
- *Überprüfen:* Fügen Sie einen Debug-Schlüssel hinzu, der eine Markierung am Fadenkreuz des Hosts setzt, und eine Ansicht, die den Unterschied zwischen Host- und Gasttiefe anzeigt.

**Gastblöcke werden durch Wände sichtbar oder die Hosttiefe wird als leer angezeigt.**
- *Übliche Ursachen:* Der Tiefenpuffer ist mehrfach abgetastet (MSAA), sodass er nicht auf einfache Weise gelesen werden kann. oder es wurde gelöscht, bevor Sie es kopiert haben.
- *Gefunden in:* Die tatsächliche Szenentiefe von NewVegasCraft betrug 4× MSAA; Für dieses Setup musste MSAA ausgeschaltet sein. Außerdem musste die Tiefe kopiert werden, bevor der Host sie löschte. Die Monster Hunter: World-Brücke achtet auf Tiefenräumungen in voller Größe und wählt zwischen zwei Kandidaten aus.
- *Überprüfen:* Fügen Sie eine Debug-Ansicht hinzu, die die Hosttiefe selbst anzeigt.

**Gästeblöcke verschwinden hinter Glas oder Wasser.**
- *Übliche Ursache:* Sie haben die Hosttiefe verwendet, nachdem transparente Objekte hineingezeichnet wurden.
- *Found in:* [LibertyCraft](https://github.com/mrborghini/libertycraft) saves an opaque-only depth copy before GTA IV draws glass, then draws Minecraft against that copy. Natives Glas wird dann nicht über den Gast gezogen; Das ist ein bekannter Kompromiss.

**Gästeblöcke sehen flach aus oder passen nicht zur Beleuchtung des Gastgebers.**
- *Ursache:* Beim Frame-Compositing kann die Beleuchtung nur anhand des Bildes des Hosts geschätzt werden.
- *Gefunden in:* Die Monster Hunter-Brücke vervielfacht die Gastwelt durch verschwommene Host-Helligkeit; Die Elden Ring-Brücke fügt Umgebungsgeräusche, Dunst und einen Farbton hinzu. [SkyCraft](https://github.com/chasmlol/SkyCraft), which draws inside Skyrim's renderer, samples native fog, ambient and point lights and captured sun-shadow cascades.
- *Choice:* if you need real host shadows on guest blocks, you need geometry transfer (route 3 in [guide 14](14-choosing-a-route.md)), not a pasted picture.

**Ein veraltetes Gastbild bleibt über dem Pausenmenü oder einem Ladebildschirm auf dem Bildschirm.**
- *Ursache:* Der Gastgeber zeichnet weiterhin das zuletzt hochgeladene Bild, wenn der Gast aufhört zu senden.
- *Gefunden in:* Der Autor des Minecraft × GTA V-Beispiels hat dies in der Demo umgangen; Der Fix wurde nicht erstellt. NewVegasCraft verbirgt die Gastebene, während Hostmenüs geöffnet sind.
- *Fehlerbehebung bei der Aufforderung:* Host-Menüs erkennen, Compositing beenden und Bilder löschen, die älter als ein festgelegtes Alter sind.

**Zerrissene oder gemischte Bilder, flackernde Schichten.**
- *Übliche Ursache:* Der Leser hat einen Frame akzeptiert, während der Autor ihn zur Hälfte gelesen hatte.
- *Gefunden in:* Der Frame-Sequenzzähler der Monster Hunter-Brücke wird im Gegensatz zu seinem Kommentar nicht seltsam, wenn ein Schreibvorgang beginnt. Die Version Elden Ring tut dies. (**Hypothese** zu einem sichtbaren Fehler: Niemand hat gezeigt, dass er einen verursacht.)
- *Überprüfen:* Bitten Sie den Agenten zu überprüfen, ob Ihr „Seqlock“ beim Schreiben wirklich seltsam ist, auch wenn er fertig ist, und dass der Leser ihn vor und nach dem Kopieren überprüft.

**Ruckeln, das mit zunehmender Auflösung schlimmer wird.**
- *Übliche Ursache:* Hochladen von Gastbildern über eine Staging-Textur in jedem Frame.
- *Gefunden in:* NewVegasCraft meldet 18,7 ms → etwa 5 ms pro Gast-Upload nach dem Wechsel zu dynamischen Texturen. [OWCraft](https://github.com/Yaekai/OWCraft) meldet, dass Minecraft von 25 auf 60 fps ansteigt, nachdem die Darstellung des versteckten Fensters übersprungen wurde.

## Bewegung, Uhren und Autorität

**Die Bewegung sieht aus wie Schritte oder Zittern.**
- *Übliche Ursache:* Senden der rohen 20-Tick-Position anstelle der interpolierten Renderposition.
- *Gefunden in:* SkyCraft sendet frühere und aktuelle Physikpositionen mit einem Zeitstempel und lässt Skyrim auf seiner eigenen Uhr interpolieren. LibertyCraft interpoliert einen kurzen Tick-Verlauf mit einer adaptiven Verzögerung und hält, wenn Ticks fehlen.

**Der Spieler wird geschleudert oder teleportiert, wenn er ein neues Gebiet betritt.**
- *Übliche Ursache:* Der Gast kam vor der Host-Kollision für diesen Bereich an.
- *Gefunden in:* frühes [ValCraft](https://github.com/LoAlCo/ValCraft) priorisiert Host-Regionen in der Bewegungsrichtung, hält den Gast an seiner letzten Position, während er seinen Schwung beibehält, und macht die Host-Marionette kinematisch, sodass die Host-Physik sie nicht schleudern kann. Nach einer Zeitüberschreitung von zwei Sekunden kann die Bewegung dann trotzdem fortgesetzt werden, sodass das Problem dadurch verringert und nicht beseitigt wird.

**Zwischensequenzen, Fahrzeuge oder geskriptete Eröffnungen bleiben hängen.**
- *Übliche Ursache:* Der Gast besitzt die Bewegung, wenn das Skript des Hosts dies erwartet.
- *Gefunden in:* SkyCraft gibt die Kontrolle für Möbel, Reittiere und Kill-Moves an Skyrim zurück. LibertyCraft übergibt die Kontrolle für Missionen, Zwischensequenzen und Autos an GTA und synchronisiert den Gast dann erneut mit einem Teleport-Handshake. Die Notizen von SkyCraft warnen davor, dass die Öffnung des Helgen-Wagens stecken bleiben kann, und schlagen einen alternativen Start oder einen Speichervorgang nach Helgen vor.
- *Regel:* Entscheiden Sie für jedes Hostsystem, das Sie nicht überbrücken, wie die Kontrolle zurückgegeben wird und wie sie zurückgegeben wird.

**Zwei Personen oder Programme streiten sich um dieselbe Einstellung.**
- *Gefunden in:* NewVegasCraft stellt das „Kampf deaktiviert“-Flag des Hosts nur dann wieder her, wenn es derjenige war, der es gesetzt hat. Damit ist es immer noch nicht möglich, dass ein anderer Mod später dasselbe Flag ändert.

## Kollision

**Host-NPCs gehen durch Gästeblöcke, aber Sie können nicht durch Host-Wände gehen.**
- *Ursache:* Kollision hat eine Richtung. Durch das Senden der Hostgeometrie an den Gast werden keine Gastblöcke an den Host gesendet.
- *Gefunden in:* NewVegasCraft probiert Host-Gelände in Gastbarrieren aus, aber Host-Akteure passieren Gastblöcke. [FalloutCraft](https://github.com/zeyvu/FalloutCraft) verwandelt Gast-Festblöcke in native Havok-Boxen für Builds, und seine NPCs kollidieren mit ihnen, bewegen sich aber nicht um sie herum. Physisches Blockieren und KI-Navigation sind getrennte Aufgaben.

**Barrieren bleiben zurück, nachdem sich eine Tür oder ein Fahrzeug bewegt.**
- *Übliche Ursache:* zwischengespeicherte Kollisionsspalten werden für das Verschieben von Geometrie nicht aktualisiert.
- *Gefunden in:* Die zwischengespeicherten Spalten von NewVegasCraft bleiben bis zum Zurücksetzen erhalten. Die Half-Life-Brücke markiert die alten und neuen Bereiche eines sich bewegenden Pinsels als verschmutzt, löscht Aktualisierungen jedoch nur, wenn ihr Worker inaktiv ist.

**Blöcke werden in Felsen oder Schildern platziert.**
- *Gefunden in:* NewVegasCraft baute zunächst eine zweischichtige Barrierehaut und wechselte dann zu festen Säulen vom Gelände bis zur höchsten Oberfläche (begrenzt auf etwa 24 Blöcke), die auch Bögen und Überhänge füllten.

**Kollisionsneuaufbauten bringen das Spiel zum Stillstand.**
- *In einigen Projekten zu sehen:* Autos in der Nähe beobachten, nur dann neu aufbauen, wenn sie sich ausreichend bewegt haben, Neuaufbauten auf einmal pro Sekunde beschränken und identische Dreiecksstapel per Hash überspringen.

**„Genaue Kollision“ ist nicht genau.**
- SkyCraft behält die ursprünglichen Dreiecke für den lokalen Spieler bei, verwandelt jedoch Kapseln und Kugeln in Kästchen, nicht unterstützte Formen in Begrenzungsrahmen und überspringt einige unbekannte Formen. Benennen Sie die Darstellung, wenn Sie „exakt“ schreiben.

## Kampf, Schaden und Entitäten

**Die Schadenszahlen schwanken stark.**
- *Übliche Ursache:* Die beiden Spiele verwenden unterschiedliche Gesundheitsskalen und die Brücke sagt nicht welche.
- *Gefunden in:* Die Half-Life-Brücke ordnet die 20 Punkte von Minecraft den 100 (×5) von Half-Life zu. Die Monster Hunter-Brücke sendet native HP; Die Elden Ring-Brücke sendet Minecraft Schaden und wandelt ihn in Höhe der maximalen HP des Ziels um. Geben Sie die Einheit in die Nachricht ein.

**Explosionen oder Treffer zählen doppelt.**
- *Gefunden in:* Das Minecraft × GTA V-Beispiel merkt sich eine halbe Sekunde lang aktuelle Explosionspositionen, um Doppelzählungen zu vermeiden, und verhindert, dass Spielerprojektile die Ersatz-Proxys treffen.

**Ein Treffer landet beim falschen Feind, nachdem einer gestorben ist.**
- *Mögliche Ursache:* Die Bridge verweist über einen Index auf Entitäten, der wiederverwendet wird.
- *Gefunden in:* Die Entitätsindizes der Half-Life-Brücke haben kein Generierungs-Tag (**Hypothese**: Ein verzögertes Ereignis könnte eine recycelte Entität treffen). Aus diesem Grund fügt die Monster Hunter-Brücke den Gefahren-IDs eine Seriennummer hinzu.

## Laden, Timing und andere Mods

**Ihr Plugin wird nie oder erst nach dem Code geladen, den es einbinden muss.**
- *Übliche Ursache:* Die Loader-DLL wird beim Start zu spät geladen.
- *Gefunden in:* [PipeLink](https://github.com/Sm1jjj/PipeLinkLauncher) hat festgestellt, dass \`dinput8.dll\` für den Mod-Loader von GTA San Andreas und sein eigenes Plugin zu spät geladen wurde. Es installierte denselben Loader unter dem Namen einer DLL, die das Spiel beim Start importiert (wobei das Original unter einem neuen Namen behielt), wodurch die Reihenfolge festgelegt wurde.

**Das Spiel auf der Festplatte besteht Ihre Prüfungen, aber der Code im Speicher ist anders.**
- *Übliche Ursache:* Mit Steam umschlossene ausführbare Dateien werden im Speicher entschlüsselt, sodass die Datei auf der Festplatte nicht den echten Code anzeigt.
- *Gefunden in:* [BullySkate](https://github.com/Faiqie/BullySkate) startet Bully bis Steam und überprüft dann 203 Code-Fingerabdrücke und 19 Datenspeicherorte im laufenden Spiel, bevor irgendwelche Hooks installiert werden. [Touhou HFR](https://github.com/vittorioromeo/th12_hfr) erfordert außerdem den Start von Steam-Versionen bis Steam.

**Zwei Mods streiten sich um denselben Frame oder Hook.**
- *Gefunden in:* Touhou HFR und ein beliebter Rotations-Wrapper teilen den Job auf: Der Wrapper besitzt Renderziele, Rotation und Präsentation; HFR besitzt Timing, Eingabe und Wiedergabe und schaltet seine eigene konkurrierende Skalierung aus. HFR übernimmt auch seine Grafik-Hooks erneut, nachdem ein Übersetzungspatch geladen wurde, und verkettet sie dann, da der andere Patch sie stillschweigend ersetzt hat.
- *Regel:* Notieren Sie, welcher Mod das Bild, die Uhr und den Eingang besitzt, und testen Sie die von Ihnen dokumentierte Kombination.

**Eine Erhöhung der Aktualisierungsrate verändert das Spiel.**
- *Gefunden in:* Touhou HFR führt Spielerbewegungen, Kugeln und Kollisionen in kleineren Schritten als den ursprünglichen 60 pro Sekunde durch. In den eigenen Dokumenten heißt es, dass sich dadurch Treffer, Grazes und Punkte ändern können, sodass Runs nicht mit Standard-Bestenlisten vergleichbar sind. Bei Wiederholungen müssen die zusätzlichen Eingaben aufgezeichnet werden, und in einer Version wurde fälschlicherweise behauptet, dass die Optionen während der Wiederholungen ausgeschaltet seien.
- *Regel:* Wenn Sie das Timing ändern, sagen Sie, was nicht mehr mit dem Original vergleichbar ist.

**Ein umgebauter Gast bleibt stehen und Sie verlieren Tastendrücke.**
- *Gefunden in:* Der Physik-Worker von BullySkate führt Eingaben in der Warteschlange zusammen und begrenzt die Zeit, die er aufholt, sodass bei einem langen Stillstand ein Tastenübergang verloren gehen kann. Sein Sound-Worker schaltet sich nach 250 ms ohne neuen Status stumm, anstatt sich zu wiederholen.

**Controller funktionieren in einem Spiel und nicht im anderen.**
- *Gefunden in:* [SkateGM](https://github.com/the-schwilliam/SkateGM) ordnet PlayStation, Switch und generische Pads der Xbox-ähnlichen Eingabe zu, die die neu erstellte Skate-Engine bereits erwartet, und wählt dann die Tastenbeschriftungen separat aus. Jedes angeschlossene Xbox-Pad hat weiterhin Priorität, sodass „zuletzt verwendeter Controller“ nur innerhalb jeder Art gilt.

**Automatisierte Tests bewegen die Kamera wild oder gar nicht.**
- *Gefunden in:* [HL2-RS](https://github.com/kvalls/hl2-rs) synthetische Windows-Eingaben haben keine reine Mausbewegung und absolute Mauskoordinaten können wie riesige relative Bewegungen aussehen. Echtes Spiel und automatisiertes Spiel können unterschiedliche Eingabepfade nutzen; teste beides.

**Grafiken brechen ab, nachdem ein anderer Renderer gezeichnet hat.**
– *Gefunden in:* HL2-RS legt Tiefentests und Tiefenschreiben getrennt fest und aktiviert Tiefenschreibvorgänge nur zum Löschen wieder, weil eine vorherige Pipeline sie weggelassen hatte. Speichern und stellen Sie jeden Status wieder her, den Sie berühren, wenn Sie einen Renderer freigeben.

## Transport und Lebenszyklus

**Das Spiel stockt, wenn die andere Seite langsam ist.**
- *Übliche Ursache:* ein blockierender Sendevorgang im Spielthread.
- *Gefunden in:* NewVegasCrafts erster WebSocket-Client, der synchron aus der Spielschleife gesendet wurde. Der Client von [Signet](https://github.com/kian-cx/signetprotocol) schreibt auf TCP, während er eine Sperre hält, und sein Server sendet, während er den freigegebenen Status beibehält, sodass ein langsamer Leser ihn blockieren kann.

**Ereignisse gehen verloren.**
- *Gefunden in:* Die C-Schnittstelle von Signet verbraucht Ereignisse, selbst wenn Sie sie nur aufrufen, um zu fragen, wie groß der Puffer sein soll. SkyCraft verwirft Eingabeereignisse, wenn sein Ring voll ist. Entscheiden Sie, welche Ereignisse gelöscht werden dürfen, und protokollieren Sie jede Löschung.

**Nach dem Neustart einer Seite geht alles kaputt.**
- *Gefunden in:* SkyCraft und die Half-Life-Brücke verwenden Heartbeats und Prozess-IDs, um Neustarts zu bemerken; LibertyCraft sendet nach einem Neustart die Generationsänderungen erneut. Einige neu erstellte Engine-Projekte können die Gast-Engine neu laden, ohne den Host neu zu starten, die letzte gute Pose wiederherstellen, wenn die Engine ungültige Zahlen erzeugt, und anhalten, wenn Fehler innerhalb weniger Sekunden erneut auftreten.

**Es funktioniert bei Ihnen und nicht nach einem Update.**
- *Übliche Ursache:* Producer- und Consumer-Dateiformate drifteten auseinander.
- *Gefunden in:* Das Kollisionsformat von BullySkate wurde von Segmenten zu Polylinien mit einer Schema-Veränderung geändert, und der Launcher überprüft die Empfangsversion. Versionieren Sie jede Datei, die Ihre Tools generieren.

**Das Installationsprogramm hat das Setup von jemandem kaputt gemacht.**
- *Gefunden in:* Mehrere Installationsprogramme überprüfen bei der Deinstallation nur Dateinamen, überschreiben Konfigurationen oder löschen eine Konfiguration, die sie nicht erstellt haben. Das frühe Installationsprogramm von NewVegasCraft behielt bei der Installation die vorhandenen Einstellungen bei, löschte jedoch beim Entfernen dieselben Pfade. Das Installationsprogramm von BullySkate ist ein deutlicheres Beispiel: Es überprüft genaue Asset-Hashes, speichert zeitgestempelte Backups und lehnt einen unbekannten vorhandenen Loader ab. Dennoch kann keiner dieser Kopierschritte zur Hälfte rückgängig gemacht werden. Bitten Sie den Agenten, genau die Änderungen zu sichern und wiederherzustellen und Versionen oder Hashes anstelle von Namen zu überprüfen.

## Die Debugging-Gewohnheiten, die diese Projekte teilen

1. Erstellen Sie die Debug-Ansichten und die Protokollierung, bevor Sie einem visuellen Fehler nachgehen.
2. Testen Sie den Transport zunächst mit einem Fake-Host oder einem Fake-Gast. LibertyCraft hat Stellvertreter für beide Seiten. Dann testen Sie mit beiden echten Spielen, denn das Bestehen eines gefälschten Tests beweist nicht, dass es sich um ein echtes Spiel handelt.
3. Schreiben Sie jede Theorie auf und entfernen Sie diejenigen, die sich als falsch herausgestellt haben.
4. Sagen Sie, von welcher Maschine, welchem ​​Betriebssystem, welcher GPU und welcher Spielversion das Ergebnis stammt.
5. Bewahren Sie die Spieltestnotizen in einem Protokoll auf. Siehe [\`templates/PLAYTEST-report.md\`](../templates/PLAYTEST-report.md).

---

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/16-ownership-sync-and-rendering.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/16-ownership-sync-and-rendering.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>`,S=`# 17. Die Dekompilierungssystemkarte

**Dies ist ein Referenzdokument, kein Leitfaden.** Es ist absichtlich länger als der Rest dieses Repos. Es dient zum Nachschlagen und nicht zum Durchlesen. Wenn Sie sich also fragen, wo Sie anfangen sollen, lesen Sie stattdessen [Anleitung 3](03-rust-rewrites-and-ports.md) und kehren Sie hierher zurück, wenn Sie an eine Wand stoßen.

Sechsundvierzig Bereiche, in denen jeweils aufgeführt ist, was und warum erarbeitet werden muss. Die Abschnitte behalten ihre ursprüngliche Nummerierung, sodass Sie jemanden auf „Nummer 33“ verweisen können und er das Gleiche findet wie Sie.

Die auf dieser Seite angegebenen Sternzahlen beziehen sich auf Oktober 2026. Sie sollen zeigen, welche Projekte Anklang finden, um nicht genau zu sein, und sie bewegen sich.

Wo ein Anspruch mit einem öffentlichen Projekt verglichen werden konnte, wurde dies getan, und das Projekt wird benannt. Wo es nicht möglich war, steht auf der Seite.

## Was eine Dekompilierung eigentlich ist

Das Ziel besteht darin, das Verhalten des Originalspiels so genau zu reproduzieren, dass Ihr Ersatz die legal erhaltenen Daten des Originals lädt und sich wie das Original verhält.

Zwei verschiedene Jobs werden als „Dekompilieren“ bezeichnet, und ihre Verwechslung kostet Monate:

**Matching-Dekompilierung** rekonstruiert die Quelle, die zu einer byteidentischen Kopie der ursprünglichen Binärdatei kompiliert wird. [zeldaret/oot](https://github.com/zeldaret/oot) (5.562 Sterne) tut dies für Ocarina of Time, und das Projekt gibt klar an, dass es „keine PC-Portierung produziert“. Der Abgleich erfordert den genauen Compiler, die genaue Optimierungsstufe und den ursprünglichen Build-Zeitstempel, da alle drei letztendlich in die Ausgabe integriert werden.

**Neuimplementierung** erstellt eine neue Engine, die die Datendateien des Originals liest und sich ähnlich verhält, ohne die Binärdatei zu reproduzieren. [OpenRCT2](https://github.com/OpenRCT2/OpenRCT2) (16.387 Sterne) und [OpenMW](https://github.com/OpenMW/openmw) (6.606 Sterne) sind beides, ebenso wie [IW4L](12-worked-example-rust-rewrite.md).

Matching ist die schwierigere Disziplin und diejenige mit größerer rechtlicher Gefährdung, da Sie den tatsächlichen Code und nicht sein Verhalten reproduzieren. [Leitfaden 13](13-reverse-engineering-and-the-law.md) deckt diesen Unterschied ab.

Die vierstufige Zusammenfassung, auf der diese Karte basiert:

> **Reverse Engineering findet die Einzelteile.** **Dekompilierung rekonstruiert den Code.** **Reimplementierung baut die Maschine neu auf.** **Überprüfung beweist, dass Sie tatsächlich alles richtig gemacht haben.**

## 1. Ausführbarer Code und Programmcode

Der offensichtliche Teil und immer noch der größte.

Funktionen, Klassen und Strukturen, Globals, Konstanten, Zeiger, virtuelle Tabellen, RTTI, Rückrufe, Zustandsmaschinen, Speicherzuweisung, Threading, Timer, Fehlerbehandlung, Initialisierung, Herunterfahren und die Hauptschleife.

Die Kette, die Sie erklimmen möchten:
\`\`\`
Maschinencode -> Assembly -> Decompiler-Ausgabe -> Benannte Systeme -> Lesbare Quelle -> Verifiziertes Verhalten
\`\`\`

Werkzeuge dafür, ungefähr in der Reihenfolge, in der die Leute nach ihnen greifen: **Ghidra**, **IDA Pro**, Binary Ninja, Radare2 mit Cutter, Capstone für Disassemblierungsbibliotheken, Frida für Instrumentierung, x64dbg und WinDbg unter Windows, gdb an anderer Stelle und rr für die Aufzeichnung der Ausführung, damit ein Absturz wiedergegeben werden kann.

[ghidra-mcp](https://github.com/bethington/ghidra-mcp) (4.708 Sterne, Apache-2.0) und [ida-mcp](https://github.com/HexRaysSA/ida-mcp) stellen diese über einen MCP-Server bereit, sodass ein Agent den Decompiler direkt steuern kann, anstatt die Disassemblierung in ein Chatfenster einzufügen. Beide werden in [Leitfaden 3](03-rust-rewrites-and-ports.md#when-you-do-need-it) behandelt.

## 2. Motorkern

Die Maschinerie, auf der der Rest sitzt.
\`\`\`
Hauptschleife
├── Timing
├── Jobs und Threads
├── Erinnerung
├── Veranstaltungen
├── Objektsystem
├── Ressourcenmanager
├── Szenenmanager
├── Dateisystem
└── Plattformschicht
\`\`\`

Und die Reihenfolge pro Frame:
\`\`\`
Eingabe -> Simulation -> Physik -> KI -> Animation -> Rendering -> Audio -> Aktueller Frame
\`\`\`

Wenn Sie diese Reihenfolge richtig einhalten, erfahren Sie, wo Sie nach einem Fehler suchen müssen. Ein Kameraproblem liegt nicht im Eingabecode.

## 3. Asset-System

Eine Dekompilierung, die die Dateien des Spiels nicht lesen kann, nützt nicht viel.

Erarbeiten Sie die Archive, Paketdateien, Komprimierung, Serialisierung, Ressourcen-IDs, Asset-Suche, Abhängigkeitstabellen, Streaming und Caching.
\`\`\`
game.pak
├── textures
├── meshes
├── animations
├── maps
├── sounds
├── scripts
└── configuration
\`\`\`

Die Unterscheidung sollte man sich merken, weil die Leute das am Anfang falsch verstehen:
\`\`\`
Dekompilierer = versteht Code
Asset-Parser = versteht Daten
\`\`\`

Sie benötigen fast immer beides, und es handelt sich um separate Tools. [Leitfaden 3](03-rust-rewrites-and-ports.md) listet die Asset-Tools nach Engine auf.

## 4. Netze und Modelle

So wird Geometrie gespeichert: Scheitelpunkte, Indizes, Normalen, Tangenten, UVs, Scheitelpunktfarben, Unternetze, Materialslots, LODs, Skelettbindungen und Morph-Ziele.
\`\`\`
Netz
├── Vertex-Puffer
├── Indexpuffer
├── Materialien
├── Skelett
├── Kollisionsnetz
└── LOD 0/1/2/3
\`\`\`

Dass das Kollisionsnetz vom sichtbaren Netz getrennt ist, ist der Punkt, und Abschnitt 8 kommt darauf zurück.

## 5. Texturen

Texturformate, Mipmaps, Komprimierung, Texturarrays, Cubemaps und die Normal-, Diffus-, Rauheits-, Metall-, Emissions- und Maskenkarten, die ein modernes Material erwartet.

Alte Spiele speichern ihre eigenen Formate. Diese erreichen nach der Entschlüsselung normalerweise ihren Tiefpunkt in einer kleinen Anzahl bekannter:

| Formatieren | Was es ist |
|---|---|
| BC1, BC2, BC3 | Die S3TC-Blockformate, Direct3D-Namen für DXT1, DXT3 und DXT5 |
| BC4, BC5 | Ein- und zweikanalige Varianten, die übliche Wahl für Normalkarten |
| BC7 | Hochwertigeres RGBA, das späte Mitglied der Familie |
| DDS | Der Container, in dem diese normalerweise ankommen |
| PNG, TGA | Unkomprimiert oder einfach komprimiert, wird von späteren und 2D-lastigen Spielen verwendet |

S3TC, auch DXTn, DXTC oder BCn geschrieben, ist eine Gruppe verlustbehafteter Blockkomprimierungsschemata, die bei S3 Graphics entwickelt wurden und auf der Blockkürzungscodierung aus den 1970er Jahren basieren. Es wurde in DirectX 6.0 und OpenGL 1.3 ausgeliefert, weshalb es in fast allen Geräten dieser Zeit verwendet wurde. Es komprimiert Blöcke mit fester Größe, sodass die GPU einen Block lesen kann, ohne seine Nachbarn zu dekodieren, was der eigentliche Grund für seine Einführung ist.

## 6. Materialien

Materialien geben an, wie ein Netz seine Shader und Texturen verwendet.
\`\`\`
CarPaint.material
├── Shader = VehiclePaint
├── Albedo
├── Normal
├── Metallic
├── Roughness
├── Reflection
└── Parameters
\`\`\`

Um sie zu reproduzieren, benötigen Sie die Materialdefinitionen, Shader-Referenzen, Texturbindungen, Renderzustände, Misch-, Transparenz-, Aussortierungs- und Tiefenregeln. Wenn die Tiefe oder der Culling-Status falsch ist, wird das Netz von innen nach außen oder durch Wände gerendert, was wie ein Geometriefehler aussieht.

## 7. Shader und Rendering

Eines der größten Stücke und das, bei dem passende Dekompilierungsprojekte die meiste Zeit verbringen.

Shader-Stufen: Scheitelpunkt, Fragment oder Pixel, Geometrie, Berechnung und Tessellation.

Der Renderer um sie herum:
\`\`\`
Renderer
├── Kamera
├── Sichtbarkeit
├── Beleuchtung
├── Schatten
├── Materialien
├── Nachbearbeitung
├── Reflexionen
├── Teilchen
├── Abziehbilder
└── Benutzeroberfläche
\`\`\`

Was muss erarbeitet werden: Draw-Aufrufe, Render-Warteschlangen, Render-Passes, Framebuffer-Layout, Shader-Uniformen, GPU-Puffer, Texturbindungen, Beleuchtungsmodelle, Nebel, Schatten, Bloom, Bewegungsunschärfe, Tone Mapping und Anti-Aliasing.

Dann muss sich meist die darunter liegende API ändern, weil das Original auf etwas abzielte, das nicht mehr existiert:
\`\`\`
DirectX 8, DirectX 9, OpenGL, proprietary API  ->  Vulkan, DX12, modern OpenGL, WebGPU
\`\`\`

Dies ist ein gelöstes Problem mit ausgereiften Werkzeugen, und es lohnt sich zu wissen, dass es gelöst ist. [DXVK](https://github.com/doitsujin/dxvk) (18.245 Sterne, Zlib) implementiert D3D8 bis D3D11 auf Vulkan und [vkd3d-proton](https://github.com/HansKristian-Work/vkd3d-proton) (2.995 Sterne) führt D3D12 aus. Beide führen bestehende Windows-Spiele unter Linux unter Wine aus, was genau das Übersetzungsproblem ist, das bereits behandelt wurde.

Zum Kompilieren von Shader aus dem Quellcode ist der DirectX-Shader-Compiler ([DXC](https://github.com/microsoft/DirectXShaderCompiler), 3.659 Sterne) die gepflegte Option für alles, was die Tools der Direct3D-Ära nicht verarbeiten können.

## 8. Kollision

Kollision ist normalerweise nicht die sichtbare Geometrie:
\`\`\`
Sichtbares Netz != Kollisionsnetz
\`\`\`

Primitive Typen: Boxen, Kugeln, Kapseln, konvexe Hüllen, Dreiecksnetze, Höhenfelder, Triggervolumina, Raycasts.

Und die Pipeline, die sie in Kontakt umwandelt: Kollisionsebenen, Kollisionsmasken, breite Phase, schmale Phase, Kontaktgenerierung, Auslöser, Abfragen. Bei einer Dekompilierung, die korrekt gerendert wird und Sie durch Wände gehen lässt, sind in der Regel die Ebenen oder Masken falsch und nicht die Formen.

## 9. Physik

Frühere Kollisionserkennung: Schwerkraft, Geschwindigkeit, Beschleunigung, Reibung, Restitution, starre Körper, Impulse, Einschränkungen, Gelenke, Stoffpuppen, Fahrzeuge, Federung, Auftrieb und Charaktersteuerung.
\`\`\`
Eingabe -> Zeichensteuerung -> Kollisionserkennung -> Physik-Reaktion -> Animation
\`\`\`

Spielspezifische Physik ist wichtiger als es klingt. Ein Kampfspiel, ein Rennspiel und ein Plattformspiel haben hier jeweils völlig unterschiedliche Mengen an Code.

## 10. Skelette und Animation

Knochenhierarchie, Bindeposen, Animationsspuren, Interpolation, Animationsereignisse, Animationsmischung, inverse Kinematik, Wurzelbewegung, Morphs, Gesichtsanimation.
\`\`\`
Leerlauf -> Gehen -> Laufen -> Springen -> Fallen -> Landen
\`\`\`

Dies wird normalerweise von einer Zustandsmaschine und nicht von „Animation X abspielen“ gesteuert. Das Reproduzieren der Zustandsmaschine bedeutet das Reproduzieren des Gameplays; Den richtigen Clip zur falschen Zeit abzuspielen, ist offensichtlich falsch.

## 11. Karten und Weltformat

So werden Ebenen dargestellt:
\`\`\`
Welt
├── Gelände
├── Statische Geometrie
├── Entitäten
├── Spawnpunkte
├── Lichter
├── Auslöser
├── Türen
├── Navigation
├── Audiozonen
├── Wetter
└── Skripte
\`\`\`

Plus Welt-Streaming, Chunks, Sektoren, Portale, Okklusion, LOD und Instanzierung. Abschnitt 28 behandelt Streaming als eigenständiges System, da es sich in der Regel um ein separates System mit eigenen Fehlermodi handelt.

## 12. Gameplay-Code

Der Teil, den die Spieler tatsächlich wahrnehmen: Spieler, Waffen, Fahrzeuge, NPCs, Gegenstände, Inventar, Gesundheit, Schaden, Quests, Missionen, Fortschritt, Wirtschaft, Fähigkeiten, Kampf, Interaktion.

Jedes seltsame kleine Verhalten kann von Bedeutung sein. Eine Aktion ist normalerweise eher eine Kette als eine Funktion:
\`\`\`
Feuerwaffe
├── Überprüfen Sie die Munition
├── Animation abspielen
├── Spawn-Projektil
├── Raycast
├── Schaden anrichten
├── Spawn-Effekt
├── Ton abspielen
└── Alarm-KI
\`\`\`

Wenn ein Link außer Betrieb ist, sieht der Fehler wie ein physikalisches Problem oder ein Audioproblem aus.

## 13. AI

Wahrnehmung, Navigation, Entscheidungsfindung, Kampf, Deckung, Wegfindung, Verhaltensbäume, Zustandsmaschinen. Konkret: Aggro, Sehen, Hören, Patrouillen, Reaktionen, Wegfindung, taktische Logik und geskriptetes Verhalten.

Beachten Sie die Grenze zu Abschnitt 14, die leicht zu übersehen ist und deren Fehler teuer werden können.

## 14. Navigation

Oft ein eigenes riesiges Subsystem: Navmesh, Wegpunkte, Pfaddiagramme, A*, Hindernisvermeidung, Sprungverbindungen, Türen, Leitern und Fahrzeuge als navigierbare Einheiten.

Der Satz, der in diesem Abschnitt am wichtigsten ist:

> KI kann perfekt rekonstruiert werden und sieht bei falscher Navigation immer noch kaputt aus.

Nichts in diesem Repo befasst sich mit der Navigation, was eine erwähnenswerte Lücke darstellt.

## 15. Audio

Tonarchive, Codecs, Musik, Dialoge, Soundeffekte, Positionsaudio, Dämpfung, Umgebungszonen, Hall, Mischung, Prioritäten.

Ein Ton ist eine Grafik, kein Beispiel:
\`\`\`
Schuss
├── Trockenprobe
├── Entfernungsabfall
├── Innenhall
├── Okklusion
└── KI-Hörereignis
\`\`\`

Der letzte Punkt ist, warum sich Audio-Reverse-Engineering mit KI überschneidet. Anhand von Hörereignissen erkennt das Spiel, dass etwas passiert ist.

## 16. Eingabe

Mehr als nur Schlüsselcodes.
\`\`\`
Tastatur, Maus, Controller, Touch, VR, Force-Feedback
\`\`\`

Bindungen, tote Zonen, Empfindlichkeit, analoge Kurven, Aktionszuordnung, kontextsensitive Steuerungen.
\`\`\`
Button A -> "Jump" -> PlayerController::Jump()
\`\`\`

Der Schritt von der physischen Schaltfläche zur benannten Aktion ist eine Nachschlagetabelle, und ihre korrekte Reproduktion sorgt dafür, dass sich ein neu erstelltes Spiel reaktionsfähig anfühlt und nicht nur funktioniert. [Leitfaden 16](16-ownership-sync-and-rendering.md) behandelt, wem der Spieler gehört, was die nächste Frage ist.

## 17. Benutzeroberfläche und HUD

Menüs, HUD, Schriftarten, Sprites, Widgets, Layouts, Inventarbildschirme, Pausenmenü, Karte, Untertitel, Benachrichtigungen sowie der Code, der die Benutzeroberfläche mit dem Spielstatus verbindet. Im letzten Teil liegt die Arbeit; Das Layout ist die einfache Hälfte.

## 18. Skriptsystem

Viele Spiele verbergen einen großen Teil des Gameplays außerhalb der nativen ausführbaren Datei. Lua, Python, AngelScript, JavaScript, UnrealScript, benutzerdefinierter Bytecode oder eine proprietäre VM.
\`\`\`
Skriptlader
VM
Opcodes
Native Bindungen
Veranstaltungen
Serialisierung
Debuggen
\`\`\`

Die Missionslogik eines Spiels kann hier fast vollständig zum Ausdruck kommen. Wenn bei einer Dekompilierung scheinbar ganze Funktionen fehlen, prüfen Sie, ob das Original diese überhaupt jemals in der ausführbaren Datei hatte, bevor Sie eine Woche damit verbringen, nach Code zu suchen, der nicht vorhanden ist.

## 19. Spiele speichern

Speicherformat, Serialisierung, Objekt-IDs, Versionen, Prüfpunkte, Fortschritt, Konfiguration. Das Ziel:
\`\`\`
Ursprünglicher Speicher -> Neue Engine -> Gleicher Spielstand
\`\`\`

Die Versionierung ist der Teil, der beißt. Ein Format, das eine eigene Versionsnummer trägt, sagt Ihnen, wie die ursprünglich behandelten Felder angezeigt und ausgeblendet werden.

## 20. Netzwerken

Für ein Multiplayer-Spiel kann dies praktisch ein weiteres Projekt werden: Sockets, Pakete, Replikation, Vorhersage, Interpolation, Authentifizierung, Lobby, Matchmaking, Serverbrowser, dedizierter Server, Voice-Chat. Plus Paketstrukturen, Nachrichten-IDs, Statussynchronisierung, Tick-Raten, maßgebliche Logik und Latenzkompensation.

Dieser Abschnitt dient der Vollständigkeit und ist **außerhalb des Geltungsbereichs für alles, was Sie aus diesem Repo erstellen.** [Leitfaden 6](06-rules-legal-and-publishing.md) schließt das Online-Spielen vollständig aus und nichts hier sollte als Ausnahme gelesen werden. Das Rekonstruieren des Protokolls eines Spiels für die eigene Offline-Nutzung ist etwas anderes als das Versenden einer Multiplayer-Modifikation. Wenn Sie über dieses Projekt nachdenken, halten Sie inne und lesen Sie zuerst Anleitung 6.

## 21. Original-Entwicklungstools

Das ausgelieferte Spiel ist nur ein Teil dessen, was die Entwickler darauf aufgebaut haben. Studios verfügten über Level-Editoren, Modellkonverter, Texturkonverter, Animationsexporteure, Shader-Compiler, Skript-Compiler, Packager, Lokalisierungstools, Build-Systeme und Debug-Konsolen.

Durch die Neuerstellung kann ein Quellport erheblich verbessert werden. Wenn das Spiel mit einem offiziellen Toolkit geliefert wurde, ist das ein besserer Ausgangspunkt als ein Dekompiler, und [Anleitung 3](03-rust-rewrites-and-ports.md) listet einige auf.

## 22. Pipeline erstellen

Finden Sie heraus, wie Rohressourcen zu spielbereiten Daten wurden.
\`\`\`
Blender oder Maya -> Exporter -> Mesh-Compiler -> Game Mesh
Photoshop -> Textur-Compiler -> Spieltextur
\`\`\`

und die moderne Version derselben Pipeline:
\`\`\`
Blender -> Offene Formate -> Konvertierungstools -> Spiellaufzeit
\`\`\`

Die passende Dekompilierung macht dies auf eine Weise konkret, die die meisten Menschen nicht erwarten. [zeldaret/oot](https://github.com/zeldaret/oot) liefert ein \`spec/\`-Verzeichnis, \`linker_scripts/\` und ein \`docs/libu64.md\`, das den Build beschreibt, plus \`docs/compilers.md\`, das den genauen erforderlichen Compiler aufzeichnet, und eine Tabelle jedes regionalen Einzelhandels-Builds mit seinem Build-Zeitstempel und MD5. Das Reproduzieren einer Binärdatei aus dem Jahr 1998 im Jahr 2026 bedeutet, die ursprüngliche Toolchain abzugleichen, nicht eine aktuelle.

## 23. Plattformschicht

Alte Spiele kommunizieren direkt mit APIs, die nicht mehr existieren. Win32, DirectInput, DirectSound, Direct3D, OpenGL und alte Konsolen-SDK-APIs müssen alle ersetzt werden.
\`\`\`
Original-Engine -> Plattformabstraktion -> Windows / Linux / macOS
\`\`\`

Dies ist die Ebene, die einen Port plattformübergreifend macht, und [Leitfaden 3](03-rust-rewrites-and-ports.md) erklärt, warum Rust-Umschreibungen in diesem Repo dazu neigen, plattformübergreifend zu sein, während Passthrough-Mods dies nicht tun.

## 24. Threading und Jobsystem

Spätere Engines enthalten einen Render-Thread, einen Physik-Thread, einen Streaming-Thread, einen Audio-Thread, einen Worker-Pool und asynchrone E/A.

An dieser Stelle muss die Warnung wiederholt werden: Falsches Timing im Jobsystem führt zu Fehlern, die anscheinend überhaupt nichts damit zu tun haben.

## 25. Mathe

Ja, mathematisches Verhalten kann wichtig sein.

Vektoren, Matrizen, Quaternionen, Transformationen, Festkomma, Gleitkommaverhalten, Zufallszahlengenerierung, Interpolation.

Und wo sich winzige Unterschiede zeigen:
\`\`\`
Physik
KI
Wiederholungen
Vernetzung
Speedruns
\`\`\`

Gleitkomma ist derjenige, der Menschen fängt. Alter Code, der für x87 oder für eine andere Optimierungsstufe erstellt wurde, führt in einem modernen Compiler nicht zu identischen Ergebnissen, und die Abweichung verstärkt sich mit der Zeit. Passende Projekte lösen dieses Problem, indem sie den Compiler präzise fixieren.

## 26. Zufallszahlengenerierung

Spiele basieren häufig auf deterministischem RNG. Sie benötigen den Algorithmus, den Seed, die Update-Reihenfolge und die Aufrufreihenfolge.

Ansonsten:
\`\`\`
Gleiches Speichern! = Gleiches Verhalten
\`\`\`

Alles, was prozedural ist und alles, was das Original aus einem Zufallswert berechnet, wird abweichen. Abschnitt 42 erklärt, warum dies am schwersten zu bemerken ist.

## 27. Timing

Eine große Quelle von Kompatibilitätsproblemen und der Bereich, der am wahrscheinlichsten von einer Neuimplementierung betroffen sein wird.
\`\`\`
Spieltick
Physik-Tick
Render-Häkchen
Timing der Animation
Rahmenbegrenzer
Delta-Zeit
Fester Zeitschritt
\`\`\`

Der klassische Misserfolg:
\`\`\`
Spiel für 30 FPS ausgelegt -> läuft mit 240 FPS -> Physik betritt eine andere Dimension
\`\`\`

Die passende Dekompilierung macht dies konkret. [zeldaret/oot](https://github.com/zeldaret/oot) listet den ursprünglichen Build-Zeitstempel für jede regionale Veröffentlichung auf, vom 21.10.98 für NTSC 1.0 bis zu den GameCube-Revisionen, da der Zeitstempel in die Binärdatei kompiliert wird und eine Änderung die Ausgabe ändert.

Die Zwei-Spiele-Version davon, bei der zwei Prozesse gegen die Frame-Uhren des anderen driften, finden Sie in [Anleitung 9](09-worked-example-passthrough-mod.md#step-5-send-one-value-across).

## 28. Streaming

Große Spiele streamen kontinuierlich Meshes, Texturen, Audio, Gelände, NPCs, Skripte und Animationen.

Um es zu reproduzieren, benötigen Sie den Laderadius, die Priorität, das Speicherbudget, die asynchronen E/A- und Entladeregeln. Wenn die Entladeregeln falsch sind, steigt der Speicher, bis nach mehr als einer Stunde etwas passiert, was ein kläglicher Fehler ist, den man aufspüren kann.

## 29. Beleuchtung

Richtungs-, Punkt- und Spotlichter, gebackene Beleuchtung, Lichtkarten, Sonden, Reflexionen, Schattenkarten, Umgebungsbeleuchtung und HDR.

Beleuchtungsdaten können in den Level-Dateien und nicht separat gespeichert werden. Dies sollten Sie wissen, bevor Sie nach einer dedizierten Asset-Datei suchen, die nicht existiert.

## 30. Effekte

Partikel, Rauch, Feuer, Wasser, Regen, Schnee, Staub, Explosionen, Spuren, Abziehbilder, Blut, Bildschirmeffekte.

Viele Spiele verfügen über Skriptsysteme für benutzerdefinierte Effekte, sodass die Partikel normalerweise datengesteuert sind und das System selbst kleiner ist, als die Effektliste vermuten lässt.

## 31. Wasser, Gelände und Umwelt

Manchmal handelt es sich dabei um eigenständige Mini-Motoren.
\`\`\`
Geländewasser
├── Höhenkarte ├── Wellen
├── Splat-Karten ├── Reflexion
├── Vegetation ├── Brechung
└── LOD ├── Auftrieb
                   └── Unterwasser-Rendering
\`\`\`

Gelände mit Splat-Karten und Vegetation ist oft ein eigenständiges System und kein Teil des Weltformats.

## 32. Fahrzeuge

Ein Fahrzeugsystem kann Motor, Getriebe, Drehmoment, Federung, Reifen, Lenkung, Schaden, Kollision, Audio, Kamera und KI-Fahrer umfassen.

Rennspiele können hier enorm viel Code ausgeben. Wenn Ihr Spiel über fahrbare Fahrzeuge verfügt, legen Sie ein Budget dafür fest.

## 33. Kamera

Wird oft übersehen und ist der Grund dafür, dass sich ein Spiel falsch anfühlen kann, obwohl alles korrekt ist.

Sichtfeld, Glättung, Kollision, Folgeverhalten, Verwacklung, Zoom, Zwischensequenzen, Übergänge und erste versus dritte Person.

Durch schlechtes Kameraverhalten fühlt sich ein Spiel sofort falsch an, selbst für jemanden, der nicht sagen kann, warum. [Leitfaden 16](16-ownership-sync-and-rendering.md) behandelt die damit verbundene Frage, welches Spiel die Kamera besitzt.

## 34. Zwischensequenzen

Zeitleisten, Kameraspuren, Animation, Dialoge, Musik, Auslöser, Drehbuchereignisse, Untertitel.

Dies kann ein eigenes proprietäres Format haben. In diesem Fall handelt es sich eher um ein Asset-Problem aus Abschnitt 3 als um ein Codeproblem.

## 35. Lokalisierung

String-Tabellen, Schriftarten, Unicode, Sprachen, Untertitel-Timing, regionale Assets und Pluralisierung.

Pluralisierung ist diejenige, die Neuimplementierungen auffängt, da Englisch zwei Formen hat und die meisten anderen Sprachen mehr haben, sodass eine Nachschlagetabelle, die auf Englisch funktioniert, überall sonst falsch ist. Regionale Assets können auch unterschiedliche Texturen und Modelle pro Region bedeuten, was sich auf Abschnitt 4 und Abschnitt 5 auswirkt.

## 36. Konfiguration
\`\`\`
.ini, .cfg, .xml, .json, binary config, registry values, console variables
\`\`\`

Und darin Grafikeinstellungen, Gameplay-Flags, Debug-Flags, versteckte Funktionen und Engine-Variablen.

Konsolenvariablen und versteckte Flags sind Orte, an denen sich undokumentiertes Verhalten verbirgt. Wenn ein Spiel etwas tut, das keine Einstellung aufdeckt, steckt das normalerweise hinter einer Flagge, die niemand dokumentiert hat.

## 37. Debug-Systeme

Äußerst wertvoll, wenn Reste übrig bleiben, und einer der besten Orte, um ein Projekt zu starten, an dem noch niemand versucht hat.
\`\`\`
Debug-Konsole
Entwicklermenü
Behauptungen
Protokollierung
Profiler
Betrüger
Debug-Zeichnung
Symbolnamen
Fehlerzeichenfolgen
\`\`\`

Diese können die ursprüngliche Architektur freilegen. Insbesondere Fehlerstrings sind oft der schnellste Weg, den Namen eines internen Systems zu finden, da Entwickler sie zum Lesen geschrieben haben. Debug-Menüs zeigen, welche Subsysteme vorhanden sind und wie sie umgeschaltet werden.

Eine Warnung. In diesem Abschnitt geht es um die Verwendung von verbliebenem Debug-Material als Dokumentation. Es geht nicht um Cheats, und nichts hier sollte als Möglichkeit verstanden werden, sich online einen Vorteil zu verschaffen. [Leitfaden 6](06-rules-legal-and-publishing.md) schließt Anti-Cheat- und Online-Spiele vollständig aus.

## 38. Objekt- und Entitätssystem

Finden Sie heraus, was ein „Ding“ auf der Welt eigentlich ist.

Entweder Komponenten:
\`\`\`
Entität
├── Verwandeln
├── Renderer
├── Physik
├── KI
├── Skript
├── Audio
└── Gameplay-Komponenten
\`\`\`

oder eine Vererbungshierarchie:
\`\`\`
Objekt -> Akteur -> Bauer -> Feind
\`\`\`

Welches das Original verwendet hat, ist wichtig, denn es entscheidet darüber, wie man etwas Neues hinzufügt. Wenn man das falsch macht, muss man für den Rest des Projekts gegen die Architektur kämpfen. Wenn man es versteht, kann man sich die gesamte Engine erschließen, weshalb dieser Abschnitt trotz der Nummerierung für die meisten Leute am Anfang der Arbeitsreihenfolge steht.

## 39. Ressourcenabhängigkeiten

Ein Asset kann auf Dutzende andere verweisen.
\`\`\`
Feind
├── Netz
├── Skelett
├── Animationen
├── Material
├── Texturen
├── Geräusche
├── KI-Definition
└── Skript
\`\`\`

Sie benötigen also ein funktionierendes Ressourcenabhängigkeitsdiagramm. Ohne eine solche Lösung bedeutet das Laden eines einzelnen Assets, dass man raten muss, was sonst noch geladen werden soll, und die fehlenden Abhängigkeiten findet man durch einen Absturz.

## 40. Verhaltensüberprüfung

Der Dekompiler sagt etwas, **was es nicht richtig macht.**
\`\`\`
Originalspiel vs. Neuimplementierung
\`\`\`

Testen Sie Positionen, Physik, Timing, Schaden, KI, Animation, Rendering, RNG, Eingaben und Spielstände. Automatisieren Sie so viel wie möglich.

Passende Projekte machen daraus einen Build-Breaking-Check. [zeldaret/oot](https://github.com/zeldaret/oot) liefert \`diff.py\` und \`diff_settings.py\`, die das ROM aus der Quelle erstellen und es Byte für Byte mit dem Verkaufsimage vergleichen, mit einer Konfiguration pro Version, die die erwartete Ausgabe und das Basis-ROM zum Vergleich benennt. Es ist kein Vorschlag. Aufgrund einer Nichtübereinstimmung schlägt der Build fehl.

## 41. Rendervergleich

Erfassen Sie den gleichen Frame vom Original und von Ihrem Build und vergleichen Sie dann die Bilder.

Erkennt falsches Sichtfeld, Beleuchtungsfehler, falsch platzierte Netze, Animationsfehler und Shader-Unterschiede. Es ist schneller als das Lesen von Code für alle fünf, da es sich um visuelle Probleme handelt und diese dadurch visuell getestet werden.

## 42. Regressionstestsuite

Jedes Verhalten, das Sie entdecken, sollte zu einem Test werden.
\`\`\`
Sprunghöhe des Spielers = 2,84 m
Pistolenschaden = 20
Tür öffnet nach Auslöser 16
NPC erkennt Spieler in 14,5 m Entfernung
\`\`\`

Dann kann eine spätere Änderung es nicht stillschweigend zerstören.

Eine Warnung vor bestandenen Tests. [Leitfaden 15](15-case-studies-what-each-project-actually-did.md) dokumentiert ein Projekt, das 65 von 65 Prüfungen meldet, bei denen die Tabellenübereinstimmung und unveränderte Datei-Hashes gemessen wurden und nicht, ob sich das Spiel richtig anfühlte, und bei dem die Bildrate die beste aus mehreren Durchläufen und kein Durchschnitt war. Eine Suite, die das Falsche misst, ist schlimmer als keine, weil sie Sie davon abhält, zu suchen.

## 43. Symboldatenbank

Eines der wertvollsten Dinge, die Sie ansammeln, denn wenn Sie es verlieren, zahlen Sie doppelt für die gleiche Arbeit.
\`\`\`
0x00453120 -> Player_Update
0x00454380 -> Player_Jump
0x00581210 -> Physics_Raycast
0x00621280 -> RenderWorld
\`\`\`

Notieren Sie die Adresse, den Funktionsnamen, das Subsystem, Ihr Vertrauen darin, Notizen, Referenzen, Pseudocode und alle Testergebnisse, die dies bestätigen. Das Vertrauensfeld ist das, das die Leute überspringen und sich später wünschen, es zu haben.

In der Praxis handelt es sich hierbei um eine Datei, nicht um eine Datenbank. [zeldaret/oot](https://github.com/zeldaret/oot) behält \`undefined_syms.txt\` bei der Zuordnung von Adressen zu Namen bei, sobald sie entdeckt werden, zusammen mit \`sym_info.py\`, und sein Dokumentationsleitfaden fordert Mitwirkende auf, Funktionen im eigenen Stil des Originals zu benennen, sodass sich der Code wie das Spiel liest, aus dem er stammt.

**Wobei die Regeln dieses Repos abweichen.** Diese Adressen sind Offsets in eine Einzelhandelsbinärdatei. [Leitfaden 6](06-rules-legal-and-publishing.md) besagt, dass man sie aus dem veröffentlichten Code heraushalten soll, da eine hartcodierte Einzelhandelsadresse in Ihrem eigenen Build nichts bewirkt und angibt, woher der Code stammt, und [IW4L](12-worked-example-rust-rewrite.md) erzwingt dies mit einer automatischen Prüfung, die den verfolgten Baum durchsucht. Behalten Sie die Symboldatenbank lokal und außerhalb des Repositorys. Die Begründung ist dieselbe wie beim Heraushalten von Spieledateien: Es handelt sich um Forschungsmaterial, nicht um Quellen.

## 44. Wissensdatenbank

Lassen Sie nicht jeden Menschen das Gleiche wiederentdecken.
\`\`\`
/wiki  /functions  /formats  /assets  /shaders  /maps  /physics  /network  /tests
\`\`\`

Agenten können dies auch abfragen, was das praktische Argument dafür ist, es in Dateien und nicht im Kopf von jemandem aufzubewahren.

[zeldaret/oot](https://github.com/zeldaret/oot) ist ein gutes Modell: ein \`docs/\`-Verzeichnis mit einem Dekompilierungs-Tutorial, einem Dokumentations-Styleguide, Compiler-Hinweisen, Verkaufsversionstabellen und einem \`Doxyfile\`, der Referenzdokumentation aus den Quellkommentaren generiert. Der Fortschritt wird auf einer öffentlichen Website veröffentlicht, sodass der Status des Projekts sichtbar ist, ohne das Repository lesen zu müssen.

## 45. KI-gestützte Pipeline

Die sequentielle Version:
\`\`\`
Binär
  -> Ghidra oder Binärer Ninja
  -> Funktionserkennung
  -> Symboldatenbank
  -> KI-Analyse
  -> Quellenrekonstruktion
  -> Kompilieren
  -> Tests
  -> Vergleichen Sie mit dem Original
  -> Reparieren
  -> Wiederholen
\`\`\`

Das parallele Betreiben mehrerer Agenten, einer pro Subsystem, die alle eine gemeinsame Wissensdatenbank versorgen, ist eine natürliche Idee und dieses Repo hat keine Beweise dafür, dass es funktioniert. Bei abgeschlossenen Projekten arbeitet stattdessen ein Agent durch viele Runden. Nehmen Sie die sequentielle Pipeline als nützlichen Teil. [Leitfaden 13](13-reverse-engineering-and-the-law.md#doing-this-with-an-agent) erklärt, warum ein Agent, der die dekompilierte Ausgabe gelesen hat, strukturell ein schmutziger Raum ist und was die Aufteilung der Spezifikation von der Implementierung auf zwei Sitzungen bewirkt.

## 46. Ein sinnvolles Projektlayout

Was aus einem rekonstruierten Projekt tendenziell wird:
\`\`\`
/game
├── core/       ├── engine/     ├── renderer/  ├── physics/
├── collision/  ├── audio/      ├── animation/ ├── ai/
├── gameplay/   ├── networking/ ├── scripting/ ├── platform/
├── ui/         ├── world/      ├── assets/    ├── formats/
├── tools/      ├── tests/      └── docs/
\`\`\`

Nichts hier ist eine Regel. Es ist die Form, die Assets und Formate vom Engine-Code trennt. Diese Trennung verhindert, dass das Projekt zu einer großen, wirren Kiste wird.

## Was „erledigt“ eigentlich bedeutet

Nicht „der Dekompiler hat eine Ausgabe erzeugt.“

Eher so:
\`\`\`
Ausführbares Verhalten verstanden
Funktionen identifiziert
Motorarchitektur rekonstruiert
Asset-Formate verstanden
Netze werden korrekt geladen
Texturen werden korrekt geladen
Materialarbeit
Shader neu erstellt
Kollisionsspiele
Physikspiele
Animationsspiele
Audio funktioniert
Karten werden geladen
Skripte werden ausgeführt
KI verhält sich korrekt
Spielsysteme stimmen überein
Spart Arbeit
Vernetzung funktioniert
Die Benutzeroberfläche funktioniert
Timing-Matches
RNG-Matches
Plattform-APIs ersetzt
Werkzeuge umgebaut
Regressionstests bestehen
Gegenüber dem Original verifiziertes Verhalten
\`\`\`

Das ist eine lange Liste, und es kommt darauf an, sie zu lesen. Aus diesem Grund ist eine Reduzierung des Scorings besser als eine schnellere Arbeit: Eine Neufassung, die die Assets des Originals lädt und ein Level ordnungsgemäß ausführt, ist mehr wert als eine Neufassung, die alles beansprucht und desynchronisiert.

## Credits und Quellen

**Geschrieben von [solarfren69420](https://github.com/solarfren69420)**, einem Mitglied des Discord, der ein Spiel auf dieses Level zerlegt und diese Karte geschrieben hat, damit andere Leute die Form des Jobs sehen können. Sechsundvierzig Bereiche, die in der ursprünglichen Nummerierung beibehalten wurden, sodass auf die Abschnitte anhand ihrer Nummer Bezug genommen werden kann.

Das meiste, was hier ist, gehört ihnen. Die Ergänzungen, die bei der Anpassung für dieses Repo vorgenommen wurden, waren die unten zitierte Recherche, die Hinweise zu den Abweichungen in den Regeln dieses Repos und die Neuformulierung in einfachem Englisch.

Sie unterhalten außerdem **[GameDecompLibrary](https://github.com/solarfren69420/GameDecompLibrary)**, einen Katalog von 304 Dekompilierungsprojekten, Tools und Quellversionen, mit einem veröffentlichten Genauigkeitsbericht und einem Quelllink hinter jeder zitierten Zahl. Wenn Sie gerade dabei sind, etwas zu beginnen, können Sie hier prüfen, ob es bereits existiert.

Anhand öffentlicher Projekte überprüfte Ansprüche, mit Links in den Abschnitten, in denen sie erscheinen:

- [zeldaret/oot](https://github.com/zeldaret/oot), [botw](https://github.com/zeldaret/botw), [tp](https://github.com/zeldaret/tp) und [mm](https://github.com/zeldaret/mm), die passenden Dekompilierungsprojekte
- [DXVK](https://github.com/doitsujin/dxvk) und [vkd3d-proton](https://github.com/HansKristian-Work/vkd3d-proton) für die API-Übersetzung
– [DirectX Shader Compiler](https://github.com/microsoft/DirectXShaderCompiler) für die Shader-Kompilierung
- [OpenRCT2](https://github.com/OpenRCT2/OpenRCT2) und [OpenMW](https://github.com/OpenMW/openmw) als Neuimplementierungen
- [ghidra-mcp](https://github.com/bethington/ghidra-mcp) und [ida-mcp](https://github.com/HexRaysSA/ida-mcp) für agentengesteuerte Dekompilierung
- S3TC und BCn aus der S3 Graphics-Blockkomprimierungsfamilie, die in DirectX 6.0 und OpenGL 1.3 enthalten ist

Zwei Dinge kann Ihnen diese Seite nicht sagen. Die Abschnitte 12 bis 17, 21, 22, 28 bis 36 und 38 beziehen sich auf die Praxis und nicht auf ein bestimmtes Projekt. Behandeln Sie sie daher eher als eine Karte dessen, worum es in der Regel geht, denn als eine Spezifikation. Und die Zahlen in Abschnitt 42 dienen der Veranschaulichung und werden nicht anhand eines Spiels gemessen.

Wenn Sie eine Dekompilierung durchgeführt haben und diese korrigieren oder erweitern möchten, [öffnen Sie ein Problem](https://github.com/trevaintdead/ai-game-modding-guides/issues/new). Navigation, Audio, Zwischensequenzen und Lokalisierung sind die Bereiche, die in diesem Repo am wenigsten vertreten sind, und ein Kommentar von jemandem, der sich damit beschäftigt hat, wäre willkommen.

---

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/17-decompile-system-map.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/17-decompile-system-map.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>`;export{S as _,f as a,b,m as c,c as d,g as e,h as f,o as g,u as h,l as i,d as j,a as k,s as l,r as m,t as n,i as o,n as p,e as q};
