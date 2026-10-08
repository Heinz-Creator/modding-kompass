# 7. FAQ

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
Ja. Das gesamte Gespräch wird in jeder Runde weitergeführt, sodass ein Chat mit 300 Runden pro Runde mehr kostet als ein neuer. Starten Sie einen neuen Chat mit einer [`STATUS-handoff.md`](../templates/STATUS-handoff.md)-Datei, wenn die Dinge länger werden. Siehe [Leitfaden 4](04-prompting-and-workflow.md).

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

- **Verwaltetes .NET** (Terraria, Stardew, Celeste, die meisten Unity-Spiele, die auf Mono basieren): [ILSpy](https://github.com/icsharpcode/ilspy) dekompiliert in lesbares C#. `ilspycmd` bietet Ihnen ein ganzes Projekt, das Sie durchsuchen können.
- **Unity IL2CPP**: [Cpp2IL](https://github.com/SamboyCoding/Cpp2IL) auf `GameAssembly.dll` plus `global-metadata.dat`. Es stellt Typen, Signaturen und Dummy-DLLs für ILSpy wieder her. Zwei wissenswerte Einschränkungen: Die Analyse funktioniert nicht für Unity 2020.2 oder höher und es wird Pseudocode anstelle von echter IL generiert.
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

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/07-faq.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/07-faq.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>