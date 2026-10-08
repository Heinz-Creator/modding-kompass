# Rechtlicher Hinweis

**Dies ist keine Rechtsberatung und begründet keinerlei Rechte.** Niemand, der dies liest, ist dadurch geschützt. Es dient dazu, aufzuzeichnen, um welches Projekt es sich handelt, um auf das Verhalten hinzuweisen, das Ihr Risiko wirklich senkt, und um den Prozess festzulegen, der gilt, wenn ein Herausgeber hinter Ihnen her ist.

Wenn Sie über Geld verfügen, ist es das Beste, vor der Veröffentlichung mit einem Anwalt für geistiges Eigentum zu sprechen, und nicht erst, nachdem Sie einen Brief erhalten haben. Alles Nachfolgende sind allgemeine Informationen.

## Was dieses Repository ist

Eine Reihe von von der Community verfasster Anleitungen zur Verwendung von KI-Coding-Agenten für das Modding persönlicher Spiele. Der beabsichtigte Umfang ist durchgehend:

- Spiele, **von denen Sie eine Kopie besitzen**, auf Ihrer eigenen Hardware
- **Einzelspieler- oder Offline-Spiel**
- Mods und Tools, die **aus Ihrer eigenen Installation lesen**, anstatt Spielinhalte zu versenden
- Projekte, die als **nur Quellcode** unter einer offenen Lizenz veröffentlicht wurden, mit Nennung dessen, worauf sie aufgebaut sind

Bei den Leitfäden handelt es sich um **inoffizielles Fanmaterial**. Sie stehen in keiner Verbindung zu den Entwicklern oder Herausgebern von Spielen, werden von ihnen nicht unterstützt oder gesponsert. Es werden keine Markenzeichen eines Spieleherausgebers verwendet, außer zur Identifizierung des besprochenen Spiels.

## Was ein Haftungsausschluss leisten kann und was nicht

Eine Offenlegung des Umfangs macht rechtswidriges Verhalten nicht rechtmäßig und dieses Dokument hindert einen Verlag nicht daran, Sie zu kontaktieren. Es bewirkt zwei Dinge, die rechtliches Gewicht haben:

**Es ist ein Beweis gegen Vorsatz.** Das US-amerikanische Urheberrecht erlaubt höhere Schadensersatzansprüche bei vorsätzlicher Verletzung, und der gesetzliche Schadensersatz für ein einzelnes Werk kann bei vorsätzlicher Verletzung bis zu 150.000 US-Dollar betragen. Gerichte haben Urteile zu genau diesem Höchstwert pro Werk gefällt. Eine dokumentierte, gutgläubige Position darüber, was Ihr Projekt tut und was nicht, ist ein Beweis dafür, dass Sie nicht versucht haben, etwas zu erreichen, von dem Sie wussten, dass Sie kein Recht darauf hatten. Das ist der einzige Ort, an dem es legal ist, Dinge aufzuschreiben.

**Es weckt Erwartungen an die Leser.** Jemand, der den Umfang kennt, bevor er etwas klont, wird davon weniger überrascht sein.

Das ist alles. Im Folgenden dreht sich alles um Verhalten, denn das Verhalten bestimmt tatsächlich Ihre Exposition.

## Was Ihr Risiko tatsächlich senkt

In der groben Reihenfolge, wie wichtig es ist:

