# Mitwirken

Diese Leitfäden gibt es, weil die Leute immer wieder die gleichen Fragen stellten und die gleichen Antworten bekamen. Wenn Sie etwas wissen, das hier nicht vorhanden ist, ist es am nützlichsten, es hinzuzufügen.

Fragen, halbgeschriebene Ideen und „Ist das überhaupt möglich?“ sind alle im Discord willkommen. Sie benötigen keinen fertigen Text, um dort ein Gespräch zu beginnen.

Sie müssen kein professioneller Entwickler sein. Dieses Repo ist jung und hat noch keine Mitwirkenden, was ein erstes Repo wertvoll macht.

## Was gesucht wird

**Erfahrene Entwickler schreiben geeignete technische Leitfäden.** Dies ist die größte Lücke. Die Frage, die sich am häufigsten stellt, ist, ob dies alles technisch gründlich genug für jemanden ist, der lernen möchte, anstatt nur eine funktionierende Demo zu erhalten. Wenn diese Frage an Sie gerichtet ist, ist dieses Repo der richtige Ort, um sie zu beantworten.

Besonders nützlich:

- Eine echte Komplettlösung für ein von Ihnen abgeschlossenes Projekt, einschließlich der Sackgassen
- Korrekturen zu allem, was hier falsch oder veraltet ist
- Antworten auf die offenen Fragen in [den FAQ](guides/07-faq.md#still-unanswered)
- Neue Spiele, Loader oder Engines zum Hinzufügen zu [Anleitung 8](guides/08-mod-loaders-and-script-extenders.md)
- Test- und Leistungsberichte, das am wenigsten behandelte Thema

**Workflow-Aufzeichnungen auch von Anfängern.** Wenn Sie kürzlich etwas zum Laufen gebracht haben und sich daran erinnern, verwirrt zu sein, sind Sie die Person, die es aufschreiben kann. Siehe [`templates/workflow-writeup.md`](templates/workflow-writeup.md).

## Was nicht gewollt ist

- **Alles über Anti-Cheat, DRM oder Online-Spielen.** Nicht als Anleitung, nicht als „Wie ich es umgangen habe.“ Das ist eine harte Linie, keine Präferenz.
- **Spielinhalte, gerippt oder extrahiert, in jeglicher Form.** Einschließlich in Screenshots, die nicht ordnungsgemäß verwendet werden, und auch in Issues oder Pull Requests.
- **Dekompilierter Code.**
- **Anleitungen, die nur sagen: „Sag der KI, dass sie es tun soll.“** Das ist teilweise wahr und es handelt sich nicht um eine Anleitung. Schreiben Sie, was um ihn herum passiert ist.
- **Vage oder unbestätigte Behauptungen.** „X funktioniert großartig“ ohne Versionsnummern ist schlimmer als nichts, weil die Leute ihm folgen werden.

## So können Sie einen Beitrag leisten

1. **Eröffnen Sie zuerst ein Problem** für alles Wesentliche. Zwei Minuten Durchsprechen ersparen allen eine verschwendete Pull-Anfrage. Selbst wenn Sie es lieber einfach schreiben würden, bedeutet ein Problem, dass Menschen, die das gleiche Problem hatten, eine Antwort erhalten, selbst wenn Ihre PR ins Stocken gerät.
2. **Forken und bearbeiten.** Nur Markdown, kein Build-Schritt.
3. **Behalten Sie die Stimme.** Kurze Sätze, klare Worte, kein Jargon ohne Erklärung. Das Publikum hat noch nie Code geschrieben.
4. **Reelle Zahlen verwenden.** Versionsnummern, Timings, Fehlermeldungen. „Es funktionierte nach etwa 20 Minuten auf meiner Maschine“ schlägt „es war schnell.“
5. **Markieren Sie Unsicherheit ehrlich.** Wenn Sie es nicht wissen, sagen Sie es. In den FAQ gibt es einen Abschnitt dafür.

### Stil

- Dritte Person oder „Sie“. Vermeiden Sie „wir“.
- Britische oder amerikanische Rechtschreibung, konsistent innerhalb einer Datei.
- Satzfall für Überschriften.
- Backticks für Dateinamen, Befehle und Protokollausgabe.
- Tabellen für alles, was Sie sonst in einer Liste vergleichen würden.

Passen Sie den Ton an die vorhandenen Leitfäden an. Sie sind bewusst schlicht und schreiben Ihnen direkt, anstatt zu berichten, was andere Leute gesagt haben. Wenn etwas wirklich ungewiss ist, sagen Sie es im Satz, anstatt die Unsicherheit hinter „Mitgliederbericht“ zu verbergen.

## Wohin die Dinge gehen

| Datei | Hier einfügen |
|------|-------------|
| Fragen zum Einstieg | [00-start-here.md](guides/00-start-here.md) |
| Agenten, Modelle, Kosten, Grenzen | [01](guides/01-choose-and-set-up-an-ai-agent.md) |
| Verknüpfung zweier Spiele | [02-passthrough-mods.md](guides/02-passthrough-mods.md) |
| Überholung eines Motors | [03-rust-rewrites-and-ports.md](guides/03-rust-rewrites-and-ports.md) |
| Aufforderungen und ein Projekt auf Kurs halten | [04-prompting-and-workflow.md](guides/04-prompting-and-workflow.md) |
| Debuggen und Spieltests | [05](guides/05-testing-and-troubleshooting.md) |
| Recht, Ethik, Lizenzierung | [06](guides/06-rules-legal-and-publishing.md) |
| Kurze Fragen und Antworten | [07-faq.md](guides/07-faq.md) |
| Loader, Skript-Extender, Engine-Familien | [08](guides/08-mod-loaders-and-script-extenders.md) |
| Vollständige Komplettlösungen | [09](guides/09-worked-example-passthrough-mod.md) |
| Ein Projekt sichtbar machen | [10-posting-your-project.md](guides/10-posting-your-project.md) |
| Um welche Art von Projekt handelt es sich bei einer Idee | [14-choosing-a-route.md](guides/14-choosing-a-route.md) |
| Fallstudien zu realen Projekten, mit Versionen und Grenzen | [15](guides/15-case-studies-what-each-project-actually-did.md) |
| Symptom → Ursache für Synchronisierung, Rendering und Kollision | [16](guides/16-ownership-sync-and-rendering.md) |
| Referenz: alles, was eine Dekompilierung beinhaltet | [17](guides/17-decompile-system-map.md) |
| Projektdateien, die von Leuten kopiert werden | `templates/` |

## Offene Debatten

[Leitfaden 4](guides/04-prompting-and-workflow.md#the-prompting-debate) enthält einen langen Abschnitt darüber, ob detaillierte Prompts oder kurze, lose Prompts besser funktionieren. Die Meinung ist stark geteilt. Wenn Sie einen kontrollierten Vergleich durchführen würden, wäre das ein nützlicher Beitrag und wäre willkommen. Veröffentlichen Sie die Ergebnisse auf Discord oder öffnen Sie eine Pull-Anfrage.

[Anleitung 8](guides/08-mod-loaders-and-script-extenders.md) fehlt viel. Wenn Sie wissen, dass ein Spiel über ein gutes Modding-Setup verfügt, das nicht aufgeführt ist, fügen Sie es hinzu. Fügen Sie den Loader, seine Sprache und einen Link hinzu.

Zwei weitere bekannte Lücken:

- **Nicht-Windows.** Die wichtigsten Beispielprojekte sind nur für Windows. Einige Ersteller berichten über Linux- (Wine/Proton) und macOS- (CrossOver) Setups, die in [Anleitung 8] (guides/08-mod-loaders-and-script-extenders.md#windows-is-the-common-denominator) aufgeführt sind. Ein schrittweises Aufschreiben eines solchen würde eine echte Lücke füllen.
- **Spiele mit Veröffentlichungsbeschränkungen.** Halo MCC und die Xbox-Decomp-Projekte haben Bedingungen, die die Nutzung eines Ports einschränken, und niemand hat das geschrieben.

## Lizenz

Durch Ihren Beitrag erklären Sie sich damit einverstanden, dass Ihre Arbeit unter der [MIT-Lizenz] (LICENSE) des Repos veröffentlicht wird.

## Verhaltenskodex

Seien Sie nützlich und anständig. Kein Gatekeeping, kein „Sag der KI einfach, dass sie es tun soll“ als Entlassung und kein Spott über Anfänger. Die meisten Leute, die hier ankommen, sind Anfänger, und es geht darum, derjenige zu sein, der hilft.