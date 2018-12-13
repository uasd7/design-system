Wir nutzen strukturierte und konsistente Abstände auf allen Chefkoch Seiten um folgende Bereiche zu sichern und unterscheiden nach:
- Vertikal – Content und Kontextbereich
- Horizontal – Semantische Bereiche

Abstände werden im Regelfall __immer nach unten__ definiert, um Deplazierungen zu vermeiden, sofern ein Modul/eine Headline aus Gründen mal nicht angezeigt werden sollte.
Ausnahmen bildet zum Beispiel die Trennung von Modulen mittels einer `<hr>`. In diesem Fall kommt der Abstand nur von der `<hr>` und es ist kein Abstand nach unten beim vorhergehenden Modul nötig.

- Abstände innerhalb eines Bereiches, zum Beispiel `<main>` oder `<footer>` werden mittels einer `<hr>` erreicht, welche eine margin nach oben und unten von jeweils 32px hat. Die `<hr>` selbst hat eine 1px border in der Farbe `$color-grey-light`.
- Wenn Abstände viewportabhängig sind, wie zum Beispiel bei `<aside>` und `<main>` bis viewport s, werden diese mittels einer border und margin-bottom auf dem oberen container definiert.

<small>Orange: margin | Grün: padding</small>