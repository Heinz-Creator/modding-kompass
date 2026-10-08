# 6. Regeln, Recht und Veröffentlichung

Dies ist keine Rechtsberatung. Es ist das, was der Discord erfordert und was die Beispielprojekte tun. Die vollständige Anleitung zum Posten finden Sie in [Leitfaden 10](10-posting-your-project.md).

## Die goldene Regel: Keine Spieledateien in Ihrem Repo

Ihr Repository enthält **nur Ihren Code**. Begehen Sie niemals Folgendes:

- Spielressourcen (Modelle, Texturen, Sounds, Schriftarten, Karten, Shader)
- Spieldateien oder Ordner
- dekompilierter Code oder Ghidra-Datenbanken
- Aus dem Spiel extrahierte Dateien
- Minecraft Assets (sie stammen zur Laufzeit aus der eigenen Kopie des Players)

Die Spieler liefern ihre eigenen Kopien. Die Beispielprojekte handhaben dies auf verschiedene Arten:

- **Setup, das aus den Kopien des Spielers erstellt wird.** GTA San AnSkateas liefert ein Setup-Skript aus, das aus den eigenen Installationen des Spielers erstellt, was der Mod benötigt.
- **Extraktor-Tools.** gang-beasts-rust verfügt über Python-Tools, die die Installation des Players lesen und extrahierte Daten in einen Ordner schreiben, den Git ignoriert. Bitten Sie Ihren Agenten, eines davon für Sie zu schreiben.
- **Lesen zur Laufzeit.** IW4L und Benilla lesen die Dateien des Spiels an Ort und Stelle und kopieren sie niemals.

### Verwenden Sie eine Whitelist `.gitignore`

Ein normaler `.gitignore` listet auf, was weggelassen werden soll. Eine **Whitelist** `.gitignore` ignoriert alles und listet nur auf, was aufgenommen werden soll. Auf diese Weise kann eine extrahierte Datei niemals versehentlich übernommen werden. Gang-Beasts-Rust macht das. Bitten Sie Ihren Agenten, es am ersten Tag einzurichten.

Die Vorlage in [`AGENTS-starter.md`](../templates/AGENTS-starter.md) enthält dies als feste Regel.

## Nur Einzelspieler und offline

- **Fügen Sie keinen Code in einen Online-Client ein.** Kernel- und Benutzermodus-Anti-Cheat sind ein Stoppschild: Easy Anti-Cheat, BattlEye, Vanguard, EA Javelin, Ricochet, ACE, nProtect, XIGNCODE und mhyprot. Du kannst gesperrt werden. Mitglieder berichten, dass Claude nicht dabei hilft, Anti-Cheat zu umgehen, und das Universal-Modder-Toolkit beschränkt sich auch auf Einzelspieler- oder Offline-Spiele und hält sich von Anti-Cheat fern.
- Wenn Ihr Spiel über einen Online-Modus verfügt, arbeiten Sie nur im Einzelspieler- oder Offline-Modus.
- Tools, die neben einem geschützten Spiel ausgeführt werden, können dessen Anti-Cheat auslösen, selbst wenn Sie es nie berühren. Schließen Sie das Spiel vor einer Reverse Engineering-Sitzung.

## Automatisieren Sie nicht die Tastatur der Person

Dies gerät in Vergessenheit, weil es nicht um die Spielregeln geht, sondern darum, wer an der Maschine sitzt.

Eine Automatisierung, die Maus und Tastatur steuert, übernimmt deren Eingaben. Fragen Sie nach, bevor Sie eine lange automatisierte Sitzung starten, während Sie am PC sitzen, und prüfen Sie zunächst, ob das Fenster inaktiv ist.

Fragen Sie auch vor diesen Dingen: Installieren eines Loaders in einem Spielordner, Ändern der Registrierungs- oder Grafikeinstellungen, Löschen von Inhalten oder Veröffentlichen in ihrem Namen.

