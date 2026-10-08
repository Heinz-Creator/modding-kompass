# 15. Fallstudien: Was jedes Projekt tatsächlich getan hat

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

Dies ist der Ordner `examples/minecraft-gta5-passthrough` in [universal-modder](https://github.com/rehan-remade/universal-modder). In der README-Datei wird der Code Claude genannt und der Autor habe ihn im September 2026 auf Steam Build 3889 von GTA V Legacy (ScriptHookV Build 3889.0, ReShade Version 6.8.0) getestet.

- **Zwei Kanäle.** Gameplay-Nachrichten verwenden einen Localhost-WebSocket. Drei Minecraft-Bilder (Weltfarbe, Tiefe und Hand plus HUD) werden durch den benannten gemeinsamen Windows-Speicher übertragen. Ein ReShade-Add-on lädt sie hoch und fügt sie in den fertigen GTA-Rahmen ein.
- **Der Besitzer ändert sich mit dem Modus.** Zu Fuß platziert die GTA-Pose den Minecraft-Spieler. Im Elytra-Flug besitzt Minecraft Bewegung und GTA liefert den Look und die Verfolgungskamera.
- **Kollision wird neu erstellt, nicht kopiert.** GTA sondiert den Boden um den Spieler herum (160 Spalten pro Frame in einem Radius von 40) und Minecraft erhält Barriereblöcke. Das ist eine begehbare Oberfläche, keine Wände, Überhänge oder Innenräume. In Minecraft platzierte Blöcke werden zu eingefrorenen GTA-Boxen (höchstens 400). Bodenplatten und Treppen sind einfach „massiv“.
- **Kampfkreuze als Ereignisse.** GTA-Menschen werden in Minecraft zu unsichtbaren Dorfbewohnern; Minecraft Kämpfer werden zu unsichtbaren, eingefrorenen GTA-Doppelgängern. Schäden werden als Ereignisse gesendet.
- **Bekannte Grenze, vom Autor angegeben:** Die Demo schneidet um ein veraltetes Minecraft-Bild herum, das über dem Pausenmenü von GTA übrig bleibt; Der Fix wurde nicht erstellt.

**Was der enthaltene Test beweist.** `ws_test.cpp` besteht den Test, wenn eine Nachricht das Wort `explosion` enthält. Die Genauigkeit der Kamera, die Tiefenausrichtung oder die erneute Verbindung werden nicht überprüft. Eine bestandene Prüfung bedeutet hier „die Steckdose spricht“, nichts weiter.

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
| Shader konnten unter Proton | nicht kompiliert werden | Eine native 32-Bit-Version `d3dcompiler_47` ersetzte die in diesem Setup integrierte Version |
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
- **Übergabe der Kontrolle:** Leitern, `use`, Noclip und Death Return-Bewegung zu Half-Life. Die Hockhöhen stimmen nicht genau überein.
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

- **Ein Referenzorakel.** Es vergleicht seine Bewegungstabellen mit einem vom Benutzer bereitgestellten Diablo II 1.12 `D2Common.dll` und einer MIT-lizenzierten Neuimplementierung. Die Richtungstabelle wird berechnet und nicht aus Spieldaten kopiert.
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

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/15-case-studies-what-each-project-actually-did.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/15-case-studies-what-each-project-actually-did.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>