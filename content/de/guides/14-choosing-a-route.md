# 14. Eine Route wählen: Was ist das für ein „Spiel im Spiel“?

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
| [Minecraft × Half-Life](https://github.com/SawyerTheNerd/Minecraft-X-HalfLife) (GoldSrc) | Minecraft | Leitern, `use`, Noclip und Todeshandbewegung zurück zu Half-Life |
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
- [ ] Sie haben [`templates/BRIDGE-CONTRACT.md`](../templates/BRIDGE-CONTRACT.md) in Ihr Projekt kopiert.

Als nächstes: [Leitfaden 15](15-case-studies-what-each-project-actually-did.md) für bearbeitete Fallstudien und [Leitfaden 16](16-ownership-sync-and-rendering.md) für die Symptome, auf die Sie stoßen, und was sie normalerweise verursacht.

---

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/14-choosing-a-route.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/14-choosing-a-route.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>