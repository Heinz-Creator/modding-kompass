# Überbrückungsvertrag

Für jedes Projekt, bei dem zwei Spiele (oder ein Spiel und eine neu erstellte Engine) den Status teilen. Kopieren Sie es nach `docs/CONTRACT.md` vor der ersten Zeile des Bridge-Codes und bitten Sie den Agenten, jede Änderung damit zu vergleichen.

Die meisten schwerwiegenden Fehler in [Guide 16](../guides/16-ownership-sync-and-rendering.md) sind auf etwas zurückzuführen, das nie niedergeschrieben wurde: Wem gehört der Spieler, in welchen Einheiten befindet sich eine Zahl, zu welchem ​​Bild eine Kameraposition gehört oder was passiert, wenn ein Spiel pausiert.

## Fordern Sie den Agenten auf, das Formular auszufüllen
```
Füllen Sie docs/CONTRACT.md aus der Vorlage aus. Verwenden Sie nur das, was Sie anhand der bestätigen können
Code und die Dokumentation der Spiele. Wo etwas noch nicht entschieden ist, schreiben Sie „UNDECIDED“ und
Listen Sie es unten auf. Ändern Sie keinen Code.
```

## Vorlage
```markdown
# Überbrückungsvertrag

## Route
[Live-Passthrough / Frame-Compositing / Geometrieübertragung / gemeinsame Simulation /
Engine-Neuerstellung / Asset-Konvertierung / Subsystem-Neuerstellung oder eine Mischung. Siehe Anleitung 14.]

## Programme und genaue Versionen
- Host: [Spiel, Store, genaue Version oder Build], Loader [Name + Version]
- Gast: [Spiel oder Engine, genaue Version], Loader [Name + Version]
- Betriebssystem/Übersetzungsschicht: [Windows 11 / Proton x.y / CrossOver x.y]

## Eigentum
| Sache | Eigentümer | Wie die Kontrolle zurückgegeben wird und wie sie zurückgegeben wird |
|-------|-------|------------------------------------------------|
| Spielerposition und Physik | | |
| Kamera | | |
| Weltgeometrie | | |
| Kollision (Host → Gast) | | |
| Kollision (Gast → Host) | | |
| NPCs / Feinde | | |
| Schaden und Gesundheit | | |
| Inventar | | |
| Speichert | | |
| Menüs, Pause, Ladebildschirme | | |
| Zwischensequenzen, Fahrzeuge, Möbel, Drehbuchereignisse | | |

## Einheiten und Achsen
- Entfernung: [z.B. 70 Host-Einheiten = 1 Gästeblock]
- Achsen: [z.B. Host x-Ost, y-Nord, z-oben → Gast x, z, -y]
- Winkel: [Grad/Bogenmaß, Händigkeit]
- Gesundheit/Schaden: [z.B. Gast 20 Punkte = Gastgeber 100]
- Zeit: [Host-Framerate, Gast-Tickrate]

## Nachrichten
| Kanal | Art (Schnappschuss / Warteschlange / Bild) | Richtung | Bewerten | Was passiert, wenn voll oder zu spät |
|---------|---------------------------------|-----------|------|---------------|
| | | | | |

- Protokollname, Magie und Version: [...]
- Bytereihenfolge: [...]
– Wie jede Seite den Neustart der anderen erkennt: [Heartbeat, Prozess-ID, Generierung]

## Frames (nur wenn sich Bilder kreuzen)
- Gesendete Ebenen: [Farbe, Tiefe, HUD, Hand]
- Wie eine Kamerapose an ihr Bild angepasst wird: [...]
- Was der Host anzeigt, wenn kein passendes Bild eintrifft: [...]
- Maximale Auflösung und Fallback: [...]

## Lebenszyklus
- Startreihenfolge: [...]
- Bei Pause/Menü: [...]
- Beim Laden eines Speicher- oder Änderungsbereichs: [...]
- Zum Tod: [...]
- Bei Verbindungsabbruch oder Absturz einer Seite: [...]

## Nicht abgedeckt (seien Sie ehrlich)
- [Systeme, die diese Brücke nicht berührt, und was der Spieler sehen wird]

## UNDECIDED
- [...]
```

## Abschlussprüfung

Der Vertrag kommt zustande, wenn:

- Jede Zeile in der Eigentümertabelle hat einen Eigentümer und eine Rückgaberegel oder sagt „nicht überbrückt“;
- jede Zahl, die sich kreuzt, hat eine Einheit;
- Jeder Kanal sagt, was passiert, wenn er voll oder zu spät ist.
- jemand anderes als der Agent hat es gelesen.

## Beispiele für ausgefüllte Zeilen

Dies sind echte Entscheidungen aus den in [Leitfaden 15](../guides/15-case-studies-what-each-project-actually-did.md) beschriebenen Projekten:

| Sache | Beispielbesitzer und Regel |
|-------|----------|
| Spielerposition | Minecraft besitzt es; Skyrim übernimmt Möbel, Reittiere und Kill-Moves und gibt dann ([SkyCraft](https://github.com/chasmlol/SkyCraft)) | zurück
| Spielerposition | GTA besitzt es zu Fuß; Minecraft besitzt es im Flügeldeckenflug (Minecraft × GTA V-Beispiel) |
| Entfernung | 40 Half-Life Einheiten pro Block ([Minecraft × Half-Life](https://github.com/SawyerTheNerd/Minecraft-X-HalfLife)) |
| Schaden | Die Protokollmenge ist native HP (Monster Hunter Bridge); Die Protokollmenge beträgt Minecraft Schaden, umgerechnet in maximale HP des Ziels (Elden Ring Brücke) |
| Spätrahmen | Bevorzugen Sie das genau passende Bild, dann ein älteres und dann das zuletzt hochgeladene Bild; jeden Fall zählen ([CrossOver-Brücken](https://github.com/justbustin/minecraft-crossover-bridge)) |