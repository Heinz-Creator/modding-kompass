# Modding Kompass

**[Webapp öffnen →](https://heinz-creator.github.io/modding-kompass/)**

Eine deutsche Lern-Webapp zu den **AI Game Modding Guides** von [Trev und Mitwirkenden](https://github.com/trevaintdead/ai-game-modding-guides). Alle 18 Anleitungen, sieben Vorlagen und vier Begleittexte stehen in einer übersichtlichen Oberfläche bereit.

## Funktionen

- Kapitel schrittweise lesen oder als vollständigen Text anzeigen.
- Volltextsuche über sämtliche deutschen Inhalte.
- Lesepositionen und abgeschlossene Kapitel lokal im Browser speichern.
- Prompts und Vorlagen kopieren oder als Markdown-Datei herunterladen.
- Responsive Ansicht für Desktop, Tablet und Smartphone.
- Englische Originale pro Kapitel verlinkt; unveränderte Quellen unter `content/en/`.
- Kein Backend, keine Anmeldung, keine Tracker und keine KI-Aufrufe beim Lesen.

## Übersetzungsstand

Die gesamte Sammlung wurde automatisch übersetzt. Navigation und Kapitel 0 wurden redaktionell bearbeitet; einzelne technische Fehlübersetzungen wurden korrigiert. Die übrigen Texte wurden noch nicht Satz für Satz fachlich geprüft. Bei Zweifeln das verlinkte englische Original lesen. Code, ausführbare Befehle, Dateipfade und technische Bezeichner bleiben unverändert; natürlichsprachliche Beispielaufträge und Vorlagen sind übersetzt.

Quellstand: `1c8df26a64f3d8604fa05ac2b3d3b65c0dde31ef`, übernommen am **8. Oktober 2026**. Angaben zu Preisen, Versionen und rechtlichen Fragen spiegeln diesen Stand wider. Die Übersetzung ist eine unabhängige Bearbeitung und keine Rechtsberatung.

## Lokal starten

Voraussetzung: Node.js 20.19+ oder 22.12+.

```bash
npm ci
npm run dev
```

Die lokale Adresse zeigt Vite im Terminal an.

## Prüfen und bauen

```bash
npm run check:content
npm run build
npm run preview
```

Der Produktions-Build liegt in `dist/`. Die App verwendet Hash-Routing und relative Asset-URLs und funktioniert daher auch unter einem GitHub-Pages-Unterpfad.

## GitHub Pages

Die fertige statische Ausgabe liegt zusätzlich in `docs/`. Im Repository unter **Settings → Pages → Build and deployment** die Quelle **Deploy from a branch**, den Branch **main** und den Ordner **/docs** auswählen.

Nach einer Änderung erneut `npm run build` ausführen und den Inhalt von `dist/` nach `docs/` übernehmen. Alternativ lässt sich `dist/` auf jedem statischen Webhost veröffentlichen.

## Aufbau

```text
src/                 React-Oberfläche, Navigation, Suche und Reader
content/de/          Vollständige deutsche Ausgabe
content/en/          Englische Quelltexte, unverändert
content/manifest.json Quellstand und Zuordnung der Überschriften
docs/                Fertiger statischer Build für GitHub Pages
scripts/             Inhaltsprüfung
```

## Lizenz und Urheber

Originaltexte: **© 2026 Trev und contributors**, MIT-Lizenz; vollständiger Original-Lizenztext in [LICENSE](LICENSE). Webapp und deutsche Bearbeitung: **© 2026 Heinz-Creator**, ebenfalls MIT. Siehe [NOTICE.md](NOTICE.md).

Die Lizenzen verlinkter Beispielprojekte bleiben unverändert. Diese Ausgabe enthält keine Spieldateien, dekompilierten Spielquellen oder extrahierten Spiel-Assets.
