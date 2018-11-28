Implementiert sind ein __normales Grid__ (vertikal ↓) und ein __Baseline-Grid__ (horizontal →).

Das Grid und auch die CSS properties (Margins, Paddings, Heights, Font-Sizes, Line-Heights) orientieren sich an einer festgelegten Unit. __[Diese Unit ist 8](https://mysticalnumbers.com/number-8/)__. 

Die Grids sind an Chefkoch angepasst und daher keine Standardlösung.  
Das normale Grid orientiert sich technisch an [Flexbox Grid](http://flexboxgrid.com/), [Github](https://github.com/kristoferjoseph/flexboxgrid) und optisch an [Material Design](https://material.io/design/layout/responsive-layout-grid.html#columns-gutters-margins)  
Hilfe für das Baseline Grid gibt [Grid Lover](https://www.gridlover.net/try).

__Usage__  
    
    @import "~chefkoch-design-system/patterns/base/flexbox-grid";
      
    Enthalten in  
    @import "~chefkoch-design-system/patterns/dsy-base";
