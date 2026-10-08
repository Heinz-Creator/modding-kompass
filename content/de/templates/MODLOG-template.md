# MODLOG

Ein laufendes Protokoll darüber, was sich geändert hat und was getestet wurde. Bitten Sie Ihren Agenten, nach jeder Änderung einen Eintrag hinzuzufügen. Es hilft Ihnen, hilft Ihnen, sich neu zu unterhalten, und hilft jedem, der Ihr Projekt liest, zu erkennen, was real ist.

Die neuesten Einträge stehen oben.

## Eingabeformat
```markdown
## [Datum] [Kurztitel]

**Geändert:** was geändert wurde und in welchen Dateien
**Warum:** das Problem oder Ziel
**Getestet wie:** Was Sie getan haben, um es zu überprüfen (das Spiel gespielt, Protokolle gelesen, einen Test durchgeführt)
**Ergebnis:** was passiert ist, möglichst mit Zahlen oder Protokollzeilen
**Immer noch kaputt / nicht getestet:** Seien Sie ehrlich
**Weiter:** was als nächstes zu tun ist
```

## Beispiel
```markdown
## 2026-10-03 Synchronisierung der Spielerposition

**Geändert:** Positionsmeldungen vom Gameplay zum Host-Plugin hinzugefügt (`mod/LinkReader.java`, `plugin/link.cpp`)
**Warum:** Schritt 2 des Plans: Senden Sie ein Datenelement zwischen den Spielen
**Getestet wie:** Beide Spiele gestartet, herumgelaufen und die Position jeder Seite verglichen
**Ergebnis:** Die Positionen stimmen bei normaler Gehgeschwindigkeit innerhalb von etwa einem Frame überein
**Immer noch kaputt / nicht getestet:** Schnellreise- und Ladebildschirme nicht getestet; noch keine Rotation
**Weiter:** Kollisionsformen in die andere Richtung senden
```

In diesem Beispiel wird die Position vom Gameplay-Spiel an den Host gesendet. SkyCraft funktioniert auf die gleiche Weise, wobei Minecraft für den Player maßgeblich ist und der Host Kollisionen bereitstellt. Entscheiden Sie im ersten Schritt, welcher Seite der Spieler gehört, und bleiben Sie dann konsequent.

## Tipps

- „Getestet“ bedeutet, dass Sie oder der Agent es tatsächlich ausgeführt haben. Wenn es nicht ausgeführt wurde, schreiben Sie „nicht getestet“.
- Verlinken Sie die Protokolldatei oder fügen Sie die Schlüsselzeilen ein.
- Halten Sie es kurz. Ein oder zwei Zeilen pro Feld reichen aus.
- **Protokollieren Sie auch die Fehler.** „Dateibasierter Transport wurde versucht, Windows sperrt die Datei, auf gemeinsam genutzten Speicher umgestellt“ ist die nützlichste Art von Eintrag, da sie verhindert, dass jemand anderes dies wiederholt.
– Bitten Sie den Agenten, den Eintrag selbst hinzuzufügen: `Add a MODLOG entry for what you just did.`

## Warum sich die Mühe machen?

- **Für Sie:** Sie hören auf zu raten, was Sie bereits versucht haben.
- **Für einen frischen Chat:** Es ist besser, den gesamten Chat zu übergeben. Siehe [`STATUS-handoff.md`](STATUS-handoff.md).
- **Für Leser:** Es ist der beste Beweis dafür, dass das Projekt real und getestet ist. Das merken die Mitglieder, und das ist es, was ein seriöses Projekt von einem Vibe-codierten unterscheidet.
- **Für Sie später:** Wenn Sie in sechs Monaten zurückkommen, möchten Sie wissen, warum Sie eine Entscheidung getroffen haben.

OWCraft behält eines und verlinkt es in seiner README-Datei. Der springende Punkt ist, dass Sie sichtbar bleiben.

Behalten Sie es in Ihrem Repo. Es ist billig und es verstärkt die Wirkung.