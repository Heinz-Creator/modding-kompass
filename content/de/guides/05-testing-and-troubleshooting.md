# 5. Tests und Fehlerbehebung

## Du machst den Spieltest

Der Agent kann ein Spiel nicht in Echtzeit verfolgen und kann daher schlecht beurteilen, wie die Dinge aussehen und sich anfühlen. Möglicherweise wird ein fehlender Partikeleffekt, ein falsch gedrehtes Modell oder eine ruckartige Bewegung nicht bemerkt. Erfahrene Mitglieder handhaben dies auf zwei Arten:

- **Fragen Sie nach Telemetrie.** Lassen Sie den Agenten so viel wie möglich protokollieren (Positionen, Schadenszahlen, Ereignisse, Bildzeiten), damit er seine eigene Arbeit überprüfen kann, ohne auf den Bildschirm zu schauen. Ein nützliches Muster besteht darin, Schadenszahlen aus den Protokollen abzulesen, während Sie eine Trainingspuppe treffen.
- **Testen Sie sich selbst.** Wenn der Agent versucht, visuell zu testen, stoppen Sie ihn und sagen Sie, dass Sie den Test durchführen werden. So oder so verifizieren Sie schneller, als es möglich wäre.

Es hilft auch, die Benutzeroberfläche und die Menüs frühzeitig zu sortieren, da es spätere Tests einfacher macht.

## So melden Sie ein Problem

„Es funktioniert nicht“ kann nicht behoben werden. Dies kann:
```
Ich habe Folgendes getan: [Was Sie getan haben, Schritt für Schritt]
Ich habe erwartet: [was du wolltest]
Was ist passiert: [was tatsächlich passiert ist]
Protokolle: [Fügen Sie die relevanten Protokollzeilen aus beiden Spielen ein, wenn es sich um einen Passthrough-Mod handelt]

Finden Sie die Ursache, bevor Sie einen Code ändern.
```

## Wenn der Agent in einer Schleife steckt

1. Stoppen. Das Wiederholen derselben Aufforderung hilft selten.
2. Bitten Sie es, eine Statusdatei zu schreiben: den Projektstatus und das genaue Problem. Siehe [`templates/STATUS-handoff.md`](../templates/STATUS-handoff.md).
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

Ein `STATUS.md`, das durch den Handoff-Trick in [`templates/STATUS-handoff.md`](../templates/STATUS-handoff.md) geschrieben wurde, enthält bereits das meiste davon. Antworten kommen schneller zurück und es funktioniert in einem Discord-Thread oder einer GitHub-Ausgabe genauso gut wie in einem neuen Chat.

Für alles, was Sie getestet haben, gibt ein [`PLAYTEST-report.md`](../templates/PLAYTEST-report.md) an, welche Versionen und Einstellungen Sie verwendet haben und welche nicht.

---

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/05-testing-and-troubleshooting.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/05-testing-and-troubleshooting.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>