# 13. Reverse Engineering und das Gesetz

**Hier handelt es sich nicht um eine Rechtsberatung, und die ehrliche Antwort auf die meisten Fragen in diesem Bereich lautet „Es kommt darauf an.“** Diese Seite existiert, weil die Regeln so wichtig sind, dass Folklore ein schlechter Ersatz ist. Lesen Sie es und entscheiden Sie dann, ob Sie einen echten Anwalt brauchen. Wenn ein Unternehmen Sie kontaktiert, weiß [LEGAL.md](../LEGAL.md), was in der ersten Woche zu tun ist.

Sofern nicht anders angegeben, unterliegt alles hier US-amerikanischem Recht. Die EU ist in einer wichtigen Hinsicht anders, worauf am Ende eingegangen wird.

## Die eine Idee, auf der die ganze Gegend basiert

Das US-Urheberrecht schützt keine Ideen, Verfahren, Prozesse, Systeme, Betriebsmethoden, Konzepte, Prinzipien oder Entdeckungen. 17 U.S.C. § 102(b). Es schützt den spezifischen Ausdruck, den ein Ersteller geschrieben hat.

Die Mechanik eines Spiels, seine Dateiformate, sein Netzwerkprotokoll, die Reihenfolge, in der seine physikalischen Schritte ablaufen: das sind Funktionen. Das Urheberrecht erreicht sie nicht. Geschützt ist der jeweilige Code, die Grafik, der Text, die Musik und das Leveldesign.

Diese Lücke ist der einzige Grund, warum Reverse Engineering normalerweise rechtmäßig ist. Man darf lernen, wie etwas funktioniert. Es ist Ihnen nicht gestattet, den geschriebenen Text zu kopieren.

Die Konsequenz daraus ist, dass die Leute etwas falsch machen. **Lesen ist kein Kopieren, wohl aber Disassemblieren.** Wenn ein Dekompilierer eine Binärdatei in lesbaren Text umwandelt, wird eine Kopie erstellt. Diese Kopie ist eine Kopie des geschützten Ausdrucks. Es kann immer noch eine faire Verwendung sein, aber nur aufgrund der unten aufgeführten Fälle.

## Blackbox, graue Box, weiße Box

Die Terminologie ist wichtig, da die drei Rechtspositionen sehr unterschiedlich sind.

**Black Box** testet über die Schnittstelle. Der Input geht rein, der Output kommt raus und das Innere wird nie betrachtet. Es gibt nirgendwo eine Kopie des Codes, daher gibt es überhaupt keine Urheberrechtsfrage.

**Graues Kästchen** ist teilweise sichtbar. Das Beobachten des Netzwerkverkehrs oder das Auslesen eines Werts aus dem Speicher während der Programmausführung sind graue Kästchen. Untersucht werden Daten, die das Programm zur Laufzeit erzeugt, und nicht seine Quelle.

**White Box** ist voller Zugriff auf die Interna. Der Code ist verfügbar und kann durchgehend gelesen werden.

Für diese Community ist die praktische Rangfolge klar und nicht knapp:

> **Bevorzugen Sie Blackbox, wo immer die Frage dies zulässt.** Dies ist der einzige Ansatz, der keine Urheberrechtsprobleme aufwirft, da nichts kopiert wird.

Um das Problem über die Benutzeroberfläche zu lösen, müssen Sie Dateien in einem Hex-Editor öffnen und beobachten, wie das Spiel auf Änderungen reagiert, anstatt nach einem Dekompiler zu greifen. Viele Modding-Arbeiten sind Black Box und niemand ist sich dessen bewusst. Dekompiler kommen dann ins Spiel, wenn die Beobachtung die Frage, welche Bedingung die Fälle ohnehin erfordern, wirklich nicht beantworten kann.

## Was die Gerichte tatsächlich entschieden haben

Vier Fälle sind wichtig. Bis auf einen kommen alle aus dem Ninth Circuit, der Kalifornien und Washington umfasst, wo die meiste amerikanische Software-Arbeit stattfindet.

### Sega gegen Accolade (9. Cir. 1992)

