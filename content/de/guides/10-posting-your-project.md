# 10. Veröffentlichen Sie Ihr Projekt

Du hast etwas, das läuft. Jetzt möchten Sie, dass die Leute es finden, und Sie möchten nicht, dass Ihr Projekt aufgrund einer Regel, von der Sie nichts wussten, zum Erliegen kommt.

## Was und wo gepostet werden soll

Posten Sie auf dem Discord unter **#share-your-projects**, damit die richtigen Leute es sehen. Dort sind nicht nur fertige, sondern auch halbfertige Projekte willkommen.

Stellen Sie Ihr Projekt auf **GitHub** und verlinken Sie das Repo, wenn Sie möchten, dass andere es nutzen können. Ein Repo wird dringend empfohlen. Einen direkten Download-Link gibt es nicht.

### Posten Sie diese niemals

- Gerippte Assets, Texturen, Modelle, Sounds oder Karten
- Durchgesickerter oder dekompilierter Spielcode
- Spieldateien jeglicher Art
- Links zu Raubkopien oder durchgesickertem Material
- Direkte Dateihosts oder Download-Links anstelle eines Repos

Wenn Ihr Projekt Spielinhalte benötigt, liest es diese aus der eigenen Installation des Spielers. Das ist die Regel und deshalb verfügt jedes Beispielprojekt über einen Extraktor oder ein Setup-Skript anstelle eines Datenordners.

## Bevor Sie posten: der Vorflug

Gehen Sie diese Liste durch. Es dauert fünf Minuten und verhindert die am häufigsten auftretenden Probleme.

- [ ] `git status` ist sauber und es gibt keine nicht festgeschriebenen Spieldaten
- [ ] Repo wird nach großen Dateien durchsucht: `git ls-files | xargs du -h | sort -rh | head -20`
- [ ] `.gitignore` ist eine **Whitelist**, die alles ignoriert und nur die Quelle einschließt
– [ ] `git log --all --stat` zeigt an, dass nie Assets übertragen wurden
- [ ] Sie haben jedem Projekt, auf dem Sie aufgebaut haben, einen Link angegeben
- [ ] `THIRD-PARTY-NOTICES.md` existiert, wenn Sie Code wiederverwendet haben
- [ ] README gibt die Spiele und **genaue Versionen** an, die benötigt werden
- [ ] README gibt an, was funktioniert und was nicht
- In der README-Datei steht, dass es sich um ein inoffizielles Fanprojekt handelt
- [ ] README erwähnt, dass Sie KI verwendet haben
- [ ] Alle Veröffentlichungs-ZIP-Dateien wurden auf Spieldateien überprüft
- [ ] Es wurde auf einer sauberen Maschine getestet, nicht nur auf Ihrer eigenen

Zwei davon decken die häufigsten Probleme ab. `git log --all --stat` ist das, was die Leute überspringen, und es ist die einzige Möglichkeit, ein Asset zu finden, das vor drei Wochen festgeschrieben und dann gelöscht wurde. `git ls-files | xargs du -h | sort -rh | head -20` fängt eine 400 MB große Textur ab, die jemand hinzugefügt hat, bevor die Whitelist eingerichtet wurde.

### Wenn Sie bereits Spieledateien übertragen haben

Der Git-Verlauf ist in dem Moment öffentlich, in dem Sie pushen. Gehen Sie folgendermaßen vor:

1. Drehen Sie zuerst alles, was empfindlich ist.
2. `git filter-repo --path path/to/bad --invert-paths`
3. Force-Push: `git push --force`
4. Bitten Sie den GitHub-Support, die alten Objekte in den Müll zu sammeln. Bis dahin sind sie nur unerreichbar, nicht verschwunden.
5. Löschen Sie alle Release-ZIP-Dateien, in denen sie enthalten waren, und laden Sie sie erneut hoch.

Gehen Sie davon aus, dass alles, was jemals gepusht wurde, kopiert wurde. Verlassen Sie sich nicht allein auf eine Neufassung der Geschichte.

## Die README-Datei ist der Beitrag

Die meisten Leute lesen die README-Datei und sonst nichts. Strukturieren Sie Ihre wie folgt:
```markdown
# [Projektname]

Ein Satz: Was es tut und was es anders macht.

![Screenshot oder kurzes GIF](docs/screenshot.png)

## Was funktioniert
- Funktion
- Funktion
- Funktion

## Was noch nicht funktioniert
- Feature, das zur Hälfte fertig ist
- Alles ungetestet
- Bekannte Fehler

## Anforderungen
- Spiel A: Version X.Y.Z (Steam / GOG / andere)
- Spiel B: Version X.Y.Z
- [Loader](link) für Spiel A
- Nur Einzelspieler/Offline

## Anleitung zur Installation
1. Installieren Sie beide Spiele und den Loader.
2. Build: `setup.ps1` oder `./gradlew build`
3. Kopieren Sie die Ausgabe in [Ordner].
4. Führen Sie Spiel A durch.

## Spielanleitung
Kurze, konkrete Schritte.

## Wie es funktioniert
Ein paar Absätze oder Link docs/DESIGN.md.

## Credits
- [SkyCraft](link): das Design, auf dem es basiert
- [Alle anderen, die geholfen haben]

## Legal
Inoffizielles Fanprojekt. Nicht mit dem Herausgeber verbunden oder von ihm unterstützt.
Es sind keine Spielinhalte enthalten. Die Spieler liefern ihre eigenen Kopien.

Gebaut mit KI-Codierungsagenten.
```

## Sorgen Sie dafür, dass das Repo vertrauenswürdig aussieht

Neue Projekte ohne Sterne und ohne Commits werden ignoriert. Diese Dinge helfen:

