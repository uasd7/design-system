# Benutzung

## 1. Installation des Design-Systems
Um das Design-System im eigenen Projekt nutzen zu können, muss
das Paket als Abhängigkeit in der package.json definiert

    "chefkoch-design-system": "*"

und per `npm install` installiert werden.
    
## 2. Konfiguration des Build-Systems
Damit das Design-System vom gulp Taskrunner eingebunden und kompiliert
werden kann, muss ein Sass-Compiler-Task konfiguriert und ein
includePath für das Design-System gesetzt sein:

    sass({
        includePaths: ['node_modules/chefkoch-design-system/components/']
    }) 

## 3. Einbindung und Nutzung
    
__Base__  

Die grundlegenden DSY Basics bekommst du über 

    @import "~chefkoch-design-system/components/dsy-base";
    
Darin enthalten sind folgende Mindestbestandteile des DSY:  

Variables <small>@import "~chefkoch-design-system/components/vars";</small>  
Breakpoints
  <small>@import "~chefkoch-design-system/app/components/breakpoints/breakpoints";</small>  
Grid <small>@import "~chefkoch-design-system/app/components/grid/flexbox-grid";</small>  
Typography <small>@import "~chefkoch-design-system/app/components/typography/typography";</small>  
Colors <small>@import "~chefkoch-design-system/app/components/colors/colors";</small>

__Module & Patterns__  

Einzelne Module & Patterns werden nach gleichem Prinzip ins Projekt geholt.

    @import "~chefkoch-design-system/components/button";
    @import "~chefkoch-design-system/components/stars";

Wie du das entsprechende Styling eines Patterns verwendest, erfährst du in den einzelnen Abschnitten der Komponenten.

__Utilities__ 

Das DSY bietet auch standard Utilities an.
Alle Utilities bekommst du über

    @import "~chefkoch-design-system/components/dsy-utilities";

Darin enthalten sind folgende Bestandteile:  

Clearfix <small>@import "~chefkoch-design-system/app/components/utilities/clearfix";</small>  
Float
  <small>@import "~chefkoch-design-system/app/components/utilities/float";</small>  
Screenreader / Hidden text <small>@import "~chefkoch-design-system/app/components/utilities/sr-only";</small> 