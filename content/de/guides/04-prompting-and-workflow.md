# 4. Aufforderung und Arbeitsablauf

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

1. **Eine Regeldatei** (`AGENTS.md` oder `CLAUDE.md`): was der Agent immer tun oder nie tun muss. IW4L behält einen mit dem Namen `AGENT.md`. Siehe [`templates/AGENTS-starter.md`](../templates/AGENTS-starter.md).
2. **Ein Entwicklungsprotokoll** (`MODLOG.md`): Was hat sich geändert, wie wurde es getestet, was ist immer noch kaputt. OWCraft behält eines und verlinkt es in seiner README-Datei. Siehe [`templates/MODLOG-template.md`](../templates/MODLOG-template.md).
3. **Ein Designdokument** (`docs/DESIGN.md`): wie das Projekt funktioniert, im Klartext. SkyCraft ist das beste Beispiel dafür im gesamten Bereich.

Bitten Sie den Agenten, sie bei Bedarf zu aktualisieren.

## Der Übergabetrick für festgefahrene Chats

Wenn ein Chat verwirrt oder sehr lang wird:

1. Bitten Sie den Agenten, den Projektstatus und das genaue Problem, an dem es hängt, in eine detaillierte `.md`-Datei zu schreiben.
2. Öffnen Sie einen **neuen Chat** und geben Sie ihm diese Datei.
3. Bitten Sie es, die Datei zu lesen und Möglichkeiten zur Fehlerbehebung vorzuschlagen.

Dies hilft am meisten bei weniger leistungsfähigen Modellen. Es funktioniert auch, Chats zu schließen und erneut zu öffnen, um alten Kontext zu löschen. Eine Vorlage befindet sich in [`templates/STATUS-handoff.md`](../templates/STATUS-handoff.md).

## Verbrauch sparen

- Lange Chats enthalten ihren gesamten Verlauf, sodass sie mehr von Ihrem Limit beanspruchen. Ein Neuanfang mit einer Übergabedatei hilft.
- Schließen Sie Chats und öffnen Sie sie erneut, wenn Sie das Thema wechseln.
Bitten Sie den Agenten frühzeitig, einen Dokumentationsstandard einzurichten und die Token-Effizienz im Auge zu behalten, ohne dass die Funktionalität verloren geht.
- Behandeln Sie nichts davon als Regel. Pläne und Modelle ändern sich.

## Wie lange es dauert

Es hängt vom Modell ab, davon, wie hart es denkt und wie groß die Aufgabe ist. Für eine einzelne Arbeit sind etwa 5 Minuten bis viele Stunden normal.

## Wenn Sie an einen neuen Chat übergeben

Der obige Handoff-Trick löst einen hängengebliebenen Chat. Es gibt zwei weitere Momente, in denen es sich lohnt, sauber anzufangen:

- **Starten eines neuen Projekts.** Nichts Nützliches wird zwischen unabhängigen Projekten übertragen, und ein langer Chat voller Details zu einem Spiel bringt den Agenten dazu, im nächsten nach ihnen zu greifen. `STATUS.md` pro Projekt übertrifft ein kontinuierliches Gespräch.
- **Agenten oder Modelle wechseln.** Verschiedene Tools lesen dieselben Dateien unterschiedlich. Eine Übergabedatei gibt der neuen den gleichen Ausgangspunkt.

## Eine funktionierende Start-Prompt

Jedes Beispielprojekt hier verwendet dieselbe Form. Zeigen Sie auf eine Referenz, benennen Sie die Substitution und fordern Sie zunächst einen schreibgeschützten Bericht an:
```
Ich möchte [Projekttyp] wie [Referenzprojekt] ([Link]) erstellen, aber für [Ihre Spiele].

Klonen Sie es lokal und lesen Sie die README-Datei und alle Dokumente/Dateien, damit Sie es verstehen
Architektur. Ich möchte den gleichen Ansatz.

[Spiel A] ist unter [Pfad] installiert. [Spiel B] ist unter [Pfad] installiert.

Bevor Sie etwas bauen, sagen Sie mir:
- Welche Loader, APIs oder SDKs gibt es für diese Spiele?
- Gibt es entweder Online-Play oder Anti-Cheat? (Wir rühren diese nicht an.)
- Was ist das kleinste Ding, das ich zuerst bauen kann, um zu beweisen, dass es funktioniert?

Ändern Sie noch keinen Code. Melden Sie einfach, was Sie gefunden haben.
```

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
- **Wenn Sie nicht weiterkommen, ändern Sie den Kontext, anstatt die Eingabeaufforderung neu zu schreiben.** Starten Sie einen neuen Chat mit einer [`STATUS-handoff.md`](../templates/STATUS-handoff.md)-Datei. Das funktioniert unabhängig davon, in welcher Schule Sie sind.
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

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/04-prompting-and-workflow.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/04-prompting-and-workflow.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>