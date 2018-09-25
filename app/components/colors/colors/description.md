<small>Stand 9/2018</small>

Es ist nicht empfehlenswert, die Variablen der Farben nach einem speziellen Einsatzgebiet zu benennen.  
`$color-text--corporate-green` passt zum Beispiel nicht, wenn es ebenfalls als Hintergrundfarbe von gehoverten Buttons verwendet wird. Daher lieber nur die Variable nach der Farbe benennen (`$color-corporate-green`). Damit ist klar, was diese Variable macht, aber es wird kein Einsatzgebiet impliziert.

```
<!-- ----------------------------------------------- 

    // Um die Farb-Variablen nutzen zu können,
    // inkludiere das SCSS aus dem Design-Sytem
    @include 'settings/colors';

------------------------------------------------ -->
```
