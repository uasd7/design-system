# Benutzung

## 1. Installation des Design-Systems
Um das Design-System im eigenen Projekt nutzen zu können, muss
das Paket als Abhängigkeit in der package.json definiert werden:

    "chefkoch-design-system": "*"

und per `npm install` installiert werden.
    
## 2. Konfiguration des Build-Systems
Damit das Design-System vom gulp Taskrunner eingebunden und kompiliert
werden kann, muss ein Sass-Compiler-Task konfiguriert und ein
includePath für das Design-System gesetzt sein:

    sass({
        includePaths: ['node_modules/chefkoch-design-system/patterns/']
    }) 

## 3. Einbindung und Nutzung der Patterns
Ein Pattern aus dem Design-System muss erst per scss eingebunden werden:
    
__Base__  
Die grundlegenden Basics bekommst du über 

    @import "~chefkoch-design-system/patterns/dsy-base";
    
Darin enthalten sind folgende Mindestbestandteile des DSY:  
• Variables <small>@import "~chefkoch-design-system/patterns/base/vars";</small>
• Breakpoints
  <small>@import "~chefkoch-design-system/patterns/base/breakpoints";</small>
• Grid <small>@import "~chefkoch-design-system/patterns/base/flexbox-grid";</small>
• Typography <small>@import "~chefkoch-design-system/patterns/base/typography";</small>
• Colors <small>@import "~chefkoch-design-system/patterns/base/colors";</small>

__Patterns__  

    @import 'button/button'

und kann dann im Markup als Klasse verwendet werden:

    <button class="ds-button ds-button--standard">Button-Element als Button</button>

