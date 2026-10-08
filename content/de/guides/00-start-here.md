# 0. Hier geht es los

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