- **Ein Screenshot oder ein GIF.** Normalerweise der Unterschied zwischen einem Klick und einem Scrollen. Notieren Sie sich etwas, wenn es sein muss.
- **Eine Commit-Historie.** Zwanzig kleine Commits lesen sich wie „jemand, der sorgfältig arbeitet.“ Ein riesiger Commit liest sich als „Einfügen“.
- **A MODLOG.md.** Zeigt, was Sie testen, was Sie behaupten. OWCraft behält eines und verlinkt es über seine README-Datei, das günstigste mögliche Signal, das Sie tatsächlich testen.
- **Ein ehrlicher Abschnitt „Was funktioniert nicht?“** Dies schafft mehr Vertrauen als eine Liste von Funktionen und erspart Ihnen die Support-Fragen.
- **Sagen Sie den Leuten, sie sollen ihre Spielstände sichern.** Die frühen Projekte in diesem Bereich sagen es alle, und sie haben Recht.

## Der Forumsbeitrag

Halten Sie es kurz. Die README-Datei erledigt die Details.
```
**Titel:** [Spiel A] + [Spiel B] Passthrough-Mod

**Spiele:** [Spiel A] v[Version] + [Spiel B] v[Version]
**Repo:** [Link]
**Benötigt:** beide Spiele installiert, plus [Loader] für [Spiel A]

**Was funktioniert:** [2-3 Aufzählungspunkte]

**Was ist kaputt:** [sei ehrlich]

**Getestet auf:** Windows [Version], GPU [Modell]
**Getestet wie:** [auf einer sauberen Maschine installiert / nur auf meinem eigenen PC]
```

Die letzte Zeile ist wichtiger als sie aussieht. Wenn Sie sagen, dass Sie den Beitrag nur auf Ihrem eigenen Computer getestet haben, erfahren Sie genau, wie sehr er dem Beitrag vertrauen kann, und Sie ersparen sich einen Support-Thread, in dem jemand ein Problem entdeckt, vor dem Sie ihn hätten warnen können.

### Tags und Format

Benutze die Tags und die Beitragsvorlage aus den angepinnten Richtlinien im Discord. Wenn Sie die Vorlage überspringen, ist Ihr Beitrag schwerer zu lesen und erhält weniger Hilfe.

### Nach dem Posten

- Bleiben Sie im Thread. Bei den meisten „Es funktioniert nicht“-Meldungen handelt es sich um eine Versionsinkongruenz oder einen fehlenden Loader, und Sie können in einer Zeile antworten.
- Bitten Sie um Protokolle, nicht um Beschreibungen: „Ich brauche Ihr Protokoll von beiden Spielen, nicht wie es aussah.“
- Wenn jemand meldet, dass es bei ihm funktioniert, bei Ihnen aber nicht, ist das ein Fehlerbericht, dem Sie nachgehen sollten.

## Wo sonst noch veröffentlicht werden kann

- **GitHub-Releases:** versenden einen Build als Zip. Überprüfen Sie zunächst den Zip-Inhalt auf Spieldateien. Viele dieser Projekte tun dies.
- **Nexus Mods / ModDB:** externe Mod-Sites mit eigenen Regeln. Die meisten verlangen, dass Benutzer ihre eigenen Spieldateien bereitstellen.
- **Steam Workshop:** wenn Ihr Spiel dies unterstützt. Gleiche Regel: Ihr Upload enthält keine urheberrechtlich geschützten Spielinhalte. Bitten Sie Ihren Agenten, einen Extraktor zu schreiben, den die Spieler selbst ausführen, anstatt Assets zu versenden.
- **Ein Thread im Discord.** Verlinke das Repo. Veröffentlichen Sie nicht das Ganze erneut.

## Anti-Cheat- und Online-Spiele

Nicht verhandelbar und keine rechtliche Grauzone: **Nur Einzelspieler- und Offline-Spiele.** Mods für Spiele mit Anti-Cheat führen dazu, dass Leute gesperrt werden, und KI-Agenten werden Ihnen nicht dabei helfen, dies zu umgehen. Die eigenen Tools der Community verweigern dies ebenfalls.

Wenn Ihr Spiel sowohl einen Online- als auch einen Offline-Modus hat, wählen Sie den Offline-Modus.

## Wenn ein Rechteinhaber Sie kontaktiert

Entfernen Sie es. Das ist die richtige Entscheidung, unabhängig davon, ob sich ein anderes Projekt die Mühe macht, dies in seiner README-Datei zu erwähnen, und Gang-Beasts-Rust tut dies auch. Quellenangabe und Links zum Originalwerk sind zwar hilfreich, aber sie berechtigen nicht dazu, weiterhin die Assets anderer zu versenden.

## Die Post-Checkliste

- [ ] Die Vorflugliste bestanden
- [ ] Repo-Link, kein Download-Link
- [ ] Spiele und genaue Versionen angegeben
- [ ] Screenshot oder GIF
- [ ] Der Abschnitt „Was nicht funktioniert“ ist ehrlich
- [ ] Credits in der README
- [ ] Credits für den Beitrag selbst
- [ ] Vorlage und Tags verwendet
- [ ] Sagte, es sei ein Fanprojekt
- [ ] Erwähnte KI-Nutzung
- [ ] Hat den Leuten gesagt, sie sollen Backups sichern
- [ ] Bereit, Fragen im Thread zu beantworten

---

<sub>[Haben Sie einen Fehler entdeckt? [Diese Seite auf GitHub bearbeiten](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/10-posting-your-project.md).](https://github.com/trevaintdead/ai-game-modding-guides/edit/main/guides/10-posting-your-project.md) · [Ein Problem öffnen](https://github.com/trevaintdead/ai-game-modding-guides/issues/new) · Teil von [AI Game Modding Guides](https://github.com/trevaintdead/ai-game-modding-guides)</sub>