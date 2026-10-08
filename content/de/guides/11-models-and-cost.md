# 11. Modelle und was man ausgeben sollte

Was zu bezahlen ist und worauf man hinweisen soll. Alles hier wurde im Oktober 2026 mit den Preisseiten der Anbieter verglichen. Pläne ändern sich, also überprüfen Sie dies, bevor Sie sich verpflichten.

## Die Kurzversion

| Budget | Was gibt es zu kaufen | Was Sie bekommen |
|--------|--------------|--------------|
| Kostenlos | [OpenCode](https://opencode.ai) mit einem kostenlosen Modell | Genug, um Dinge auszuprobieren und den Anleitungen zu folgen |
| Ungefähr 10 $ | [OpenCode Los](https://opencode.ai/go) | Der beste Wert. DeepSeek V4.1 Flash und Freunde bei hoher Lautstärke |
| 20 $ | [Claude Pro](https://claude.com/pricing) | Das beste Einzelabonnement und die Wahl, wenn Sie einen Plan kaufen |
| 40 $ | OpenCode Go Plus | Weitere gleiche Modelle. Selten der beste Anruf über Claude Pro |
| 100 $ | Claude Max 5x | Für den Fall, dass 20 $ mitten im Projekt aufgebraucht sind |
| 200 $ | Claude Max. 20x | Erst wenn Sie bewiesen haben, dass Sie es brauchen |
| Bezahlung pro Token | Die API eines beliebigen Anbieters, normalerweise über OpenRouter | Wenn Nutzungsobergrenzen das Problem sind und nicht das Budget |

Greifen Sie zu einem anderen Modell und der Preis schwankt stark. DeepSeek V4.1 Flash kostet außerhalb der Spitzenzeiten über OpenCode Go 0,15 US-Dollar bzw. 0,60 US-Dollar pro Million Token, und eine direkte API kommt dem nahe. Das aktuelle Flaggschiff von Claude, Opus 5.5, kostet 4 und 20 US-Dollar. Pro Token bedeutet, dass Sie nie an Schwierigkeiten stoßen und auch nie eine monatliche Pauschalrate erhalten, was für Leute geeignet ist, die in großen Mengen arbeiten.

## Etwa 10 $: OpenCode Los

Go ist ein 10-Dollar-Abonnement, das Zugriff auf die stärksten offenen Codierungsmodelle bietet. DeepSeek V4.1 Flash ist das Richtige für den Anfang: günstig, schnell und gut genug für die meisten dieser Arbeiten.

DeepSeek V4.1 Flash kostet über Go 0,15 US-Dollar pro Million Input-Tokens und 0,60 US-Dollar Output außerhalb der Spitzenzeiten, was sich auf 0,30 US-Dollar und 1,20 US-Dollar in der Spitzenzeit verdoppelt. Der Spitzenwert liegt wochentags zwischen 01:00 und 04:00 Uhr und zwischen 06:00 und 10:00 Uhr UTC. Führen Sie Ihre Builds über Nacht aus und Sie zahlen den Nebentarif.

Das monatliche Kontingent von 60 US-Dollar entspricht etwa 26.000 Anfragen pro Fünf-Stunden-Fenster oder 130.000 pro Monat. Das ist eine Menge Arbeit.

Die Limits von Go haben die gleiche Form wie die von Claude: 20 % der monatlichen Vergütung pro fünf Stunden, 50 % wöchentlich, 100 % monatlich.

Go Plus kostet 40 $ mit höheren Limits. Es lohnt sich nur, wenn Sie viele Agenten parallel betreiben oder immer wieder an die Obergrenze von Go stoßen und nicht zu Claude wechseln möchten.

## $20: Claude Pro

Die Standardempfehlung, wenn Sie ein Abonnement kaufen. Die meisten Leute, die diese Arbeit machen, sind dabei.

20 $ monatlich oder 17 $ monatlich bei jährlicher Abrechnung (200 $ im Voraus). Claude Code ist enthalten.

Bei den Limits handelt es sich um ein rollierendes fünfstündiges Sitzungsfenster sowie eine wöchentliche Obergrenze, die zu einem festen, Ihrem Konto zugewiesenen Zeitpunkt zurückgesetzt wird. Erwarten Sie bei einem Topmodell etwa 3 bis 4 Stunden Dauerbetrieb pro Fünf-Stunden-Fenster. Ein Basketballspiel von Grund auf landete bequem auf der 20-Dollar-Marke.

Behandeln Sie das Sitzungsfenster als die eigentliche Einschränkung. Das wöchentliche Limit greift selten, wenn Sie Chats mit einer [`STATUS.md`](../templates/STATUS-handoff.md)-Datei übergeben, anstatt sie eine Woche lang wachsen zu lassen.

## Wenn Sie ein Upgrade durchführen möchten, gehen Sie der Reihe nach vor

**20 $, maximal. Dann 100 $, maximal. Dann 200 $.**

Der Grund dafür ist, dass sich jede Stufe nur dann lohnt, wenn Sie die darunter liegende Stufe ausgeschöpft haben.

| Stufe | Preis | Pro-Äquivalent |
|------|-------|----------------|
| Pro | 20 $ | 1x |
| Maximal 5x | 100 $ | 5x |
| Maximal 20x | 200 $ | 20x |

Zwei Dinge machen die Leute hier falsch:

- **Die 5-fachen und 20-fachen Vielfachen gelten für das fünfstündige Sitzungsfenster**, nicht für Ihr wöchentliches Taschengeld. Der wöchentliche Zuschuss des 200-Dollar-Plans ist ungefähr doppelt so hoch wie der des 100-Dollar-Plans, nicht das Zwanzigfache.
- **Über dem Sitzungsfenster liegt ein wöchentliches Limit.** Ein Upgrade vervielfacht Ihre Sitzungskapazität; Die wöchentliche Obergrenze wird dadurch nicht entfernt.

Max ist nur monatlich verfügbar. Upgrade-Gebühren in der Mitte des Zyklus werden anteilig berechnet.

Wenn Sie stattdessen pro Token bezahlen, ist ein Weg, der funktioniert: OpenRouter mit einem starken offenen Modell. VS-Code plus Roo-Code mit OpenRouter und einem DeepSeek-Modell ist eine häufige Kombination, wenn ein Claude-Plan außer Reichweite ist.

### Zwei Dinge, die die Rechnung mehr verändern als das Modell

Beides ist hier wichtiger als in den meisten Projekten, da diese Arbeit kontextlastig ist. Sie speisen die dekompilierte Ausgabe des Agenten, ganze Repositorys und Designdokumente ein.

**Das Kontextfenster umfasst 1 Mio. Token für beide Hauptoptionen zum Standardpreis.** DeepSeek V4.1 Flash verfügt über einen 1 Mio. Kontext. Opus 5.5 umfasst das vollständige 1-Millionen-Fenster zum normalen Pro-Token-Tarif, sodass eine 900.000-Anfrage den gleichen Preis kostet wie eine 9.000-Anfrage. Sie müssen sich keine Sorgen um einen Langzeitkontextzuschlag machen. DeepSeek begrenzt die Ausgabe auf 384 KB.

**Promptes Caching senkt die Kosten für die Wiederholung von Kontext um 90 %.** Ein Cache-Lesevorgang wird mit dem 0,1-fachen des Basiseingabepreises abgerechnet. Das Schreiben in den 5-Minuten-Cache kostet das 1,25-fache der Basiseingabe, sodass sich das Caching nach einem Lesevorgang amortisiert. Der 1-Stunden-Cache kostet das Doppelte, daher sind zwei Lesevorgänge erforderlich, um die Gewinnschwelle zu erreichen. Sowohl DeepSeek als auch Claude unterstützen es.

Das ist wichtig, denn das Teuerste an einer langen Modding-Sitzung ist, dass bei jeder Runde dasselbe Repository und dieselben dekompilierten Dateien zurückkommen. Cachen Sie das stabile Präfix und zahlen Sie nicht mehr den vollen Preis dafür.

Bitten Sie den Agenten, es zu aktivieren, anstatt davon auszugehen, dass es eingeschaltet ist:
```
Dieses Projekt hat einen großen stabilen Kontext: docs/DESIGN.md, das Spielformat
spec und die Dateien, die wir bereits analysiert haben. Aktivieren Sie dafür das Prompt-Caching
Präfix, sodass wir nicht mehr in jeder Runde den vollen Eingabepreis dafür zahlen müssen. Zeig mir das
Cache-Trefferrate in der Nutzungsausgabe.
```

**Die Batch-API kostet sowohl für die Eingabe als auch für die Ausgabe den halben Preis**, für Arbeiten, die im Hintergrund ausgeführt werden können. Dies gilt beispielsweise für die Neukompilierung eines Stapels von Assets oder die Durchführung derselben Analyse über hundert Datendateien. Für interaktives Arbeiten nützt es nichts, da die Ergebnisse erst später wiederkommen.

Eine Einschränkung speziell bei Claude: Opus 5.5 verwendet einen neueren Tokenizer, der etwa 30 % mehr Token für denselben Text erzeugt als frühere Modelle. Wenn man zwei Modelle hinsichtlich der Kosten vergleicht, ohne zu prüfen, welchen Tokenizer sie verwenden, vergleicht man verschiedene Einheiten.

## OpenAI- und ChatGPT-Modelle

Derzeit nicht empfohlen, und zwar aus zwei Gründen: Sie schneiden bei dieser Art von Arbeit schlechter ab als Claude auf vergleichbaren Ebenen und bieten weniger nutzbare Nutzung pro Abonnement.

**Wenn Sie bereits ein ChatGPT-Abonnement haben, behalten Sie es.** Die Modelle sind sehr gut und die Vergütung ist angemessen. Es gibt keinen Grund zur Stornierung. Wechseln Sie nicht wegen dieser Empfehlung.

Dies ist eine Community-Lesung, kein Benchmark-Ergebnis, und es wird veraltet sein. Wenn Sie anderer Meinung sind und bei einem echten Projekt bessere Ergebnisse erzielen, zählt das, und die Seite sollte sich ändern.

## Kostenlose Optionen, die nicht nichts sind

Bevor Sie etwas ausgeben:

- **Kostenlose Modelle innerhalb von OpenCode.** Einige sind für begrenzte Zeit kostenlos, darunter DeepSeek-angrenzende Optionen und einige Stealth-Modelle. Kostenlose Modelle werden abgeschnitten und in der Rate begrenzt. Behandeln Sie sie also als gut zum Erlernen des Arbeitsablaufs und als schlecht für ein ernsthaftes Projekt.
- **Lokale Modelle auf Ihrer eigenen Hardware.** Sie funktionieren hierfür nicht gut. Eine 12-GB-GPU reicht für ein gutes lokales Codierungsmodell nicht aus. Da Ihre GPU eine 5090 ist, macht das für ein Cloud-Modell keinen Unterschied, da diese Arbeit auf den Servern des Anbieters ausgeführt wird.
- **Pay-per-Token-APIs.** Günstig genug, um etwas auszuprobieren, und Sie hören auf, wenn Sie aufhören. Gut für ein Wochenendprojekt, schlecht für alles, was länger dauert.
- **Günstigere Claude-Stufen.** Das Ausführen von Sonnet anstelle eines Topmodells kostet weniger pro Token und ist normalerweise gut genug für den Großteil eines Projekts. Heben Sie sich das teure Modell für den Teil auf, bei dem Sie nicht weiterkommen.

## Was für ein Plan, den Token nicht bringen

Bei Abonnementplänen geht es nicht nur um den Preis. Drei Dinge sind bei einem Plan einfacher und pro Token umständlicher:

- **Keine Nutzungsobergrenze.** Die Abrechnung pro Token bedeutet, dass eine außer Kontrolle geratene Schleife echtes Geld kostet, anstatt an eine Wand zu stoßen.
- **Prioritätszugriff.** Max-Pläne werden zu Stoßzeiten vor kostenlosen Benutzern bereitgestellt, was wichtig ist, wenn Sie sich mitten im Projekt befinden.
- **Credits enthalten.** Bezahlte Pläne enthalten Nutzungsguthaben für die Bild- und Asset-Generierung, die Sie ansonsten separat erwerben.

Der Grund, warum Leute bei einem Abonnement bleiben, ist die Obergrenze, nicht der Preis. Vorhersehbare Kurzarbeit ist pro Token günstiger.

## Offene Fragen

- Welches kostenlose Modell ist in OpenCode wirklich das Beste? Niemand hat den Vergleich durchgeführt.
- Ob kostenlose Pläne ein echtes Projekt abschließen können. Die meisten Menschen stoßen schnell an ihre Grenzen.
- Ob lokale Modelle ein echtes Projekt mit 12 GB VRAM bewältigen können.
- Ob dies auf Windows vs. Linux zutrifft. Jedes Projekt in diesen Handbüchern ist ohnehin nur für Windows gedacht.

Wenn Sie es herausfinden, posten Sie es auf Discord oder öffnen Sie eine Pull-Anfrage.

## Wo Sie die aktuellen Preise überprüfen können

- [Claude Preise](https://claude.com/pricing) und [Max. Plandetails](https://support.claude.com/en/articles/11049741-what-is-the-max-plan)
- [OpenCode Go](https://opencode.ai/go) und [Zen-Preise](https://opencode.ai/docs/zen/)
- [DeepSeek API-Preise](https://api-docs.deepseek.com/quick_start/pricing)
– [Claude API-Preise](https://platform.claude.com/docs/en/about-claude/pricing), die vollständigere Seite mit der Modelltabelle, die auf der Marketingseite ausgeblendet wird

Abonnieren Sie einen Monatsplan statt eines Jahresplans, bis Sie wissen, wie viel Sie verbrauchen. Der jährliche Rabatt beträgt 15 % auf Claude Pro, was sich nicht lohnt, für einen Plan zu zahlen, für den Sie möglicherweise in einem Monat nicht mehr wachsen.

---

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/11-models-and-cost.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/11-models-and-cost.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>