Und beenden Sie keine Prozesse mit einem Wildcard-Matcher. `pkill -f` entspricht Ihrer eigenen Shell. Töten Sie anhand der genauen Prozess-ID.

Dies ist die Regel, gegen die Menschen am häufigsten verstoßen, meist aus Versehen. Wenn Sie jemand bittet, den Inhalt eines Online-Spiels zu einem Projekt hinzuzufügen, ist das die richtige Antwort. Siehe die Tabelle „Ideen, die nicht funktionieren“ in [Leitfaden 2](02-passthrough-mods.md).

## Reverse Engineering: Was ist in Ordnung und was nicht

Reverse Engineering ist ein normaler Teil dieser Arbeit und [Leitfaden 3](03-rust-rewrites-and-ports.md) deckt die Werkzeuge ab. Das Gesetz hinter diesen Zeilen finden Sie in [Leitfaden 13](13-reverse-engineering-and-the-law.md), und was zu tun ist, wenn ein Verlag Sie kontaktiert, finden Sie in [LEGAL.md](../LEGAL.md). Die Zeilen sind:

**Gut:**
- Studieren Sie ein Spiel, das Sie besitzen, auf Ihrem eigenen Computer und für den eigenen Gebrauch
- Verwendung von Dekompilierern und Formatdokumentation zum Verständnis von Dateiformaten
- Veröffentlichen Sie Ihre *Ergebnisse* als Dokumentation, so existieren OpenMW und OpenRCT2
- Extraktoren bauen, damit andere Spieler ihre eigenen Kopien lesen können
- Extrahieren eines Spiels von Ihrer eigenen Disc oder Ihrem eigenen Dump, damit ein Versionsanpassungstool den benötigten Build erreichen kann

**Nicht in Ordnung:**
- DRM, Aktivierung oder Kopierschutz umgehen
- Umgehung von Anti-Cheat
- Weiterverbreitung extrahierter Assets, dekompilierter Quellen oder Spieldaten
- Herunterladen einer ISO oder eines Dumps von einer Filesharing-Site
- Entwicklung eines Tools, dessen Zweck es ist, Zugriffskontrollen zu umgehen

Ein Versions-Downgrader sitzt auf der guten Seite. Es existiert, damit eine Kopie, die Sie besitzen, den Build erreicht, für den ein Mod geschrieben wurde, und es hat keinen Einfluss auf den Schutz auf der Disc.

Das allgemeine Prinzip: Wenn ein Lader überprüft, ob Sie das Spiel besitzen, erfüllen Sie die Prüfung auf die vorgesehene Weise. tModLoader weigert sich zu starten, es sei denn, die kostenlose Begleit-App befindet sich in Ihrer Steam-Bibliothek, und die Antwort besteht darin, diese App hinzuzufügen und nicht, die Prüfung zu patchen. Wenn ein Tool nur funktioniert, indem es DRM deaktiviert oder eine Eigentumsprüfung umgeht, ist das der Fall.

Es gibt einen rechtlichen Grund, warum diese Regel an dieser Stelle übernommen wird, und es lohnt sich, sie zu kennen, da sie mehr Fälle abdeckt als das tModLoader-Beispiel. Die Umgehung einer technischen Schutzmaßnahme ist ein vom Kopieren getrennter Verstoß und steht für sich allein. Die Installation eines Mods kann völlig legal und dennoch illegal sein, wenn die Installation bedeutet, dass der Schutz überschritten wird. Die Verwendung eines Loaders, der vom Herausgeber bereitgestellt wird oder den die Community offen pflegt, ist ein anderer Vorgang als das Patchen eines Checkouts einer ausführbaren Datei.

**Eine weitere Regel, die die Leute überrascht**, und dabei geht es überhaupt nicht um DRM. Gerichte betrachten **identische Fehler und identischen toten Code** als den stärksten verfügbaren Beweis dafür, dass Sie kopiert und nicht unabhängig geschrieben haben. Zwei Personen, die die gleiche Spezifikation umsetzen, kommen nicht unabhängig voneinander zum gleichen Bruchkantenfall. Wenn Ihr Code und das Original eine sinnlose Eigenart aufweisen, haben Sie ihn kopiert. Schreiben Sie diese absichtlich um und hinterlassen Sie einen Kommentar mit der Begründung.