Accolade wollte Spiele für Genesis veröffentlichen und lehnte Segas Lizenzbedingungen ab, die Exklusivität verlangten und die Schnittstellenspezifikationen geheim hielten. Also kaufte Accolade eine Konsole und drei Module, ließ einen Dekompiler laufen, untersuchte die Ausgabe und ermittelte die Schnittstellenanforderungen. Anschließend wurden eigene Spiele geschrieben.

Der Bestand, den jeder spätere Fall zitiert:

> „Wenn die Demontage die einzige Möglichkeit ist, Zugang zu den Ideen und Funktionselementen zu erhalten, die in einem urheberrechtlich geschützten Computerprogramm enthalten sind, und wenn es einen legitimen Grund für die Suche nach einem solchen Zugang gibt, ist die Demontage aus rechtlicher Sicht eine faire Nutzung des urheberrechtlich geschützten Werks.“

Zwei Bedingungen, beide erforderlich. Es muss die einzige Möglichkeit sein, an die Funktionsteile zu gelangen, und Sie müssen einen berechtigten Grund dafür haben.

Das Gericht lehnte auch Segas Markenanspruch ab. Die Spiele von Accolade lösten Segas Meldung „HERGESTELLT UNTER LIZENZ VON SEGA“ aus, da diese in den Sperrcode der Konsole integriert war. Das Gericht entschied, dass dies Segas eigenes Verschulden sei und Accolade nicht zur Last gelegt werden könne.

Eine wissenswerte Grenze. Das erstinstanzliche Gericht hatte vorgeschlagen, dass Accolade einen Reinraum hätte nutzen sollen. Das Berufungsgericht bezeichnete dies als eindeutig fehlerhaft, da ein Reinraum nicht verrät, welche Schnittstellenspezifikationen *sind*. Man muss sie zerlegen, um sie zu erlernen, und erst dann wird ein Reinraum möglich.

### Atari Games gegen Nintendo (Fed. Cir. 1992)

Atari hat die Lockout-Chips von Nintendo deprozessiert, was bedeutet, dass Schichten chemisch vom Silizium abgelöst werden, um den Objektcode darunter zu lesen. Der Federal Circuit entschied, dass Reverse Engineering, das „nicht durch“ eine Raubkopie des Programms beeinträchtigt wird und zum Verständnis des Programms erforderlich ist, eine faire Verwendung darstellt.

Dann wird die Grenze festgelegt, die wichtiger ist als die Erlaubnis:

> „Diese faire Nutzung gab Atari nicht mehr als das Recht, das 10NES-Programm zu verstehen und die geschützten von den ungeschützten Elementen des 10NES-Programms zu unterscheiden. Jegliches Kopieren, das über das hinausgeht, was zum Verständnis des 10NES-Programms erforderlich ist, stellte einen Verstoß dar. Atari konnte Reverse Engineering nicht als Vorwand verwenden, um geschützte Ausdrucksformen kommerziell oder anderweitig missbräuchlich auszunutzen.“

Atari hat verloren. Es hatte den Quellcode ohne Genehmigung vom Copyright Office erhalten, was einen separaten Verstoß darstellt, und sein Ersatzchip reproduzierte Anweisungen, die Nintendo Jahre zuvor aus dem Original *gelöscht* hatte.

### Sony gegen Connectix (9. Cir. 1999)

Connectix hat einen Emulator für die PlayStation entwickelt und dafür das BIOS der Konsole rückentwickelt. Das Gericht listete vier Möglichkeiten zum Reverse Engineering von Software auf, was an sich schon ein nützliches Menü darstellt:

1. Lesen Sie mehr über das Programm
2. Beobachten Sie, wie es am Computer funktioniert
3. Statische Prüfung einzelner Maschinenanweisungen
4. Dynamische Prüfung während des Betriebs

Die Methoden 2 bis 4 erfordern alle das Kopieren des Programms in den RAM. Das Gericht entschied, dass dieses Zwischenkopieren eine faire Verwendung darstellte, da keine Kopien des Sony-Materials im Produkt von Connectix landeten. Es lehnte es auch ab, eine Grenze zwischen dem „Studium“ des Codes und seiner „Verwendung“ zu ziehen, und bezeichnete diese Unterscheidung als künstlich.

