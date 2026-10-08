# 1. Einen KI-Agenten auswählen und einrichten

## Agent vs. Chat-Website

Die meisten Leute bleiben dabei hängen.

- **Eine Chat-Website** (claude.ai im Browser, ChatGPT im Browser) sieht nur, was Sie einfügen oder hochladen. Es kann Ihre Spielordner nicht öffnen, sodass Sie auf die Fehlermeldung „Datei zu groß“ stoßen und am Ende Code von Hand kopieren und einfügen müssen.
- **Ein Agent** läuft auf Ihrem PC. Es liest Ihre Spielordner, erstellt und bearbeitet Dateien, führt Builds aus und liest Protokolle. Nichts zum Hochladen.

Sie wollen einen Agenten. Wenn Sie die Desktop-App Claude verwenden, suchen Sie nach dem Codemodus. Es befindet sich oben links und ist leicht zu übersehen. Die genauen Schritte finden Sie in den aktuellen Dokumenten des Anbieters.

## Welcher Agent

Meistens nutzen die Mitglieder diese. Wählen Sie eines aus und bleiben Sie dabei, während Sie lernen.

| Werkzeug | Notizen aus der Community |
|------|------------|
| **Claude Code** | Die am häufigsten genannten. Funktioniert über die Desktop-App, ein Terminal oder eine VS Code-Erweiterung |
| **Codex** | Wird auch häufig verwendet, unter anderem zum Ausführen der Ghidra-basierten Dekompilierung |
| **OpenCode** | Funktioniert mit vielen Modellen, auch kostenlosen. Welches kostenlose Modell das beste ist, ist noch offen |
| **VS-Code + Roo-Code + OpenRouter** | Eine Pay-per-Use-Route, üblicherweise gepaart mit einem DeepSeek-Modell, wenn ein Claude-Plan außer Reichweite ist |

### Eine Anmerkung zu „MCP“

Mehrere Leute haben diese verwechselt. **Claude Code und Codex sind Agenten.** MCP (Model Context Protocol) ist ein Standard zum Einbinden zusätzlicher Tools in einen Agenten.

Zum Starten benötigen Sie **keinen** MCP-Server. In keinem der Beispielprojekte ist dies als Anforderung aufgeführt.