1. **Keine Spieledateien in Ihrem Repository.** Keine Assets, keine Texturen, kein Audio, keine Karten, keine dekompilierte Quelle, kein Spiel-Dump. Nur Code, Dokumente und Build-Skripte. Dies ist derjenige, der Hobbyprojekte beendet. Verwenden Sie eine Whitelist `.gitignore` und überprüfen Sie Ihren Verlauf mit `git log --all --stat`, da sich ein Asset, das einmal festgeschrieben und später gelöscht wurde, immer noch im Verlauf befindet und immer noch öffentlich ist.
2. **Umgehen Sie nichts.** Die Verwendung eines Loaders, der vom Herausgeber bereitgestellt oder von der Community offen verwaltet wird, ist ein anderer Vorgang als das Patchen eines Checkouts einer ausführbaren Datei. Anti-Cheat ist die gleiche Kategorie. Umgehung wird wichtiger behandelt als Kopieren, und der Rechtsstreit um 2026 Switch wurde genau auf dieser Grundlage entschieden: Im September 2026 erließ ein Bundesgericht eine einstweilige Verfügung gegen Anbieter, die MIG Switch-Flash-Karten und Dumper verkauften, mit der Begründung, dass die Produkte selbst die technologischen Schutzmaßnahmen von Nintendo umgingen. Ein Versäumnisurteil in Höhe von 4,5 Millionen US-Dollar gegen einen r/SwitchPirates-Moderator in derselben Kampagne wurde auf der Grundlage derselben Theorie berechnet. Nichts in diesem Repo hilft Ihnen dabei, eines dieser Dinge zu tun.
3. **Konkurrieren Sie nicht mit dem Original.** Eine auf Interoperabilität ausgerichtete Neuimplementierung befindet sich in einer anderen Position als ein Konkurrenzprodukt. In den US-Fällen, die Reverse Engineering schützen, geht es vor allem um Verständnis und Kompatibilität.
4. **Kopieren Sie nicht die Macken des Originals.** Identische Fehler und identischer toter Code werden als starker Beweis für das Kopieren behandelt. Schreiben Sie Ihr eigenes.
5. **Führen Sie Aufzeichnungen.** Quittungen für die Spiele, die Sie besitzen, die Versionen, mit denen Sie getestet haben, Daten. Wenn Ihnen jemand vorwirft, Sie würden etwas verbreiten, produzieren Sie Ihre eigenen Aufzeichnungen.
6. **Upstream-Projekte gutschreiben** und ihre Lizenzen behalten. Siehe [Leitfaden 6](guides/06-rules-legal-and-publishing.md).
7. **Sagen Sie, wofür Sie KI verwendet haben.** Mehrere Projekte in dieser Community tun dies, und nicht veröffentlichte KI-generierte Veröffentlichungen werden in einigen Kreisen feindselig aufgenommen.
8. **Bleiben Sie bei allen Anti-Cheat-Aktivitäten offline.** Erstellen oder veröffentlichen Sie niemals etwas, das jemandem dabei hilft, es zu umgehen, einschließlich Anweisungen.

## Wenn Ihr Repository abgeschaltet wird

Dies geschieht auch ohne Versandvermögen. Take-Two ließ GitHub re3 und reVC entfernen und verklagte später die Autoren. Activision hat dem H2M-Mod am Tag vor dem Start eine Unterlassungserklärung geschickt. Garry's Mod hat nach einem Deaktivierungsantrag zwanzig Jahre Nintendo-bezogene Workshop-Inhalte entfernt.

GitHub und Steam sind „Dienstanbieter“ gemäß 17 U.S.C. § 512, daher gilt für das von ihnen entfernte Material das DMCA-Benachrichtigungs- und Gegendarstellungsverfahren. Dies ist der Teil, der Ihnen einen formellen Weg vorgibt, anstatt nur zu löschen und zu hoffen.

**Ignorieren Sie es nicht und argumentieren Sie nicht sofort.** Finden Sie zunächst heraus, ob Sie mit der Behauptung einverstanden sind. Material, das dort nicht hätte sein sollen, kommt mit einer kurzen Notiz herunter, und dann geht es weiter. Das Anfechten eines Anspruchs, von dem Sie wissen, dass er berechtigt ist, kostet mehr als das Entfernen der Akte.

Auf eine Behauptung, die Sie für falsch halten, gibt es eine formelle Antwort. § 512(g)(3) legt fest, was eine Gegendarstellung enthalten muss:

- Ihre physische oder elektronische Unterschrift
- Identifizierung des entfernten Materials und **wo es vor der Entfernung aufgetaucht ist**
- Eine Erklärung **unter Strafe des Meineids**, dass Sie in gutem Glauben davon ausgehen, dass das Material aufgrund eines Fehlers oder einer falschen Identifizierung entfernt wurde
- Ihr Name, Ihre Adresse und Ihre Telefonnummer sowie eine Erklärung, in der Sie der Zuständigkeit des Bundesbezirksgerichts für den Bezirk, in dem Sie leben, zustimmen (oder, außerhalb der USA, für jeden Bezirk, in dem sich die Plattform befindet), und dass Sie die Zustellung des Verfahrens akzeptieren