### NEC gegen Intel (N.D. Cal. 1989)

Der erste Fall, in dem ein Reinraum erfolgreich als Verteidigung eingesetzt wurde, und die Ursache der Mechanik unten.

## Die Regel, die Sie tatsächlich überraschen wird

Vergessen Sie die Fair-Use-Analyse. Das ist das Praktische.

**Gerichte betrachten identische Fehler und identische unnötige Anweisungen als den stärksten möglichen Beweis für das Kopieren.**

Von *Atari*: „Das Vorhandensein identischer unnötiger Anweisungen in beiden Codes ist ein starker Beweis für erhebliche Ähnlichkeit.“ Von *E.F. Johnson Co. gegen Uniden Corp.*, wo Uniden genau in diesem Punkt verlor und „so weit ging, die Fehler und unnötigen Informationen in das Programm zu kopieren“.

Warum? Unabhängige Entwickler, die mit derselben Spezifikation arbeiten, treffen unterschiedliche Entscheidungen. Unterschiedliche Variablennamen, unterschiedliche Reihenfolge, unterschiedlich strukturierte Funktionen. Zwei unabhängige Implementierungen sind sich nicht darüber einig, welcher tote Zweig beibehalten werden soll.

Wenn Ihr Code und das Original eine Eigenart aufweisen, die keinen Zweck erfüllt, sind Sie nicht beide unabhängig voneinander darauf gekommen. Du hast kopiert.

Also: Reproduzieren Sie nicht die Fehler des Originals, seinen toten Code, seine Restfelder, seine Off-by-One-Fehler oder seine seltsame Befehlsreihenfolge. Das sind die Fingerabdrücke. Schreiben Sie sie absichtlich um und schreiben Sie auf, dass Sie es getan haben.

Dies ist bei einem Agenten wichtiger als bei einer Person, da ein Agent, der mit dekompilierten Ausgaben arbeitet, die Struktur originalgetreu reproduziert, einschließlich der Teile, die keinen Zweck erfüllen. Siehe unten.

## Reinraum und schmutziger Raum

Ein **schmutziger Raum** ist die Standardeinstellung: Eine Person schaut sich das Original an und schreibt den Ersatz. Nachdem sie den Ausdruck gesehen haben, können sie ihn nicht mehr übersehen. Das meiste Hobby-Modding ist Dirty-Room, darunter fast alles in diesem Repo.

Ein **Reinraum** teilt die Arbeit auf zwei Gruppen mit einer Wand dazwischen auf. Gemäß der *NEC vs. Intel*-Analyse gelten für einen vertretbaren Reinraum drei Anforderungen:

1. **Die Leute, die den Code schreiben, haben keine Kenntnis vom Originalcode.** Nicht „sie versprechen, nicht hinzusehen.“ Überhaupt kein Zugriff.
2. **Der Ingenieur, der die Funktionsspezifikation erstellt, ist eine andere Person als der Programmierer, der den Code schreibt.**
3. **Die gesamte Kommunikation zwischen den beiden Gruppen läuft über einen unabhängigen Dritten**, der als Gatekeeper fungiert und prüft, ob kein geschützter Ausdruck durchgesickert ist.

Die Dokumentation macht es zu einem Beweis und nicht zu einer Behauptung. Bewahren Sie jede Kommunikation auf, führen Sie tägliche Protokolle, bewahren Sie Entwürfe und Arbeitspapiere auf. Der Fall *NEC gegen Intel* umfasste Tausende von Seiten. Der Wert der Dokumentation besteht darin, dass sie die *Verweigerung* des Zugriffs beweist, was das Element ist, das ein Urheberrechtsinhaber nachweisen muss.

### Warum ein verspäteter Reinraum scheitert

Die Einrichtung eines Reinraums, nachdem Sie bereits verklagt wurden, funktioniert normalerweise nicht.