Wenn Sie dann etwas zurückentwickeln, wird es sich lohnen, eines zu haben. Ghidra und IDA liefern beide MCP-Server, was bedeutet, dass der Agent Funktionen selbst dekompilieren und umbenennen kann, anstatt dass Sie die Disassemblierung in einen Chat einfügen müssen. Der offizielle [Hex-Rays IDA MCP](https://github.com/HexRaysSA/ida-mcp) wird mit einem Befehl installiert, und [ghidra-mcp](https://github.com/bethington/ghidra-mcp) macht dasselbe für die kostenlose Option.

### Was der Agent ist

Fast alle davon sind Terminalprogramme oder eine VS-Code-Erweiterung. Der Agent wird auf Ihrem Computer mit dem Dateizugriff Ihres Benutzerkontos ausgeführt. Was Sie also schützt, hängt davon ab, wie Sie ihn konfiguriert haben.

Claude Der Code fragt nach, bevor er reagiert, zeigt Dateiänderungen als Unterschiede zur Genehmigung an und verfügt über eine integrierte Sandbox, die Sie mit `/sandbox` einschalten können. Codex verfügt über eigene Berechtigungs- und Sandbox-Einstellungen. Der Schutz sinkt, wenn Benutzer in den Vollzugriffsmodus wechseln, was die Mitglieder hier beschreiben. Aus diesem Grund ist der Sicherheitsabschnitt am Ende dieses Handbuchs wichtig: Die Standardeinstellungen helfen, und der Fehlermodus schaltet sie aus.

Es lohnt sich, die Sandbox zu verstehen, bevor Sie sich darauf verlassen, denn sie hat echte Grenzen. Es deckt nur Shell-Befehle ab, sodass die eigenen Dateitools, Hooks und lokalen MCP-Server von Claude weiterhin mit Ihrem vollen Zugriff ausgeführt werden. Es läuft auf macOS, Linux und WSL2, daher benötigen Sie unter nativem Windows Claude Code in WSL2, um es zu erhalten. Es ist standardmäßig deaktiviert. Und wenn es nicht gestartet werden kann, weil eine Abhängigkeit fehlt oder die Plattform nicht unterstützt wird, warnt Sie der Claude-Code und führt die Befehle ohne Sandbox weiter aus, anstatt anzuhalten. Wenn Sie `failIfUnavailable` festlegen, wird es stattdessen beendet. Dies ist die strengere Wahl, wenn Sie möchten, dass die Sandbox ein echtes Tor ist.

Noch etwas Wissenswertes: Wenn ein Befehl unter der Sandbox fehlschlägt, versucht Claude ihn möglicherweise mit `dangerouslyDisableSandbox` erneut, und dieser Wiederholungsversuch wird außerhalb der Grenze ausgeführt. In den Standardmodi erhalten Sie eine Eingabeaufforderung, es sei denn, eine entsprechende Zulassungsregel deckt dies ab. Lehnen Sie diese also ab, wenn Sie sie nicht erwartet haben. Im `bypassPermissions`-Modus wird der Wiederholungsversuch ohne Eingabeaufforderung ausgeführt, was ein weiterer Grund ist, nicht auf diese Weise auszuführen. `/sandbox` verfügt über eine Registerkarte „Überschreibungen“, die den Wiederholungsversuch deaktiviert, den sogenannten strikten Sandbox-Modus.

Sandbox-Befehle können weiterhin standardmäßig den größten Teil der Maschine lesen, einschließlich Anmeldeinformationsdateien wie `~/.ssh` und `~/.aws/credentials`, es sei denn, Sie verweigern diese Pfade in den Sandbox-Einstellungen.

Nichts davon macht es sicher. Es schränkt ein, was ein Shell-Befehl erreichen kann, was sich lohnt, und der Rest hängt immer noch von den Gewohnheiten am Ende dieses Handbuchs ab.

Keiner der Agenten greift alleine auf DRM oder Anti-Cheat zurück, und reine Online-Spiele sind für alle ein No-Go. Wenn ein Agent etwas ablehnt, lesen Sie den Grund, bevor Sie davon ausgehen, dass es sich um eine Einschränkung seiner Möglichkeiten handelt.

Sie benötigen keine IDE, die Installation von VS Code lohnt sich jedoch, damit Sie die richtigen Dateiansichten und Unterschiede erhalten. Der Agent erstellt Ihre Dateien und führt Ihre Builds in beide Richtungen aus, sodass Sie niemals Code manuell kopieren und in Ordner einfügen müssen.

## Welches Modell

Modelle ändern sich schnell. Überprüfen Sie daher vor der Auswahl, was aktuell ist.

– Die meisten Leute, die dies tun, kombinieren ein erstklassiges Claude-Modell mit Claude-Code. Mehrere erwähnen Claude Opus 5.5.
- Andere nutzen die Modelle von OpenAI über Codex.
- Billigere Modelle eignen sich für kleinere Aufgaben, benötigen aber mehr Betreuung (siehe den Handoff-Trick in [Anleitung 4](04-prompting-and-workflow.md)).
- **Lokale Modelle** (die auf Ihrer eigenen GPU laufen) funktionieren hierfür nicht gut. Eine 12-GB-GPU reicht für ein gutes lokales Codierungsmodell nicht aus, was diese Frage für die meisten Menschen beantwortet. Wenn Sie es trotzdem geschafft haben, fügen Sie bitte einen Bericht hinzu.
- Ihre Hardware (zum Beispiel ein 5090) spielt bei Cloud-Modellen keine Rolle. Die KI läuft auf den Servern des Anbieters.

## Kosten- und Nutzungsbeschränkungen

Pläne ändern sich oft, schauen Sie daher auf der aktuellen Seite des Anbieters nach. **[Leitfaden 11](11-models-and-cost.md) enthält spezifische Empfehlungen**, einschließlich des für jedes Budget zu verwendenden Modells. Die Kurzversion: OpenCode Go für etwa 10 $ ist der beste Wert, Claude Pro für 20 $ ist das beste Einzelabonnement und ein Upgrade kostet 20 $, dann 100 $ und dann 200 $.

Was Sie erwartet:

- Bezahlte Pläne haben ein kurzes Reset-Fenster (ca. 5 Stunden) und ein wöchentliches Limit.
- Etwa 3–4 Stunden Dauerbetrieb des Spitzenmodells Claude pro 5-Stunden-Fenster sind ein typisches Budget.
- Die 20-Dollar-Stufe reichte aus, um ein völlig neues Basketballspiel zu entwickeln.
- **Kostenlose Stufen:** Niemand hat bestätigt, ob Sie damit ein echtes Projekt durchführen können. Erwarten Sie, dass Sie schnell an Ihre Grenzen stoßen. Die andere Option ist ein Pay-per-Use-API-Schlüssel (OpenRouter und ähnliches).
- Lange Sitzungen beanspruchen mehr von Ihrem Limit, da das gesamte Gespräch mitgeführt wird. Starten Sie ab und zu einen neuen Chat mit einer kurzen Übergabenotiz. Siehe [Leitfaden 4](04-prompting-and-workflow.md).

## Sicher aufstellen

Agenten können Dateien lesen und löschen und viele Mitglieder führen sie mit umfassendem Zugriff aus. Das ist bequem und riskant zugleich. Ein paar Gewohnheiten verringern das Risiko:

1. **Erstellen Sie einen Ordner für das Projekt** und führen Sie den Agenten darin aus.
2. **Verwenden Sie Git vom ersten Tag an.** Commit nach jedem Arbeitsschritt, damit Sie Fehler rückgängig machen können.
3. **Sichern Sie Ihre Spielstände** vor dem Testen.
4. **Seien Sie vorsichtig mit den Modi „Vollzugriff“.** Das Ausführen eines Agenten mit vollem PC-Zugriff ist bequemer, aber ein Fehler kann Dateien beeinträchtigen, die Ihnen wichtig sind. Ein separates Windows-Benutzerkonto, eine virtuelle Maschine oder ein Container wie Podman begrenzt den Schaden.
5. **Halten Sie Passwörter und API-Schlüssel von Dateien fern, die der Agent lesen kann**, und von Ihrem Repo.
6. **Wenn der Agent weiterhin keinen Zugriff erhält** (eine häufige Codex-Beschwerde), lesen Sie die Dokumentation dieses Tools zu Berechtigungs- und Sandbox-Einstellungen und gewähren Sie ihm nur Zugriff auf Ihren Projektordner und Ihre Spielordner.
7. **Schreiben Sie die Regeln auf, anstatt sich auf Ihr Gedächtnis zu verlassen.** Eine Regeldatei in Ihrem Projekt bedeutet, dass der Agent sie in jeder Sitzung befolgt, auch in denen, die Sie vergessen. Siehe [`templates/AGENTS-starter.md`](../templates/AGENTS-starter.md).

## Hilfreiche Extras (optional)

- **VS-Code** (oder ein anderer Editor) mit der Erweiterung Ihres Agenten, damit Sie die richtige Versionierung und Dateiansichten erhalten. Es ist nicht erforderlich.
- **Git und ein GitHub-Konto.** Sie benötigen diese, um Ihr Projekt zu teilen.
- **[universal-modder](https://github.com/rehan-remade/universal-modder):** ein Open-Source-Satz von elf Agentenfähigkeiten plus einer CLI, der Spielaufklärung, Reverse Engineering, Asset-Generierung, In-Game-Tests, Veröffentlichung und eine gemeinsame Wissensdatenbank mit Feldnotizen abdeckt. Installieren Sie es mit `npx skills add https://github.com/rehan-remade/universal-modder` oder klonen Sie das Repo und starten Sie Ihren Agenten darin. Funktioniert mit Claude Code, Codex, Cursor, Gemini CLI, Copilot und OpenCode. Seine Grafiktools benötigen einen separaten FAL-API-Schlüssel und es benötigt Python 3.10+ und ffmpeg. Es beschränkt sich auf Einzelspieler- oder Offline-Spiele, die Sie besitzen, und berührt Anti-Cheat nicht.

---

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/01-choose-and-set-up-an-ai-agent.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/01-choose-and-set-up-an-ai-agent.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>