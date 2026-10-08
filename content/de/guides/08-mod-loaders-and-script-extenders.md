# 8. Mod Loader und Script Extender (Referenz)

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

Die Bethesda-Skript-Extender stammen von `afkmods.com`, und die Silverlock.org-Links oben sind das, worauf SkyCraft und FalloutCraft die Leute hinweisen.

**Lesen Sie dies, bevor Sie me3 verwenden.** Das Projekt verfügt über eine schriftliche Richtlinie, die jegliche LLM-Nutzung im Code, im Issue-Tracker, in den Diskussionen und im Discord des Projekts untersagt. Sie können das Tool verwenden, aber Sie können keinen vom Agenten geschriebenen Fehlerbericht einreichen, in seinen Kanälen um Hilfe bitten oder vom Agenten geschriebenen Code beisteuern. Das ist die Forderung der Betreuer und von außen nicht verhandelbar. Planen Sie, das Debuggen selbst durchzuführen, und holen Sie sich Ihr Verständnis anhand der Dokumentation und nicht anhand des Issue-Trackers.

Wenn das Sie ausschließt, ist der Fallback gering. [EldenRingModLoader](https://github.com/techiew/EldenRingModLoader) ist immer noch da und lädt DLL-Mods, aber sein letzter Push war August 2024. [elden-proton](https://github.com/Cloudef/elden-proton) läuft Elden Ring unter Linux und verstummte im Mai 2025. Für Dark Souls III, Sekiro und Armored Core VI gibt es keine gepflegte Alternative, die es wert wäre, hier genannt zu werden, daher ist bei diesen Titeln die Asset-Bearbeitung der realistische Weg oder ein Umschreiben statt eines Loaders.

me3 ist der Nachfolger der Mod Engine 2, die eingestellt wird. Es ist in Rust geschrieben und deckt alle fünf oben genannten FromSoftware-Titel mit einer Installation ab. Daher lohnt es sich, es als Projekt zu lesen, auch wenn Sie es nie ausführen.

Der Schwierigkeitsgrad wird aus einem bestimmten Grund als Schwer eingestuft. Ein Mod ist eine native DLL plus optional Ersatz-Asset-Dateien, und eine `.me3`-Profildatei gibt an, wo sie zu finden sind. Es gibt keine Skriptebene, also gibt es nichts, wogegen man ein paar Zeilen schreiben könnte: Sie erstellen eine kompilierte Binärdatei, die an ein Spiel ohne öffentliche API angehängt wird. Das Framework selbst ist gut dokumentiert und das Profilformat ist einfaches TOML, das Sie generieren können, aber die Mod-Seite ist native Arbeit an einem Closed-Source-Spiel.

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
- **ASI-Loader**: das Kleinstmögliche, das `.asi` DLLs aus einem Ordner lädt und nichts anderes tut. Mit dem Plugin-sdk erhalten Sie darüber hinaus ein echtes SDK.
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

Bevor Sie sich zu etwas davon verpflichten, prüfen Sie, ob es bereits jemand getan hat. Genau dafür gibt es eine Wissensdatenbank mit Feldnotizen: [universal-modder](https://github.com/rehan-remade/universal-modder) liefert eine mit Notizen pro Spiel zu den Versionen, die funktioniert haben, der gewählten Route und den Fallstricken, durchsuchbar mit `um kb search "<game>"`.

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
  - **[NewVegasCraft](https://github.com/Davozh/new-vegascraft)** läuft Fallout: New Vegas unter Proton unter Linux. Für das Setup war ein nativer 32-Bit-`d3dcompiler_47` zum Kompilieren der Shader erforderlich.
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

- **[Ultimate ASI Loader](https://github.com/thirteenAG/Ultimate-ASI-Loader)** ist der Live-ASI-Loader. Es wird als DLL im Spielverzeichnis installiert und ASI-Dateien werden im Stammverzeichnis des Spiels oder in einem `scripts`-, `plugins`- oder `update`-Ordner abgelegt.
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

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/08-mod-loaders-and-script-extenders.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/08-mod-loaders-and-script-extenders.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>