# 16. Besitz, Synchronisierung und Rendering: Symptome und ihre üblichen Ursachen

Wenn zwei Spiele einen Bildschirm teilen, fallen die meisten Fehler in mehrere Familien: Wem gehört etwas, von wessen Uhr stammt ein Wert, in welchen Einheiten befindet er sich und was hat der Renderer bereits getan, bevor Sie gezeichnet haben. In diesem Leitfaden werden die Symptome aufgeführt, auf die Menschen tatsächlich gestoßen sind, die Ursache, die jedes Projekt gefunden hat, und was sie getan haben.

Verwenden Sie es mit [Anleitung 5](05-testing-and-troubleshooting.md). Fügen Sie den entsprechenden Abschnitt in Ihren Agenten ein, wenn Sie einen Fehler melden. Es gibt dem Agenten einen Anlass zur Überprüfung statt einer Vermutung.

> **Beweisniveau.** Jedes „gefunden in“ verweist auf den Code, Commits oder Notizen eines echten Projekts. Wenn etwas eher eine wahrscheinliche als eine bestätigte Ursache ist, heißt es **Hypothese**.

## Vor allem: Vertrag schreiben

Die meisten der unten aufgeführten Fehler sind auf etwas zurückzuführen, das niemand aufgeschrieben hat. Geben Sie zu Beginn [`templates/BRIDGE-CONTRACT.md`](../templates/BRIDGE-CONTRACT.md) ein: Wem gehört was, Einheiten und Achsen, Tickraten, Nachrichtenlayout, Version und was bei Pause, Laden, Tod und Neustart passiert. Bitten Sie dann den Agenten, jede Änderung anhand dieser zu überprüfen.

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
- *Gefunden in:* [PipeLink](https://github.com/Sm1jjj/PipeLinkLauncher) hat festgestellt, dass `dinput8.dll` für den Mod-Loader von GTA San Andreas und sein eigenes Plugin zu spät geladen wurde. Es installierte denselben Loader unter dem Namen einer DLL, die das Spiel beim Start importiert (wobei das Original unter einem neuen Namen behielt), wodurch die Reihenfolge festgelegt wurde.

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
5. Bewahren Sie die Spieltestnotizen in einem Protokoll auf. Siehe [`templates/PLAYTEST-report.md`](../templates/PLAYTEST-report.md).

---

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/16-ownership-sync-and-rendering.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/16-ownership-sync-and-rendering.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>