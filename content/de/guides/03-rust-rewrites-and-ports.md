# 3. Rust Rewrites und Ports

Bei einer Umschreibung oder Portierung wird die Engine eines Spiels von Grund auf neu erstellt, sodass sie eigenständig und nicht im Original läuft. Die neue Engine liest zur Laufzeit Modelle, Texturen, Karten und Sounds aus **Ihrer eigenen installierten Kopie** des Spiels. Das Repo enthält nur Ihren Code.

## Beispiele zum Lernen

| Projekt | Was es zeigt |
|---------|---------------|
| [IW4L](https://github.com/vladtrc/iw4L) | A Call of Duty: Modern Warfare 2 (2009) Laufzeit in Rust und Bevy. Experimentell: Das Gameplay ist unvollständig, und das steht auch drin. Liest Ihre eigene Installation vor Ort und versendet keine Assets |
| [gang-beasts-rust](https://github.com/muffinmxn/gang-beasts-rust) | Python-Tools extrahieren die Daten Ihres Spiels in Formate, die von einer Rust/Bevy-Engine geladen werden. Eine Whitelist `.gitignore` hält extrahierte Dateien vom Repo fern |
| [benilla](https://github.com/samwhosung/benilla) | Ein WoW 1.12.1-Client in Rust und Bevy. Ein großes Projekt mit Hunderten von Commits, Readern für die Dateiformate des Spiels und einer generierten Karte des Codes |
| [2010 Rust Mashup neu schreiben](https://github.com/chasmlol/2010-rust-rewrite-mashup) | Eine Neufassung kombiniert mit anderen Spielen |

Die Guten haben einige Gewohnheiten gemeinsam: eine klare Liste „Was funktioniert / was fehlt“, keine Spieldateien, Credits und ein `AGENTS.md` oder Entwicklungsprotokoll, damit die Arbeit der KI verfolgt werden kann.

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
| Verwaltetes .NET (Terraria, Stardew, Celeste, die meisten Unity auf Mono) | [ILSpy](https://github.com/icsharpcode/ilspy). Dekompiliert in lesbares C# und `ilspycmd` gibt ein ganzes Projekt aus, das Sie durchsuchen können |
| Unity IL2CPP | [Cpp2IL](https://github.com/SamboyCoding/Cpp2IL) gegen `GameAssembly.dll` plus `global-metadata.dat`, dann Ghidra für die Methodenkörper, die nativ sind |
| Java | Vineflower, CFR oder Recaf. Verwenden Sie für Minecraft Looms `genSources` mit Mojang-Zuordnungen |
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
```
Ich möchte verstehen, wie [Spiel] seine [Karten/Modelle/Animationsdaten] speichert.

Bevor Sie etwas installieren: Informieren Sie sich, ob eine Community vorhanden ist
Dokumentation, eine Open-Source-Bibliothek oder ein Decomp-Projekt für dieses Spiel
Dateiformate. Sag mir zuerst, was du gefunden hast.

Wenn nichts vorhanden ist und die ausführbare Datei die einzige Option ist, verwenden Sie Ghidra.
Arbeiten Sie im [Gitignored-Ordner]. Schreiben Sie nichts in dieses Repo außer
eine Notizdatei, in der beschrieben wird, was Sie gelernt haben.
```

### Regeln für die Ausgabe

- **Alles bleibt auf Ihrem Computer.** Übertragen Sie niemals dekompilierten Code, Ghidra-Datenbanken oder extrahierte Assets. Siehe [Leitfaden 6](06-rules-legal-and-publishing.md).
- **Verwenden Sie vom ersten Tag an eine Whitelist `.gitignore`**, damit eine extrahierte Datei nie versehentlich übernommen werden kann.
- **Schreiben Sie das Gelernte als Dokumentation auf**, nicht als Code. Diese Dokumentation ist der gemeinsam nutzbare Teil. Auf diese Weise existieren Open-Source-Engine-Reimplementierungen wie [OpenMW](https://github.com/OpenMW/openmw) und [OpenRCT2](https://github.com/OpenRCT2/OpenRCT2).
- **Einzelspieler-Offline-Spiele, die nur Ihnen gehören.** Lassen Sie DRM in Ruhe. Lassen Sie Anti-Cheat in Ruhe. Zielen Sie nicht auf irgendetwas, um Zugangskontrollen zu umgehen. Siehe [Leitfaden 6](06-rules-legal-and-publishing.md).
- **Verteilen Sie die Ausgabe nicht weiter.** Das persönliche Studium eines Spiels, das Sie besitzen, ist der Umfang. Die Veröffentlichung extrahierter Assets oder dekompilierter Quellen erfolgt nicht.
- **Halten Sie Ihre Forschung lokal.** IW4L nutzte Ghidra, um die ursprünglichen Binärdateien zu inspizieren und aufzuzeichnen, was es in `docs/provenance/` gelernt hat, wobei die Dumps und Datenbanken selbst aus dem Repo herausgehalten wurden.

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
```
Ich möchte ein Rust-Rewrite von [Spiel] erstellen, das seine Daten zur Laufzeit aus meiner eigenen installierten Kopie unter [Pfad] liest. Verwenden Sie [IW4L / gang-beasts-rust / benilla] als Referenz für die Struktur: [Links].

Regeln: Kopieren Sie niemals Spielinhalte oder dekompilierten Code in das Repo. Verwenden Sie eine Whitelist .gitignore. Schreiben Sie alles, was Sie lernen, gut und behalten Sie die Lizenzen.

Suchen Sie zunächst nach vorhandener Dokumentation, Dateiformatspezifikationen und Decomp-Projekten für dieses Spiel und sagen Sie mir, was es da draußen gibt, bevor Sie mit der Erstellung beginnen.
```

## Passthrough oder Umschreiben?

| | Passthrough | Umschreiben |
|--|-------------|---------|
| Ziel | Mischen Sie das Gameplay zweier Spiele | Eine eigenständige Engine, die Sie steuern |
| Bedürfnisse | Beide Spiele laufen zusammen | Nur Ihre Spieledateien |
| Größe | Oft kleiner | Oft viel größer |
| Gutes erstes Projekt? | Normalerweise | Nur mit einem kleinen Ziel |

---

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/03-rust-rewrites-and-ports.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/03-rust-rewrites-and-ports.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>