*Cadence Design Systems v. Avant!* (9th Cir. 1998) ist der Fall. Avant! kopierte den Code von Cadence, wurde verklagt und versuchte dann, ihn zu beheben: Ein unabhängiger Experte überprüfte die verletzenden Teile, schrieb Spezifikationen und Ingenieure, die angeblich keinen Zugriff darauf hatten, schrieben den Code neu. Das Bezirksgericht befand den Reinraum für unzureichend, da Avant! „konnte von seinem Wissen über die Funktionen und die Grundstruktur des Cadence-Codes profitieren“, und die Verwendung des Cadence-Codes zur Erstellung der Spezifikationen „warf ernsthafte Fragen auf.“

Wenn Sie bereits wissen, wie das Original funktioniert, können Sie es nicht verlernen, und keine noch so umfangreiche Dokumentation überzeugt ein Gericht vom Gegenteil. Die Trennung muss von Anfang an bestehen.

### Und es ist kein magischer Schild

Reinraum macht einen *Urheberrechtsanspruch* bezüglich des Kopierens zunichte. Es berührt nicht:

- **Patent.** Ein Patent auf ein System kann durch ein Reinraumprodukt verletzt werden, das nichts über das Patent weiß. Sega verlor teilweise, weil es kein Patent auf die Genesis-Konsole besaß.
- **Vertrag.** Ihre EULA ist ein separates Versprechen. Ein Verstoß dagegen kann einen Vertragsbruch darstellen, selbst wenn nichts urheberrechtlich geschützt ist.
- **DMCA-Antiumgehung.** Unten.
- **Geschäftsgeheimnis**, wenn das Material von jemandem erhalten wurde, der zur Geheimhaltung verpflichtet ist, und nicht von einer von Ihnen gekauften Kopie.

## Tun Sie dies mit einem Agenten

Dieser Teil ist in keinem der Fälle enthalten, da die Agenten neu sind. Das ergibt sich aus den Aussagen der Fälle.

**Ein Agent, der eine Dekompilierung durchführt, ist strukturell ein schmutziger Raum.** Wenn eine Sitzung die dekompilierte Ausgabe liest und dann die Ersetzung schreibt, enthält ein einzelner Kontext beide Hälften. Es gibt keine Dokumentation, die das behebt, da die Anforderung in *NEC vs. Intel* fehlendes Wissen ist und schnelle Disziplin ein schwacher Ersatz für ein anderes Menschenpaar ist.

Was Sie tatsächlich tun können:

**Teilen Sie es auf zwei Sitzungen auf.** Erste Sitzung: Reverse Engineering, dann schreiben Sie eine funktionale Spezifikation in Ihren eigenen Worten und beschreiben dabei Verhalten und Schnittstellen statt Code. Schließen Sie es. Zweite Sitzung, neuer Kontext ohne Zugriff auf die dekompilierte Ausgabe: Implementierung allein aus dieser Spezifikation. Das ist der Reinraum eines armen Menschen. Es kommt der Doktrin wirklich näher, als alles in einer Sitzung zu erledigen, und es ist kein rechtlich sicherer Hafen.

**Fragen Sie niemals nach einer Transkription.** Sobald die Ausgabe Zeile für Zeile dem Original entspricht, ist der Reinraum verschwunden und Sie haben eine Kopie. Bitten Sie stattdessen um Verhalten. Eine Spezifikation, die besagt: „Die Welt ist eine Höhenkarte von 4096 x 4096, ein Byte pro Zelle, Meeresspiegel 64“, ist eine Funktion. Eine Spezifikation, die das Strukturlayout und die Feldreihenfolge des Originals reproduziert, ist Ausdruck.

**Informieren Sie den Agenten explizit über die Fehlerregel.** Es wird keine Schlussfolgerung daraus gezogen. Bitten Sie es, toten Code und ungenutzte Felder im Original zu identifizieren und sie dann *absichtlich nicht zu reproduzieren*, und geben Sie in einem Kommentar den Grund dafür an, damit die Absicht offensichtlich ist.

