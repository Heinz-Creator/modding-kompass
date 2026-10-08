# 17. Die Dekompilierungssystemkarte

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
```
Maschinencode -> Assembly -> Decompiler-Ausgabe -> Benannte Systeme -> Lesbare Quelle -> Verifiziertes Verhalten
```

Werkzeuge dafür, ungefähr in der Reihenfolge, in der die Leute nach ihnen greifen: **Ghidra**, **IDA Pro**, Binary Ninja, Radare2 mit Cutter, Capstone für Disassemblierungsbibliotheken, Frida für Instrumentierung, x64dbg und WinDbg unter Windows, gdb an anderer Stelle und rr für die Aufzeichnung der Ausführung, damit ein Absturz wiedergegeben werden kann.

[ghidra-mcp](https://github.com/bethington/ghidra-mcp) (4.708 Sterne, Apache-2.0) und [ida-mcp](https://github.com/HexRaysSA/ida-mcp) stellen diese über einen MCP-Server bereit, sodass ein Agent den Decompiler direkt steuern kann, anstatt die Disassemblierung in ein Chatfenster einzufügen. Beide werden in [Leitfaden 3](03-rust-rewrites-and-ports.md#when-you-do-need-it) behandelt.

## 2. Motorkern

Die Maschinerie, auf der der Rest sitzt.
```
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
```

Und die Reihenfolge pro Frame:
```
Eingabe -> Simulation -> Physik -> KI -> Animation -> Rendering -> Audio -> Aktueller Frame
```

Wenn Sie diese Reihenfolge richtig einhalten, erfahren Sie, wo Sie nach einem Fehler suchen müssen. Ein Kameraproblem liegt nicht im Eingabecode.

## 3. Asset-System

Eine Dekompilierung, die die Dateien des Spiels nicht lesen kann, nützt nicht viel.

Erarbeiten Sie die Archive, Paketdateien, Komprimierung, Serialisierung, Ressourcen-IDs, Asset-Suche, Abhängigkeitstabellen, Streaming und Caching.
```
game.pak
├── textures
├── meshes
├── animations
├── maps
├── sounds
├── scripts
└── configuration
```

Die Unterscheidung sollte man sich merken, weil die Leute das am Anfang falsch verstehen:
```
Dekompilierer = versteht Code
Asset-Parser = versteht Daten
```

Sie benötigen fast immer beides, und es handelt sich um separate Tools. [Leitfaden 3](03-rust-rewrites-and-ports.md) listet die Asset-Tools nach Engine auf.

## 4. Netze und Modelle

So wird Geometrie gespeichert: Scheitelpunkte, Indizes, Normalen, Tangenten, UVs, Scheitelpunktfarben, Unternetze, Materialslots, LODs, Skelettbindungen und Morph-Ziele.
```
Netz
├── Vertex-Puffer
├── Indexpuffer
├── Materialien
├── Skelett
├── Kollisionsnetz
└── LOD 0/1/2/3
```

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
```
CarPaint.material
├── Shader = VehiclePaint
├── Albedo
├── Normal
├── Metallic
├── Roughness
├── Reflection
└── Parameters
```

Um sie zu reproduzieren, benötigen Sie die Materialdefinitionen, Shader-Referenzen, Texturbindungen, Renderzustände, Misch-, Transparenz-, Aussortierungs- und Tiefenregeln. Wenn die Tiefe oder der Culling-Status falsch ist, wird das Netz von innen nach außen oder durch Wände gerendert, was wie ein Geometriefehler aussieht.

## 7. Shader und Rendering

Eines der größten Stücke und das, bei dem passende Dekompilierungsprojekte die meiste Zeit verbringen.

Shader-Stufen: Scheitelpunkt, Fragment oder Pixel, Geometrie, Berechnung und Tessellation.

Der Renderer um sie herum:
```
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
```

Was muss erarbeitet werden: Draw-Aufrufe, Render-Warteschlangen, Render-Passes, Framebuffer-Layout, Shader-Uniformen, GPU-Puffer, Texturbindungen, Beleuchtungsmodelle, Nebel, Schatten, Bloom, Bewegungsunschärfe, Tone Mapping und Anti-Aliasing.

Dann muss sich meist die darunter liegende API ändern, weil das Original auf etwas abzielte, das nicht mehr existiert:
```
DirectX 8, DirectX 9, OpenGL, proprietary API  ->  Vulkan, DX12, modern OpenGL, WebGPU
```

Dies ist ein gelöstes Problem mit ausgereiften Werkzeugen, und es lohnt sich zu wissen, dass es gelöst ist. [DXVK](https://github.com/doitsujin/dxvk) (18.245 Sterne, Zlib) implementiert D3D8 bis D3D11 auf Vulkan und [vkd3d-proton](https://github.com/HansKristian-Work/vkd3d-proton) (2.995 Sterne) führt D3D12 aus. Beide führen bestehende Windows-Spiele unter Linux unter Wine aus, was genau das Übersetzungsproblem ist, das bereits behandelt wurde.

Zum Kompilieren von Shader aus dem Quellcode ist der DirectX-Shader-Compiler ([DXC](https://github.com/microsoft/DirectXShaderCompiler), 3.659 Sterne) die gepflegte Option für alles, was die Tools der Direct3D-Ära nicht verarbeiten können.

## 8. Kollision

Kollision ist normalerweise nicht die sichtbare Geometrie:
```
Sichtbares Netz != Kollisionsnetz
```

Primitive Typen: Boxen, Kugeln, Kapseln, konvexe Hüllen, Dreiecksnetze, Höhenfelder, Triggervolumina, Raycasts.

Und die Pipeline, die sie in Kontakt umwandelt: Kollisionsebenen, Kollisionsmasken, breite Phase, schmale Phase, Kontaktgenerierung, Auslöser, Abfragen. Bei einer Dekompilierung, die korrekt gerendert wird und Sie durch Wände gehen lässt, sind in der Regel die Ebenen oder Masken falsch und nicht die Formen.

## 9. Physik

Frühere Kollisionserkennung: Schwerkraft, Geschwindigkeit, Beschleunigung, Reibung, Restitution, starre Körper, Impulse, Einschränkungen, Gelenke, Stoffpuppen, Fahrzeuge, Federung, Auftrieb und Charaktersteuerung.
```
Eingabe -> Zeichensteuerung -> Kollisionserkennung -> Physik-Reaktion -> Animation
```

Spielspezifische Physik ist wichtiger als es klingt. Ein Kampfspiel, ein Rennspiel und ein Plattformspiel haben hier jeweils völlig unterschiedliche Mengen an Code.

## 10. Skelette und Animation

Knochenhierarchie, Bindeposen, Animationsspuren, Interpolation, Animationsereignisse, Animationsmischung, inverse Kinematik, Wurzelbewegung, Morphs, Gesichtsanimation.
```
Leerlauf -> Gehen -> Laufen -> Springen -> Fallen -> Landen
```

Dies wird normalerweise von einer Zustandsmaschine und nicht von „Animation X abspielen“ gesteuert. Das Reproduzieren der Zustandsmaschine bedeutet das Reproduzieren des Gameplays; Den richtigen Clip zur falschen Zeit abzuspielen, ist offensichtlich falsch.

## 11. Karten und Weltformat

So werden Ebenen dargestellt:
```
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
```

Plus Welt-Streaming, Chunks, Sektoren, Portale, Okklusion, LOD und Instanzierung. Abschnitt 28 behandelt Streaming als eigenständiges System, da es sich in der Regel um ein separates System mit eigenen Fehlermodi handelt.

## 12. Gameplay-Code

Der Teil, den die Spieler tatsächlich wahrnehmen: Spieler, Waffen, Fahrzeuge, NPCs, Gegenstände, Inventar, Gesundheit, Schaden, Quests, Missionen, Fortschritt, Wirtschaft, Fähigkeiten, Kampf, Interaktion.

Jedes seltsame kleine Verhalten kann von Bedeutung sein. Eine Aktion ist normalerweise eher eine Kette als eine Funktion:
```
Feuerwaffe
├── Überprüfen Sie die Munition
├── Animation abspielen
├── Spawn-Projektil
├── Raycast
├── Schaden anrichten
├── Spawn-Effekt
├── Ton abspielen
└── Alarm-KI
```

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
```
Schuss
├── Trockenprobe
├── Entfernungsabfall
├── Innenhall
├── Okklusion
└── KI-Hörereignis
```

Der letzte Punkt ist, warum sich Audio-Reverse-Engineering mit KI überschneidet. Anhand von Hörereignissen erkennt das Spiel, dass etwas passiert ist.

## 16. Eingabe

Mehr als nur Schlüsselcodes.
```
Tastatur, Maus, Controller, Touch, VR, Force-Feedback
```

Bindungen, tote Zonen, Empfindlichkeit, analoge Kurven, Aktionszuordnung, kontextsensitive Steuerungen.
```
Button A -> "Jump" -> PlayerController::Jump()
```

Der Schritt von der physischen Schaltfläche zur benannten Aktion ist eine Nachschlagetabelle, und ihre korrekte Reproduktion sorgt dafür, dass sich ein neu erstelltes Spiel reaktionsfähig anfühlt und nicht nur funktioniert. [Leitfaden 16](16-ownership-sync-and-rendering.md) behandelt, wem der Spieler gehört, was die nächste Frage ist.

## 17. Benutzeroberfläche und HUD

Menüs, HUD, Schriftarten, Sprites, Widgets, Layouts, Inventarbildschirme, Pausenmenü, Karte, Untertitel, Benachrichtigungen sowie der Code, der die Benutzeroberfläche mit dem Spielstatus verbindet. Im letzten Teil liegt die Arbeit; Das Layout ist die einfache Hälfte.

## 18. Skriptsystem

Viele Spiele verbergen einen großen Teil des Gameplays außerhalb der nativen ausführbaren Datei. Lua, Python, AngelScript, JavaScript, UnrealScript, benutzerdefinierter Bytecode oder eine proprietäre VM.
```
Skriptlader
VM
Opcodes
Native Bindungen
Veranstaltungen
Serialisierung
Debuggen
```

Die Missionslogik eines Spiels kann hier fast vollständig zum Ausdruck kommen. Wenn bei einer Dekompilierung scheinbar ganze Funktionen fehlen, prüfen Sie, ob das Original diese überhaupt jemals in der ausführbaren Datei hatte, bevor Sie eine Woche damit verbringen, nach Code zu suchen, der nicht vorhanden ist.

## 19. Spiele speichern

Speicherformat, Serialisierung, Objekt-IDs, Versionen, Prüfpunkte, Fortschritt, Konfiguration. Das Ziel:
```
Ursprünglicher Speicher -> Neue Engine -> Gleicher Spielstand
```

Die Versionierung ist der Teil, der beißt. Ein Format, das eine eigene Versionsnummer trägt, sagt Ihnen, wie die ursprünglich behandelten Felder angezeigt und ausgeblendet werden.

## 20. Netzwerken

Für ein Multiplayer-Spiel kann dies praktisch ein weiteres Projekt werden: Sockets, Pakete, Replikation, Vorhersage, Interpolation, Authentifizierung, Lobby, Matchmaking, Serverbrowser, dedizierter Server, Voice-Chat. Plus Paketstrukturen, Nachrichten-IDs, Statussynchronisierung, Tick-Raten, maßgebliche Logik und Latenzkompensation.

Dieser Abschnitt dient der Vollständigkeit und ist **außerhalb des Geltungsbereichs für alles, was Sie aus diesem Repo erstellen.** [Leitfaden 6](06-rules-legal-and-publishing.md) schließt das Online-Spielen vollständig aus und nichts hier sollte als Ausnahme gelesen werden. Das Rekonstruieren des Protokolls eines Spiels für die eigene Offline-Nutzung ist etwas anderes als das Versenden einer Multiplayer-Modifikation. Wenn Sie über dieses Projekt nachdenken, halten Sie inne und lesen Sie zuerst Anleitung 6.

## 21. Original-Entwicklungstools

Das ausgelieferte Spiel ist nur ein Teil dessen, was die Entwickler darauf aufgebaut haben. Studios verfügten über Level-Editoren, Modellkonverter, Texturkonverter, Animationsexporteure, Shader-Compiler, Skript-Compiler, Packager, Lokalisierungstools, Build-Systeme und Debug-Konsolen.

Durch die Neuerstellung kann ein Quellport erheblich verbessert werden. Wenn das Spiel mit einem offiziellen Toolkit geliefert wurde, ist das ein besserer Ausgangspunkt als ein Dekompiler, und [Anleitung 3](03-rust-rewrites-and-ports.md) listet einige auf.

## 22. Pipeline erstellen

Finden Sie heraus, wie Rohressourcen zu spielbereiten Daten wurden.
```
Blender oder Maya -> Exporter -> Mesh-Compiler -> Game Mesh
Photoshop -> Textur-Compiler -> Spieltextur
```

und die moderne Version derselben Pipeline:
```
Blender -> Offene Formate -> Konvertierungstools -> Spiellaufzeit
```

Die passende Dekompilierung macht dies auf eine Weise konkret, die die meisten Menschen nicht erwarten. [zeldaret/oot](https://github.com/zeldaret/oot) liefert ein `spec/`-Verzeichnis, `linker_scripts/` und ein `docs/libu64.md`, das den Build beschreibt, plus `docs/compilers.md`, das den genauen erforderlichen Compiler aufzeichnet, und eine Tabelle jedes regionalen Einzelhandels-Builds mit seinem Build-Zeitstempel und MD5. Das Reproduzieren einer Binärdatei aus dem Jahr 1998 im Jahr 2026 bedeutet, die ursprüngliche Toolchain abzugleichen, nicht eine aktuelle.

## 23. Plattformschicht

Alte Spiele kommunizieren direkt mit APIs, die nicht mehr existieren. Win32, DirectInput, DirectSound, Direct3D, OpenGL und alte Konsolen-SDK-APIs müssen alle ersetzt werden.
```
Original-Engine -> Plattformabstraktion -> Windows / Linux / macOS
```

Dies ist die Ebene, die einen Port plattformübergreifend macht, und [Leitfaden 3](03-rust-rewrites-and-ports.md) erklärt, warum Rust-Umschreibungen in diesem Repo dazu neigen, plattformübergreifend zu sein, während Passthrough-Mods dies nicht tun.

## 24. Threading und Jobsystem

Spätere Engines enthalten einen Render-Thread, einen Physik-Thread, einen Streaming-Thread, einen Audio-Thread, einen Worker-Pool und asynchrone E/A.

An dieser Stelle muss die Warnung wiederholt werden: Falsches Timing im Jobsystem führt zu Fehlern, die anscheinend überhaupt nichts damit zu tun haben.

## 25. Mathe

Ja, mathematisches Verhalten kann wichtig sein.

Vektoren, Matrizen, Quaternionen, Transformationen, Festkomma, Gleitkommaverhalten, Zufallszahlengenerierung, Interpolation.

Und wo sich winzige Unterschiede zeigen:
```
Physik
KI
Wiederholungen
Vernetzung
Speedruns
```

Gleitkomma ist derjenige, der Menschen fängt. Alter Code, der für x87 oder für eine andere Optimierungsstufe erstellt wurde, führt in einem modernen Compiler nicht zu identischen Ergebnissen, und die Abweichung verstärkt sich mit der Zeit. Passende Projekte lösen dieses Problem, indem sie den Compiler präzise fixieren.

## 26. Zufallszahlengenerierung

Spiele basieren häufig auf deterministischem RNG. Sie benötigen den Algorithmus, den Seed, die Update-Reihenfolge und die Aufrufreihenfolge.

Ansonsten:
```
Gleiches Speichern! = Gleiches Verhalten
```

Alles, was prozedural ist und alles, was das Original aus einem Zufallswert berechnet, wird abweichen. Abschnitt 42 erklärt, warum dies am schwersten zu bemerken ist.

## 27. Timing

Eine große Quelle von Kompatibilitätsproblemen und der Bereich, der am wahrscheinlichsten von einer Neuimplementierung betroffen sein wird.
```
Spieltick
Physik-Tick
Render-Häkchen
Timing der Animation
Rahmenbegrenzer
Delta-Zeit
Fester Zeitschritt
```

Der klassische Misserfolg:
```
Spiel für 30 FPS ausgelegt -> läuft mit 240 FPS -> Physik betritt eine andere Dimension
```

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
```
Geländewasser
├── Höhenkarte ├── Wellen
├── Splat-Karten ├── Reflexion
├── Vegetation ├── Brechung
└── LOD ├── Auftrieb
                   └── Unterwasser-Rendering
```

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
```
.ini, .cfg, .xml, .json, binary config, registry values, console variables
```

Und darin Grafikeinstellungen, Gameplay-Flags, Debug-Flags, versteckte Funktionen und Engine-Variablen.

Konsolenvariablen und versteckte Flags sind Orte, an denen sich undokumentiertes Verhalten verbirgt. Wenn ein Spiel etwas tut, das keine Einstellung aufdeckt, steckt das normalerweise hinter einer Flagge, die niemand dokumentiert hat.

## 37. Debug-Systeme

Äußerst wertvoll, wenn Reste übrig bleiben, und einer der besten Orte, um ein Projekt zu starten, an dem noch niemand versucht hat.
```
Debug-Konsole
Entwicklermenü
Behauptungen
Protokollierung
Profiler
Betrüger
Debug-Zeichnung
Symbolnamen
Fehlerzeichenfolgen
```

Diese können die ursprüngliche Architektur freilegen. Insbesondere Fehlerstrings sind oft der schnellste Weg, den Namen eines internen Systems zu finden, da Entwickler sie zum Lesen geschrieben haben. Debug-Menüs zeigen, welche Subsysteme vorhanden sind und wie sie umgeschaltet werden.

Eine Warnung. In diesem Abschnitt geht es um die Verwendung von verbliebenem Debug-Material als Dokumentation. Es geht nicht um Cheats, und nichts hier sollte als Möglichkeit verstanden werden, sich online einen Vorteil zu verschaffen. [Leitfaden 6](06-rules-legal-and-publishing.md) schließt Anti-Cheat- und Online-Spiele vollständig aus.

## 38. Objekt- und Entitätssystem

Finden Sie heraus, was ein „Ding“ auf der Welt eigentlich ist.

Entweder Komponenten:
```
Entität
├── Verwandeln
├── Renderer
├── Physik
├── KI
├── Skript
├── Audio
└── Gameplay-Komponenten
```

oder eine Vererbungshierarchie:
```
Objekt -> Akteur -> Bauer -> Feind
```

Welches das Original verwendet hat, ist wichtig, denn es entscheidet darüber, wie man etwas Neues hinzufügt. Wenn man das falsch macht, muss man für den Rest des Projekts gegen die Architektur kämpfen. Wenn man es versteht, kann man sich die gesamte Engine erschließen, weshalb dieser Abschnitt trotz der Nummerierung für die meisten Leute am Anfang der Arbeitsreihenfolge steht.

## 39. Ressourcenabhängigkeiten

Ein Asset kann auf Dutzende andere verweisen.
```
Feind
├── Netz
├── Skelett
├── Animationen
├── Material
├── Texturen
├── Geräusche
├── KI-Definition
└── Skript
```

Sie benötigen also ein funktionierendes Ressourcenabhängigkeitsdiagramm. Ohne eine solche Lösung bedeutet das Laden eines einzelnen Assets, dass man raten muss, was sonst noch geladen werden soll, und die fehlenden Abhängigkeiten findet man durch einen Absturz.

## 40. Verhaltensüberprüfung

Der Dekompiler sagt etwas, **was es nicht richtig macht.**
```
Originalspiel vs. Neuimplementierung
```

Testen Sie Positionen, Physik, Timing, Schaden, KI, Animation, Rendering, RNG, Eingaben und Spielstände. Automatisieren Sie so viel wie möglich.

Passende Projekte machen daraus einen Build-Breaking-Check. [zeldaret/oot](https://github.com/zeldaret/oot) liefert `diff.py` und `diff_settings.py`, die das ROM aus der Quelle erstellen und es Byte für Byte mit dem Verkaufsimage vergleichen, mit einer Konfiguration pro Version, die die erwartete Ausgabe und das Basis-ROM zum Vergleich benennt. Es ist kein Vorschlag. Aufgrund einer Nichtübereinstimmung schlägt der Build fehl.

## 41. Rendervergleich

Erfassen Sie den gleichen Frame vom Original und von Ihrem Build und vergleichen Sie dann die Bilder.

Erkennt falsches Sichtfeld, Beleuchtungsfehler, falsch platzierte Netze, Animationsfehler und Shader-Unterschiede. Es ist schneller als das Lesen von Code für alle fünf, da es sich um visuelle Probleme handelt und diese dadurch visuell getestet werden.

## 42. Regressionstestsuite

Jedes Verhalten, das Sie entdecken, sollte zu einem Test werden.
```
Sprunghöhe des Spielers = 2,84 m
Pistolenschaden = 20
Tür öffnet nach Auslöser 16
NPC erkennt Spieler in 14,5 m Entfernung
```

Dann kann eine spätere Änderung es nicht stillschweigend zerstören.

Eine Warnung vor bestandenen Tests. [Leitfaden 15](15-case-studies-what-each-project-actually-did.md) dokumentiert ein Projekt, das 65 von 65 Prüfungen meldet, bei denen die Tabellenübereinstimmung und unveränderte Datei-Hashes gemessen wurden und nicht, ob sich das Spiel richtig anfühlte, und bei dem die Bildrate die beste aus mehreren Durchläufen und kein Durchschnitt war. Eine Suite, die das Falsche misst, ist schlimmer als keine, weil sie Sie davon abhält, zu suchen.

## 43. Symboldatenbank

Eines der wertvollsten Dinge, die Sie ansammeln, denn wenn Sie es verlieren, zahlen Sie doppelt für die gleiche Arbeit.
```
0x00453120 -> Player_Update
0x00454380 -> Player_Jump
0x00581210 -> Physics_Raycast
0x00621280 -> RenderWorld
```

Notieren Sie die Adresse, den Funktionsnamen, das Subsystem, Ihr Vertrauen darin, Notizen, Referenzen, Pseudocode und alle Testergebnisse, die dies bestätigen. Das Vertrauensfeld ist das, das die Leute überspringen und sich später wünschen, es zu haben.

In der Praxis handelt es sich hierbei um eine Datei, nicht um eine Datenbank. [zeldaret/oot](https://github.com/zeldaret/oot) behält `undefined_syms.txt` bei der Zuordnung von Adressen zu Namen bei, sobald sie entdeckt werden, zusammen mit `sym_info.py`, und sein Dokumentationsleitfaden fordert Mitwirkende auf, Funktionen im eigenen Stil des Originals zu benennen, sodass sich der Code wie das Spiel liest, aus dem er stammt.

**Wobei die Regeln dieses Repos abweichen.** Diese Adressen sind Offsets in eine Einzelhandelsbinärdatei. [Leitfaden 6](06-rules-legal-and-publishing.md) besagt, dass man sie aus dem veröffentlichten Code heraushalten soll, da eine hartcodierte Einzelhandelsadresse in Ihrem eigenen Build nichts bewirkt und angibt, woher der Code stammt, und [IW4L](12-worked-example-rust-rewrite.md) erzwingt dies mit einer automatischen Prüfung, die den verfolgten Baum durchsucht. Behalten Sie die Symboldatenbank lokal und außerhalb des Repositorys. Die Begründung ist dieselbe wie beim Heraushalten von Spieledateien: Es handelt sich um Forschungsmaterial, nicht um Quellen.

## 44. Wissensdatenbank

Lassen Sie nicht jeden Menschen das Gleiche wiederentdecken.
```
/wiki  /functions  /formats  /assets  /shaders  /maps  /physics  /network  /tests
```

Agenten können dies auch abfragen, was das praktische Argument dafür ist, es in Dateien und nicht im Kopf von jemandem aufzubewahren.

[zeldaret/oot](https://github.com/zeldaret/oot) ist ein gutes Modell: ein `docs/`-Verzeichnis mit einem Dekompilierungs-Tutorial, einem Dokumentations-Styleguide, Compiler-Hinweisen, Verkaufsversionstabellen und einem `Doxyfile`, der Referenzdokumentation aus den Quellkommentaren generiert. Der Fortschritt wird auf einer öffentlichen Website veröffentlicht, sodass der Status des Projekts sichtbar ist, ohne das Repository lesen zu müssen.

## 45. KI-gestützte Pipeline

Die sequentielle Version:
```
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
```

Das parallele Betreiben mehrerer Agenten, einer pro Subsystem, die alle eine gemeinsame Wissensdatenbank versorgen, ist eine natürliche Idee und dieses Repo hat keine Beweise dafür, dass es funktioniert. Bei abgeschlossenen Projekten arbeitet stattdessen ein Agent durch viele Runden. Nehmen Sie die sequentielle Pipeline als nützlichen Teil. [Leitfaden 13](13-reverse-engineering-and-the-law.md#doing-this-with-an-agent) erklärt, warum ein Agent, der die dekompilierte Ausgabe gelesen hat, strukturell ein schmutziger Raum ist und was die Aufteilung der Spezifikation von der Implementierung auf zwei Sitzungen bewirkt.

## 46. Ein sinnvolles Projektlayout

Was aus einem rekonstruierten Projekt tendenziell wird:
```
/game
├── core/       ├── engine/     ├── renderer/  ├── physics/
├── collision/  ├── audio/      ├── animation/ ├── ai/
├── gameplay/   ├── networking/ ├── scripting/ ├── platform/
├── ui/         ├── world/      ├── assets/    ├── formats/
├── tools/      ├── tests/      └── docs/
```

Nichts hier ist eine Regel. Es ist die Form, die Assets und Formate vom Engine-Code trennt. Diese Trennung verhindert, dass das Projekt zu einer großen, wirren Kiste wird.

## Was „erledigt“ eigentlich bedeutet

Nicht „der Dekompiler hat eine Ausgabe erzeugt.“

Eher so:
```
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
```

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

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/17-decompile-system-map.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/17-decompile-system-map.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>