Dann muss die Plattform gemäß § 512(g)(2) das Material **nicht weniger als 10 und nicht mehr als 14 Werktage** nach Erhalt Ihrer Gegendarstellung ersetzen, es sei denn, der ursprüngliche Beschwerdeführer teilt der Plattform mit, dass er eine gerichtliche Klage eingereicht hat.

Drei Warnungen, und sie sind nicht gering:

**Bei der Einreichung einer Gegendarstellung handelt es sich um eine rechtliche Einreichung, nicht um ein Support-Ticket.** Es beinhaltet eine Meineidbescheinigung.

**Sie akzeptieren, dass Sie in diesem Verfahren verklagt werden.** Die Zustimmung zur Gerichtsbarkeit und Zustellung des Prozesses verleiht der Erklärung ihre Gültigkeit. Der Kläger hat zehn bis vierzehn Werktage Zeit, um zu entscheiden, ob er die Klage einreicht.

**Eine wissentlich falsche Gegendarstellung führt zu Ihrer eigenen Haftung.** § 512(f) macht jeden, der wissentlich und erheblich falsch darstellt, dass Material einen Verstoß darstellt oder dass die Entfernung ein Fehler war, für Schäden und Anwaltskosten haftbar, die den Parteien entstanden sind, die sich darauf verlassen haben.

**Besorgen Sie sich einen Anwalt, bevor Sie eine Klage einreichen.** Eine IP-Beratung in Höhe von ein paar Hundert Dollar ist hier viel wert, verglichen mit der Offenlegung einer Klage wegen Meineids.

## Wenn Sie eine Abmahnung erhalten

Antworten Sie nicht selbst inhaltlich. Stimmen Sie nichts zu und ignorieren Sie es nicht.

- Beachten Sie die Frist und planen Sie sie ein. Die Helfer erhalten mehr Zeit, als die Leute erwarten.
- Holen Sie sich einen Anwalt für geistiges Eigentum. Dies ist der Punkt, an dem es aufhört, eine Hobbysache zu sein.
- Löschen Sie Ihr Repository nicht in Panik und löschen Sie nicht Ihren Git-Verlauf ohne Rat. Das Löschen kann wie die Vernichtung von Beweismitteln aussehen, und der Verlauf ist Ihr Beweis dafür, was Sie getan und was nicht versendet haben.
- Sammeln Sie die oben unter „Was Ihr Risiko tatsächlich senkt“ aufgeführten Aufzeichnungen: Belege, Versionen, Daten, Ihren eigenen Commit-Verlauf, Ihr `.gitignore`.

Die meisten Abmahnungen enden ohne Klage. Manche tun das nicht. Die wichtigste Variable ist, ob Sie zu Beginn sorgfältig damit umgegangen sind.

## Wiederverwendung

Die Guides sind MIT-lizenziert. Die rechtliche Analyse in [Leitfaden 13](guides/13-reverse-engineering-and-the-law.md) ist lehrreich und fasst öffentlich zugängliche Rechtsprechung und Gesetze zusammen. Es ist kein Ersatz für eine Beratung zu Ihrem spezifischen Projekt, und jeder, der es wiederverwendet, sollte dies selbst sagen.

Die Fälle stammen aus den Vereinigten Staaten. Die EU und das Vereinigte Königreich behandeln Reverse Engineering in mancher Hinsicht enger; Leitfaden 13 deckt den Unterschied ab. Wenn Sie sich außerhalb der USA befinden, ist dieser Abschnitt wichtiger als der Rest dieser Datei.

## Weiterführende Literatur

- [Leitfaden 6](guides/06-rules-legal-and-publishing.md), die praktischen Regeln
- [Leitfaden 13](guides/13-reverse-engineering-and-the-law.md), wie das Gesetz Reverse Engineering tatsächlich behandelt
- [Leitfaden 10](guides/10-posting-your-project.md), Veröffentlichung und die Checkliste vor dem Flug
- 17 U.S.C. § 102(b), § 117, § 1201 und § 512
- [Rundschreiben 10](https://www.copyright.gov/circs/circ10.pdf) des U.S. Copyright Office zu Abschnitt 512