**Halten Sie die Decompiler-Ausgabe aus Ihrem Repository fern.** Gleiche Argumentation wie Spiel-Assets, eine Ebene höher: Es handelt sich um eine Kopie des geschützten Ausdrucks. Ihre Spezifikation und Ihr Code sind die Ergebnisse. Siehe [Leitfaden 6](06-rules-legal-and-publishing.md#the-golden-rule-no-game-files-in-your-repo).

## DMCA Anti-Umgehung ist eine separate Mauer

Dies ist der am meisten missverstandene Teil und der Teil, der ein Hobbyprojekt am ehesten zum Scheitern bringt.

17 U.S.C. § 1201 macht die Umgehung einer technischen Schutzmaßnahme zu einem eigenständigen Verstoß. Es stellt sich heraus, dass es keine Rolle spielt, ob Ihr Mod fair verwendet wird. **Ein vollkommen rechtmäßiger Mod kann mit einer rechtswidrigen Methode installiert werden.** Das Umgehen der Sicherheit stellt eine eigene Straftat dar, unabhängig vom Kopieren.

Praktische Konsequenzen:

- Die Verwendung eines Loaders, der vom Herausgeber bereitgestellt wird oder den die Community offen pflegt, ist ein anderer Vorgang als das Patchen und Auschecken einer ausführbaren Datei.
– Aus diesem Grund ist die tModLoader-Regel in [Leitfaden 6](06-rules-legal-and-publishing.md) so formuliert, wie sie ist. Fügen Sie die Begleit-App zu Ihrer Bibliothek hinzu. Entfernen Sie nicht die Eigentumsüberprüfung.
- Anti-Cheat ist die gleiche Kategorie von Dingen. Siehe [Leitfaden 6](06-rules-legal-and-publishing.md#online-play-and-anti-cheat).

Abschnitt 1201 ist auch der Grund dafür, dass die Takedown-Fälle so einseitig sind. Im Jahr 2026 verhängte ein Gericht in Washington 4,5 Millionen US-Dollar gegen einen Angeklagten in einem Nintendo Switch-Fall, berechnet als gesetzlicher Höchstbetrag von 150.000 US-Dollar für jedes der 30 Spiele. In einem separaten Urteil aus dem Jahr 2026 wurden 2 Millionen US-Dollar gegen den Verkäufer des MIG Switch und des MIG Dumpers mit einer dauerhaften einstweiligen Verfügung verhängt. Zu den früheren Fällen zählen Yuzu mit 2,4 Millionen US-Dollar und Gary Bowser mit 14,5 Millionen US-Dollar plus Gefängnisstrafe. Umgehung wird weitaus schwerwiegender behandelt als gewöhnliches Kopieren.

## Die EU ist enger

Die USA erlauben eine Fair-Use-Entschuldigung für Zwischenkopien. So weit geht die EU nicht. Die Softwarerichtlinie (2009/24/EG) erlaubt die Dekompilierung nur, um Informationen zu erhalten, die zur Erreichung der Interoperabilität erforderlich sind, und nur dann, wenn diese Informationen nicht anderweitig verfügbar sind. Die Herstellung eines Konkurrenzprodukts gehört nicht dazu.

Das Vereinigte Königreich folgte diesem Beispiel im Fall *Mars UK Ltd gegen Teknowledge Ltd* [2002], wo das Reverse Engineering der Software eines Mitbewerbers zur Entwicklung eines Konkurrenzprodukts eine Verletzung darstellte, da das Ziel eher direkter Wettbewerb als Interoperabilität war.

Ein wissenswerter EU-Vorteil: Durch die Richtlinie werden EULA-Bedingungen ungültig, die eine Dekompilierung verbieten, sodass ein europäischer Benutzer nicht vertraglich blockiert werden kann, wie dies bei einer Shrinkwrap-Lizenz in den USA der Fall ist. Die Position der USA ist, dass eine EULA nicht die gesetzliche Fair Use außer Kraft setzt, aber das wurde eher gerichtlich angefochten als geklärt.

Praktisch: Wenn Sie sich in der EU oder im Vereinigten Königreich befinden und Ihr Ziel eine direkte Konkurrenz zum Original ist, betrachten Sie die Reinraumanalyse als notwendig und nicht als hilfreich.

## Marke ist vom Urheberrecht getrennt

Das Urheberrecht erstreckt sich auf den Code. Die Marke umfasst den Namen und alle Logos oder Unterscheidungsmerkmale. Unterschiedliche Ansprüche, unterschiedliche Rechtsbehelfe, und der Verlust des einen sagt nichts über den anderen aus. *Sega v. Accolade* ist das Beispiel: Der Urheberrechtsanspruch scheiterte und damit auch der Markenanspruch, weil Segas eigener Sperrcode die beleidigende Anzeige verursachte.

Halten Sie es einfach: Benennen Sie Ihr Projekt nach Ihren Wünschen, fügen Sie das Logo des Herausgebers nicht in Ihr Repo oder Ihre README-Datei ein und beschreiben Sie es nicht auf eine Weise, die eine offizielle Unterstützung suggeriert. Ein prominenter Haftungsausschluss, der besagt, dass es sich um ein inoffizielles Fanprojekt handelt, kostet nichts und ist die übliche Grundlage.

## Wenn Sie noch unsicher sind

Fragen Sie vor dem Bau, nicht danach. Fragen Sie auf Discord nach oder fragen Sie einen Anwalt, der sich mit geistigem Eigentum befasst. In den oben genannten Fällen geht es um Fakten, die Sie besser nachweisen können als jemand, der eine Zusammenfassung liest, und einige davon gingen für die Partei, die sie für sicher hielt, in die falsche Richtung.

## Quellen

Das Gesetz aus dem U.S. Code:

- [17 U.S.C. § 102](https://www.law.cornell.edu/uscode/text/17/102), Umfang des Urheberrechtsschutzes, einschließlich § 102(b) zu Ideen und Funktionsweisen
- [17 U.S.C. § 117](https://www.law.cornell.edu/uscode/text/17/117), Eigentum und die Anfertigung von Kopien
- [17 U.S.C. § 1201](https://www.law.cornell.edu/uscode/text/17/1201), Umgehung
- [17 U.S.C. § 512](https://www.law.cornell.edu/uscode/text/17/512), einschließlich der Gegendarstellungselemente in § 512(g)(3)

Die Stellungnahmen im Volltext:

- [*Sega Enterprises Ltd. gegen Accolade, Inc.*, 977 F.2d 1510 (9th Cir. 1992)](https://law.resource.org/pub/us/case/reporter/F2/977/977.F2d.1510.92-15655.html)
- [*Atari Games Corp. gegen Nintendo of America Inc.*, 975 F.2d 832 (Fed. Cir. 1992)](https://law.resource.org/pub/us/case/reporter/F2/975/975.F2d.832.91-1293.html)
- [*Sony Computer Entertainment, Inc. gegen Connectix Corp.*, 203 F.3d 596 (9th Cir. 1999)](https://law.resource.org/pub/us/case/reporter/F3/203/203.F3d.596.99-15852.html)

Sekundär:

- U.S. Copyright Office, *Report on Software-Enabled Consumer Products, Part II: Interoperability and Competition*, in dem die Gehäuseserie von Sega, Atari und Connectix sowie der BIOS-Reinraum von Phoenix Technologies erörtert werden
- „NEC Corp. v. Intel: A Guide to Using Clean Room Procedures as Evidence“, 10 Computer L.J. 453 (1990), die Quelle der drei oben genannten Anforderungen
- *E.F. Johnson Co. gegen Uniden Corp.*, 623 F. Supp. 1485 (D. Minn. 1985), über identische Fehler als Beweis für das Kopieren
- *Cadence Design Systems, Inc. gegen Avant! Corp.* (9th Cir. 1998), darüber, warum ein verspäteter Reinraum versagt
- Richtlinie 2009/24/EG des Europäischen Parlaments und des Rates über den rechtlichen Schutz von Computerprogrammen, Artikel 6

Die Durchsetzungszahlen im DMCA-Abschnitt stammen aus Gerichtsdokumenten und rechtlichen Berichten und nicht aus dem Gesetz selbst. Wenn Sie eines für irgendetwas Wichtiges benötigen, lesen Sie die Meinung.

---

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/13-reverse-engineering-and-the-law.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/13-reverse-engineering-and-the-law.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>