Das ist bei einem Agenten wichtiger als bei einer Person, denn ein Agent, der mit dekompilierten Ausgaben arbeitet, reproduziert die Struktur originalgetreu, einschließlich sinnloser Teile. [Leitfaden 13](13-reverse-engineering-and-the-law.md#doing-this-with-an-agent) beschreibt, wie man dies umgeht.

Auch ohne den Versand von Assetsn kommt es zu Takedowns. Take-Two veranlasste GitHub, re3 und reVC, den rückentwickelten GTA III- und Vice City-Code, zu entfernen, und verklagte später die Autoren. Activision hat dem H2M-Mod am Tag vor seiner Veröffentlichung eine Unterlassungserklärung geschickt. Garry's Mod hat nach einem Deaktivierungsantrag zwanzig Jahre Nintendo-bezogene Workshop-Inhalte entfernt. Es ist notwendig, Spieledateien aus Ihrem Repo fernzuhalten, aber nicht ausreichend.

Wenn Ihnen das passiert, gibt es einen formellen Weg statt nur zu löschen und zu hoffen, und er enthält Fristen und Meineidbescheinigungen. Lesen Sie es in [LEGAL.md](../LEGAL.md#if-your-repository-gets-a-takedown), bevor Sie jemandem antworten, und beauftragen Sie einen Anwalt, bevor Sie etwas einreichen.

Wenn Sie nicht sicher sind, wo sich eine Leitung befindet, fragen Sie nach. Niemand gerät in Schwierigkeiten, weil er zuerst fragt.

## Online-Spiel und Anti-Cheat

Einzelspieler und offline, immer. Zwei Dinge sollten präzisiert werden, denn beide kommen zur Sprache:

- **Anti-Cheat ist kein generelles Verbot.** Einige Spiele mit Anti-Cheat ermöglichen das Offline-Modifizieren über die spieleigene Option. Rocket League ist das gängige Beispiel: Für das Online-Spielen ist Easy Anti-Cheat erforderlich und Mods laufen nicht, wenn es eingeschaltet ist, aber wenn es ausgeschaltet ist, funktionieren Offline-Spiele, Training, LAN und Wiederholungen mit Mods. Alles, was online ist, ist immer noch draußen.
- **Veröffentlichen Sie niemals etwas, das jemandem hilft, Anti-Cheat zu umgehen.** Kein Tool, keine Konfiguration, keine Anweisungen.

## Kredit und Lizenzen

- **Schreiben Sie jedes Projekt, auf dem Sie aufbauen oder aus dem Sie lernen, gut.** FalloutCraft und OWCraft nennen SkyCraft beide namentlich und behalten ihre Lizenz.
- **Behalten Sie ihre Lizenzen.** Fügen Sie eine `THIRD-PARTY-NOTICES.md` hinzu, in der aufgeführt ist, was Sie wiederverwendet haben und unter welcher Lizenz (OWCraft erledigt dies).
- **Wählen Sie eine Lizenz für Ihren eigenen Code.** MIT ist bei diesen Projekten weit verbreitet. Ohne eine Lizenz können andere Ihren Code nicht legal wiederverwenden.
- **Angenommen, es handelt sich um ein inoffizielles Fanprojekt** und steht in keiner Verbindung zum Entwickler oder Herausgeber des Spiels.
- **Angenommen, Sie haben KI verwendet.** Mehrere Beispielprojekte haben eine ehrliche Anmerkung dazu. Es hilft den Leuten, das Projekt zu beurteilen und ihm zu vertrauen. Auf nicht veröffentlichte, von der KI generierte Veröffentlichungen wird schlecht reagiert, und einige Communities verbieten sie gänzlich.
- **Sagen Sie, was fertig ist und was noch nicht.** Testen Sie, bevor Sie behaupten, dass etwas funktioniert.
- **Keine Decompiler-Ausgabe versenden.** Namen wie `FUN_` oder `sub_` in einem veröffentlichten Mod sagen einem Prüfer, dass der Code dekompiliert und nicht geschrieben wurde. Benennen Sie sie um.
- **Retail-Offsets fernhalten.** Eine fest codierte Adresse aus der ursprünglichen ausführbaren Datei hat keine Auswirkung auf Ihren eigenen Build und gibt an, woher der Code stammt.

Wenn ein Rechteinhaber Sie auffordert, etwas zu ändern oder zu entfernen, tun Sie es. Gang-Beasts-Rust sagt dies in seiner README-Datei und es ist die richtige Standardeinstellung, unabhängig davon, ob sich ein anderes Projekt darum kümmert oder nicht.

## Veröffentlichung auf dem Discord

#share-your-projects hat Regeln:

- **Ein GitHub-Repo-Link wird empfohlen**, wenn Sie möchten, dass andere Ihre Arbeit nutzen, aber dies ist nicht erforderlich. Laden Sie keine Dateien hoch und verlinken Sie keine direkten Downloads oder Dateihosts.
- Keine gestohlenen Assets, durchgesickerten Code oder Links zu Raubkopien oder durchgesickertem Material.
- Verwenden Sie die Tags und die Vorlage aus dem angepinnten Richtlinienbeitrag.
- Sagen Sie, welche Spiele und Versionen Ihr Projekt benötigt.
- Erwähnen Sie, worauf Sie aufgebaut haben.

[Leitfaden 10](10-posting-your-project.md) enthält den vollständigen Beitragsleitfaden und eine Checkliste vor dem Flug.

## Andere Orte zur Veröffentlichung

- **Steam Workshop und Ähnliches:** Stellen Sie sicher, dass in Ihrem Upload keine urheberrechtlich geschützten Spielinhalte enthalten sind. Bitten Sie Ihren Agenten, einen einfachen Asset-Extraktor zu schreiben, mit dem Spieler schneller Assets versenden können. Überprüfen Sie die eigenen Regeln jeder Plattform.
- **Releases auf GitHub:** Viele Projekte liefern eine Zip-Datei auf ihrer Release-Seite aus. Stellen Sie sicher, dass es keine Spieledateien enthält, bevor Sie es veröffentlichen.

## Checkliste vor der Veröffentlichung

- [ ] Mein Repo enthält keine Spieledateien, dekompilierten Code oder extrahierte Assets
- [ ] Ich verwende eine Whitelist `.gitignore`
- [ ] Ich habe jedes Projekt, auf dem ich aufgebaut habe, gutgeschrieben und ihre Lizenzen behalten
- [ ] In meiner README-Datei steht, welche Spiele und Versionen benötigt werden
- [] In meiner README-Datei steht, was funktioniert und was nicht
- [ ] In meiner README-Datei steht, dass es sich um ein inoffizielles Fanprojekt handelt und die Verwendung von KI erwähnt wird
- [ ] Meine Veröffentlichungs-ZIP-Datei (falls vorhanden) enthält keine Dateien des Spiels
- [ ] Ich habe es mit einem sauberen Setup getestet

## Wenn Sie bereits etwas vorangetrieben haben, sollten Sie es nicht getan haben

Der Git-Verlauf ist in dem Moment öffentlich, in dem Sie pushen. Die Schritte zur vollständigen Wiederherstellung finden Sie in [Anleitung 10](10-posting-your-project.md#if-you-already-committed-game-files). Gehen Sie davon aus, dass alles, was gepusht wurde, kopiert wurde. Eine Neufassung des Verlaufs allein entfernt ihn nicht von jemandem, der bereits geklont hat.

---

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/06-rules-legal-and-publishing.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/06-rules-legal-and-publishing.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>